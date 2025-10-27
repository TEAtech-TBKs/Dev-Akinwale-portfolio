import React from 'react';
import image from "../images/BeautyPlus_20250625204543965_save.jpg"
import './HeroSec.css';
import Navbar from '../Components/Navbar';

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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tempora, repudiandae consectetur minima sed soluta facere animi esse perspiciatis cumque nihil doloremque nobis nemo repellat nisi placeat dolor odio. Accusantium.</p>
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
