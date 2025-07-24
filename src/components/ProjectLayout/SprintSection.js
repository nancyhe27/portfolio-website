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

export default SprintSection; 