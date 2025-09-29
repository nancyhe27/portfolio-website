import React, { useState, useEffect } from 'react';
import './PolaroidGallery.css';
import PolaroidCard from './PolaroidCard';
import { getPortfolioData } from '../../utils/dataLoader';
import { useLanguage } from '../../contexts/LanguageContext';

function PolaroidGallery() {
  const { currentLanguage } = useLanguage();
  const [portfolioData, setPortfolioData] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      const data = await getPortfolioData(currentLanguage);
      setPortfolioData(data);
    };
    loadData();
  }, [currentLanguage]);
  
  if (!portfolioData) {
    return <div>Loading...</div>;
  }
  
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