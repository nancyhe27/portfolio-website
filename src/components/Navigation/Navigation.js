import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { getNavigationText } from '../../utils/dataLoader';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentLanguage, switchLanguage } = useLanguage();
    const navText = getNavigationText(currentLanguage);
    
    // Handle hash-based navigation when landing on home page
    useEffect(() => {
        if (location.pathname.endsWith('/') && location.hash) {
            const sectionId = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const navHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    const handleSectionNavigation = (sectionId) => {
        if (sectionId === 'hero') {
            navigate(`/${currentLanguage}/`);
        } else {
            navigate(`/${currentLanguage}/${sectionId}`);
        }
    };

    const handleLanguageSwitch = (newLang) => {
        // Extract current path without language prefix
        const pathParts = location.pathname.split('/').filter(Boolean);
        const currentPath = pathParts.length > 1 ? '/' + pathParts.slice(1).join('/') : '/';
        
        // Navigate to same path with new language
        navigate(`/${newLang}${currentPath}`);
        switchLanguage(newLang);
    };

    return (
        <nav className="navigation page-section">
            <a 
                href={`/${currentLanguage}/`}
                className="nav-brand"
                onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === `/${currentLanguage}/`) {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        handleSectionNavigation('hero');
                    }
                }}
            >
                NANCY HE
            </a>

            <div className="nav-links">
                <a
                    href={`/${currentLanguage}/work`}
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionNavigation('work');
                    }}
                >
                    {navText.work}
                </a>
                <a
                    href={`/${currentLanguage}/skills`}
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionNavigation('skills');
                    }}
                >
                    {navText.skills}
                </a>
                <a
                    href={`/${currentLanguage}/about`}
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionNavigation('about');
                    }}
                >
                    {navText.about}
                </a>
                
                {/* Language Switcher */}
                <div className="language-switcher">
                    <button 
                        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                        onClick={() => handleLanguageSwitch('en')}
                        aria-label="Switch to English"
                    >
                        EN
                    </button>
                    <span className="lang-divider">|</span>
                    <button 
                        className={`lang-btn ${currentLanguage === 'ja' ? 'active' : ''}`}
                        onClick={() => handleLanguageSwitch('ja')}
                        aria-label="日本語に切り替え"
                    >
                        JP
                    </button>
                </div>

                <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    className="resume-btn"
                    download="Nancy_He_Resume.pdf"
                >
                    {navText.resume}
                </a>
            </div>
        </nav>
    );
}

export default Navigation;