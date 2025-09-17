import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import { portfolioData } from '../../data/portfolio-data';
import './ProjectLayoutShared.css';

function ProjectPageLayout({ projectData, children }) {
  const { title, duration, task, heroImage } = projectData;
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current project from URL path
  const currentRoute = location.pathname;
  
  // Get only available projects (not coming soon)
  const availableProjects = portfolioData.projects.filter(project => !project.comingSoon);
  const availableRoutes = availableProjects.map(project => project.route);
  
  const goToPreviousProject = () => {
    const currentIndex = availableRoutes.indexOf(currentRoute);
    const prevIndex = currentIndex === 0 ? availableRoutes.length - 1 : currentIndex - 1;
    const prevRoute = availableRoutes[prevIndex];
    navigate(prevRoute);
    window.scrollTo(0, 0);
  };
  
  const goToNextProject = () => {
    const currentIndex = availableRoutes.indexOf(currentRoute);
    const nextIndex = currentIndex === availableRoutes.length - 1 ? 0 : currentIndex + 1;
    const nextRoute = availableRoutes[nextIndex];
    navigate(nextRoute);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation />

      {/* Shared Footer Navigation */}
      <section className="project-navigation-section" style={{ borderTop: 'none' }}>
        <div className="project-nav-buttons">
          <button className="nav-button" onClick={goToPreviousProject}>
            ← &nbsp; Previous Project
          </button>
          <button className="nav-button" onClick={goToNextProject}>
            Next Project &nbsp; →
          </button>
        </div>
      </section>

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
      <section className="project-navigation-section" style={{ borderBottom: 'none' }}>
        <div className="project-nav-buttons">
          <button className="nav-button" onClick={goToPreviousProject}>
          ← &nbsp; Previous Project
          </button>
          <button className="nav-button" onClick={goToNextProject}>
            Next Project &nbsp; →
          </button>
        </div>
      </section>
    </>
  );
}

export default ProjectPageLayout;
