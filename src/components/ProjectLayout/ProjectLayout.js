import React from 'react';
import './ProjectLayout.css';
import ProjectHeader from './ProjectHeader';
import SprintSection, { HourSection } from './SprintSection';
import Navigation from '../Navigation/Navigation';

function ProjectLayout({ projectData }) {
  const { title, subtitle, duration, platform, collaborators, methods, tools, overview, description, sections, sprints, outcome } = projectData;
  
  // Check if this is SwipyCampus project (Project02) by checking for sections data
  const isSwipyCampus = !!sections;

  if (isSwipyCampus) {
    return (
      <div className="project-layout">
        <Navigation />
        
        {/* Hero Section - 2:1 flex ratio */}
        <section className="swipycampus-hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image">
                <img src="/images/swipycampus_header_test.png" alt="SwipyCampus Header" />
              </div>
              <div className="hero-text">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{duration} • {platform}</p>
                <p className="hero-overview">{overview}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - 1:2 flex ratio */}
        <section className="swipycampus-introduction">
          <div className="container">
            <div className="introduction-content">
              <div className="methods-tools-box">
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
              
              <div className="project-description">
                <p>{description.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hour-based Project Phases */}
        <section className="swipycampus-phases">
          <div className="container">
            {sections.map((section) => (
              <HourSection 
                key={section.id}
                section={section}
              />
            ))}
          </div>
        </section>

        {/* Next Project Section - 2:1 flex ratio */}
        <section className="swipycampus-next-project">
          <div className="container">
            <div className="next-project-content">
              <div className="next-project-image">
                <img src="/images/swipycampus_bottom_test.png" alt="Next Project" />
              </div>
              <div className="next-project-text">
                <h2 className="next-project-title">PLACEHOLDER: Next Project Title</h2>
                <button className="next-project-button" onClick={() => console.log('Navigate to next project')}>
                  View Next Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="swipycampus-outcome">
          <div className="container">
            <div className="project-outcome">
              <h2>Outcome</h2>
              <p>{outcome}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Original layout for other projects
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