import React from 'react';
import './Work.css';

function Work() {
  const projects = [
    {
      id: 1,
      title: "RideSystems 2025",
      subtitle: "Ideation, UI/UX, User Research"
    },
    {
      id: 2,
      title: "RideSystems 2025", 
      subtitle: "Ideation, UI/UX, User Research"
    },
    {
      id: 3,
      title: "RideSystems 2025",
      subtitle: "Ideation, UI/UX, User Research"
    },
    {
      id: 4,
      title: "RideSystems 2025",
      subtitle: "Ideation, UI/UX, User Research"
    },
    {
      id: 5,
      title: "RideSystems 2025",
      subtitle: "Ideation, UI/UX, User Research"
    }
  ];

  return (
    <section id="work" className="work">
      <h2 className="section-heading">WORK</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <div className="project-image">
              <span>Project Image</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work; 