export const project01Data = {
  "id": 1,
  "title": "WeKruit",
  "duration": "Apr 2025 – Aug 2025",
  "platform": "Desktop",
  "task": "UI/UX Engineering & SDE Internship",
  "collaborators": [
    "Adam Yang (mentor)",
    "Noah Liu", 
    "Brandon Saunders",
    "Shenyu Zhang",
    "Bingxi Liu"
  ],
  "programming": ["JavaScript", "TypeScript", "HTML/CSS", "Python"],
  "tools": [
    "Figma",
    "React", 
    "Tailwind CSS",
    "Firebase",
    "GitHub",
    "ClickUp"
  ],
  "overview": "In summer 2025, I interned as a UI/UX full stack developer intern at WeKruit, a SaaS startup building an AI-powered interview platform for enterprises and students. My role combined design and engineering, from mapping user flows to implementing full-stack features. Over 10 weeks, I contributed to the client-facing interview dashboard, the AI agent interview process, the WeKruit design system, and UI/UX refinements that transformed prototypes into a polished product. These efforts streamlined the review and preparation process for 1,000+ interviews across 3 client companies and enabled 100+ students to run mock sessions more smoothly.",
  "heroImage": "/images/projects/project-01/header/hero.png",
  "sections": [
    {
      "id": 1,
      "title": "Main Product: Client-facing Dashboard",
      "subsections": [
        {
          "id": 1,
          "subtitle": "Prototype Design",
          "paragraphs": [
            "I began by clarifying feature requirements with the team manager. I mapped key user flows, created low-fidelity wireframes, and iterated on interactive prototypes to define how screens and features connect. Multiple rounds of feedback refined the prototypes into a clear, testable design.",
            "Due to confidentiality, I cannot share the full workflow diagram. Instead, I've included representative UI flows and component refinements to illustrate my contributions."
          ],
          "imageGroups": [
            {
              "title": "Flow 1: Interview Dashboard",
              "description": "I designed this flow to guide recruiters from the dashboard overview into individual interviews. The design centralizes candidate data, transcripts, and recordings, reducing context switching and streamlining review for 1,000+ interviews.",
              "steps": [
                {
                  "title": "Step 1: Interview Dashboard",
                  "description": "Recruiters see a candidate list with interview time, duration, and direct links to recordings."
                },
                {
                  "title": "Step 2.1: View Audio Interview",
                  "description": "For audio-only interviews, recruiters see a time-stamped transcript synced with playback for quick review."
                },
                {
                  "title": "Step 2.2: Video Interview",
                  "description": "For video interviews, recruiters see a time-stamped transcript displayed alongside the recording for combined verbal and non-verbal review."
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow1/1.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Step 1: Interview Dashboard"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/2.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Step 2.1: View Audio Interview"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/3.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Step 2.2: View Video Interview"
                }
              ]
            },
            {
              "title": "Flow 2: Candidate Onboarding",
              "description": "I designed and implemented this flow to simplify how recruiters add candidates to the system. The flow brings together resume parsing, question generation, and built-in invitations, cutting down on manual steps and making sure interviewers have tailored materials ready ahead of time. This system has already been adopted by 3 companies and used to onboard 100+ candidates and students.",
              "steps": [
                {
                  "title": "Step 1: Upload & Parse Resume",
                  "description": "Recruiters upload a candidate's resume, which is automatically parsed and confirmed in the system."
                },
                {
                  "title": "Step 2: Generate Interview Questions",
                  "description": "Interview questions are generated from the parsed resume for interviewers to reference."
                },
                {
                  "title": "Step 3: Candidate Dashboard",
                  "description": "The new candidate–resume pair appears on the dashboard for easy tracking."
                },
                {
                  "title": "Step 4: Send Interview Invitation",
                  "description": "Recruiters send the interview invitation email directly from the dashboard."
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow2/1.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Step 1: Upload & Parse Resume"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/2.png",
                  "alt": "Interactive prototype screens",
                  "caption": "Step 2: Generate Interview Questions"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/3.png",
                  "alt": "Component refinement process",
                  "caption": "Step 3: Candidate Dashboard"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/4.png",
                  "alt": "Final prototype mockup",
                  "caption": "Step 4: Send Interview Invitation"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "Prototype Development",
          "paragraphs": [
            "I translated these flows into a working React prototype. I structured the product architecture to align with requirements and implemented core features such as candidate profile search and filtering, Real-time transcript synchronization, Dynamic status updates for interview progress",
            "I also integrated AI agent connections and data handling. Collaborating with backend developers ensured smooth integration and improved overall platform speed and reliability."
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "WeKruit Design System",
      "paragraphs": [
        "Over a week, I worked with two teammates on the UI/UX team to define universal guidelines for typography, spacing, and color. Before, every frontend developer (including me!) styled components differently, causing inconsistencies and slowing development. After we built the system, all components followed the same baseline, making handoff smoother, ensuring accessibility, and giving the product a cohesive identity. I realized how much faster it became to switch between design work and frontend coding once everything followed the same system."
      ],
      "subsections": [
        {
          "id": 1,
          "subtitle": "Universal Colors + Fonts",
          "paragraphs": [
            "We chose cool blues and neutrals as primary colors to convey clarity and professionalism. Semantic colors stayed low-saturation so they signaled states without distracting from core actions. Paired with a clean serif font, the system created a focused, trustworthy tone."
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/colors.png",
              "alt": "WeKruit Colors",
              "caption": "WeKruit Colors"
            },
            {
              "src": "/images/projects/project-01/design_system/fonts.png", 
              "alt": "WeKruit Typography",
              "caption": "WeKruit Fonts"
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "Single Components: Button & Margins",
          "paragraphs": [
            "We documented button states, spacing, and alignment, unifying variations into a single reusable model. Input fields, tags, and other core elements were standardized in Figma with the same rules. We also introduced a shared spacing scale for commonly used composite components, keeping layouts consistent and easy to extend with Tailwind CSS."
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/button.png",
              "alt": "WeKruit Buttons",
              "caption": "WeKruit Buttons"
            },
            {
              "src": "/images/projects/project-01/design_system/margin.png",
              "alt": "WeKruitMargins",
              "caption": "WeKruit Margins"
            }
          ]
        },
        {
          "id": 3,
          "subtitle": "Composite Components: Upload Interface",
          "paragraphs": [
            "After defining single elements, we moved on to composite ones like the upload interface used across the site. We added drag-and-drop, progress indicators, and error states, and documented lists and other complex components with the same standards. I enjoyed this lego-like process because it showed how simple elements fit together and clarified their usage and constraints."
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/upload.png",
              "alt": "WeKruit Upload Interface",
              "caption": "WeKruit Upload Interface"
            }
          ]
        },
        {
          "id": 4,
          "subtitle": "Interaction Specs",
          "paragraphs": [
            "Finally, we documented interaction flows like delete confirmations and file uploads. For example, we marked how buttons change state in specific cases and how components connect across different contexts. I found this step especially valuable because it revealed interaction edge cases (and it saved me from a lot of ambiguities when I developed the new system UI later!)."
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/interaction.png",
              "alt": "Component interaction specifications",
              "caption": "Interaction Guidelines for Key Interfaces"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "UI/UX Refinement",
      "paragraphs": [
        "In the final phase of my internship, I transitioned the B2C student portal from prototype to production-ready product. I replaced legacy CSS with modular components, improved visual hierarchy, clarified task flows based on usability feedback. These refinements created a smoother, more intuitive experience, enabling students to set up and complete mock interviews with less friction and greater confidence.",
        "The redesigned dashboard shifts from static, data-heavy tables to an action-oriented layout that improves clarity, consistency, and recruiter efficiency.",
        "placeholder text before and after 2", 
        "placeholder text before and after 3"
      ],
      "subtitles": [
        "Interview Management Dashboard",
        "Interview Review Page",
        "Interview Creation Flow"
      ],
      "images": [
        {
          "src": "/images/projects/project-01/refinement/before1.png",
          "alt": "Interview Management Dashboard Before Redesign",
          "caption": "Before: Data-Heavy, Action-Light"
        },
        {
          "src": "/images/projects/project-01/refinement/after1.png",
          "alt": "Interview Management Dashboard After Redesign",
          "caption": "After: Action-Oriented & Efficient"
        },
        {
          "src": "/images/projects/project-01/refinement/before2.png",
          "alt": "Interview Review Page Before Redesign",
          "caption": "Before: Cluttered & Redundant"
        },
        {
          "src": "/images/projects/project-01/refinement/after2.png",
          "alt": "Interview Review Page After Redesign",
          "caption": "After: Streamlined & Insightful"
        },
        {
          "src": "/images/projects/project-01/refinement/before3.png",
          "alt": "Interview Creation Flow Before Redesign",
          "caption": "Before: Disorganized Layout"
        },
        {
          "src": "/images/projects/project-01/refinement/after3.png",
          "alt": "Interview Creation Flow After Redesign",
          "caption": "After: Optimized Structured Workflow"
        }
      ]
    },
    {
      "id": 4,
      "title": "Conclusion",
      "paragraphs": [
        "Overall, this internship was a valuable opportunity to apply my skills in a real-world setting while learning how to adapt in a fast-paced, collaborative environment. I not only deepened my technical and design abilities but also gained a clearer understanding of how teams balance user needs, business goals, and engineering constraints to bring a product to life. Working with mentors and peers challenged me to think critically, communicate more effectively, and take initiative when facing new problems. Most importantly, I leave this experience with a stronger sense of confidence in my abilities and a clearer direction for where I want to grow next."
      ]
    }
  ]
}; 