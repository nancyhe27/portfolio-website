import React, { useState, useEffect } from 'react';
import './MainContent.css';
import '../ProjectLayout/ProjectLayoutShared.css';
import { getPortfolioData } from '../../utils/dataLoader';
import { useLanguage } from '../../contexts/LanguageContext';
import PolaroidGallery from '../Gallery/PolaroidGallery';

function MainContent() {
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
  
  const { hero, skills, about } = portfolioData;

  // Hero data
  const name = hero?.name;
  const title = hero?.title;
  const subtitle = hero?.subtitle;
  const description = hero?.description;
  const image = hero?.image;

  const safeSkills = skills;

  const skillsData = {
    "Programming Languages": (safeSkills.programming_languages || []).join(', '),
    "Frameworks & Tools": (safeSkills.frameworks_and_tools || []).join(', '),
    "Specialties": (safeSkills.specialties || []).join(', ')
  };

  return (
    <main className="main-content page-section">
      <div className="content">
        {/* Hero Section */}
        <section id="hero">
          <div className="hero">
            <div>
              <h1>I'm {name},</h1>
              <p>{title}</p>
              <p>{subtitle}</p>
              <p>{description}</p>
            </div>
            <div className="hero-image">
              <img
                src={`${process.env.PUBLIC_URL}${image}`}
                alt={`${name}'s Avatar`}
              />
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work-subsection">
          <h2 className="all-title" style={{ marginBottom: '40px' }}>WORK</h2>
          <PolaroidGallery />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="all-title">SKILLS</h2>
          <div>
            {Object.entries(skillsData).map(([category, skillsText]) => (
              <div key={category}>
                <h3 className="p-subtitle" style={{ marginBottom: '0px' }}>{category}</h3>
                <p className="p-body" style={{ marginBottom: '40px' }}>{skillsText}</p>
              </div>
            ))}
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="about-subsection">
          <h2 className="all-title">ABOUT</h2>

          {/* First paragraph: text left, 1 image right - fixed size */}
          <div className="p-flex-about-single" style={{ marginTop: '40px'}}>
            <p className="p-body">
              {about.description}
            </p>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/about/campanile1.jpg`} alt="Cover of RiceU Yearbook Campanile (Digital)" className="p-image" style={{ borderRadius: '2px'}}/>
              <p className="p-caption">Cover of RiceU Yearbook Campanile (Digital)</p>
            </div>
          </div>

          <div className="about-separator" />

          {/* Second paragraph: 2 images horizontally, text right - fixed size */}
          <div className="p-flex-about-double">
            <div className="p-images-row">
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/about/food2.jpg`} alt="Recipes in Dogmatism (Oil)" className="p-image" style={{ borderRadius: '2px'}}/>
                <p className="p-caption">"Recipes in Dogmatism" (Oil)</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/about/wordplay3.jpg`} alt="Wordplay (Mixed Media)" className="p-image" style={{ borderRadius: '2px'}}/>
                <p className="p-caption">"Wordplay" (Mixed Media)</p>
              </div>
            </div>
            <p className="p-body">
              {about.artDescription}
            </p>
          </div>
          <div className="about-separator" />

          {/* Third paragraph*/}
          <div>
            <p className="p-body" style={{ marginTop: '40px', marginBottom: '40px'}}>
              {about.workDescription}
            </p>
          </div>

          <div className="about-separator" />

          {/* Fourth paragraph: text left, image right - fixed size */}
          <div className="p-flex-about-single">
            <p className="p-body">
              {about.languageDescription}
            </p>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/about/physics4.jpg`} alt="Comphosics (Acrylic)" className="p-image" style={{ borderRadius: '2px'}}/>
              <p className="p-caption">"Comphosics" (Acrylic)</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default MainContent;
