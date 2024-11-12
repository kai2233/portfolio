import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
