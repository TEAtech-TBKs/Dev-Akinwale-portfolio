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
    title: 'Task Tracker',
    description: 'A simple task tracking app with persistent state and filters.',
    link: 'https://github.com/tolulopeakinwale/task-tracker',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects-section" data-aos="fade-up">
      <h2 data-aos="zoom-in" data-aos-delay="100">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 200} key={project.id}>
            <Card
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
