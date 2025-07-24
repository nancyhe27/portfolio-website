import React from 'react';
import './Skills.css';
import { portfolioData } from '../../data/portfolio-data';

function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>skills</h2>
          <p className="skills-subtitle">in order of relevance / proficiency</p>
        </div>
        <div className="skills-content">
          <div className="skills-column">
            <h3>Methods</h3>
            <ul>
              {skills.methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h3>Tools</h3>
            <ul>
              {skills.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h3>Technical</h3>
            <ul>
              {skills.technical.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 