import React from 'react';
import './Hero.css';
import { portfolioData } from '../../data/portfolio-data';

function Hero() {
  // Extract hero data with fallback defaults for error handling
  const { hero } = portfolioData;
  
  // Fallback values in case data is missing
  const name = hero?.name || 'Nancy';
  const title = hero?.title || 'A Programmer, Designer, and Full-Stack Builder';
  const subtitle = hero?.subtitle || 'Computer Science and Asian Studies junior @ Rice University';
  const description = hero?.description || 'Creates thoughtful, end-to-end products that blend clean code with intuitive design.';
  const image = hero?.image || 'portfolio-hero.png';

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>I'm {name},</h1>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
      <div className="hero-image">
        <img 
          src={image} 
          alt={`${name}'s Avatar`}
          className="hero-avatar"
        />
      </div>
    </section>
  );
}

export default Hero;