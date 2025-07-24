import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = {
    "Programming Languages": "Python, Java, JavaScript, TypeScript, HTML/CSS, SQL",
    "Frameworks & Tools": "React, Node.js, Express.js, Firebase, GitHub, Tailwind CSS, Figma, Adobe Creative Suite (Illustrator, Photoshop, InDesign), Procreate, Canva",
    "Specialties": "Full-Stack Development, REST API & Database Design, Responsive UI Engineering, UX-Driven Frontend Design, Cloud Deployment & Git Collaboration"
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-heading">SKILLS</h2>
      <div className="skills-categories">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <p className="skills-text">{skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 