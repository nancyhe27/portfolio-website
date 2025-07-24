import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>I'm Nancy,</h1>
        <p>A Programmer, Designer, and Full-Stack Builder</p>
        <p>Computer Science and Asian Studies junior @ Rice University</p>
        <p>Creates thoughtful, end-to-end products that blend clean code with intuitive design.</p>
      </div>
      <div className="hero-image">
        <div className="avatar-placeholder">
          <span>Nancy's Avatar</span>
        </div>
      </div>
    </section>
  );
}

export default Hero; 