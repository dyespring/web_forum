// src/components/RegistrationForm.js

import React, { useState }  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  color: #007bff;
`;

const RegistrationForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://127.0.0.1:8000/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password, email }),
          });

          if (!response.ok) {
              throw new Error('Registration failed');
          }

          // Redirect to login page or another page upon successful registration
          window.location.replace('http://127.0.0.1:3000/login');
      } catch (error) {
          setError('Registration failed. Please try again.');
      }
  };


  return (
    <FormContainer>
      <Form onSubmit={handleRegister}>
        <h2>Register</h2>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button type="submit">Register</Button>
        <StyledLink to="/login">Already registered? Login here</StyledLink>
        {error && <p>{error}</p>}
      </Form>
    </FormContainer>
  );
};

export default RegistrationForm;
