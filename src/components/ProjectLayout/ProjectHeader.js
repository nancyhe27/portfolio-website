import React from 'react';
import './ProjectHeader.css';

function ProjectHeader({ title, subtitle, overview }) {
  return (
    <header className="project-header">
      <div className="container">
        <div className="project-hero">
          <div className="project-info">
            <h1 className="project-title">{title}</h1>
            <p className="project-subtitle">{subtitle}</p>
            <p className="project-overview">{overview}</p>
          </div>
          <div className="project-hero-image">
            <div className="placeholder-hero-image">
              <span>{title} Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProjectHeader; 