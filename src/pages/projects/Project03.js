import React from 'react';
import { project03Data } from '../../data/projects/project-03-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import DefaultProjectContent from '../../components/ProjectLayout/DefaultProjectContent';

function Project03() {
  return (
    <ProjectPageLayout projectData={project03Data}>
      <DefaultProjectContent projectData={project03Data} />
    </ProjectPageLayout>
  );
}

export default Project03; 