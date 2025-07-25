import React from 'react';
import './Home.css';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import Skills from '../components/Skills/Skills';
// import About from '../components/About/About'; // COMMENTED OUT: About section temporarily removed

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Work />
      <Skills />
      {/* <About /> */} {/* COMMENTED OUT: About section temporarily removed */}
    </div>
  );
}

export default Home; 