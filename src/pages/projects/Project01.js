import React from 'react';
import { project01Data } from '../../data/projects/project-01-data';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import ProjectLayout01 from '../../components/ProjectLayout/project01/ProjectLayout01';

function Project01() {
  return (
    <ProjectPageLayout projectData={project01Data}>
      <ProjectLayout01 projectData={project01Data} />
    </ProjectPageLayout>
  );
}

// export default Project01; 

export default Project01; 