import React from 'react';
import './Hero.css';
import { portfolioData } from '../../data/portfolio-data';

function Hero() {
  const { hero } = portfolioData;

  const name = hero?.name || 'Nancy';
  const title = hero?.title || 'A Programmer, Designer, and Full-Stack Builder';
  const subtitle = hero?.subtitle || 'Computer Science and Asian Studies Junior @ Rice University';
  const description = hero?.description || 'Creates thoughtful, end-to-end products that blend clean code with intuitive design.';
  const image = hero?.image || 'portfolio-hero.png';

  return (
    <section id="hero" className="hero-section page-section">
      <div className="content">
        <div className="hero">
          <div className="hero-content">
            <h1>I'm {name},</h1>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{description}</p>
          </div>
          <div className="hero-image">
            <img
              src={`${process.env.PUBLIC_URL}${image}`}
              alt={`${name}'s Avatar`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;