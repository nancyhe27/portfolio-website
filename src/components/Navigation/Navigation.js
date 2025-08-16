import React from 'react';
import './Navigation.css';

function Navigation() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navigation page-section">
            <a 
                href="#hero" 
                className="nav-brand"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
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
                        scrollToSection('work');
                    }}
                >
                    work
                </a>
                <a
                    href="#skills"
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('skills');
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