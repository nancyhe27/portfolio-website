import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PolaroidCard.css';

function PolaroidCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(project.route);
  };

  return (
    <div className="polaroid-card" onClick={handleClick}>
      <div className="polaroid-frame">
        <div className="polaroid-image">
          <div className="placeholder-thumb">
            <span>{project.title}</span>
          </div>
        </div>
        <div className="polaroid-caption">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default PolaroidCard; 