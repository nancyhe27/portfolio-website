import React from 'react';
import './Home.css';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Work />
      <Skills />
      <About />
    </div>
  );
}

export default Home; 