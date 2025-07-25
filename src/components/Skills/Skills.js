import React from 'react';
import './Skills.css';
import { portfolioData } from '../../data/portfolio-data';

function Skills() {
  // Use skills from centralized data with error handling
  const { skills } = portfolioData;
  
  // Fallback data in case skills data is missing
  const fallbackSkills = {
    programming_languages: ["Python, Java, JavaScript, TypeScript, HTML/CSS, SQL"],
    frameworks_and_tools: ["React, Node.js, Express.js, Firebase, GitHub, Tailwind CSS, Figma, Adobe Creative Suite"],
    specialties: ["Full-Stack Development, REST API & Database Design, Responsive UI Engineering"]
  };
  
  const safeSkills = skills || fallbackSkills;
  
  // Transform the data structure to match the component's expectations
  const skillsData = {
    "Programming Languages": (safeSkills.programming_languages || []).join(', '),
    "Frameworks & Tools": (safeSkills.frameworks_and_tools || []).join(', '),
    "Specialties": (safeSkills.specialties || []).join(', ')
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-heading">SKILLS</h2>
      <div className="skills-categories">
        {Object.entries(skillsData).map(([category, skillsText]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <p className="skills-text">{skillsText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 