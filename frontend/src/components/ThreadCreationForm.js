// src/components/ThreadCreationForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const ThreadCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
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
      const response = await axios.post('http://127.0.0.1:8000/api/create_post', formData);
      console.log('Response:', response.data);
      alert('Post created successfully!');
      // Clear form after successful submission
      setFormData({
        title: '',
        content: '',
        category: '',
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
        <h2>Create Thread</h2>
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input type="text" id = 'title' name="title" value={formData.title} onChange={handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Category:</Label>
          <TextArea id="category" name="category" value={formData.category}  onChange={handleChange} required></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content:</Label>
          <TextArea id="content" name="content" rows="4" value={formData.content}  onChange={handleChange} required></TextArea>
        </FormGroup>
        <Button type="submit">Create Thread</Button>
      </Form>
    </FormContainer>
  );
};

export default ThreadCreationForm;
