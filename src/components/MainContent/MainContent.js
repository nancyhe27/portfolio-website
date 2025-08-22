import React from 'react';
import './MainContent.css';
import '../ProjectLayout/ProjectLayoutShared.css';
import { portfolioData } from '../../data/portfolio-data';
import PolaroidGallery from '../Gallery/PolaroidGallery';

function MainContent() {
  const { hero, skills } = portfolioData;

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
        <section id="hero" className="hero-subsection">
          <div className="hero">
            <div className="hero-content">
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
          <h2 className="p-title">WORK</h2>
          <PolaroidGallery />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="p-title">SKILLS</h2>
          <div>
            {Object.entries(skillsData).map(([category, skillsText]) => (
              <div key={category}>
                <h3 className="p-subtitle" style={{ marginBottom: '0px' }}>{category}</h3>
                <p className="p-body" style={{ marginBottom: '40px' }}>{skillsText}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainContent;
