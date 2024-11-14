import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
