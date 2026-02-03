import React, { useEffect, useState } from 'react';
import image from "../images/BeautyPlus_20250625204543965_save.jpg"
import './HeroSec.css';

const HeroSec = () => {

 const titles = [
  "Fullstack Web Developer",
  "MERN Stack Developer",
  "Graphic Designer",
  "UI/UX Designer",
  "Frontend Developer",
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % titles.length);
  }, 3000); // MUST match CSS

  return () => clearInterval(interval);
}, []);


  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-content"  data-aos="fade-up">
          <div className="hero-title">
       Hi, i'm
            <span className="typewriter"> Esther Akinwale</span>
          </div>
          <p className="hero-subtitle"> I am a <span className="proficiency">' {titles[index]} '</span></p>
          <p className='hero-description'>I’m a Frontend-focused Web Developer with strong MERN stack knowledge. I love building smooth, user-friendly web experiences, turning ideas into clean, functional interfaces, and writing code that’s easy to maintain. Exploring modern web technologies and creating solutions that add real value keeps me motivated.</p>
          <div className="btnCta">
            <button className="hero-button">Explore My Work</button>
            <button className="hero-btn-contact">Contact Me</button>
          </div>
        </div>
        <div className='hero-image' data-aos="zoom-in">
          <img width={300} height={300} src={image} alt="" />
        </div>
      </section>
    </>
  )}
export default HeroSec;
