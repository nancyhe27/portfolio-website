import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { portfolioData } from './data/portfolio-data';
import Home from './pages/Home';
import Project01 from './pages/projects/Project01';
import Project02 from './pages/projects/Project02';
import Project03 from './pages/projects/Project03';
import Project04 from './pages/projects/Project04';
import Project05 from './pages/projects/Project05';
import Project06 from './pages/projects/Project06';

function ComingSoonRoute({ projectId, children }) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (project && project.comingSoon) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-01" element={<ComingSoonRoute projectId={1}><Project01 /></ComingSoonRoute>} />
          <Route path="/project-02" element={<ComingSoonRoute projectId={2}><Project02 /></ComingSoonRoute>} />
          <Route path="/project-03" element={<ComingSoonRoute projectId={3}><Project03 /></ComingSoonRoute>} />
          <Route path="/project-04" element={<ComingSoonRoute projectId={4}><Project04 /></ComingSoonRoute>} />
          <Route path="/project-05" element={<ComingSoonRoute projectId={5}><Project05 /></ComingSoonRoute>} />
          <Route path="/project-06" element={<ComingSoonRoute projectId={6}><Project06 /></ComingSoonRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 