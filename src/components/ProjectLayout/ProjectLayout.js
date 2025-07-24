import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectLayout.css';
import ProjectHeader from './ProjectHeader';
import SprintSection from './SprintSection';

function ProjectLayout({ projectData }) {
  const { title, subtitle, overview, methods, tools, description, sprints, outcome } = projectData;

  return (
    <div className="project-layout">
      <div className="project-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <ProjectHeader 
        title={title}
        subtitle={subtitle}
        overview={overview}
      />
      
      <div className="project-content">
        <div className="container">
          <div className="project-body">
            <aside className="project-sidebar">
              <div className="methods-tools">
                <div className="methods-section">
                  <h3>Methods</h3>
                  <ul>
                    {methods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="tools-section">
                  <h3>Tools</h3>
                  <ul>
                    {tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
            
            <main className="project-main">
              <div className="project-description">
                <p>{description}</p>
              </div>
              
              <div className="sprints-section">
                {sprints.map((sprint) => (
                  <SprintSection 
                    key={sprint.number}
                    sprint={sprint}
                  />
                ))}
              </div>
              
              <div className="project-outcome">
                <h2>Outcome</h2>
                <p>{outcome}</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout; 