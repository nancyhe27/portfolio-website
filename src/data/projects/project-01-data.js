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
  "overview": "In summer 2025, I joined WeKruit as a UI/UX full-stack developer intern, stepping into a fast-paced startup where I worked across both design and engineering. Over 10 weeks, I learned to move quickly between sketching ideas and coding them into the product, gaining a sharper sense of how design decisions play out in real implementation.",
  "heroImage": "/images/projects/project-01/header/hero.png",
  "sections": [
    {
      "id": 1,
      "title": "Background",
      "subsections": [
        {
          "id": 1,
          "paragraphs": [
            "<strong>The Company:</strong> WeKruit is a B2B SaaS startup aiming to streamline the interview process for both recruiters and candidates through AI-driven tools."
          ]
        },
        {
          "id": 2,
          "paragraphs": [
            "<strong>The Product:</strong> I worked on WeKruit's interview management dashboard, a core product that centralizes scheduling, interviews, and reviews. It combines recordings, transcripts, and AI-generated scores to make evaluation faster and clearer."
          ]
        },
        {
          "id": 3,
          "paragraphs": [
            "<strong>The Users:</strong> The dashboard is built for recruiters and hiring managers who run dozens of interviews each day and need simple, action-driven workflows."
          ]
        },
        {
          "id": 4,
          "paragraphs": [
            "<strong>The Impact:</strong> The system supported over 1,000 interviews for 3 client companies, simplifying workflows and accelerating the recruiting process."
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "What I Did",
      "paragraphText": "At the start of my internship, I worked on {Product UI/UX Design & Prototype}. I took features from wireframes through to coded prototypes, focusing on two main user flows: {Interview Dashboard (Prototype)} and {Candidate Workflow Automation (Prototype)}. After that, I created a {Design System} with scalable tokens and reusable components. I applied it to build {New UI Designs} for the {Interview Dashboard (New)} and {Candidate Workflow Automation (New)}. Finally, I contributed to {Product Delivery} by integrating these redesigned UIs directly into the codebase.",
      "linkMap": {
        "Product UI/UX Design & Prototype": "#main-product",
        "Interview Dashboard (Prototype)": "#flow1-interview-dashboard", 
        "Candidate Workflow Automation (Prototype)": "#flow2-candidate-onboarding",
        "Design System": "#design-system",
        "New UI Designs": "#uiux-refinement",
        "Interview Dashboard (New)": "#interview-management-dashboard",
        "Candidate Workflow Automation (New)": "#interview-creation-flow",
        "Product Delivery": "#reflections"
      }
    },
    {
      "id": 3,
      "title": "Product UI/UX Design & Prototype",
      "subsections": [
        {
          "id": 1,
          "subtitle": "Product UI/UX Design",
          "paragraphs": [
            "I started by sitting down with our team manager to really pin down what this feature needed to achieve. From there, I sketched out the main user flows, drafted rough wireframes, and gradually turned them into interactive prototypes that showed how each screen and feature fit together. Every round of feedback sharpened the design, until it grew into something clear, testable, and ready to guide development.",
            "Because of confidentiality, I can’t show the full workflow diagram. But I’ve shared selected UI flows and component refinements here, which capture the kind of design decisions and problem-solving I was responsible for."
          ],
          "imageGroups": [
            {
              "title": "Feature 1: Interview Dashboard (Prototype)",
              "steps": [
                {
                  "title": "Homepage: Interview Dashboard",
                  "description": "Recruiters access a centralized view showing candidate lists with interview times and durations, along with direct links to candidate data, transcripts, and recordings. By clicking on a candidate, they can open the interview recording for detailed review."
                },
                {
                  "title": "Subpage: Audio Interviews",
                  "description": "For audio-only interviews, recruiters see a time-stamped transcript synced with playback for quick review."
                },
                {
                  "title": "Subpage: Video Interviews",
                  "description": "For video interviews, recruiters see a time-stamped transcript displayed alongside the recording for combined verbal and non-verbal review."
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow1/1.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Homepage: Interview Dashboard (React Coded Prototype)"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/2.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Subpage: Audio Interviews (React Coded Prototype)"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/3.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Subpage: Video Interviews (React Coded Prototype)"
                }
              ]
            },
            {
              "title": "Feature 2: Candidate Workflow Automation (Prototype)",
              "steps": [
                {
                  "title": "Main Page: Candidate Dashboard",
                  "description": "The Candidate Dashboard is the main page where recruiters manage all candidates. From here, they can click 'Upload Resume' to add a new candidate to the system and start the process of inviting them to an interview."
                },
                {
                  "title": "Step 1: Upload & Parse Resume",
                  "description": "Once a resume is uploaded, the system automatically parses the candidate’s information. After parsing, the recruiter can confirm the details and prepare to invite the candidate to an interview."
                },
                {
                  "title": "Step 2: Generate Interview Questions",
                  "description": "Before sending the invitation, recruiters can use the system’s AI to generate interview questions based on the parsed resume. These questions help interviewers prepare and can be directly referenced during the interview."
                },
                {
                  "title": "Step 3: Send Interview Invitation",
                  "description": "After completing the previous steps, recruiters send the official interview invitation to the candidate. This final step transitions the process from preparation to the actual interviewing stage."
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow2/3.png",
                  "alt": "WeKruit prototype design wireframe",
                  "caption": "Main Page: Candidate Dashboard (React Coded Prototype)"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/1.png",
                  "alt": "Interactive prototype screens",
                  "caption": "Step 1: Upload & Parse Resume (React Coded Prototype)"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/2.png",
                  "alt": "Component refinement process",
                  "caption": "Step 2: Generate Interview Questions (React Coded Prototype)"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/4.png",
                  "alt": "Final prototype mockup",
                  "caption": "Step 3: Send Interview Invitation (React Coded Prototype)"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "Prototype Development",
          "paragraphs": [
            "After mapping the user flows and wireframes, I built a working prototype in React to bring them to life and test how they worked in practice. The prototype included features like profile search, transcript sync, and status updates, and I linked AI-driven resume parsing and question generation with backend APIs to handle real data. This helped the team check technical feasibility and refine design directions.",
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "Design System",
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
              "src": "/images/projects/project-01/design_system/upload_abandon.png",
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
      "id": 5,
      "title": "UI/UX Refinement",
      "paragraphs": [
        "In the final phase of my internship, I transitioned the B2C student portal from prototype to production-ready product. I replaced legacy CSS with modular components, improved visual hierarchy, clarified task flows based on usability feedback. These refinements created a smoother, more intuitive experience, enabling students to set up and complete mock interviews with less friction and greater confidence.",
        "The redesigned dashboard shifts from static, data-heavy tables to an action-oriented layout that improves clarity, consistency, and recruiter efficiency.",
        "The redesigned Interview Review page shifts from cluttered layouts and redundant feedback to a streamlined, content-led design that improves navigation clarity, reduces excess scrolling, and streamlines reviewer insight.",
        "The redesigned Interview Creation flow shifts from a disorganized, space-heavy layout to a structured workflow that reduces excess scrolling, adds customizable fields, and improves clarity with a refined step graph."
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
      "id": 6,
      "title": "Reflections",
      "paragraphs": [
        "Through my three-month internship at WeKruit, I learned that design and development aren’t two separate tracks — they’re two halves of the same process. I found real excitement in discovering how powerful they are when combined!",
        "In design, I started seeing systems differently. As I worked on the design system, I realized that every small choice — from typography scales to spacing rules — carried weight beyond the screen. Those decisions affected how engineers coded, how quickly features shipped, and how users experienced the product. I also began noticing how patterns, like error states or loading indicators, shaped user confidence just as much as layout or color. That shift helped me understand design as more than aesthetics: it was the framework that made the whole product coherent and adaptable.",
        "In development, I grew from just experimenting in prototypes to building features people actually used. Writing React components and integrating them with Firebase gave me a sharper sense of responsibility: my code had to be maintainable and scalable, not just functional. Debugging and refactoring stopped being about “making it work” and became about ensuring others could build on top of it. Collaborating with backend engineers also taught me how much thought goes into data flow and timing, especially when handling real-time updates recruiters depended on.",
        "What I enjoyed most was the rare chance to build features I had also designed. Sketching an idea in Figma one day and then seeing it come alive in code the next gave me a sense of accountability I hadn’t felt before. That loop of designing, coding, and refining taught me that the most powerful products emerge when design and development don’t just collaborate but actually coexist in the same hands. And that’s the kind of work I want to keep doing!"
      ]
    }
  ]
}; 