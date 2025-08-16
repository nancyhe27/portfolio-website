import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Project01 from './pages/projects/Project01';
import Project02 from './pages/projects/Project02';
import Project03 from './pages/projects/Project03';
import Project04 from './pages/projects/Project04';
import Project05 from './pages/projects/Project05';
import Project06 from './pages/projects/Project06';

function App() {
  return (
    <Router basename="/portfolio-website">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-01" element={<Project01 />} />
          <Route path="/project-02" element={<Project02 />} />
          <Route path="/project-03" element={<Project03 />} />
          <Route path="/project-04" element={<Project04 />} />
          <Route path="/project-05" element={<Project05 />} />
          <Route path="/project-06" element={<Project06 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 