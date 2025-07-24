import React from 'react';
import './PolaroidGallery.css';
import PolaroidCard from './PolaroidCard';
import { portfolioData } from '../../data/portfolio-data';

function PolaroidGallery() {
  const { projects } = portfolioData;

  return (
    <div className="polaroid-gallery">
      {projects.map((project) => (
        <PolaroidCard 
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default PolaroidGallery; 