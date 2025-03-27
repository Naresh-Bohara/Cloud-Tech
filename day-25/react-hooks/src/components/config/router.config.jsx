import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import "../../../public/css/style.css"
import UserProfile from '../pages/UserProfile';

const RouterConfig = () => {
  return (
    <>
        <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/user/1" className="nav-link">User 1 Profile</Link>
        <Link to="/user/2" className="nav-link">User 2 Profile</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<UserProfile />} />  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default RouterConfig;
