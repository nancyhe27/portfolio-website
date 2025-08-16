import React from 'react';
import './ProjectLayoutShared.css';

// SprintSection component is now styled with our shared system
function SprintSection({ sprint }) {
  const { number, title, content } = sprint;
  return (
    <div className="p-container-box" style={{ marginBottom: 'var(--spacing-md)' }}>
      <h3 className="p-subtitle">Sprint {number}: {title}</h3>
      <p className="p-body">{content}</p>
    </div>
  );
}

function DefaultProjectContent({ projectData }) {
  const { methods, tools, description, sprints } = projectData;

  return (
    <div className="container">
      <div className="p-layout-grid--sidebar-left">
        <aside>
          <div className="p-container-box p-container-box--green">
            <div>
              <h3 className="p-subtitle">Methods</h3>
              <ul>
                {methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="p-subtitle">Tools</h3>
              <ul>
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        
        <main style={{ maxWidth: '700px' }}>
          <div className="project-description">
            <p className="p-body">{description}</p>
          </div>
          
          <div>
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
  );
}

export default DefaultProjectContent;
