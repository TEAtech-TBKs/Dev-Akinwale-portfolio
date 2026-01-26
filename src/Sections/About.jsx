import React from 'react';
import './About.css';
import Skills from '../Components/Skills';

const About = () => {
  return (
    <section className="about-section" id="about-section" data-aos="fade-right">
        <h2 data-aos="fade-down">About Me</h2>
      <div className="wrap-cont">
        <p data-aos="fade-up" data-aos-delay="200">
          Hi, I’m Tolulope Esther Akinwale. I love building web apps that are clean, responsive, and easy to use. 
          Using modern web technologies, I aim to create experiences that feel smooth, intuitive, and enjoyable for users.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          I work with JavaScript, React, Node.js, and CSS, and I really enjoy turning tricky problems into simple, elegant solutions. 
          I’m always curious and learning new things, trying to stay on top of the fast-moving world of web development.
        </p>

        <div data-aos="fade-up" data-aos-delay="600">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
