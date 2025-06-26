import React from 'react';
// import image from '/src/Components/myimage.png'
import './HeroSec.css';

const HeroSec = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-content"  data-aos="fade-up">
          <div className="hero-title">
       Hi, i'm
            <span className="typewriter"> Esther Akinwale</span>
          </div>
          <p className="hero-subtitle"> i'm a Full-stack web-developer</p>
          <button className="hero-button">Explore My Work</button>
        </div>
        <div className="hero-background"></div>
        <div className='hero-image' data-aos="zoom-in">
        {/* <img className='img' alt="dev Esther" /> */}

        </div>
      </section>
    </>
  )}
export default HeroSec;
