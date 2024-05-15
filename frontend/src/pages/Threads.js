


// const Threads = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/list_post');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchPosts();
//   }, [])

//   return (
//     <ThreadContainer style={{ textAlign: 'left' }}>
//       <h2>Threads</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//           <a href={`http://127.0.0.1:8000/api/list_post/${post.id}`}>{post.title}</a>
//           </li>
//         ))}
//       </ul>
//     </ThreadContainer>
//   );
// }

// export default Threads;

import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const ThreadContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;


const Threads = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/list_post');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = async (postId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/list_post/${postId}`);
      const data = await response.json();
      setSelectedPost(data);
    } catch (error) {
      console.error('Error fetching post content:', error);
    }
  };

  return (
    <ThreadContainer style={{ textAlign: 'left' }}>
      <h2>Threads</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <button onClick={() => handleClick(post.id)}>{post.title}</button>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </ThreadContainer>
  );
};

export default Threads;
