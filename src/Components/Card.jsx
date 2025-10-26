import React from 'react';
import img1 from "../assets/portfolio.png";
import img2 from "../assets/beauty1.png";
import img3 from "../assets/beauty2.png";
import icon1 from "../assets/github.png";

import './Card.css';

const cardinfo = [
  {
    id: 1,
    imageUrl: img1,
    iconUrl: icon1,
    title: 'Portfolio Website',
    alt: 'facebook logo',
    description: 'A personal portfolio website built with React and CSS animations.',
    link: 'https://dev-akinwale-portfolio.vercel.app',
    gitLink: 'https://github.com/TEAtech-TBKs/Dev-Akinwale-portfolio',
    frameworks: ['React', 'CSS', 'JavaScript', 'HTML', 'GitHub', 'Vercel', 'AOS', 'Rest API'],
  },
  {
    id: 2,
    imageUrl: img2,
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce application using React, Node.js, and MongoDB.',
    link: 'https://github.com/tolulopeakinwale/ecommerce-store',
    alt: 'face logo',
    frameworks: [
      'React', 'CSS', 'JavaScript', 'HTML', 'GitHub', 'Vercel',
      'Netlify', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap', 'AOS', 'Rest API'
    ],
  },
  {
    id: 3,
    imageUrl: img3,
    title: 'Task Tracker',
    description: 'A simple task tracking app with persistent state and filters.',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
    alt: 'insta logo',
    frameworks: ['React', 'CSS', 'JavaScript', 'HTML', 'GitHub', 'Vercel', 'Rest API'],
  },
  {
    id: 4,
    imageUrl: img3,
    title: 'Weather App',
    description: 'A simple Weather App',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
    alt: 'insta logo',
    frameworks: ['React', 'CSS', 'JavaScript', 'HTML', 'GitHub', 'Vercel', 'Rest API'],
  },
  {
    id: 5,
    imageUrl: img3,
    title: 'Calculator',
    description: '',
    link: 'http://stay-organized-todo-odyu6elve-dev-akinwale.vercel.app/',
    alt: 'insta logo',
    frameworks: ['React', 'CSS', 'JavaScript', 'HTML', 'GitHub', 'Vercel', 'Rest API'],
  },
];

const Card = () => {
  return (
    <>
      {cardinfo.map((info) => (
        <div className="card-container" key={info.id}>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              <img
                className="card-img "
                src={info.imageUrl}
                alt={info.alt}
              />
            </a>

            <h3 className="card-title">{info.title}</h3>
            <p className="card-description">{info.description}</p>

            <div className="grid">
              {info.frameworks.map((fw, id) => (
                <div className="lang" key={id} title={fw}>
                  {fw}
                </div>
              ))}
            </div>

            <div className="card-links">
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              {info.gitLink && (
                <a href={info.gitLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-code"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
