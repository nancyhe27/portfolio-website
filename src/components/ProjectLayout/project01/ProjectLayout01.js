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

      <div className="p-separator"></div>

      {/* Section 1: Main Product */}
      <section>
        <h3 className="p-title">{sections[0].title}</h3>
        
        {/* Prototype Design Subsection */}
        <section className="section-content">
          <h4 className="p-subtitle">{sections[0].subsections[0].subtitle}</h4>
          {sections[0].subsections[0].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}
          
          {/* Flow 1: Interview Dashboard */}
          <div>
            <h4 className="p-subtitle">{sections[0].subsections[0].imageGroups[0].title}</h4>
            <p className="p-body">{sections[0].subsections[0].imageGroups[0].description}</p>

            <h4 className="p-separator--short"></h4>

            <div className="p-flex-split">
              {/* Left side: 2x2 grid of images */}
              <div style={{ flex: 2 }}>
                <div className="p-grid" style={{ '--grid-cols': 2, gap: 'var(--spacing-md)' }}>
                  {/* Top left: Step 1 */}
                  <figure style={{ margin: 0 }}>
                    <img src={`${process.env.PUBLIC_URL}${sections[0].subsections[0].imageGroups[0].images[0].src}`} alt={sections[0].subsections[0].imageGroups[0].images[0].alt} className="p-image" />
                    <figcaption className="p-caption">{sections[0].subsections[0].imageGroups[0].images[0].caption}</figcaption>
                  </figure>
                  {/* Top right: Empty */}
                  <div></div>
                  {/* Bottom left: Step 2.1 */}
                  <figure style={{ margin: 0 }}>
                    <img src={`${process.env.PUBLIC_URL}${sections[0].subsections[0].imageGroups[0].images[1].src}`} alt={sections[0].subsections[0].imageGroups[0].images[1].alt} className="p-image" />
                    <figcaption className="p-caption">{sections[0].subsections[0].imageGroups[0].images[1].caption}</figcaption>
                  </figure>
                  {/* Bottom right: Step 2.2 */}
                  <figure style={{ margin: 0 }}>
                    <img src={`${process.env.PUBLIC_URL}${sections[0].subsections[0].imageGroups[0].images[2].src}`} alt={sections[0].subsections[0].imageGroups[0].images[2].alt} className="p-image" />
                    <figcaption className="p-caption">{sections[0].subsections[0].imageGroups[0].images[2].caption}</figcaption>
                  </figure>
                </div>
              </div>
              {/* Right side: Steps text */}
              <div style={{ flex: 1 }}>
                {sections[0].subsections[0].imageGroups[0].steps.map((step, stepIndex) => (
                  <div key={stepIndex} style={{ marginBottom: 'var(--spacing-sm)' }}>
                    <p className="p-body--bold">{step.title}</p>
                    <p className="p-body">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow 2: Candidate Onboarding */}
          <div>
            <h4 className="p-subtitle">{sections[0].subsections[0].imageGroups[1].title}</h4>
            <p className="p-body">{sections[0].subsections[0].imageGroups[1].description}</p>
            <h4 className="p-separator--short"></h4>
            <div className="p-flex-split">
              {/* Left side: 2x2 grid of images */}
              <div style={{ flex: 2 }}>
                <div className="p-grid" style={{ '--grid-cols': 2, gap: 'var(--spacing-md)' }}>
                  {sections[0].subsections[0].imageGroups[1].images.map((img, imgIndex) => (
                    <figure key={imgIndex} style={{ margin: 0 }}>
                      <img src={`${process.env.PUBLIC_URL}${img.src}`} alt={img.alt} className="p-image" />
                      <figcaption className="p-caption">{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              {/* Right side: Steps text */}
              <div style={{ flex: 1 }}>
                {sections[0].subsections[0].imageGroups[1].steps.map((step, stepIndex) => (
                  <div key={stepIndex} style={{ marginBottom: 'var(--spacing-sm)' }}>
                    <p className="p-body--bold">{step.title}</p>
                    <p className="p-body">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Development Subsection */}
        <section className="section-content">
          <h4 className="p-subtitle">{sections[0].subsections[1].subtitle}</h4>
          {sections[0].subsections[1].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}
        </section>
      </section>

      {/* Section 2: Design System */}
      <section>
        <h3 className="p-title">{sections[1].title}</h3>
        <div className="section-content">
          {sections[1].paragraphs.map((paragraph, index) => (
            <p key={index} className="p-body">{paragraph}</p>
          ))}
          
          {/* Universal Style Definitions */}
          <section>
            <h4 className="p-subtitle">{sections[1].subsections[0].subtitle}</h4>
            <div className="p-flex-split">
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[1].subsections[0].images[0].src}`} alt={sections[1].subsections[0].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[1].subsections[0].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <p className="p-body">{sections[1].subsections[0].paragraphs[0]}</p>
              </div>
            </div>
          </section>

          {/* Button Component */}
          <section>
            <h4 className="p-subtitle">{sections[1].subsections[1].subtitle}</h4>
            <p className="p-body">{sections[1].subsections[1].paragraphs[0]}</p>
            <figure style={{ margin: 0, textAlign: 'center' }}>
              <img src={`${process.env.PUBLIC_URL}${sections[1].subsections[1].images[0].src}`} alt={sections[1].subsections[1].images[0].alt} className="p-image" />
              <figcaption className="p-caption">{sections[1].subsections[1].images[0].caption}</figcaption>
            </figure>
          </section>

          {/* Upload Component */}
          <section>
            <h4 className="p-subtitle">{sections[1].subsections[2].subtitle}</h4>
            <p className="p-body">{sections[1].subsections[2].paragraphs[0]}</p>
            <figure style={{ margin: 0, textAlign: 'center' }}>
              <img src={`${process.env.PUBLIC_URL}${sections[1].subsections[2].images[0].src}`} alt={sections[1].subsections[2].images[0].alt} className="p-image" />
              <figcaption className="p-caption">{sections[1].subsections[2].images[0].caption}</figcaption>
            </figure>
          </section>

          {/* Interaction Specs */}
          <section>
            <h4 className="p-subtitle">{sections[1].subsections[3].subtitle}</h4>
            <div className="p-flex-split">
              <div style={{ flex: 1 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[1].subsections[3].images[0].src}`} alt={sections[1].subsections[3].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[1].subsections[3].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1 }}>
                <p className="p-body">{sections[1].subsections[3].paragraphs[0]}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section 3: UI/UX Refinement */}
      <section>
        <h3 className="p-title">{sections[2].title}</h3>
        <div className="section-content">
          <p className="p-body">{sections[2].paragraphs[0]}</p>
          
          {/* Comparison 1 */}
          <div className="p-flex-split">
            <div style={{ display: 'flex', alignItems: 'center', flex: 3, gap: 0 }}>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[0].src}`} alt={sections[2].images[0].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[0].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--brown-medium)' }}>
                →
              </div>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[1].src}`} alt={sections[2].images[1].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[1].caption}</figcaption>
                </figure>
              </div>
            </div>
            <div style={{ flex: 4 }}>
              <p className="p-body">{sections[2].paragraphs[1]}</p>
            </div>
          </div>

          {/* Comparison 2 */}
          <div className="p-flex-split">
            <div style={{ display: 'flex', alignItems: 'center', flex: 3, gap: 0 }}>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[2].src}`} alt={sections[2].images[2].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[2].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--brown-medium)' }}>
                →
              </div>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[3].src}`} alt={sections[2].images[3].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[3].caption}</figcaption>
                </figure>
              </div>
            </div>
            <div style={{ flex: 4 }}>
              <p className="p-body">{sections[2].paragraphs[2]}</p>
            </div>
          </div>

          {/* Comparison 3 */}
          <div className="p-flex-split">
            <div style={{ display: 'flex', alignItems: 'center', flex: 3, gap: 0 }}>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[4].src}`} alt={sections[2].images[4].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[4].caption}</figcaption>
                </figure>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--brown-medium)' }}>
                →
              </div>
              <div style={{ flex: 4 }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${process.env.PUBLIC_URL}${sections[2].images[5].src}`} alt={sections[2].images[5].alt} className="p-image" />
                  <figcaption className="p-caption">{sections[2].images[5].caption}</figcaption>
                </figure>
              </div>
            </div>
            <div style={{ flex: 4 }}>
              <p className="p-body">{sections[2].paragraphs[3]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <section>
        <h3 className="p-title">{sections[3].title}</h3>
        <div className="section-content">
          <p className="p-body">{sections[3].paragraphs[0]}</p>
        </div>
      </section>
    </div>
  );
}

export default ProjectLayout01;
