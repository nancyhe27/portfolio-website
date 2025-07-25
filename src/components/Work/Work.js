import React from 'react';
import './Work.css';
import { portfolioData } from '../../data/portfolio-data';

function Work() {
  // Use projects from centralized data with error handling
  const { projects = [] } = portfolioData;
  
  // Fallback projects in case data is missing
  const fallbackProjects = [
    {
      id: 1,
      title: "RideSystems 2025",
      subtitle: "Ideation, UI/UX, User Research"
    }
  ];
  
  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section id="work" className="work">
      <h2 className="section-heading">WORK</h2>
      <div className="project-grid">
        {displayProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title || 'Project Title'}</h3>
            <p>{project.subtitle || 'Project Description'}</p>
            <div className="project-image">
              <span>Project Image</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work; 