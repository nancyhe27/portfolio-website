export const project02Data = {
  "id": 2,
  "title": "SwipyCampus",
  "duration": "Feb 2025",
  "platform": "IOS",
  "task": "Mobile App Ideation & Design",
  "collaborators": [
    "Laura Chirila",
    "Ana Urruticoechea Hurtado",
    "Grace Yang"
  ],
  "methods": [
    "Mixed-Methods User Research",
    "Contextual Inquiry",
    "Usability Testing",
    "Rapid Prototyping", 
    "Wireframing"
  ],
  "tools": [
    "Figma",
    "Procreate",
    "IMovie"
  ],
  "overview": "In spring 2025, I took part in the 36-hour Rice Designathon, a nation-wide challenge to design a mobile app that tackles everyday problems in innovative ways. Over the course of two days, my team conducted user research, designed a functional prototype, created a promotional video, and delivered a 15-minute pitch to a panel of judges. We developed SwipyCampus, an app that prevents wasted trips by displaying real-time access information for campus buildings and entrances affected by restricted hours or ID-based access. SwipyCampus earned 2nd place among 101 participating teams.",
  "description": {
    "text": "SwipyCampus helps students navigate campus more efficiently by providing real-time building and entrance access, live crowd levels, and detailed location information, all in one app.",
    "logo": {
      "src": "/images/projects/project-02/header/logo.png",
      "alt": "SwipyCampus app logo featuring Swipy mascot character",
    }
  },
  "heroImage": "/images/projects/project-02/header/swipycampus_header_test2.png",
  "sections": [
    {
      "id": "ideation",
      "title": "Hour 1: Ideation",
      "content": "For many college students, walking to a building—sometimes at night or in bad weather—only to find the entrances locked due to restricted hours or ID-based access is a familiar frustration. Without reliable, real-time information, they waste time trying multiple doors or searching for an alternative study spot. SwipyCampus was designed to solve this problem by showing live status for each campus entrance, along with crowd levels and detailed location information such as Wi-Fi and outlet availability. Whether you need a quiet corner for solo work or a lively café-style space for group collaboration, SwipyCampus helps you find it without the guesswork."
    },
    {
      "id": "user_research",
      "title": "Hour 4: User Research",
      "content": "We conducted a campus-wide survey with 37 college students, which revealed two key issues: difficulty accessing buildings due to restricted entrances and challenges finding suitable study spaces. These became the focus of our core features.",
      "features": [
        {
          "title": "Main feature 1: Realtime access information for locations",
          "image": {
            "src": "/images/projects/project-02/pie/pie1.PNG",
            "alt": "User interface mockup showing real-time building access status with door availability indicators"
          },
          "question": "Have you ever experienced difficulty accessing a building or room on campus due to restricted door access?",
          "quote": "One night I walked 20 minutes in -30° weather to a quiet study spot, only to find it locked. I gave up and went home instead."
        },
        {
          "title": "Main feature 2: Realtime study spot recommendation",
          "image": {
            "src": "/images/projects/project-02/pie/pie2.PNG", 
            "alt": "App interface displaying study space recommendations with crowd levels and amenity information"
          },
          "question": "How often do you struggle to find a suitable study space on campus?",
          "quote": "Popular spots are often full, leaving me to wander in search of a study space through trial and error."
        }
      ],
      "insights": "Beyond the two main issues, survey responses highlighted additional details in navigating campus buildings. 70.3% of students said they do not know which entrances are open at specific times, and over half (54.1%) cited a lack of real-time door access information. Most students (75.7%) rely on trial and error to find an open door, often spending 10–20 minutes searching. Access problems were reported most frequently in labs, studios, and specialized facilities with ID restrictions."
    },
    {
      "id": "wireframes",
      "title": "Hour 8: Wireframes & Refinement",
      "subsections": [
        {
          "title": "Feature Map",
          "images": [
            {
              "src": "/images/projects/project-02/mindmap/mindmap.png",
              "alt": "Feature map",
            }
          ]
        },
        {
          "title": "Low-fidelity Wireframes",
          "images": [
            {
              "src": "/images/projects/project-02/sketch/home_sketch.png",
              "alt": "Home(Map View)",
              "caption": "Home(Map View)"
            },
            {
              "src": "/images/projects/project-02/sketch/search_sketch.png",
              "alt": "Search",
              "caption": "Search"
            },
            {
              "src": "/images/projects/project-02/sketch/building_sketch.png",
              "alt": "Location",
              "caption": "Location"
            },
            {
              "src": "/images/projects/project-02/sketch/homelist_sketch.png",
              "alt": "Home(List View)",
              "caption": "Home(List View)"
            },
            {
              "src": "/images/projects/project-02/sketch/ai_sketch.png",
              "alt": "AI Chatbot",
              "caption": "AI Chatbot"
            }
          ]
        },
        {
          "title": "UI/UX Refinement",
          "comparisons": [
            {
              "before": {
                "src": "/images/projects/project-02/improve/home_before.png",
                "alt": "Home(Before)",
                "caption": "Home(Before)"
              },
              "after": {
                "src": "/images/projects/project-02/improve/home_after.png",
                "alt": "Home(After)",
                "caption": "Home(After)"
              },
              "description": "Scattered buttons on the home page were replaced with a navigation bar, making navigation clearer and reducing confusion through a more distinct separation of tasks."
            },
            {
              "before": {
                "src": "/images/projects/project-02/improve/colorcode_before.png",
                "alt": "Building Information(Before)",
                "caption": "Building Information(Before)"
              },
              "after": {
                "src": "/images/projects/project-02/improve/colorcode_after.png",
                "alt": "Building Information(After)",
                "caption": "Building Information(After)"
              },
              "description": "Previously, the building page only displayed general access information. The update adds door-specific access and live crowd details, using extra map space when zoomed in so users can often view all key information without opening the page."
            }
          ]
        }
      ]
    },
    {
      "id": "mascot_design",
      "title": "Hour 16: Emotional Branding",
      "quote": "Honestly, I'd probably forget to use it after a while unless I have to.",
      "content": "During testing, one student pointed out that users might forget to use the app regularly. To boost engagement and build a stronger emotional connection, we introduced a mascot as the app's personality and assistant.",
      "mascot": {
        "name": "Swipy the Agent",
        "description": "Swipy is inspired by the student ID card used to swipe into buildings, with four color-coded states: Open, No Access Now, Forbidden, and Unknown. These icons appear next to each location and door for quick access checks, and Swipy doubles as the app's virtual agent, recommending study spots based on user needs.",
        "states": [
          {
            "name": "Open",
            "src": "/images/projects/project-02/swipy/green_swipy.PNG",
            "alt": "Open",
            "caption": "Open"
          },
          {
            "name": "No Access Now",
            "src": "/images/projects/project-02/swipy/yellow_swipy.PNG",
            "alt": "No Access Now",
            "caption": "No Access Now"
          },
          {
            "name": "Forbidden",
            "src": "/images/projects/project-02/swipy/red_swipy.PNG",
            "alt": "Forbidden",
            "caption": "Forbidden"
          },
          {
            "name": "Unknown",
            "src": "/images/projects/project-02/swipy/gray_swipy.PNG",
            "alt": "Unknown",
            "caption": "Unknown"
          }
        ]
      }
    },
    {
      "id": "prototype",
      "title": "Hour 18: Prototype",
      "cta": "Experience the prototype here!",
      "flows": [
        {
          "title": "Sign In/Up + ID Verification",
          "images": [
            "/images/projects/project-02/prototype/1/welcome.png",
            "/images/projects/project-02/prototype/1/sign_up.png",
            "/images/projects/project-02/prototype/1/student_id.png",
            "/images/projects/project-02/prototype/1/sign_in.png"
          ]
        },
        {
          "title": "Onboarding",
          "images": [
            "/images/projects/project-02/prototype/2/onboarding1.png",
            "/images/projects/project-02/prototype/2/onboarding2.png",
            "/images/projects/project-02/prototype/2/onboarding3.png"
          ]
        },
        {
          "title": "Home(List View) + Update Realtime Entrance Status",
          "images": [
            "/images/projects/project-02/prototype/3/home.png",
            "/images/projects/project-02/prototype/3/kraft_hall.png",
            "/images/projects/project-02/prototype/3/update_status1.png",
            "/images/projects/project-02/prototype/3/update_status2.png"
          ]
        },
        {
          "title": "Home(Map View) + Search",
          "images": [
            "/images/projects/project-02/prototype/4/map.png",
            "/images/projects/project-02/prototype/4/filter.png",
            "/images/projects/project-02/prototype/4/search.png",
            "/images/projects/project-02/prototype/4/map_kraft_hall.png"
          ]
        },
        {
          "title": "AI Agent + Profile",
          "images": [
            "/images/projects/project-02/prototype/5/ai1.png",
            "/images/projects/project-02/prototype/5/ai2.png",
            "/images/projects/project-02/prototype/5/ai3.png",
            "/images/projects/project-02/prototype/5/profile.png"
          ]
        }
      ]
    },
    {
      "id": "promotion",
      "title": "Hour 30: Promotion",
      "video": {
        "url": "https://www.youtube.com/watch?v=L9rcY-laK-w",
        "title": null
      }
    }
  ],
  "route": "/project-02",
  "thumbnail": "project-thumb-02.png"
}