import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import MainContent from '../components/MainContent/MainContent';
// import About from '../components/About/About'; // COMMENTED OUT: About section temporarily removed

function Home() {
  return (
    <div className="home">
      <Navigation />
      <MainContent />
      {/* <About /> */} {/* COMMENTED OUT: About section temporarily removed */}
    </div>
  );
}

export default Home; 