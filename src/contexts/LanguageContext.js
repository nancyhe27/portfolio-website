import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const switchLanguage = (newLang) => {
    setCurrentLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && ['en', 'ja'].includes(saved)) {
      setCurrentLanguage(saved);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      switchLanguage,
      supportedLanguages: ['en', 'ja']
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
