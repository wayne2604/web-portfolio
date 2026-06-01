import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "OriginShield",
    category: "AI Platform",
    tools: "Next.js, React, Tailwind CSS, Sightengine, Sapling AI",
    description:
      "AI-powered content detection platform that analyzes and verifies the authenticity of digital content using advanced machine learning models.",
    image: "/Projects/originshield1.png",
    link: "https://originshield.vercel.app/",
    github: "",
  },
  {
    title: "GenMIND",
    category: "Android App",
    tools: "Kotlin, Jetpack Compose, Firebase, SharedPreferences",
    description:
      "Adaptive cognitive learning Android application that personalizes educational experiences through intelligent assessment and tailored content delivery.",
    image: "/Projects/gen1.jpg",
    link: "",
    github: "https://github.com/wayne2604",
  },
  {
    title: "Nexus-AI",
    category: "Automation",
    tools: "Make.com, Playwright, GPT-4, Whisper, Circleback",
    description:
      "Stealth RPA & semantic orchestrator that automates complex workflows by combining robotic process automation with AI-driven language understanding.",
    image: "/Projects/make.png",
    link: "",
    github: "https://github.com/wayne2604",
  },
  {
    title: "PeerLink Navigator",
    category: "Web App",
    tools: "PHP, SQL, jQuery, AJAX Polling, Shared Hosting",
    description:
      "Anonymous peer counseling platform enabling real-time, secure communication between students and trained peer counselors.",
    image: "/Projects/peer1.png",
    link: "",
    github: "https://github.com/wayne2604",
  },
  {
    title: "ZNNHS Scheduler",
    category: "Full-Stack",
    tools: "PHP, SQL, Role-based Access, Public Calendar Portal",
    description:
      "Comprehensive timetabling platform for school scheduling with role-based access control and a public-facing calendar portal.",
    image: "/Projects/sched1.png",
    link: "",
    github: "https://github.com/wayne2604",
  },
  {
    title: "Water Level Gate",
    category: "Hardware",
    tools: "Timer IC NE555, Solenoid valve, Relay, LED indicators",
    description:
      "Embedded hardware regulator system that automatically controls water levels using analog circuitry and solenoid-actuated gate valves.",
    image: "/Projects/Water_Level_Gate1.jpg",
    link: "",
    github: "https://github.com/wayne2604",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              {/* Dashed border lines — horizontal (top + bottom) */}
              <div className="work-card-border-h">
                <svg height="100%" width="100%">
                  <line
                    x1="0" y1="0" x2="100%" y2="0"
                    stroke="white" strokeWidth="2" strokeDasharray="6,6"
                  />
                  <line
                    x1="0" y1="100%" x2="100%" y2="100%"
                    stroke="white" strokeWidth="2" strokeDasharray="6,6"
                  />
                </svg>
              </div>
              {/* Dashed border lines — vertical (left + right) */}
              <div className="work-card-border-v">
                <svg height="100%" width="100%">
                  <line
                    x1="0" y1="0" x2="0" y2="100%"
                    stroke="white" strokeWidth="2" strokeDasharray="7,7"
                  />
                  <line
                    x1="100%" y1="0" x2="100%" y2="100%"
                    stroke="white" strokeWidth="2" strokeDasharray="7,7"
                  />
                </svg>
              </div>
              {/* Solid corner brackets */}
              <div className="work-card-corner"></div>

              <div className="work-card-inner">
                <div className="work-card-header">
                  <div className="work-card-header-info">
                    <h4 className="work-card-title">{project.title}</h4>
                    <span className="work-card-badge">{project.category}</span>
                  </div>
                  <div className="work-card-thumbnail">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link || project.github}
                    />
                  </div>
                </div>

                <div className="work-card-tools">
                  <span className="work-card-tools-label">Tools & Stack</span>
                  <p>{project.tools}</p>
                </div>

                <p className="work-card-description">{project.description}</p>

                <div className="work-card-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card-link"
                      data-cursor="disable"
                    >
                      <MdArrowOutward />
                      Live Preview
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card-link"
                      data-cursor="disable"
                    >
                      <FaGithub />
                      Github Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
