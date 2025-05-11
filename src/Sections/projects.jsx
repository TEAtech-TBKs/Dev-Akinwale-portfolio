import React from 'react';
import Card from '../Components/Card';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and CSS animations.',
    link: 'https://github.com/tolulopeakinwale/portfolio',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce application using React, Node.js, and MongoDB.',
    link: 'https://github.com/tolulopeakinwale/ecommerce-store',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    link: 'https://github.com/tolulopeakinwale/blog-platform',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    link: 'https://github.com/tolulopeakinwale/blog-platform',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
