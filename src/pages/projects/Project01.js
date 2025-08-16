import React from 'react';
import { project01Data } from '../../data/projects/project-01-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import DefaultProjectContent from '../../components/ProjectLayout/DefaultProjectContent';

function Project01() {
  return (
    <ProjectPageLayout projectData={project01Data}>
      <DefaultProjectContent projectData={project01Data} />
    </ProjectPageLayout>
  );
}

export default Project01; 