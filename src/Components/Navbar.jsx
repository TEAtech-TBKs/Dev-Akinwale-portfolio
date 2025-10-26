import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/TS.svg';
import './Navbar.css';

const navVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { type: "spring", duration: 0.5 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { type: "spring", duration: 0.4 }
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <motion.div
          className="bar"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        />
        <motion.div
          className="bar"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.div
          className="bar"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="nav-links mobile"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
          >
            <h1> T.E Akin</h1>
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about-section" onClick={closeMenu}>About</a></li>
            <li><a href="#projects-section" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact-section" onClick={closeMenu}>Contact</a></li>
          </motion.ul>
        )}
        
      </AnimatePresence>

      {/* Desktop Nav */}
      <div className="logo-container">
        <logo>
          <h2 className='main-name'><img className='logo-img' src={logo} alt="logo" /> Akinwale <span className="name">Esther</span></h2>
        </logo>
      </div>
      <ul className="nav-links desktop">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#projects-section">Projects</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
