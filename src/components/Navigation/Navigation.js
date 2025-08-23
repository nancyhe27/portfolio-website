import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio-data';
import './Navigation.css';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if current path matches any project route
    const projectRoutes = portfolioData.projects.map(project => project.route);
    const isOnProjectPage = projectRoutes.includes(location.pathname);
    
    // Handle hash-based navigation when landing on home page
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const sectionId = location.hash.substring(1);
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
    }, [location]);

    const handleSectionNavigation = (sectionId) => {
        if (isOnProjectPage) {
            // Navigate to home page with section anchor
            navigate(`/#${sectionId}`);
        } else {
            // Scroll to section on current page (home) with offset
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
        }
    };

    return (
        <nav className="navigation page-section">
            <a 
                href="#hero" 
                className="nav-brand"
                onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavigation('hero');
                }}
            >
                NANCY HE
            </a>

            <div className="nav-links">
                <a
                    href="#work"
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionNavigation('work');
                    }}
                >
                    work
                </a>
                <a
                    href="#skills"
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionNavigation('skills');
                    }}
                >
                    skills
                </a>
                <a
                    href="/resume.pdf"
                    className="resume-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    resume
                </a>
            </div>
        </nav>
    );
}

export default Navigation;