import React from 'react';
import Navbar from './Components/Navbar';
import HeroSec from './Sections/HeroSec';
import About from './Sections/About';
import Projects from './Sections/projects';
import Contact from './Sections/contact';
import Footer from './Components/Footer';
import './App.css';
import CustomCursor from './Components/CustomCursor';

const App = () => {
  return (
    <>
      <CustomCursor />
      <HeroSec />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
