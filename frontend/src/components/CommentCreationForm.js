// src/components/ThreadCreationForm.js
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Select from 'react-select';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CommentCreationForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    post: 1,
    author: 1
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create_comment', formData);
      console.log('Response:', response.data);
      alert('Comment created successfully!');
      // Clear form after successful submission
      setFormData({
        content: '',
        post: 1,
        author: 1
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating post');
    }
  };


  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Create Comment</h2>
        <FormGroup>
          <Label htmlFor="content">content:</Label>
          <Input type="text" id = 'content' name="content" value={formData.content} onChange={handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="post">post:</Label>
          <TextArea id="post" name="post" value={formData.post}  onChange={handleChange} required></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="author">author:</Label>
          <TextArea id="author" name="author" rows="4" value={formData.author}  onChange={handleChange} required></TextArea>
        </FormGroup>
        <Button type="submit">Create Comment</Button>
      </Form>
    </FormContainer>
  );
};

export default CommentCreationForm;


// import { FormContainer, Form, FormGroup, Label, Input, TextArea, Button, Select } from 'react'; // Import necessary UI components

// const CommentCreationForm = () => {
//     const [formData, setFormData] = useState({
//       content: '',
//       post: '',
//       author: ''
//     });
//     const [posts, setPosts] = useState([]);
//     const [authors, setAuthors] = useState([]);
//     const [loadingPosts, setLoadingPosts] = useState(true);
//     const [loadingAuthors, setLoadingAuthors] = useState(true);
  
//     useEffect(() => {
//       const fetchPosts = async () => {
//         try {
//           const response = await axios.get('http://127.0.0.1:8000/api/list_post');
//           setPosts(response.data);
//           setLoadingPosts(false);
//         } catch (error) {
//           console.error('Error fetching posts:', error);
//           setLoadingPosts(false);
//         }
//       };
  
//       const fetchAuthors = async () => {
//         try {
//           const response = await axios.get('http://127.0.0.1:8000/api/list_user2');
//           setAuthors(response.data);
//           setLoadingAuthors(false);
//         } catch (error) {
//           console.error('Error fetching authors:', error);
//           setLoadingAuthors(false);
//         }
//       };
  
//       fetchPosts();
//       fetchAuthors();
//     }, []);
  
//     const handleChange = event => {
//       const { name, value } = event.target;
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: value
//       }));
//     };
  
//     const handleSubmit = async event => {
//       event.preventDefault();
  
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/create_comment', formData);
//         console.log('Response:', response.data);
//         alert('Comment created successfully!');
//         setFormData({
//           content: '',
//           post: '',
//           author: ''
//         });
//       } catch (error) {
//         console.error('Error:', error);
//         alert('Error creating post');
//       }
//     };
  
//     return (
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <h2>Create Comment</h2>
//           <FormGroup>
//             <Label htmlFor="content">Content:</Label>
//             <Input type="text" id="content" name="content" value={formData.content} onChange={handleChange} required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="post">Post:</Label>
//             {loadingPosts ? (
//               <p>Loading posts...</p>
//             ) : (
//               <Select id="post" name="post" value={formData.post} onChange={handleChange} required>
//                 {posts.map(post => (
//                   <option key={post.id} value={post.id} >{post.title}</option>
//                 ))}
//               </Select>
//             )}
//           </FormGroup>
//           {/* <FormGroup>
//             <Label htmlFor="author">Author:</Label>
//             {loadingAuthors ? (
//               <p>Loading authors...</p>
//             ) : (
//               <Select id="author" name="author" value={formData.author} onChange={handleChange} required>
//                 {authors.map(author => (
//                   <option key={author.id} value={author.id}>{author.username}</option>
//                 ))}
//               </Select>
//             )}
//           </FormGroup> */}
//           <Button type="submit">Create Comment</Button>
//         </Form>
//       </FormContainer>
//     );
//   };
  
//   export default CommentCreationForm;
  
