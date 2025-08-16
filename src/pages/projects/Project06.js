import React from 'react';
import { project06Data } from '../../data/projects/project-06-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import DefaultProjectContent from '../../components/ProjectLayout/DefaultProjectContent';

function Project06() {
  return (
    <ProjectPageLayout projectData={project06Data}>
      <DefaultProjectContent projectData={project06Data} />
    </ProjectPageLayout>
  );
}

export default Project06; 