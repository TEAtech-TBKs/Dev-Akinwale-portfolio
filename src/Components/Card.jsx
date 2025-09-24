import React from 'react';
import './Card.css';
const cardinfo ={
    id: 1,
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and CSS animations.',
    link: 'https://dev-akinwale-portfolio.vercel.app',
  }
const Card = ({ 
}) => {
  return (
    <>
    {/* <div className="animated-card">
        <h3 className="card-title">  </h3>
        <p className="card-description">  </p>
        <a href={link}>View</a>
    </div> */}
    <div className="card">
      <a href={cardinfo.link}><img src={cardinfo.imageUrl}  style={{
          width: cardinfo.imageSize,
          height: cardinfo.imageSize
        }} alt="owner image" /></a>
        <h3 className="card-title"> {cardinfo.title}</h3>
        <p className="card-description"> {cardinfo.description}</p>
        <a href={cardinfo.link}>View</a>

    </div>
    </>
  );
};

export default Card;
