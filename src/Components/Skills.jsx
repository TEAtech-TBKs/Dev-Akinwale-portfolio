import React from 'react';
import skills from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
