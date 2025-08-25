import React from 'react';
import './MainContent.css';
import '../ProjectLayout/ProjectLayoutShared.css';
import { portfolioData } from '../../data/portfolio-data';
import PolaroidGallery from '../Gallery/PolaroidGallery';

function MainContent() {
  const { hero, skills } = portfolioData;

  // Hero data
  const name = hero?.name;
  const title = hero?.title;
  const subtitle = hero?.subtitle;
  const description = hero?.description;
  const image = hero?.image;

  const safeSkills = skills;

  const skillsData = {
    "Programming Languages": (safeSkills.programming_languages || []).join(', '),
    "Frameworks & Tools": (safeSkills.frameworks_and_tools || []).join(', '),
    "Specialties": (safeSkills.specialties || []).join(', ')
  };

  return (
    <main className="main-content page-section">
      <div className="content">
        {/* Hero Section */}
        <section id="hero">
          <div className="hero">
            <div>
              <h1>I'm {name},</h1>
              <p>{title}</p>
              <p>{subtitle}</p>
              <p>{description}</p>
            </div>
            <div className="hero-image">
              <img
                src={`${process.env.PUBLIC_URL}${image}`}
                alt={`${name}'s Avatar`}
              />
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work-subsection">
          <h2 className="all-title" style={{ marginBottom: '40px' }}>WORK</h2>
          <PolaroidGallery />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="all-title">SKILLS</h2>
          <div>
            {Object.entries(skillsData).map(([category, skillsText]) => (
              <div key={category}>
                <h3 className="p-subtitle" style={{ marginBottom: '0px' }}>{category}</h3>
                <p className="p-body" style={{ marginBottom: '40px' }}>{skillsText}</p>
              </div>
            ))}
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="about-subsection">
          <h2 className="all-title">ABOUT</h2>

          {/* First paragraph: text left, 1 image right - fixed size */}
          <div className="p-flex-about-single" style={{ marginTop: '60px'}}>
            <p className="p-body">
              Born in Shanghai and based in Houston, I split my time between design and development. I'm drawn to projects that live at the intersection of logic and aesthetics, from prototyping in Figma to building responsive interfaces to experimenting with AI-powered browser tools.
            </p>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/about/campanile1.jpg`} alt="Cover of RiceU Yearbook Campanile (Digital)" className="p-image" style={{ borderRadius: '2px'}}/>
              <p className="p-caption">Cover of RiceU Yearbook Campanile (Digital)</p>
            </div>
          </div>

          <div className="p-separator--short" />

          {/* Second paragraph: 2 images horizontally, text right - fixed size */}
          <div className="p-flex-about-double">
            <div className="p-images-row">
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/about/food2.jpg`} alt="Recipes in Dogmatism (Oil)" className="p-image" style={{ borderRadius: '2px'}}/>
                <p className="p-caption">"Recipes in Dogmatism" (Oil)</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/about/wordplay3.jpg`} alt="Wordplay (Mixed Media)" className="p-image" style={{ borderRadius: '2px'}}/>
                <p className="p-caption">"Wordplay" (Mixed Media)</p>
              </div>
            </div>
            <p className="p-body">
              Growing up, I made art across mediums — oils, pastels, collage, digital illustration, some of which are shown here. Later on, I studied computer science and realized programming gave me a creative structure more powerful than ever before. It expanded how I think about creation in a modern context, where visuals, logic, and systems all shape the experience.
            </p>
          </div>
          <div className="p-separator--short" />

          {/* Third paragraph*/}
          <div>
            <p className="p-body">
              Now, I work fluidly across Figma and IDEs, thinking about how things behave, how they scale, and how people experience them from the first interaction to the last. I care equally about how things look, how they work, and why they exist.
            </p>
          </div>

          <div className="p-separator--short" />

          {/* Fourth paragraph: text left, image right - fixed size */}
          <div className="p-flex-about-single">
            <p className="p-body">
              Outside of class and work, I love learning languages. I speak Mandarin, English, Japanese, Shanghainese, and a bit of Korean. Language learning made me naturally curious about linguistic structure and connecting with people, which has been a nice side kick to casual user experience thinking. Music helps the process, too (a big fan of Jpop and Kpop).
            </p>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/about/physics4.jpg`} alt="Comphosics (Acrylic)" className="p-image" style={{ borderRadius: '2px'}}/>
              <p className="p-caption">"Comphosics" (Acrylic)</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default MainContent;
