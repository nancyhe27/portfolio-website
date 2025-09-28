import React, { useState, useEffect } from 'react';
import './About.css';
import { getPortfolioData } from '../../utils/dataLoader';
import { useLanguage } from '../../contexts/LanguageContext';

function About() {
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
  
  const { about } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2>about</h2>
          <p className="about-subtitle">a little bit more about me :)</p>
        </div>
        
        <div className="personal-section">
          <div className="personal-images">
            {about.personalImages.map((image, index) => (
              <div key={index} className="personal-image polaroid">
                <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.alt} />
              </div>
            ))}
          </div>
          
          <div className="description-section">
            <p className="personal-description">{about.description}</p>
            <div className="additional-image polaroid">
              <img src={`${process.env.PUBLIC_URL}/images/about/physics4.jpg`} alt="Comphosics (Acrylic)" />
            </div>
          </div>
        </div>
        
        <div className="art-section">
          <p className="art-description">{about.artDescription}</p>
          <div className="art-images">
            {about.artImages.map((image, index) => (
              <div key={index} className="art-image">
                <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-section">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:nancy.he.rice@google.com" className="contact-link">
                nancy.he.rice@google.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/in/nancy-he" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 