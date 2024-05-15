// src/pages/Login.js

import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';


const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
