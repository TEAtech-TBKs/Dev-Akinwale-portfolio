// Review.jsx
import React, { useState } from "react";
import "./Review.css"; // make sure to style it

const reviews = [
  {
    id: 1,
    text: "Tolulope is an exceptional human. He has no ego, does things the right way, and is truly trustworthy. One thing I can say is that I've never met anyone like him. His skills are legendary, and his work ethic is above the rest. If you choose to work with Taiwo, you won’t be making the wrong decision.",
    name: "Kameron Seabrook",
    role: "CEO, Co-founder of OBAI",
    initial: "K",
  },
  {
    id: 2,
    text: "Working with phina was a wonderful experience. She always delivers quality projects on time and communicates clearly throughout the process.",
    name: "Jane Doe",
    role: "Product Manager",
    initial: "J",
  },
  {
    id: 3,
    text: "Her creativity and problem-solving skills are outstanding. I’d highly recommend her to any team or project.",
    name: "John Smith",
    role: "Tech Lead",
    initial: "J",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="review-section">
      <h2 className="review-title">
        What <span>People Say</span>
      </h2>
      <p className="review-subtitle">
        Feedback from clients and colleagues I've had the pleasure to work with.
      </p>

      <div className="review-card">
        <button className="arrow left" onClick={prevReview}>
          &#8249;
        </button>

        <div className="review-content">
          <span className="quote">❝</span>
          <p className="review-text">{reviews[current].text}</p>
          <div className="reviewer">
            <div className="reviewer-initial">{reviews[current].initial}</div>
            <div>
              <h4 className="reviewer-name">{reviews[current].name}</h4>
              <p className="reviewer-role">{reviews[current].role}</p>
            </div>
          </div>
        </div>

        <button className="arrow right" onClick={nextReview}>
          &#8250;
        </button>
      </div>

      <div className="dots">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Review;
