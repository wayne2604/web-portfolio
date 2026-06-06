import { SiNextdotjs, SiTailwindcss, SiKotlin, SiFirebase, SiOpenai, SiJquery, SiPhp, SiGooglegemini, SiMake } from "react-icons/si";
import { FaReact, FaDatabase, FaNodeJs, FaAndroid, FaPlug } from "react-icons/fa";
import { WorkflowBuilderCard } from "@/components/ui/workflow-builder-card";
import "./styles/Work.css";

export const projects = [

  {
    title: "OriginShield",
    category: "AI Platform",
    tools: "Next.js, React, Tailwind CSS, Sightengine, Sapling AI",
    description:
      "AI-powered content detection platform that analyzes and verifies the authenticity of digital content using advanced machine learning models.",
    imageUrl: "/Projects/originshield.png",
    link: "https://originshield.vercel.app/",
    github: "https://github.com/wayne2604/originshield",
    status: "Active" as const,
    lastUpdated: "2 weeks ago",
    tags: ["AI Platform", "Content Security", "Next.js"],
    techStack: [SiNextdotjs, FaReact, SiTailwindcss],
    role: "Solo Full-Stack Build",
    built: "2026",
    client: "Personal Project",
    stats: [
      { number: "99%", label: "Scan Accuracy" },
      { number: "240ms", label: "Avg Scan Latency" },
      { number: "15k+", label: "Files Verified" },
      { number: "99.9%", label: "System Uptime" }
    ],
    caseStudy: {
      sections: [
        {
          num: "01",
          title: "The Problem",
          paragraphs: [
            "With the exponential rise of AI-generated media and deepfakes, verifying the authenticity of digital content has become one of the most critical challenges of the modern web. Traditional metadata can be easily stripped, leaving platforms, publishers, and security teams with no reliable way to trace the origin of an image, video, or text snippet.",
            "Opaque verification pipelines add to the confusion, failing to provide actionable details on why a piece of content is flagged as manipulated or AI-generated."
          ]
        },
        {
          num: "02",
          title: "What I built",
          paragraphs: [
            "OriginShield is a real-time, AI-powered content security and verification platform that exposes a transparent integrity score for digital assets. The platform allows users to upload images, document files, or text blobs to analyze them against multiple specialized detection models simultaneously.",
            "The system breaks down the verification into distinct categories (AI Image Probability, Text Manipulation, Facial Deepfake markers) and displays the confidence level of each detector alongside exact visual heatmaps of the flagged regions."
          ],
          imageSubtitle: "OriginShield Content Analysis Workspace",
          imageUrl: "/Projects/peer1.png"
        },
        {
          num: "03",
          title: "The explainable scoring engine",
          paragraphs: [
            "The core of OriginShield is its Explainable Verification Engine. Instead of outputting a generic 'Real' or 'Fake' label, the platform queries multi-modal analysis APIs (such as Sightengine for visual forensics and Sapling AI for syntax and semantic patterns) to compute a composite Content Trust Score.",
            "The engine breaks down the trust score into four key dimensions: Visual Metadata Consistency, AI Generation Likelihood, Semantic Inconsistencies, and Compression Artifacts. Every rating is accompanied by visual highlights pointing out exactly which pixel coordinates or sentence boundaries triggered the detectors."
          ]
        },
        {
          num: "04",
          title: "Architecture",
          paragraphs: [
            "Built as a high-performance Next.js application, the platform separates the client UI from the backend orchestrator. The frontend utilizes React state management and Tailwind CSS for a dark, high-contrast, responsive console.",
            "The backend securely interfaces with upstream computer vision and NLP models, caching frequent analysis queries in Redis to minimize API costs and optimize load speeds. Row-Level Security on database tables protects client analysis history, ensuring complete auditability and privacy."
          ]
        }
      ],
      keyDecisionsTitle: "Critical architectural choices made to ensure accuracy and real-time responsiveness.",
      keyDecisions: [
        {
          title: "Multi-Model Fusion",
          desc: "Integrating both visual computer vision models and textual semantic classifiers ensures that hybrid media (e.g. memes, news cards, or PDF reports) are scanned holistically rather than in isolation."
        },
        {
          title: "Pixel-Level Visual Forensic Overlay",
          desc: "Rather than simply stating a likelihood, the platform generates a dynamic canvas overlay that paints heatmaps over regions containing compression inconsistencies or face-swaps."
        },
        {
          title: "Asynchronous Queue Verification",
          desc: "To prevent visual analysis timeouts, heavy scans are delegated to background worker queues, notifying the UI via server-sent events as soon as the scores are compiled."
        },
        {
          title: "Strict Privacy by Default",
          desc: "All uploaded assets are processed in-memory and immediately destroyed after the classification vector is calculated, storing only the metadata results and hash values to guarantee user confidentiality."
        }
      ]
    }
  },
  {
    title: "PeerLink Navigator",
    category: "Web App",
    tools: "PHP, SQL, jQuery, AJAX Polling, Shared Hosting",
    description:
      "Anonymous peer counseling platform enabling real-time, secure communication between students and trained peer counselors.",
    imageUrl: "/Projects/peer2.png",
    link: "https://peerlink-mu.vercel.app/",
    github: "https://github.com/wayne2604/peerlink",
    status: "Active" as const,
    lastUpdated: "3 months ago",
    tags: ["Web App", "PHP", "SQL", "AJAX"],
    techStack: [SiPhp, FaDatabase, SiJquery]
  },
  {
    title: "ZNNHS Scheduler",
    category: "Full-Stack",
    tools: "PHP, SQL, Role-based Access, Public Calendar Portal",
    description:
      "Comprehensive timetabling platform for school scheduling with role-based access control and a public-facing calendar portal.",
    imageUrl: "/Projects/sched2.png",
    link: "https://teacherschedule.vercel.app/",
    github: "https://github.com/wayne2604/teacher-scheduler",
    status: "Active" as const,
    lastUpdated: "6 months ago",
    tags: ["Full-Stack", "PHP", "School System"],
    techStack: [SiPhp, FaDatabase]
  },
  {
    title: "GenMIND",
    category: "Android App",
    tools: "Kotlin, Jetpack Compose, Firebase, SharedPreferences",
    description:
      "Adaptive cognitive learning Android application that personalizes educational experiences through intelligent assessment and tailored content delivery.",
    imageUrl: "/Projects/gen1.jpg",
    link: "",
    github: "https://github.com/wayne2604/genmind",
    status: "Active" as const,
    lastUpdated: "4 mopnths ago",
    tags: ["Android App", "Kotlin", "Firebase"],
    techStack: [SiKotlin, FaAndroid, SiFirebase]
  },
  {
    title: "Viewvie AI",
    category: "Android App",
    tools: "Kotlin, Android SDK, Google Generative AI (Gemini), Glide, Gson",
    description:
      "A modern AI-powered movie recommendation Android application. Viewvie helps users discover their next favorite film using smart filtering and recommendations, featuring Cue, a personal AI movie assistant.",
    imageUrl: "/Projects/Viewvie.jpg",
    link: "",
    github: "https://github.com/wayne2604/viewvie-ai",
    status: "Active" as const,
    lastUpdated: "6 monthsca ago",
    tags: ["Android App", "Kotlin", "AI Recommendation"],
    techStack: [SiKotlin, FaAndroid, SiGooglegemini],
    role: "Solo Android & AI Build",
    built: "2026",
    client: "Personal Project",
    stats: [
      { number: "92%", label: "Recommendation Match" },
      { number: "1.2s", label: "Cue AI Latency" },
      { number: "API 24+", label: "Min Android SDK" },
      { number: "Gemini", label: "AI Engine" }
    ],
    caseStudy: {
      sections: [
        {
          num: "01",
          title: "The Problem",
          paragraphs: [
            "With thousands of titles spread across various streaming platforms, users frequently encounter extreme decision fatigue. Standard recommendation systems rely heavily on static user ratings and genre categories, which fail to capture highly specific, mood-based, or conversational preferences.",
            "Visual-only interfaces force users to scroll mindlessly through grids of poster art, while text-only AI search engines lose the cinematic visual appeal that drives movie selection."
          ]
        },
        {
          num: "02",
          title: "What I built",
          paragraphs: [
            "Viewvie AI is a native Android application that bridges the gap between structured movie discovery and natural language conversations. It pairs a polished, Netflix-style media explorer with Cue, an embedded AI assistant.",
            "Users can seamlessly scroll through visual collections or launch Cue from a persistent Floating Action Button to converse naturally about what they want to watch, immediately receiving interactive movie cards."
          ],
          imageSubtitle: "Viewvie Android Application Interface & Cue Assistant",
          imageUrl: "/Projects/Viewvie.jpg"
        },
        {
          num: "03",
          title: "Gemini Powered Movie Assistant",
          paragraphs: [
            "The heart of Viewvie's intelligent discovery is Cue, an AI companion powered by the Google Generative AI SDK. By integrating Gemini's natural language understanding directly within the app, Cue interprets complex prompts, remembers conversation history, and refines recommendations interactively.",
            "Whether a user asks for 'a 90s psychological thriller with a mind-bending twist' or follows up with 'make it less scary,' Cue dynamically parses the parameters to deliver tailored recommendations with rich rationale."
          ]
        },
        {
          num: "04",
          title: "Architecture & Performance",
          paragraphs: [
            "Built entirely in Kotlin, the application adheres to clean Android architecture guidelines. It leverages Glide for highly optimized, memory-efficient image loading and disk caching of rich high-resolution backdrops and posters.",
            "Data serialization and storage of recommendation profiles are handled asynchronously via Gson and SharedPreferences, keeping the application lightweight, responsive, and performant even on lower-end Android devices."
          ]
        }
      ],
      keyDecisionsTitle: "Architectural choices made to deliver a lightweight, high-performance mobile AI assistant.",
      keyDecisions: [
        {
          title: "Hybrid Conversational-Visual UI",
          desc: "Unifying a traditional horizontal-scrolling card catalog with an overlay chat window, preserving visual engagement while enabling rich natural-language filtering."
        },
        {
          title: "On-Device Google AI Integration",
          desc: "Leveraging Google's Generative AI Android SDK for direct client-to-model inference, ensuring minimum latency without requiring a dedicated middle-tier server."
        },
        {
          title: "Efficient Media Caching via Glide",
          desc: "Implementing custom Glide configurations for pre-fetching and down-sampling poster images, reducing data consumption and avoiding out-of-memory errors on API 24+ devices."
        },
        {
          title: "Contextual Conversational Memory",
          desc: "Creating an in-memory chat session manager that stores past interactions, allowing users to build upon previous recommendations and narrow down choices iteratively."
        }
      ]
    }
  },
  {
    title: "Nexus-AI",
    category: "Automation",
    tools: "Make.com, Playwright, GPT-4, Whisper, Circleback",
    description:
      "Stealth RPA & semantic orchestrator that automates complex workflows by combining robotic process automation with AI-driven language understanding.",
    imageUrl: "/Projects/make.png",
    link: "",
    github: "https://github.com/wayne2604/nexus-ai",
    status: "Active" as const,
    lastUpdated: "1 month ago",
    tags: ["Automation", "RPA", "GPT-4"],
    techStack: [FaPlug, SiOpenai, FaNodeJs, SiMake]
  }
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-glow-card w-full max-w-sm"
            >
              <WorkflowBuilderCard {...project} className="max-w-full !rounded-none" disableGlow={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
