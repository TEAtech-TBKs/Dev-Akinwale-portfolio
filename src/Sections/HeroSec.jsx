import React from 'react';
import './HeroSec.css';

const HeroSec = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <div className="hero-title">
       Hi, i'm
            <span className="typewriter"> Esther Akinwale</span>
          </div>
          <p className="hero-subtitle"> i'm a front-end web-developer</p>
          <button className="hero-button">Explore My Work</button>
        </div>
        <div className="hero-background"></div>
        <div className='hero-image'>
        <img src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_0.5,c_fill,g_auto,w_433/q_auto/f_auto/hiking_dog_mountain.jpg" alt="dev Esther" />

        </div>
      </section>
    </>
  )}
export default HeroSec;
