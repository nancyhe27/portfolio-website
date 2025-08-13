import React from 'react';
import './ProjectLayoutShared.css';
import './ProjectLayoutDefault.css';
import ProjectHeader from './ProjectHeader';
import Navigation from '../Navigation/Navigation';

// SprintSection component - internal to default projects
function SprintSection({ sprint }) {
  const { number, title, content } = sprint;

  return (
    <div className="sprint-section">
      <div className="sprint-header">
        <h3 className="sprint-title">Sprint {number}: {title}</h3>
      </div>
      <div className="sprint-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

function ProjectLayoutDefault({ projectData }) {
  const { title, subtitle, overview, methods, tools, description, sprints, outcome } = projectData;

  return (
    <div className="project-layout">
      <Navigation />
      <div className="header-image-container">
        <img src="/images/swipycampus_header_test.png" alt="Header" className="header-image" />
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
                {sprints && sprints.map((sprint) => (
                  <SprintSection 
                    key={sprint.number}
                    sprint={sprint}
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayoutDefault;
