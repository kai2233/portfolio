import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to = "/"> Home </Link>
        </li>
        <li>
          <Link to = "/profile"> Profile </Link>
        </li>
        <li>
          <Link to = "/contact"> Contact Me </Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
