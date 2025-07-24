import React from 'react';
import './About.css';
import { portfolioData } from '../../data/portfolio-data';

function About() {
  const { about } = portfolioData;

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h2>about</h2>
          <p className="about-subtitle">a little bit more about me :)</p>
        </div>
        
        <div className="personal-section">
          <div className="personal-images">
            {about.personalImages.map((image, index) => (
              <div key={index} className="personal-image polaroid">
                <div className="placeholder-image">
                  <span>Personal Photo {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="description-section">
            <p className="personal-description">{about.description}</p>
            <div className="additional-image polaroid">
              <div className="placeholder-image">
                <span>Personal Photo 6</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="art-section">
          <p className="art-description">{about.artDescription}</p>
          <div className="art-images">
            {about.artImages.map((image, index) => (
              <div key={index} className="art-image">
                <div className="placeholder-image">
                  <span>Artwork {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 