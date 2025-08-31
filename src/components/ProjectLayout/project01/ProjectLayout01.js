import React from 'react';
import '../ProjectLayoutShared.css';

function ProjectLayout01({ projectData }) {
  const { platform, methods, tools, overview } = projectData;

  return (
    <div className="project-layout">
      {/* Introduction Section */}
      <section>
        <div className="p-flex-split">
          <div className="p-container-box p-container-box--green" style={{ flex: 1 }}>
            <div><span className="p-label">Platforms:</span> {platform}</div>
            <div><span className="p-label">Methods:</span> {methods.join(', ')}</div>
            <div><span className="p-label">Tools:</span> {tools.join(', ')}</div>
          </div>
          <p className="p-body" style={{ flex: 2 }}>{overview}</p>
        </div>
      </section>

      <div className="p-separator"></div>

      {/* Additional content can be added here later */}
    </div>
  );
}

export default ProjectLayout01;
