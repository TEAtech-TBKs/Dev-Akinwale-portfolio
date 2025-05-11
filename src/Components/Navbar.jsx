import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#projects-section">Projects</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
