import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect} from "react-router-dom";
import Home from './Home.js';
import Login from './Login';
import SignUp from './SignUp';
import LoggedIn from './LoggedIn'
import SignedIn from './SignedIn'
import LoginError from './LoginError'
import SignInError from './SignInError.js';

import './App.css';

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loggedin" element={<LoggedIn />} />
        <Route path="/signedin" element={<SignedIn />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/signinerror" element={<SignInError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
