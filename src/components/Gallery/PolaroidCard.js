import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './PolaroidCard.css';
import '../ProjectLayout/ProjectLayoutShared.css';

function PolaroidCard({ project }) {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!project.comingSoon) {
      navigate(`/${currentLanguage}${project.route}`);
      // Scroll to top of the page
      window.scrollTo(0, 0);
    }
  };

  return (
    <div 
      className={`polaroid-card ${project.comingSoon ? 'coming-soon' : ''}`} 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: project.comingSoon ? 'default' : 'pointer' }}
    >
      {/* Caption ABOVE the image */}
      <div>
        <h3 className="polaroid-title">{project.title}</h3>
        <p className="polaroid-subtitle">{project.task}</p>
        <p className="polaroid-subtitle">{project.subtitle}</p>
      </div>
      
      {/* Image below the caption */}
      <div className="polaroid-frame">
        <div className="polaroid-image">
          {project.comingSoon ? (
            <div className="placeholder-thumb">
              <span>Coming Soon...</span>
            </div>
          ) : (
            <div className="image-container">
              <img 
                src={`${process.env.PUBLIC_URL}${project.thumbnail}`}
                alt={project.title}
                className={`project-thumbnail base-image ${isHovered ? 'fade-out' : ''}`}
              />
              {project.hoverThumbnail && (
                <img 
                  src={`${process.env.PUBLIC_URL}${project.hoverThumbnail}`}
                  alt={`${project.title} hover`}
                  className={`project-thumbnail hover-image ${isHovered ? 'fade-in' : ''}`}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PolaroidCard;