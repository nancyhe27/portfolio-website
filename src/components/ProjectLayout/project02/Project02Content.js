import React from 'react';
import '../ProjectLayoutShared.css';
import './ProjectLayout02.css';

function Project02Content({ projectData }) {
  const { overview, description, sections } = projectData;
  const [ideation, userResearch, wireframes, mascotDesign, prototype, promotion] = sections;

  return (
    <div>
      {/* Introduction Section */}
      <section>
        <div className="p-flex-split">
          <div className="p-container-box p-container-box--green" style={{ flex: 1 }}>
            <div><span className="p-label">Platforms:</span> {projectData.platform}</div>
            <div><span className="p-label">Methods:</span> {projectData.methods.join(', ')}</div>
            <div><span className="p-label">Tools:</span> {projectData.tools.join(', ')}</div>
          </div>
          <p className="p-body" style={{ flex: 2 }}>{overview}</p>
        </div>
      </section>

      <div className="p-separator"></div>

      {/* Summary Section */}
      <section className="section-content">
        <div className="p-flex-split p-flex-split--fixed-left">
          <div className="summary-logo-image">
            <img src={description.logo.src} alt={description.logo.alt} className="p-image" />
          </div>
          <p className="p-body">{description.text}</p>
        </div>
      </section>

      {/* Hour-based Project Phases */}
      <section>
        {/* Hour 1: Ideation */}
        <section>
          <h3 className="p-title">{ideation.title}</h3>
          <div>
            <p className="p-body">{ideation.content}</p>
          </div>
        </section>

        {/* Hour 4: User Research */}
        <section className="hour-section">
          <h3 className="p-title">{userResearch.title}</h3>
          <div className="section-content">
            <p className="p-body">{userResearch.content}</p>
            <div className="p-flex-split">
              <div className="feature-image">
                <img src={userResearch.features[0].image.src} alt={userResearch.features[0].image.alt} className="p-image" />
              </div>
              <div className="feature-content">
                <h4 className="p-subtitle">{userResearch.features[0].title}</h4>
                <p>{userResearch.features[0].question}</p>
                <div className="p-container-box">"{userResearch.features[0].quote}"</div>
              </div>
            </div>
            <div className="p-flex-split">
              <div className="feature-image">
                <img src={userResearch.features[1].image.src} alt={userResearch.features[1].image.alt} className="p-image" />
              </div>
              <div className="feature-content">
                <h4 className="p-subtitle">{userResearch.features[1].title}</h4>
                <p>{userResearch.features[1].question}</p>
                <div className="p-container-box">"{userResearch.features[1].quote}"</div>
              </div>
            </div>
            {userResearch.insights && (
              <div className="p-container-box p-container-box--light">
                <p>{userResearch.insights}</p>
              </div>
            )}
          </div>
        </section>

        {/* Hour 8: Wireframes & Refinement */}
        <section className="hour-section">
          <h3 className="p-title">{wireframes.title}</h3>
          <div className="section-content">
            {wireframes.subsections.map((subsection, index) => (
              <div key={index}>
                <h4 className="p-subtitle">{subsection.title}</h4>
                {subsection.images && (
                  <div className="p-grid" style={{ '--grid-cols': 5 }}>
                    {subsection.images.map((img, imgIndex) => (
                      <figure key={imgIndex}>
                        <img src={img.src} alt={img.alt} className="p-image" />
                        {img.caption && <figcaption className="p-caption">{img.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                {subsection.comparisons && (
                  <div>
                    {subsection.comparisons.map((comparison, compIndex) => (
                      <div key={compIndex} className="p-flex-split">
                        <div className="p-grid" style={{ '--grid-cols': 2 }}>
                          <figure>
                            <img src={comparison.before.src} alt={comparison.before.alt} className="p-image" />
                            <figcaption className="p-caption">{comparison.before.caption}</figcaption>
                          </figure>
                          <figure>
                            <img src={comparison.after.src} alt={comparison.after.alt} className="p-image" />
                            <figcaption className="p-caption">{comparison.after.caption}</figcaption>
                          </figure>
                        </div>
                        <p className="p-body">{comparison.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hour 16: Emotional Branding */}
        <section className="hour-section">
          <h3 className="p-title">{mascotDesign.title}</h3>
          <div className="section-content">
            <div className="p-container-box">"{mascotDesign.quote}"</div>
            <p className="p-body">{mascotDesign.content}</p>
            <div>
              <h4 className="p-subtitle">{mascotDesign.mascot.name}</h4>
              <p className="p-body">{mascotDesign.mascot.description}</p>
              <div className="p-grid" style={{ '--grid-cols': 4 }}>
                {mascotDesign.mascot.states.map((state, index) => (
                  <figure key={index}>
                    <img src={state.src} alt={state.alt} className="p-image" />
                    <figcaption className="p-caption">{state.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hour 18: Prototype */}
        <section className="hour-section">
          <h3 className="p-title">{prototype.title}</h3>
          <div className="section-content">
            <p className="p-body" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>{prototype.cta}</p>
            <div>
              {prototype.flows.map((flow, index) => (
                <div key={index}>
                  <h4 className="p-subtitle">{flow.title}</h4>
                  <div className="p-grid" style={{ '--grid-cols': 4 }}>
                    {flow.images.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`${flow.title} screen ${imgIndex + 1}`}
                        className="p-image-prototype"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hour 30: Promotion */}
        <section className="hour-section">
          <h3 className="p-title">{promotion.title}</h3>
          <div className="section-content">
            <div className="p-video-responsive">
              <iframe
                src={`https://www.youtube.com/embed/${promotion.video.url.split('v=')[1]}`}
                title={promotion.video.title || promotion.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Project02Content;
