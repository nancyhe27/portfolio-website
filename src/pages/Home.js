import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import MainContent from '../components/MainContent/MainContent';
// import About from '../components/About/About'; // COMMENTED OUT: About section temporarily removed

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to appropriate section based on route
    const sectionMap = {
      '/work': 'work',
      '/skills': 'skills'
    };
    
    const sectionId = sectionMap[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 80; // Navigation bar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, [location.pathname]);

  return (
    <div className="home">
      <Navigation />
      <MainContent />
      {/* <About /> */} {/* COMMENTED OUT: About section temporarily removed */}
    </div>
  );
}

export default Home; 