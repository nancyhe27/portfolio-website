import React from 'react';
import './Hero.css';
import { portfolioData } from '../../data/portfolio-data';

function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p>{hero.text}</p>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <span>Animated Self-Portrait GIF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 