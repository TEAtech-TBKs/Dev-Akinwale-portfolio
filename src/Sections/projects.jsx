import React from 'react';
import Card from '../Components/Card';
import './projects.css';

const projectsData = [
  {
    id: 1,
    image: '../assets/portfolio logo design/1.png',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and CSS animations.',
    link: 'https://dev-akinwale-portfolio.vercel.app',
  },
  {
    id: 2,
    image: '../assets/portfolio logo design/1.png',
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce application using React, Node.js, and MongoDB.',
    link: 'https://github.com/tolulopeakinwale/ecommerce-store',
  },
  {
    id: 3,
    image: '../assets/portfolio logo design/1.png',
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    link: 'https://github.com/tolulopeakinwale/blog-platform',
  },
  {
    id: 4,
    image: '../assets/portfolio logo design/1.png',
    title: 'Task Tracker',
    description: 'A simple task tracking app with persistent state and filters.',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
  },
  {
    id: 5,
    image: '../assets/portfolio logo design/10.png',
    title: 'Weather App',
    description: 'A simple Weather App',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
  },
  {
    id: 6,
    image: '../assets/portfolio logo design/9.png',
    title: 'Calculator',
    description: '',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
  },
 
];

const Projects = () => {
  return (
    <div className="project-Parent">
      <section className="projects-section" id="projects-section" data-aos="fade-up">
        <h2 data-aos="zoom-in" data-aos-delay="100">Projects</h2>
        <div className="projects-grid">
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Projects;
