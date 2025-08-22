import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PolaroidCard.css';

function PolaroidCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!project.comingSoon) {
      navigate(project.route);
    }
  };

  return (
    <div 
      className={`polaroid-card ${project.comingSoon ? 'coming-soon' : ''}`} 
      onClick={handleClick}
      style={{ cursor: project.comingSoon ? 'default' : 'pointer' }}
    >
      {/* Caption ABOVE the image */}
      <div className="polaroid-caption">
        <h3>{project.title}</h3>
        <p>{project.comingSoon ? 'Coming Soon...' : project.subtitle}</p>
      </div>
      
      {/* Image below the caption */}
      <div className="polaroid-frame">
        <div className="polaroid-image">
          <div className="placeholder-thumb">
            <span>{project.comingSoon ? 'Coming Soon...' : project.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolaroidCard;