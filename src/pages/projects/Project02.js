import React, { useState, useEffect } from 'react';
import { getProjectData } from '../../utils/dataLoader';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import Project02Content from '../../components/ProjectLayout/project02/Project02Content';

function Project02() {
  const { currentLanguage } = useLanguage();
  const [projectData, setProjectData] = useState(null);
  
  useEffect(() => {
    const loadData = () => {
      const data = getProjectData(2, currentLanguage);
      setProjectData(data);
    };
    loadData();
  }, [currentLanguage]);
  
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectPageLayout projectData={projectData}>
      <Project02Content projectData={projectData} />
    </ProjectPageLayout>
  );
}

export default Project02; 