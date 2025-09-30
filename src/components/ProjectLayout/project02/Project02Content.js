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
        <div className="p-flex-split p-flex-split--fixed-logo">
          <div className="summary-logo-image">
            <img src={`${process.env.PUBLIC_URL}${description.logo.src}`} alt={description.logo.alt} className="p-image" />
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
        <section>
          <h3 className="p-title">{userResearch.title}</h3>
          <div className="section-content">
            <p className="p-body">{userResearch.content}</p>
            <div className="p-separator--short" style={{ marginTop: 'var(--spacing-md)' }}></div>
            <div className="p-flex-split p-flex-split--fixed-pie">
              <div>
                <img src={`${process.env.PUBLIC_URL}${userResearch.features[0].image.src}`} alt={userResearch.features[0].image.alt} className="p-image" />
              </div>
              <div>
                <h4 className="p-subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>{userResearch.features[0].title}</h4>
                <p className="p-body--bold">{userResearch.features[0].question}</p>
                <div className="p-quote-box">"{userResearch.features[0].quote}"</div>
              </div>
            </div>
            <div className="p-separator--short"></div>
            <div className="p-flex-split p-flex-split--fixed-pie">
              <div>
                <img src={`${process.env.PUBLIC_URL}${userResearch.features[1].image.src}`} alt={userResearch.features[1].image.alt} className="p-image" />
              </div>
              <div>
                <h4 className="p-subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>{userResearch.features[1].title}</h4>
                <p className="p-body--bold">{userResearch.features[1].question}</p>
                <div className="p-quote-box">"{userResearch.features[1].quote}"</div>
              </div>
            </div>
            <div className="p-separator--short" style={{ marginBottom: 'var(--spacing-md)' }}></div>
            {userResearch.insights && (
              <div className="p-body">
                <p>{userResearch.insights}</p>
              </div>
            )}
          </div>
        </section>

        {/* Hour 8: Wireframes & Refinement */}
        <section>
          <h3 className="p-title">{wireframes.title}</h3>
          <div className="section-content">
            {wireframes.subsections.map((subsection, index) => (
              <div key={index}>
                <h4 className="p-subtitle">{subsection.title}</h4>

                {/* Feature Map - standalone container */}
                {(subsection.title === "Feature Map" || subsection.title === "機能マップ") && subsection.images && (
                  <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}${subsection.images[0].src}`}
                      alt={subsection.images[0].alt}
                      className="p-image"
                      style={{ maxWidth: '800px', width: '100%' }}
                    />
                  </div>
                )}

                {/* Low-fidelity Wireframes - 1x5 grid layout */}
                {(subsection.title === "Low-fidelity Wireframes" || subsection.title === "低忠実度ワイヤーフレーム") && subsection.images && (
                  <div className="p-grid" style={{ '--grid-cols': 5, gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    {subsection.images.map((img, imgIndex) => (
                      <figure key={imgIndex} style={{ margin: 0 }}>
                        <img src={`${process.env.PUBLIC_URL}${img.src}`} alt={img.alt} className="p-image" />
                        {img.caption && <figcaption className="p-caption">{img.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}

                {/* UI/UX Refinement - keep existing comparison layout */}
                {subsection.comparisons && (
                  <div>
                    {subsection.comparisons.map((comparison, compIndex) => (
                      <div key={compIndex} className="p-flex-split">
                        <div style={{ display: 'flex', alignItems: 'center', flex: 3, gap: 0 }}>
                          <div style={{ flex: 4 }}>
                            <figure style={{ margin: 0 }}>
                              <img src={`${process.env.PUBLIC_URL}${comparison.before.src}`} alt={comparison.before.alt} className="p-image" />
                              <figcaption className="p-caption">{comparison.before.caption}</figcaption>
                            </figure>
                          </div>
                          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--brown-medium)' }}>
                            →
                          </div>
                          <div style={{ flex: 4 }}>
                            <figure style={{ margin: 0 }}>
                              <img src={`${process.env.PUBLIC_URL}${comparison.after.src}`} alt={comparison.after.alt} className="p-image" />
                              <figcaption className="p-caption">{comparison.after.caption}</figcaption>
                            </figure>
                          </div>
                        </div>
                        <div style={{ flex: 4 }}>
                          <h4 className="p-subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>{comparison.subtitle}</h4>
                          <p className="p-body">{comparison.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hour 16: Emotional Branding */}
        <section>
          <h3 className="p-title">{mascotDesign.title}</h3>
          <div className="section-content">
            <div className="p-quote-box" style={{ marginBottom: 'var(--spacing-sm)' }}>"{mascotDesign.quote}"</div>
            <p className="p-body" style={{ marginBottom: 'var(--spacing-md)' }}>{mascotDesign.content}</p>
            <div>
              <h4 className="p-subtitle">{mascotDesign.mascot.name}</h4>
              <p className="p-body">{mascotDesign.mascot.description}</p>
              <div className="p-grid" style={{ '--grid-cols': 4, gap: '0px' }}>
                {mascotDesign.mascot.states.map((state, index) => (
                  <figure key={index}>
                    <img src={`${process.env.PUBLIC_URL}${state.src}`} alt={state.alt} className="p-image" style={{ marginTop: 'var(--spacing-sm)'}}/>
                    <figcaption className="p-caption-separator">{state.caption}</figcaption>
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
            <p style={{ fontSize: '1.125rem', color: 'var(--brown-medium)', fontWeight: '400' }}>
              Experience SwipyCampus{' '}
              <a
                href="https://www.figma.com/proto/Z7p0zcC3oY8jMkSLov804R/SwipyCampus-Prototype?node-id=1-2074&p=f&t=QiJTFXuUp8i1xMSR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2074&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--brown-medium)',
                  textDecoration: 'underline',
                  fontWeight: '600',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--brown-medium)'}
              >
                HERE
              </a>
              !
            </p>
            <div>
              {prototype.flows.map((flow, index) => (
                <div key={index}>
                  <h4 className="p-subtitle">{flow.title}</h4>
                  <div className="p-grid" style={{ '--grid-cols': 4 }}>
                    {flow.images.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={`${process.env.PUBLIC_URL}${imgSrc}`}
                        alt={`${flow.title} screen ${imgIndex + 1}`}
                        className="p-image-prototype"
                        style={{ marginBottom: 'var(--spacing-sm)' }}
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