// src/App.js

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Threads from './pages/Threads';
import ThreadCreation from './pages/ThreadCreation';
import Login from './pages/Login';
import Reg from './pages/Register';
import CommentsPage from './pages/CommentsPage';
import UserList from './pages/userlist'; //new added
import axios from 'axios';
import SearchComponent from './pages/SearchThread';
import CommentCreationForm from './components/CommentCreationForm';

axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />
  <Route path="/threads" element={<Threads />} />
  <Route path="/threadcreation" element={<ThreadCreation />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Reg />} />
  <Route path="/CommentsPage" element={<CommentsPage />} />
  <Route path="/userlist" element={<UserList />} />
  <Route path="/search" element={<SearchComponent/>} />
  <Route path="/commentcreation" element={<CommentCreationForm/>} />
  
</Routes>
      </Layout>
    </Router>
  );
}

export default App;
