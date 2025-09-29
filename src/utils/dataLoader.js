// Static imports for production compatibility
import { portfolioData as portfolioDataEn } from '../data/portfolio-data.js';
import { portfolioData as portfolioDataJa } from '../data/portfolio-data.ja.js';
import { project01Data as project01DataEn } from '../data/projects/project-01-data.js';
import { project01Data as project01DataJa } from '../data/projects/project-01-data.ja.js';
import { project02Data as project02DataEn } from '../data/projects/project-02-data.js';
import { project02Data as project02DataJa } from '../data/projects/project-02-data.ja.js';
import { project03Data as project03DataEn } from '../data/projects/project-03-data.js';
import { project03Data as project03DataJa } from '../data/projects/project-03-data.ja.js';
import { project04Data as project04DataEn } from '../data/projects/project-04-data.js';
import { project04Data as project04DataJa } from '../data/projects/project-04-data.ja.js';
import { project05Data as project05DataEn } from '../data/projects/project-05-data.js';
import { project05Data as project05DataJa } from '../data/projects/project-05-data.ja.js';
import { project06Data as project06DataEn } from '../data/projects/project-06-data.js';
import { project06Data as project06DataJa } from '../data/projects/project-06-data.ja.js';

// Portfolio data loaders (synchronous)
export const getPortfolioData = (language) => {
  if (language === 'ja') {
    return portfolioDataJa;
  }
  return portfolioDataEn;
};

// Project data loaders (synchronous)
export const getProjectData = (projectId, language) => {
  const projectDataMap = {
    en: {
      1: project01DataEn,
      2: project02DataEn,
      3: project03DataEn,
      4: project04DataEn,
      5: project05DataEn,
      6: project06DataEn
    },
    ja: {
      1: project01DataJa,
      2: project02DataJa,
      3: project03DataJa,
      4: project04DataJa,
      5: project05DataJa,
      6: project06DataJa
    }
  };
  
  return projectDataMap[language]?.[projectId] || projectDataMap.en[projectId];
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
