import { Cpu } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiKotlin, SiFirebase, SiOpenai, SiJquery, SiPhp } from "react-icons/si";
import { FaReact, FaDatabase, FaNodeJs, FaAndroid, FaMicrochip, FaPlug } from "react-icons/fa";
import { WorkflowBuilderCard } from "@/components/ui/workflow-builder-card";
import { GlowCard } from "@/components/ui/spotlight-card";
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
    link: "",
    github: "https://github.com/wayne2604",
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
    github: "https://github.com/wayne2604",
    status: "Active" as const,
    lastUpdated: "2 weeks ago",
    tags: ["Android App", "Kotlin", "Firebase"],
    techStack: [SiKotlin, FaAndroid, SiFirebase]
  },
  {
    title: "Nexus-AI",
    category: "Automation",
    tools: "Make.com, Playwright, GPT-4, Whisper, Circleback",
    description:
      "Stealth RPA & semantic orchestrator that automates complex workflows by combining robotic process automation with AI-driven language understanding.",
    imageUrl: "/Projects/make.png",
    link: "",
    github: "https://github.com/wayne2604",
    status: "Active" as const,
    lastUpdated: "1 month ago",
    tags: ["Automation", "RPA", "GPT-4"],
    techStack: [FaPlug, SiOpenai, FaNodeJs]
  },
  {
    title: "Water Level Gate",
    category: "Hardware",
    tools: "Timer IC NE555, Solenoid valve, Relay, LED indicators",
    description:
      "Embedded hardware regulator system that automatically controls water levels using analog circuitry and solenoid-actuated gate valves.",
    imageUrl: "/Projects/Water_Level_Gate1.jpg",
    link: "",
    github: "https://github.com/wayne2604",
    status: "Inactive" as const,
    lastUpdated: "1 year ago",
    tags: ["Hardware", "Embedded", "Circuitry"],
    techStack: [FaMicrochip, Cpu]
  }
];

const glowColors: Array<'blue' | 'purple' | 'green' | 'red' | 'orange'> = ['blue', 'purple', 'green', 'orange', 'red'];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start mt-10">
          {projects.map((project, index) => (
            <GlowCard
              key={index}
              glowColor={glowColors[index % glowColors.length]}
              customSize={true}
              className="w-full max-w-sm !p-0 !gap-0 !grid-rows-[1fr] !shadow-none !aspect-auto"
            >
              <WorkflowBuilderCard {...project} className="max-w-full !rounded-none" disableGlow={true} />
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
