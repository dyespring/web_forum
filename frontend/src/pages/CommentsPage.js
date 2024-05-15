// src/pages/CommentsPage.js

import React from 'react';
import styled from 'styled-components';
import Comment from '../components/Comment';


const CommentsPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CommentsList = styled.div`
  margin-bottom: 20px;
`;

const CommentsPage = () => {

  return (
    <CommentsPageContainer style={{ textAlign: 'left' }}>
      <Title>Comments</Title>

      <Comment />
    </CommentsPageContainer>
  );
};

export default CommentsPage;
