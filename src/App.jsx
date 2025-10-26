import React from 'react';
import Navbar from './Components/Navbar';
import HeroSec from './Sections/HeroSec';
import About from './Sections/About';
import Projects from './Sections/projects';
import Contact from './Sections/contact';
import Footer from './Components/Footer';
import './App.css';
import CustomCursor from './Components/CustomCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Review from './Sections/review';

const App = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once
    })
  });
  return (
    <>
      <CustomCursor />
      <Navbar/>
      <HeroSec />
      <About />
      <Projects />
      <Review/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
