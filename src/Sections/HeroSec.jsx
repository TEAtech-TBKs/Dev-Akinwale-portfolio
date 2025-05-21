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
        <img src="https://techsphereweb.my.canva.site/" alt="dev Esther" />

        </div>
      </section>
    </>
  )}
export default HeroSec;
