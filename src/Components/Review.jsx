// Review.jsx
import React, { useState } from "react";
import "./Review.css"; // make sure to style it

const reviewApi = [
  {
    id: 1,
    text: "Working with Esther has been amazing. She’s always calm under pressure, listens carefully, and finds solutions quickly. I really admire her dedication and creativity , she’s someone you can trust to get the job done well.",
    name: "Chinonso Okeke",
    role: "Product Manager",
    initial: "C",
  },
  {
    id: 2,
    text: "Esther brings so much energy and positivity to every project. She has a natural eye for detail and makes even complex ideas feel simple. I’ve learned a lot from collaborating with her and would recommend her to any team.",
    name: "Temidayo Adebayo",
    role: "Tech Lead",
    initial: "T",
  },
  {
    id: 3,
    text: "I’ve worked with a lot of developers, but Esther really stands out. She’s reliable, communicates clearly, and always goes the extra mile. It’s a pleasure working with her and seeing her bring ideas to life.",
    name: "Funke Olawale",
    role: "CEO, Tech Solutions",
    initial: "F",
  },
];



const Review = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviewApi.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviewApi.length) % reviewApi.length);
  };

  return (
    <div className="review-parent">
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
            <p className="review-text">{reviewApi[current].text}</p>
            <div className="reviewer">
              <div className="reviewer-initial">{reviewApi[current].initial}</div>
              <div>
                <h4 className="reviewer-name">{reviewApi[current].name}</h4>
                <p className="reviewer-role">{reviewApi[current].role}</p>
              </div>
            </div>
          </div>
          <button className="arrow right" onClick={nextReview}>
            &#8250;
          </button>
        </div>
        <div className="dots">
          {reviewApi.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
