import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const UserContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;


const UserList = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/list_user2');
        const data = await response.json();

        // Access the users array from the data object, handling potential absence of data.users
        const data_users = data.users || [];
        
        setUsers(data_users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContainer style={{ textAlign: 'left' }} >
      <h1>Forum Member List</h1>
      <ul>
        {Users.map(user => (
          <li key={user.id}>Name: {user.username}  |   Email: {user.email}</li>
        ))}
      </ul>
    </UserContainer>
  );
};

export default UserList;