import React from 'react';
import { project02Data } from '../../data/projects/project-02-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import Project02Content from '../../components/ProjectLayout/project02/Project02Content';

function Project02() {
  return (
    <ProjectPageLayout projectData={project02Data}>
      <Project02Content projectData={project02Data} />
    </ProjectPageLayout>
  );
}

export default Project02; 