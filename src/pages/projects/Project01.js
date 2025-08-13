import React from 'react';
import ProjectLayout01 from '../../components/ProjectLayout/project01/ProjectLayout01';
import { project01Data } from '../../data/projects/project-01-data';

function Project01() {
  return (
    <ProjectLayout01 projectData={project01Data} />
  );
}

export default Project01; 