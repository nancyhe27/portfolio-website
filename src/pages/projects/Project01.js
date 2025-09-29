import React, { useState, useEffect } from 'react';
import { getProjectData } from '../../utils/dataLoader';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectPageLayout from '../../components/ProjectLayout/ProjectPageLayout';
import ProjectLayout01 from '../../components/ProjectLayout/project01/ProjectLayout01';

function Project01() {
  const { currentLanguage } = useLanguage();
  const [projectData, setProjectData] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      const data = await getProjectData(1, currentLanguage);
      setProjectData(data);
    };
    loadData();
  }, [currentLanguage]);
  
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectPageLayout projectData={projectData}>
      <ProjectLayout01 projectData={projectData} />
    </ProjectPageLayout>
  );
}

export default Project01; 