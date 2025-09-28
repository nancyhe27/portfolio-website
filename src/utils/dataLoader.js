// Portfolio data loaders
export const getPortfolioData = async (language) => {
  if (language === 'ja') {
    const { portfolioData } = await import('../data/portfolio-data.ja.js');
    return portfolioData;
  }
  const { portfolioData } = await import('../data/portfolio-data.js');
  return portfolioData;
};

// Project data loaders
export const getProjectData = async (projectId, language) => {
  if (language === 'ja') {
    const { [`project0${projectId}Data`]: projectData } = await import(`../data/projects/project-0${projectId}-data.ja.js`);
    return projectData;
  }
  const { [`project0${projectId}Data`]: projectData } = await import(`../data/projects/project-0${projectId}-data.js`);
  return projectData;
};

// Navigation text
export const getNavigationText = (language) => {
  const texts = {
    en: {
      work: 'work',
      skills: 'skills',
      about: 'about',
      resume: 'resume',
      previousProject: 'Previous Project',
      nextProject: 'Next Project'
    },
    ja: {
      work: 'ワーク',
      skills: 'スキル', 
      about: '私について',
      resume: '履歴書',
      previousProject: '前のプロジェクト',
      nextProject: '次のプロジェクト'
    }
  };
  return texts[language] || texts.en;
};
