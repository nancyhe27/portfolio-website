import React from 'react';
import '../ProjectLayoutShared.css';
import './ProjectLayout02.css';
import Navigation from '../../Navigation/Navigation';

// HourSection component - internal to Project02
function HourSection({ section }) {
  const renderContent = () => {
    // Ideation section - simple text content
    if (section.id === 'ideation') {
      return (
        <div className="ideation-section">
          <p>{section.content}</p>
        </div>
      );
    }

    // User research section with feature cards
    if (section.id === 'user_research') {
      return (
        <div className="user-research-section">
          <p className="research-intro">{section.content}</p>

          <div className="feature-cards">
            {section.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img src={feature.image.src} alt={feature.image.alt} />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-question">{feature.question}</p>
                  <blockquote className="user-quote">"{feature.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>

          {section.insights && (
            <div className="research-insights">
              <p>{section.insights}</p>
            </div>
          )}
        </div>
      );
    }

    // Wireframes section with subsections
    if (section.id === 'wireframes') {
      return (
        <div className="wireframes-section">
          {section.subsections.map((subsection, index) => (
            <div key={index} className="wireframe-subsection">
              <h4 className="subsection-title">{subsection.title}</h4>

              {/* Image grid for wireframes */}
              {subsection.images && (
                <div className="wireframe-grid">
                  {subsection.images.map((img, imgIndex) => (
                    <figure key={imgIndex} className="wireframe-item">
                      <img src={img.src} alt={img.alt} />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              {/* Before/after comparisons */}
              {subsection.comparisons && (
                <div className="comparison-grid">
                  {subsection.comparisons.map((comparison, compIndex) => (
                    <div key={compIndex} className="comparison-item">
                      <div className="comparison-images">
                        <figure className="before-image">
                          <img src={comparison.before.src} alt={comparison.before.alt} />
                          <figcaption>{comparison.before.caption}</figcaption>
                        </figure>
                        <figure className="after-image">
                          <img src={comparison.after.src} alt={comparison.after.alt} />
                          <figcaption>{comparison.after.caption}</figcaption>
                        </figure>
                      </div>
                      <p className="comparison-description">{comparison.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Mascot design section
    if (section.id === 'mascot_design') {
      return (
        <div className="mascot-section">
          <blockquote className="prominent-quote">"{section.quote}"</blockquote>
          <p className="mascot-description">{section.content}</p>

          <div className="mascot-info">
            <h4 className="mascot-name">{section.mascot.name}</h4>
            <p className="mascot-about">{section.mascot.description}</p>

            <div className="mascot-states">
              {section.mascot.states.map((state, index) => (
                <figure key={index} className="mascot-state">
                  <img src={state.src} alt={state.alt} />
                  <figcaption>{state.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Prototype section with flows
    if (section.id === 'prototype') {
      return (
        <div className="prototype-section">
          <p className="prototype-cta">{section.cta}</p>

          <div className="prototype-flows">
            {section.flows.map((flow, index) => (
              <div key={index} className="prototype-flow">
                <h4 className="flow-title">{flow.title}</h4>
                <div className="flow-screens">
                  {flow.images.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`${flow.title} screen ${imgIndex + 1}`}
                      className="prototype-screen"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Promotion section with video
    if (section.id === 'promotion') {
      const videoId = section.video.url.split('v=')[1];
      return (
        <div className="promotion-section">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={section.video.title || section.title}
              frameBorder="0"
              allowFullScreen
              className="promotion-video"
            />
          </div>
        </div>
      );
    }

    // Default: simple text content
    return (
      <div className="simple-content">
        <p>{section.content}</p>
      </div>
    );
  };

  return (
    <section className="hour-section">
      <h3 className="section-title">{section.title}</h3>
      <div className="section-content">
        {renderContent()}
      </div>
    </section>
  );
}

function ProjectLayout02({ projectData }) {
  const { title, duration, task, platform, methods, tools, overview, description, sections } = projectData;

  return (
    <div>
      {/* Navigation - Full width, no margins */}
      <Navigation />
      
      {/* Hero Section - Full width, outside padded container */}
      <section className="swipycampus-hero">
        <div className="hero-content-flex">
          <div className="hero-image-section">
            <img src="/images/swipycampus_header_test.png?v=2" alt="SwipyCampus Header" />
          </div>
          <div className="hero-info-section">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-date">{duration}</p>
            <p className="hero-task">{task}</p>
          </div>
        </div>
      </section>
      
      <div className="project-layout project-layout-02">
        {/* Introduction Section - Increased margins */}
        <section className="swipycampus-introduction">
          <div className="container">
            <div className="introduction-content">
              <div className="methods-tools">
                <div className="platform-section">
                  <h3>Platform</h3>
                  <ul>
                    <li>{platform}</li>
                  </ul>
                </div>
                
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
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section - App logo and short description */}
        <section className="swipycampus-summary">
          <div className="container">
            <div className="summary-content">
              <div className="summary-image">
                <img src={description.logo.src} alt={description.logo.alt} />
              </div>
              <div className="summary-text">
                <p>{description.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hour-based Project Phases - Increased margins */}
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

        {/* Project Navigation - Increased margins */}
        <section className="project-navigation-section">
          <div className="container">
            <div className="project-nav-buttons">
              <button className="nav-button prev-button" onClick={() => console.log('Navigate to previous project')}>
                ← Previous Project
              </button>
              <button className="nav-button next-button" onClick={() => console.log('Navigate to next project')}>
                Next Project →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectLayout02;
