import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './ProjectLayoutShared.css';

function ProjectPageLayout({ projectData, children }) {
  const { title, duration, task, heroImage } = projectData;

  return (
    <>
      <Navigation />

      {/* Shared Header Structure - Full Width */}
      <header className="project-header" style={{ borderBottom: '1px solid var(--brown-dark)' }}>
        {/* Inner container to align content with the page */}
        <div className="p-flex-split project-header-content" style={{ margin: '0 auto' }}>
          {/* Left Side: Single Image (2 parts) */}
          <div className="project-header-image" style={{ flex: 2 }}>
            <img src={`${process.env.PUBLIC_URL}${heroImage}`} alt={`${title} hero`} className="p-image" />
          </div>

          {/* Right Side: Project Info (1 part) */}
          <div className="project-header-info" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '60px' }}>
            <h1 className="p-header-title">{title}</h1>
            <p className="p-header-body">{duration}</p>
            <p className="p-header-body" style={{ margin: 0 }}>{task}</p>
          </div>
        </div>
      </header>

      {/* Main Content Area - Renders the unique content of each page */}
      <main>
        <div className="project-layout">
          {children}
        </div>
      </main>

      {/* Shared Footer Navigation */}
      <section className="project-navigation-section">
        <div className="container">
          <div className="project-nav-buttons">
            <button className="nav-button prev-button">
              ← Previous Project
            </button>
            <button className="nav-button next-button">
              Next Project →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectPageLayout;
