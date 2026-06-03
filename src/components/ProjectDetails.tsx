import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { smoother } from "./Navbar";
import { useLoading } from "@/context/LoadingProvider";
import { projects } from "./Work";
import "./styles/ProjectDetails.css";

interface StatItem {
  number: string;
  label: string;
}

interface CaseStudySection {
  num: string;
  title: string;
  paragraphs: string[];
  imageSubtitle?: string;
  imageUrl?: string;
}

interface KeyDecision {
  title: string;
  desc: string;
}

interface CaseStudyData {
  sections: CaseStudySection[];
  keyDecisionsTitle?: string;
  keyDecisions?: KeyDecision[];
  outcome?: CaseStudySection;
}

interface ProjectData {
  title: string;
  category: string;
  tools: string;
  description: string;
  imageUrl: string;
  link?: string;
  github?: string;
  status: "Active" | "Inactive";
  lastUpdated: string;
  tags: string[];
  techStack: React.ElementType[];
  // Extended fields for details page
  role?: string;
  client?: string;
  built?: string;
  stats?: StatItem[];
  detailedDescription?: string;
  caseStudy?: CaseStudyData;
}

interface ProjectDetailsProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const [copied, setCopied] = React.useState(false);
  const { setActiveProject } = useLoading();

  // Set default values for extended fields in case they are missing
  const role = project.role || "Solo Developer";
  const built = project.built || "2026";
  const client = project.client || "Personal Project";
  const detailedDescription = project.detailedDescription || project.description;
  
  const stats = project.stats || [
    { number: "1", label: "COMPLETED BUILD" },
    { number: "100%", label: "TYPE-SAFE CODE" },
    { number: "Responsive", label: "USER INTERFACE" },
    { number: "Modern", label: "DESIGN AESTHETICS" }
  ];

  const handleCopyLink = async () => {
    try {
      const url = project.link || window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // Find the next project in the list for the "Up Next" section
  const nextProject = React.useMemo(() => {
    const currentIndex = projects.findIndex(p => p.title === project.title);
    if (currentIndex === -1) return null;
    return projects[(currentIndex + 1) % projects.length];
  }, [project]);

  const handleNextProject = () => {
    if (nextProject) {
      const overlay = document.querySelector(".project-details-overlay");
      if (overlay) overlay.scrollTop = 0;
      setActiveProject(nextProject);
    }
  };

  const handleGetInTouch = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  // Prevent scroll propagation on underlying main page when detail view is open
  React.useEffect(() => {
    if (smoother) {
      smoother.paused(true);
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (smoother) {
        smoother.paused(false);
      } else {
        document.body.style.overflow = "";
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="project-details-overlay"
    >
      <div className="w-full max-w-[1200px] px-[clamp(1rem,4vw,2.5rem)] py-[clamp(4rem,8vh,6rem)] flex flex-col gap-10">
        
        {/* ── Top Navigation/Breadcrumbs ── */}
        <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground mb-4">
          <button onClick={onClose} className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F8EEB4] bg-transparent border-none p-0 cursor-pointer font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground" data-cursor="disable">
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
          <span className="opacity-30">/</span>
          <button onClick={onClose} className="transition-colors hover:text-[#F8EEB4] bg-transparent border-none p-0 cursor-pointer font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground" data-cursor="disable">
            Work
          </button>
          <span className="opacity-30">/</span>
          <span className="text-[#F8EEB4]">{project.title}</span>
        </div>

        {/* ── Main Title ── */}
        <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.8rem,2rem+5vw,6rem)] font-normal leading-[0.9] tracking-[-0.01em] text-[#F8EEB4]">
          {project.title}
        </h1>

        {/* ── Hero Description ── */}
        <p className="mt-2 max-w-[52ch] text-[clamp(1.1rem,1rem+0.5vw,1.4rem)] leading-[1.5] text-muted-foreground">
          {detailedDescription}
        </p>

        {/* ── Metadata & Action Row ── */}
        <div className="mt-6 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-5 font-mono text-[0.74rem] sm:grid-cols-4">
              <div className="flex flex-col gap-1">
                <dt className="uppercase tracking-[0.1em] text-muted-foreground">Type</dt>
                <dd className="text-[#F8EEB4]">{project.category}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="uppercase tracking-[0.1em] text-muted-foreground">Role</dt>
                <dd className="text-[#F8EEB4]">{role}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="uppercase tracking-[0.1em] text-muted-foreground">Built</dt>
                <dd className="text-[#F8EEB4]">{built}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="uppercase tracking-[0.1em] text-muted-foreground">Client</dt>
                <dd className="text-[#F8EEB4]">{client}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start lg:items-end lg:justify-end gap-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-200 hover:text-[#F8EEB4]"
                data-cursor="disable"
              >
                <FaGithub size={14} />
                <span>GITHUB CODE</span>
              </a>
            )}
            <button
              onClick={handleCopyLink}
              className="group inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-200 hover:text-[#F8EEB4] bg-transparent border-none p-0 cursor-pointer"
              data-cursor="disable"
            >
              {copied ? <Check size={14} className="text-[#A7D129]" /> : <Copy size={14} />}
              <span>{copied ? "COPIED!" : "COPY URL"}</span>
            </button>
          </div>
        </div>

        {/* ── Statistics / Highlights Grid Box ── */}
        <div className="mt-6 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black p-[clamp(1.4rem,3vw,2.2rem)] flex flex-col justify-between">
              <div className="font-display text-[clamp(2.4rem,1.8rem+3vw,4rem)] leading-none text-[#F8EEB4] font-normal">
                {stat.number}
              </div>
              <div className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Case Study Section List ── */}
        {project.caseStudy && (
          <div className="mt-6 flex flex-col">
            {/* Sections loops */}
            {project.caseStudy.sections.map((section, idx) => (
              <div key={idx} className="border-t border-white/10 w-full">
                <div className="grid gap-6 py-[clamp(2.5rem,6vw,4.5rem)] md:grid-cols-[1fr_2fr]">
                  <div className="md:sticky md:top-[90px] md:self-start">
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {section.num}
                    </span>
                    <h2 className="mt-3 scroll-mt-[90px] font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-normal leading-tight text-[#F8EEB4]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <div className="max-w-[60ch] space-y-4 text-muted-foreground text-[0.95rem] leading-[1.6]">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {section.imageUrl ? (
                      <div className="border border-white/10 w-full overflow-hidden aspect-[16/10]">
                        <img
                          src={section.imageUrl}
                          alt={section.imageSubtitle || section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      section.imageSubtitle && (
                        <div className="grid place-items-center border border-white/10 bg-white/[0.02] w-full aspect-[16/10]">
                          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {section.imageSubtitle}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Key Decisions Block if present */}
            {project.caseStudy.keyDecisions && (
              <div className="border-t border-white/10 w-full">
                <div className="grid gap-6 py-[clamp(2.5rem,6vw,4.5rem)] md:grid-cols-[1fr_2fr]">
                  <div className="md:sticky md:top-[90px] md:self-start">
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {String(project.caseStudy.sections.length + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 scroll-mt-[90px] font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-normal leading-tight text-[#F8EEB4]">
                      Key decisions
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {project.caseStudy.keyDecisionsTitle && (
                      <p className="max-w-[60ch] text-muted-foreground text-[0.95rem] leading-[1.6]">
                        {project.caseStudy.keyDecisionsTitle}
                      </p>
                    )}
                    <div className="divide-y divide-white/10 border-t border-white/10">
                      {project.caseStudy.keyDecisions.map((decision, dIdx) => (
                        <div key={dIdx} className="py-5">
                          <p className="font-display text-[clamp(1rem,0.9rem+0.4vw,1.2rem)] font-normal text-[#F8EEB4]">
                            {decision.title}
                          </p>
                          <p className="mt-2 text-[0.95rem] leading-[1.6] text-muted-foreground">
                            {decision.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Outcome Block if present */}
            {project.caseStudy.outcome && (
              <div className="border-t border-white/10 w-full">
                <div className="grid gap-6 py-[clamp(2.5rem,6vw,4.5rem)] md:grid-cols-[1fr_2fr]">
                  <div className="md:sticky md:top-[90px] md:self-start">
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {project.caseStudy.outcome.num || "06"}
                    </span>
                    <h2 className="mt-3 scroll-mt-[90px] font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-normal leading-tight text-[#F8EEB4]">
                      {project.caseStudy.outcome.title || "The outcome"}
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <div className="max-w-[60ch] space-y-4 text-muted-foreground text-[0.95rem] leading-[1.6]">
                      {project.caseStudy.outcome.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Up Next Section ── */}
        {nextProject && (
          <section className="border-t border-white/10 py-[clamp(4.5rem,10vh,8rem)] mt-6">
            <div className="mx-auto w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-muted-foreground sm:gap-4">
                <svg width="92" height="14" viewBox="0 0 92 14" fill="none" aria-hidden="true">
                  <path d="M2 7H50" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                  <path d="M50 7c8.5 0 9.5-4.6 15.5-4.6 5.2 0 6.2 6.2 0.5 6.2-4 0-4-4.2 1-4.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                  <circle cx="80" cy="7" r="1.2" fill="currentColor"></circle>
                  <circle cx="87" cy="7" r="1.2" fill="currentColor"></circle>
                </svg>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Up Next</span>
                <svg width="92" height="14" viewBox="0 0 92 14" fill="none" aria-hidden="true" className="-scale-x-100">
                  <path d="M2 7H50" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                  <path d="M50 7c8.5 0 9.5-4.6 15.5-4.6 5.2 0 6.2 6.2 0.5 6.2-4 0-4-4.2 1-4.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                  <circle cx="80" cy="7" r="1.2" fill="currentColor"></circle>
                  <circle cx="87" cy="7" r="1.2" fill="currentColor"></circle>
                </svg>
              </div>
              <button
                onClick={handleNextProject}
                className="group mt-7 inline-block bg-transparent border-none p-0 cursor-pointer"
              >
                <h2 className="font-display text-[clamp(2.6rem,1.6rem+5vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.01em] transition-colors duration-300 text-muted-foreground group-hover:text-[#F8EEB4]">
                  {nextProject.title}
                </h2>
              </button>
              <p className="mx-auto mt-5 max-w-[44ch] text-[clamp(1rem,0.95rem+0.3vw,1.2rem)] leading-[1.5] text-muted-foreground">
                {nextProject.description}
              </p>
              <button
                onClick={handleNextProject}
                aria-label={`Next case study: ${nextProject.title}`}
                className="group mt-9 inline-flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer"
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-[#F8EEB4]">
                  {nextProject.category}
                </span>
                <span className="grid size-11 place-items-center rounded-full border border-white/20 text-[#F8EEB4] transition-colors duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-[#F8EEB4] group-hover:bg-[#F8EEB4] group-hover:text-black">
                  <ArrowUpRight size={17} className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </span>
              </button>
            </div>
          </section>
        )}

        {/* ── Open to Work CTA Block ── */}
        <section className="bg-[#F8EEB4] text-black w-screen relative left-1/2 -translate-x-1/2 py-[clamp(5rem,12vh,9rem)]">
          <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2.5rem)] flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/25 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60 motion-reduce:animate-none"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black"></span>
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-black/70">Open to work</span>
            </div>
            <h2 className="mx-auto mt-8 max-w-[20ch] font-display text-[clamp(2.4rem,1.6rem+4vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.01em] text-black">
              Have a project in mind? <span className="italic">Let's build it.</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleGetInTouch}
                type="button"
                className="group inline-flex items-center gap-[0.55rem] border border-black text-black px-[1.4rem] py-[0.95rem] font-mono text-[0.78rem] uppercase tracking-[0.1em] transition-colors duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:bg-black hover:text-[#F8EEB4]"
              >
                Get in touch
                <ArrowRight size={15} className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-[5px]" />
              </button>
            </div>
            <div className="mx-auto mt-10 max-w-[46ch] space-y-3">
              <p className="font-display text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] leading-snug text-black">
                I'm available for freelance projects, and open to the right full-time role.
              </p>
              <p className="text-black/70 leading-relaxed">
                I build web apps, SaaS, and MVPs for founders and startups. Tell me what you're working on.
              </p>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
