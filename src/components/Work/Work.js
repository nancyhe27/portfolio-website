import React from 'react';
import './Work.css';
import PolaroidGallery from '../PolaroidGallery/PolaroidGallery';

function Work() {
  return (
    <section className="work">
      <div className="container">
        <div className="work-header">
          <h2>work</h2>
          <p className="work-subtitle">internships / innovations / ideations</p>
        </div>
        <PolaroidGallery />
      </div>
    </section>
  );
}

export default Work; 