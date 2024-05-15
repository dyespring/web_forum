// src/pages/ThreadCreation.js

import React from 'react';
import styled from 'styled-components';
import ThreadCreationForm from '../components/ThreadCreationForm';


const ThreadCreationPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ThreadCreationPage = () => {

  return (
    <ThreadCreationPageContainer>
      <ThreadCreationForm />
    </ThreadCreationPageContainer>
  );
};

export default ThreadCreationPage;
