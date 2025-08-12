import React from 'react';
import './SprintSection.css';

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

export function HourSection({ section }) {
  const renderContent = () => {
    // Simple text content for most sections
    if (section.content && !section.features && !section.subsections) {
      return <p>{section.content}</p>;
    }

    // User research section with features
    if (section.features) {
      return (
        <div>
          <p>{section.content}</p>
          <div className="features">
            {section.features.map((feature, index) => (
              <div key={index} className="feature">
                <h4>{feature.title}</h4>
                {feature.image && <img src={feature.image.src} alt={feature.image.alt} />}
                <p><strong>{feature.question}</strong></p>
                <blockquote>"{feature.quote}"</blockquote>
              </div>
            ))}
          </div>
          {section.insights && <p className="insights">{section.insights}</p>}
        </div>
      );
    }

    // Wireframes section with subsections
    if (section.subsections) {
      return (
        <div>
          {section.subsections.map((sub, index) => (
            <div key={index} className="subsection">
              <h4>{sub.title}</h4>
              {sub.images && (
                <div className="image-grid">
                  {sub.images.map((img, imgIndex) => (
                    <figure key={imgIndex}>
                      <img src={img.src} alt={img.alt} />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
              {sub.comparisons && (
                <div className="comparisons">
                  {sub.comparisons.map((comp, compIndex) => (
                    <div key={compIndex} className="comparison">
                      <div className="before-after">
                        <img src={comp.before.src} alt={comp.before.alt} />
                        <img src={comp.after.src} alt={comp.after.alt} />
                      </div>
                      <p>{comp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Mascot section
    if (section.mascot) {
      return (
        <div>
          <blockquote className="quote">"{section.quote}"</blockquote>
          <p>{section.content}</p>
          <div className="mascot">
            <h4>{section.mascot.name}</h4>
            <p>{section.mascot.description}</p>
            <div className="mascot-states">
              {section.mascot.states.map((state, index) => (
                <figure key={index}>
                  <img src={state.src} alt={state.alt} />
                  <figcaption>{state.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Prototype section
    if (section.flows) {
      return (
        <div>
          <p className="cta">{section.cta}</p>
          {section.flows.map((flow, index) => (
            <div key={index} className="flow">
              <h4>{flow.title}</h4>
              <div className="flow-images">
                {flow.images.map((imgSrc, imgIndex) => (
                  <img key={imgIndex} src={imgSrc} alt={`${flow.title} step ${imgIndex + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Video section
    if (section.video) {
      const videoId = section.video.url.split('v=')[1];
      return (
        <div className="video-container">
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            title={section.video.title || section.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      );
    }

    return <p>{section.content}</p>;
  };

  return (
    <div className="hour-section">
      <h3>{section.title}</h3>
      <div className="section-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default SprintSection; 