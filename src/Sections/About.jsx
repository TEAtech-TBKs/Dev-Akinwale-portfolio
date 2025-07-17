import React from 'react';
import './About.css';
import Skills from '../Components/Skills';

const About = () => {
  return (
    <section className="about-section" id="about-section" data-aos="fade-right">
      <div className="wrap-cont">
        <h2 data-aos="fade-down">About Me</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          I am Tolulope Esther Akinwale, a passionate web developer specializing in creating beautiful,
          responsive, and user-friendly web applications. With expertise in modern web technologies, I strive to
          craft seamless digital experiences that engage and inspire.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          Skilled in JavaScript, React, Node.js, and CSS, I enjoy turning complex problems into elegant solutions.
          I am always eager to learn and grow in the ever-evolving world of web development.
        </p>
        <div data-aos="fade-up" data-aos-delay="600">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
