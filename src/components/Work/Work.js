import React from 'react';
import './Work.css';
import PolaroidGallery from '../Gallery/PolaroidGallery';

function Work() {
  return (
    <section id="work" className="work-section page-section">
      <div className="content">
        <h2 className="section-heading">WORK</h2>
        <PolaroidGallery />
      </div>
    </section>
  );
}

export default Work;