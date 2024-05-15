// src/components/Comment.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Author = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Content = styled.div`
  margin-bottom: 5px;
`;

const Comment = () => {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/list_comment');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <CommentContainer>
      <ul>
        {Comments.map(comment => (
          <li key={comment.id}> Post{comment.post} | {comment.content} by:{comment.author} </li>
        ))}
      </ul>
    </CommentContainer>
  );
};

export default Comment;
