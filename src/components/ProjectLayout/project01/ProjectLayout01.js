import React from 'react';
import '../ProjectLayoutShared.css';

function ProjectLayout01({ projectData }) {
  const { platform, programming, tools, collaborators, overview, sections } = projectData;

  return (
    <div>
      {/* Introduction Section */}
      <section>
        <div className="p-flex-split">
          <div className="p-container-box p-container-box--green" style={{ flex: 1 }}>
            <div><span className="p-label">Platform:</span> {platform}</div>
            <div><span className="p-label">Programming:</span> {programming.join(', ')}</div>
            <div><span className="p-label">Tools:</span> {tools.join(', ')}</div>
            <div><span className="p-label">Collaborators:</span> {collaborators.join(', ')}</div>
          </div>
          <p className="p-body" style={{ flex: 2 }}>{overview}</p>
        </div>
      </section>

      {/* Section 1: Background */}
      <section>
        <h3 className="p-title">{sections[0].title}</h3>
        <div className="section-content">
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/projects/project-01/wekruit_logo.png`} 
              alt="WeKruit Logo" 
              style={{ width: '120px', height: 'auto', flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              {sections[0].subsections.map((subsection, subsectionIndex) => (
                <section key={subsectionIndex}>
                  {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="p-body" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What I Did */}
      <section>
        <h3 className="p-title">{sections[1].title}</h3>
        <div className="section-content">
          {sections[1].paragraphs.map((paragraph, index) => {
            const handleClick = () => {
              if (paragraph.link) {
                const element = document.querySelector(paragraph.link);
                if (element) {
                  const navHeight = 80; // Approximate nav bar height
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }
            };

            return (
              <p 
                key={index} 
                className="p-body" 
                dangerouslySetInnerHTML={{ __html: paragraph.text }}
                onClick={handleClick}
                style={{ 
                  cursor: paragraph.link ? 'pointer' : 'default',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (paragraph.link) {
                    e.target.style.color = 'var(--sage-green)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (paragraph.link) {
                    e.target.style.color = 'var(--text-secondary)';
                  }
                }}
              />
            );
          })}
        </div>
      </section>

      {/* Section 3: Main Product */}
      <section id="main-product">
        <h3 className="p-title">{sections[2].title}</h3>

        {/* Prototype Design Subsection */}
        <section className="section-content">
          <h4 className="p-subtitle">{sections[2].subsections[0].subtitle}</h4>
          {sections[2].subsections[0].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}

          {/* Flow 1: Interview Dashboard */}
          <div id="flow1-interview-dashboard">
            <h4 className="p-subtitle">{sections[2].subsections[0].imageGroups[0].title}</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {/* Each image paired with its corresponding text */}
              {sections[2].subsections[0].imageGroups[0].images.map((image, imageIndex) => (
                <div key={imageIndex} className="p-flex-split" style={{ alignItems: 'center' }}>
                  {/* Left: Image */}
                  <div style={{ flex: 2 }}>
                    <figure style={{ margin: 0 }}>
                      <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.alt} className="p-image" />
                      <figcaption className="p-caption">{image.caption}</figcaption>
                    </figure>
                  </div>
                  {/* Right: Corresponding step text */}
                  <div style={{ flex: 1 }}>
                    {sections[2].subsections[0].imageGroups[0].steps[imageIndex] && (
                      <div>
                        <p className="p-body--bold">{sections[2].subsections[0].imageGroups[0].steps[imageIndex].title}</p>
                        <p className="p-body">{sections[2].subsections[0].imageGroups[0].steps[imageIndex].description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow 2: Candidate Onboarding */}
          <div id="flow2-candidate-onboarding">
            <h4 className="p-subtitle">{sections[2].subsections[0].imageGroups[1].title}</h4>
            <p className="p-body">{sections[2].subsections[0].imageGroups[1].description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {/* Each image paired with its corresponding text */}
              {sections[2].subsections[0].imageGroups[1].images.map((image, imageIndex) => (
                <div key={imageIndex} className="p-flex-split" style={{ alignItems: 'center' }}>
                  {/* Left: Image */}
                  <div style={{ flex: 2 }}>
                    <figure style={{ margin: 0 }}>
                      <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.alt} className="p-image" />
                      <figcaption className="p-caption">{image.caption}</figcaption>
                    </figure>
                  </div>
                  {/* Right: Corresponding step text */}
                  <div style={{ flex: 1 }}>
                    {sections[2].subsections[0].imageGroups[1].steps[imageIndex] && (
                      <div>
                        <p className="p-body--bold">{sections[2].subsections[0].imageGroups[1].steps[imageIndex].title}</p>
                        <p className="p-body">{sections[2].subsections[0].imageGroups[1].steps[imageIndex].description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prototype Development Subsection */}
        <section className="section-content">
          <h4 className="p-subtitle">{sections[2].subsections[1].subtitle}</h4>
          {sections[2].subsections[1].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}
        </section>
      </section>

      {/* Section 4: Design System */}
      <section id="design-system">
        <h3 className="p-title">{sections[3].title}</h3>
        <div className="section-content">
          {sections[3].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}

          {/* Universal Style Definitions */}
          <section>
            <h4 className="p-subtitle">{sections[3].subsections[0].subtitle}</h4>
            <p className="p-body">{sections[3].subsections[0].paragraphs[0]}</p>
            <div className="p-flex-split">
              <div style={{ flex: '3' }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[0].images[0].src}`} alt={sections[3].subsections[0].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[3].subsections[0].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: '1' }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[0].images[1].src}`} alt={sections[3].subsections[0].images[1].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[3].subsections[0].images[1].caption}</figcaption>
                </figure>
              </div>
            </div>
          </section>

          {/* Button Component */}
          <section>
            <h4 className="p-subtitle">{sections[3].subsections[1].subtitle}</h4>
            <div className="p-flex-split">
              <div style={{ flex: '0 0 auto' }}>
                <figure style={{ margin: 0 }}>
                <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[1].images[0].src}`} alt={sections[3].subsections[1].images[0].alt} className="p-image" style={{ height: '300px', width: 'auto' }} />
                  <figcaption className="p-caption">{sections[3].subsections[1].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: '0 0 auto' }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[1].images[1].src}`} alt={sections[3].subsections[1].images[1].alt} className="p-image" style={{ height: '300px', width: 'auto' }} />
                  <figcaption className="p-caption">{sections[3].subsections[1].images[1].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <p className="p-body">{sections[3].subsections[1].paragraphs[0]}</p>
              </div>
            </div>
          </section>

          {/* Upload Component */}
          <section>
            <h4 className="p-subtitle">{sections[3].subsections[2].subtitle}</h4>
            <div className="p-flex-split">
              <div style={{ flex: 2 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[2].images[0].src}`} alt={sections[3].subsections[2].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[3].subsections[2].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <p className="p-body">{sections[3].subsections[2].paragraphs[0]}</p>
              </div>
            </div>
          </section>

          {/* Interaction Specs */}
          <section>
            <h4 className="p-subtitle">{sections[3].subsections[3].subtitle}</h4>
            <div className="p-flex-split">
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[3].subsections[3].images[0].src}`} alt={sections[3].subsections[3].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[3].subsections[3].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <p className="p-body">{sections[3].subsections[3].paragraphs[0]}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section 5: UI/UX Refinement */}
      <section id="uiux-refinement">
        <h3 className="p-title">{sections[4].title}</h3>
        <div className="section-content">
          <p className="p-body">{sections[4].paragraphs[0]}</p>

          <h4 className="p-subtitle" id="interview-management-dashboard">{sections[4].subtitles[0]}</h4>

          {/* Comparison 1 */}
          <div className="p-flex-split">
            <div style={{ flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <figure style={{ margin: 0 }}>
                <img src={`${process.env.PUBLIC_URL}${sections[4].images[0].src}`} alt={sections[4].images[0].alt} className="p-image" />
                <figcaption className="p-caption">{sections[4].images[0].caption}</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src={`${process.env.PUBLIC_URL}${sections[4].images[1].src}`} alt={sections[4].images[1].alt} className="p-image" />
                <figcaption className="p-caption">{sections[4].images[1].caption}</figcaption>
              </figure>
            </div>
            <div style={{ flex: 1 }}>
              <p className="p-body">{sections[4].paragraphs[1]}</p>
            </div>
          </div>

          <h4 className="p-subtitle">{sections[4].subtitles[1]}</h4>

          {/* Comparison 2 */}
          <div>
          <p className="p-body">{sections[4].paragraphs[2]}</p>
            <div className="p-flex-split">
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[4].images[2].src}`} alt={sections[4].images[2].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[4].images[2].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[4].images[3].src}`} alt={sections[4].images[3].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[4].images[3].caption}</figcaption>
                </figure>
              </div>
            </div>
          </div>

          <h4 className="p-subtitle" id="interview-creation-flow">{sections[4].subtitles[2]}</h4>

          {/* Comparison 3 */}
          <div>
          <p className="p-body">{sections[4].paragraphs[3]}</p>
            <div className="p-flex-split">
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[4].images[4].src}`} alt={sections[4].images[4].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[4].images[4].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[4].images[5].src}`} alt={sections[4].images[5].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[4].images[5].caption}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Reflections */}
      <section id="reflections">
        <h3 className="p-title">{sections[5].title}</h3>
        <div className="section-content">
          <p className="p-body">{sections[5].paragraphs[0]}</p>
          <p className="p-body">{sections[5].paragraphs[1]}</p>
          <p className="p-body">{sections[5].paragraphs[2]}</p>
          <p className="p-body">{sections[5].paragraphs[3]}</p> 
        </div>
      </section>
    </div>
  );
}

export default ProjectLayout01;
