import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'bar rotate1' : 'bar'}></div>
        <div className={isOpen ? 'bar fade' : 'bar'}></div>
        <div className={isOpen ? 'bar rotate2' : 'bar'}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#about-section" onClick={closeMenu}>About</a></li>
        <li><a href="#projects-section" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact-section" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
