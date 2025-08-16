import React from 'react';
import './ProjectLayoutShared.css';
import Navigation from '../Navigation/Navigation';

function ProjectLayoutDefault({ projectData }) {
  const { title, subtitle, overview, methods, tools, description, sprints, outcome } = projectData;

  return (
    <div className="project-layout">
      <Navigation />
      <div className="header-image-container">
        <img src="/images/swipycampus_header_test.png" alt="Header" className="header-image" />
      </div>
      
      <header className="p-flex-split" style={{padding: '80px 0', borderBottom: '1px solid #e0e0e0'}}>
        <div style={{flex: 1}}>
          <h1 className="p-title" style={{border: 'none'}}>{title}</h1>
          <p className="p-subtitle" style={{fontStyle: 'italic'}}>{subtitle}</p>
          <p className="p-body">{overview}</p>
        </div>
        <div style={{flex: '0 0 300px'}}>
          <div style={{width: '300px', height: '200px', backgroundColor: '#f0f0f0', border: '2px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#666', fontSize: '14px', borderRadius: '8px'}}>
            <span>{title} Hero Image</span>
          </div>
        </div>
      </header>
      
      <div className="project-content" style={{padding: '60px 0'}}>
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
            
            <main style={{maxWidth: '700px'}}>
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
      </div>
    </div>
  );
}

export default ProjectLayoutDefault;
