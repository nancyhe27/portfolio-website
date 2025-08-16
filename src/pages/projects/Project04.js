import React from 'react';
import { project04Data } from '../../data/projects/project-04-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import DefaultProjectContent from '../../components/ProjectLayout/DefaultProjectContent';

function Project04() {
  return (
    <ProjectPageLayout projectData={project04Data}>
      <DefaultProjectContent projectData={project04Data} />
    </ProjectPageLayout>
  );
}

export default Project04; 