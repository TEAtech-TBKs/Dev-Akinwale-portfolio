import React from 'react';
import './About.css';
import Skills from '../Components/Skills';

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <h2>About Me</h2>
      <p>
        I am Tolulope Esther Akinwale, a passionate web developer specializing in creating beautiful, responsive, and user-friendly web applications. With expertise in modern web technologies, I strive to craft seamless digital experiences that engage and inspire.
      </p>
      <p>
        Skilled in JavaScript, React, Node.js, and CSS, I enjoy turning complex problems into elegant solutions. I am always eager to learn and grow in the ever-evolving world of web development.
      </p>
      <Skills />
    </section>
  );
};

export default About;
