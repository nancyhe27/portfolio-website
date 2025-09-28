import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageRouter from './components/LanguageRouter';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* Legacy redirects for existing URLs */}
            <Route path="/work" element={<Navigate to="/en/work" replace />} />
            <Route path="/skills" element={<Navigate to="/en/skills" replace />} />
            <Route path="/about" element={<Navigate to="/en/about" replace />} />
            <Route path="/wekruit" element={<Navigate to="/en/wekruit" replace />} />
            <Route path="/swipycampus" element={<Navigate to="/en/swipycampus" replace />} />
            <Route path="/ridesystems" element={<Navigate to="/en/ridesystems" replace />} />
            <Route path="/englishhunt" element={<Navigate to="/en/englishhunt" replace />} />
            <Route path="/colorgraphai" element={<Navigate to="/en/colorgraphai" replace />} />
            
            {/* Language-prefixed routes */}
            <Route path="/:lang/*" element={<LanguageRouter />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;