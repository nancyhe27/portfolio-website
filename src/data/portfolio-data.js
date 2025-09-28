export const portfolioData = {
  hero: {
    name: "Nancy",
    title: "A Programmer, Designer, and Full-Stack Builder",
    subtitle: "Computer Science and Asian Studies junior @ Rice University",
    description: "Creates thoughtful, end-to-end products that blend clean code with intuitive design.",
    image: "/images/portfolio_hero.PNG"
  },

  projects: [
    {
      id: 1,
      title: "WeKruit",
      subtitle: "May 2025 - Aug 2025",
      task: "Internship (UI/UX + Full-Stack Dev)",
      thumbnail: "/images/projects/project-01/thumbnails/wekruit_thumbnail.png",
      hoverThumbnail: "/images/projects/project-01/thumbnails/wekruit_thumbnail_hover.png",
      route: "/wekruit",
    },
    {
      id: 2,
      title: "SwipyCampus",
      subtitle: "Feb 2025",
      task: "Mobile App Design",
      thumbnail: "/images/projects/project-02/thumbnails/swipycampus_thumbnail.png",
      hoverThumbnail: "/images/projects/project-02/thumbnails/swipycampus_thumbnail_hover.png",
      route: "/swipycampus"
    },
    {
      id: 3,
      title: "RideSystems",
      subtitle: "Sept 2024 - Dec 2024",
      task: "Mobile App Design",
      thumbnail: "/images/projects/project-03/thumbnails/project-thumb-03.png",
      hoverThumbnail: "/images/projects/project-03/thumbnails/project-thumb-03-hover.png",
      route: "/ridesystems",
      comingSoon: true
    },
    {
      id: 4,
      title: "English Hunt",
      subtitle: "Nov 2024 - Dec 2024",
      task: "Web Game Development",
      thumbnail: "/images/projects/project-04/thumbnails/project-thumb-04.png",
      hoverThumbnail: "/images/projects/project-04/thumbnails/project-thumb-04-hover.png",
      route: "/englishhunt",
      comingSoon: true
    },
    {
      id: 5,
      title: "ColorGraph AI",
      subtitle: "Sept 2024 - Present",
      task: "AI Design Tool Startup",
      thumbnail: "/images/projects/project-05/thumbnails/project-thumb-05.png",
      hoverThumbnail: "/images/projects/project-05/thumbnails/project-thumb-05-hover.png",
      route: "/colorgraphai",
      comingSoon: true
    },
  ],

  skills: {
    programming_languages: [
      "Python, Java, JavaScript, TypeScript, HTML/CSS, SQL"
    ],
    frameworks_and_tools: [
      "React, Node.js, Express.js, Firebase, GitHub, Tailwind CSS, \nFigma, Adobe Creative Suite (Illustrator, Photoshop, InDesign), Procreate, Canva"
    ],
    specialties: [
      "Full-Stack Development, REST API & Database Design, Responsive UI Engineering, UX-Driven Frontend Design, Cloud Deployment & Git Collaboration"
    ]
  },

  about: {
    // Main about description for About.js component
    description: "Born in Shanghai and based in Houston, I split my time between design and development. I'm drawn to projects that live at the intersection of logic and aesthetics, from prototyping in Figma to building responsive interfaces to experimenting with AI-powered browser tools.",
    
    // Art-related description for About.js component
    artDescription: "Growing up, I made art across mediums — oils, pastels, collage, digital illustration, some of which are shown here. Later on, I studied computer science and realized programming gave me a creative structure more powerful than ever before. It expanded how I think about creation in a modern context, where visuals, logic, and systems all shape the experience.",
    
    // Additional paragraphs for MainContent about section
    workDescription: "Now, I work fluidly across Figma and IDEs, thinking about how things behave, how they scale, and how people experience them from the first interaction to the last. I care equally about how things look, how they work, and why they exist.",
    
    languageDescription: "Outside of class and work, I love learning languages. I speak Mandarin, English, Japanese, Shanghainese, and a bit of Korean. Language learning made me naturally curious about linguistic structure and connecting with people, which has been a nice side kick to casual user experience thinking. Music helps the process, too (a big fan of Jpop and Kpop).",
    
    // Image data for About.js component
    personalImages: [
      { src: "/images/about/campanile1.jpg", alt: "Cover of RiceU Yearbook Campanile (Digital)" },
      { src: "/images/about/food2.jpg", alt: "Recipes in Dogmatism (Oil)" },
      { src: "/images/about/wordplay3.jpg", alt: "Wordplay (Mixed Media)" },
      { src: "/images/about/physics4.jpg", alt: "Comphosics (Acrylic)" }
    ],
    
    artImages: [
      { src: "/images/about/food2.jpg", alt: "Recipes in Dogmatism (Oil)" },
      { src: "/images/about/wordplay3.jpg", alt: "Wordplay (Mixed Media)" },
      { src: "/images/about/physics4.jpg", alt: "Comphosics (Acrylic)" }
    ]
  },
}; 