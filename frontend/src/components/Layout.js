// src/components/Layout.js
/*
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <h1>Web Forum Home Page</h1>
        
      </Header>
      <Main>{children}</Main>
      <Footer>© 2024 My Web Forum. All rights reserved.</Footer>
    </Wrapper>
  );
}

export default Layout;
*/
// src/components/Layout.js

// src/components/Layout.js

// src/components/Layout.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  color: #fff;
  padding: 1rem;
`;

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.isFirstRow ? '#555' : 'transparent')};
  padding: 0.5rem;
`;

const Column = styled.div`
  flex: 1;
  padding: 0.5rem;
`;

const Logo = styled.img`
  max-width: 100%;
  height: 30%;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LoginButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  text-decoration: none;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
          <h1 style={{ textAlign: 'center', width: '100%', color: 'black',backgroundColor: 'grey' ,height: '100px', lineHeight: '100px'  }}>Web Forum Home Page</h1>
             <Row>
          <Column>
            <Logo src="./logo192.png" alt="Logo" />
          </Column>
          <Column>
            <SearchBar type="text" placeholder="Search..." />
          </Column>
          <Column>
            <CallToAction>
              <LoginButton to="/login">Login</LoginButton>
              <LoginButton to="/register">Register</LoginButton>
            </CallToAction>
          </Column>
        </Row>
      </Header>
      <Navbar>
        <NavbarLink to="/Home">Home</NavbarLink>
        <NavbarLink to="/threads">Threads</NavbarLink>
        <NavbarLink to="/search">Search</NavbarLink>
        <NavbarLink to="/threadcreation">Create Thread</NavbarLink>
        <NavbarLink to="/CommentsPage">Comments</NavbarLink>
        <NavbarLink to="/commentcreation">Create Comments</NavbarLink>
        <NavbarLink to="/userlist">Members</NavbarLink>
        {/* Add more links as needed */}
      </Navbar>
      <Main>{children}</Main>
      <Footer>© 2024 My Web Forum. All rights reserved.</Footer>
    </Wrapper>
  );
};

export default Layout;
