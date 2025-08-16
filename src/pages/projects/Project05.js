import React from 'react';
import { project05Data } from '../../data/projects/project-05-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import DefaultProjectContent from '../../components/ProjectLayout/DefaultProjectContent';

function Project05() {
  return (
    <ProjectPageLayout projectData={project05Data}>
      <DefaultProjectContent projectData={project05Data} />
    </ProjectPageLayout>
  );
}

export default Project05; 