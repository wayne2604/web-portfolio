"use client";

import React, { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: string; // space separated categories, e.g. "web ai"
  date: string;
  images: string[];
  tech: string[];
  summary: string;
  desc: string;
  live?: string;
  github?: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = [
    { id: "all", label: "Show All" },
    { id: "embedded", label: "Embedded Systems" },
    { id: "ai", label: "Generative AI" },
    { id: "web", label: "Web Development" },
    { id: "iot", label: "IoT Solutions" },
    { id: "android", label: "Native Android" },
  ];

  const projectsList: Project[] = [
    {
      title: "Water Level Indicator & Gate Motor",
      category: "embedded",
      date: "May 2024",
      images: [
        "/Projects/Water_Level_Gate1.jpg",
        "/Projects/Water_Level_Gate2.png",
        "/Projects/Water_Level_Gate3.png",
        "/Projects/Water_Level_Gate4.png",
        "/Projects/Water_Level_Gate5.png",
      ],
      tech: ["Electronics", "Sensors"],
      summary: "A water level indicator system that monitors water levels and integrates with a gate motor.",
      desc: "Developed as a project for our electronic circuits subject, the Water Level Indicator & Gate Motor is a safety-focused design engineered to regulate water levels and prevent destructive overflows. The system integrates automated real-time monitoring to ensure water containment remains within safe thresholds without requiring constant manual supervision. A Timer IC NE555 regulates the entire system's logic, utilizing a relay to operate the solenoid while a single 4.6V battery supplies power to the whole setup. Additionally, LED indicators are incorporated into the circuit to provide clear visual feedback regarding the current water level status.",
    },
    {
      title: "Arduino Matrix",
      category: "embedded",
      date: "Dec 2024",
      images: [
        "/Projects/Matrix1.png",
        "/Projects/Matrix2.jpg",
        "/Projects/Matrix3.jpg",
        "/Projects/Matrix4.png",
      ],
      tech: ["Arduino", "Matrix"],
      summary: "An Arduino-powered LED matrix project displaying dynamic patterns and animations.",
      desc: "Developed as the final project for our Embedded System 1 subject, the Arduino Matrix is a versatile display built around a standard 8x8 LED grid. The system employs an efficient multiplexing technique to rapidly switch rows and columns, allowing precise control over 64 individual LEDs with minimal wiring. Designed as a comprehensive full block project, the setup features multiple interconnected matrix units working together to expand the display capabilities. These individual units seamlessly communicate with each other using the RX and TX serial ports on the Arduino microcontrollers to synchronize their outputs.",
    },
    {
      title: "Automatic Clothes Drying Stand",
      category: "embedded",
      date: "May 2025",
      images: [],
      tech: ["PIC", "Servo"],
      summary: "Automatic drying stand using PIC16F877A to respond to weather changes.",
      desc: "The Automatic Clothes Drying Stand is a smart automation solution designed to protect laundry from unpredictable weather. Built around the PIC16F877A microcontroller, the system autonomously responds to environmental changes using integrated rain and light sensors. Once moisture or dim light is detected, the PIC initiates directional signals to high-precision servo motors to retract the drying stand cover, securing clothes underneath a protective shield.",
    },
    {
      title: "Electric Mobile Chair",
      category: "embedded",
      date: "May 2025",
      images: [
        "/Projects/Electric_Mobile_Chair1.png",
        "/Projects/Electric_Mobile_Chair2.png",
        "/Projects/Electric_Mobile_Chair3.png",
        "/Projects/Electric_Mobile_Chair4.mp4",
      ],
      tech: ["PIC", "Servo"],
      summary: "Electric mobile chair powered by PIC16F84A, motors, and motor drivers.",
      desc: "The Electric Mobile Chair is an advanced mobility solution engineered to provide reliable, automated movement for users requiring navigational assistance. At the core of the system is a PIC16F84A microcontroller, which acts as the central processing unit to process and execute precise directional commands. This microcontroller seamlessly interfaces with robust motor drivers to safely and effectively regulate the power delivered to the high-torque DC motors. By integrating these durable electronic hardware components, the design ensures smooth, responsive maneuverability while maintaining consistent performance and user safety.",
    },
    {
      title: "Automated Rice Dispenser",
      category: "embedded",
      date: "June 2025",
      images: ["/Projects/Rice_Dispenser.jpg"],
      tech: ["Electronics", "IR"],
      summary: "Smart Rice Dispenser automating kitchen convenience with touchless operation.",
      desc: "An intelligent, touchless rice dispenser designed to bring automation and convenience into modern kitchens. Operating on robust microcontroller logic, the system utilizes obstacle-detection infrared (IR) sensors to automatically trigger a solenoid valve or dispenser motor upon proximity detection. This contact-free operation ensures high sanitary standards while eliminating manual scooping errors. Additionally, visual feedback systems are integrated to alert users on low-capacity thresholds.",
    },
    {
      title: "Viewvie App",
      category: "ai android",
      date: "Dec 2025",
      images: ["/Projects/Viewvie.mp4", "/Projects/Viewvie.jpg"],
      tech: ["Kotlin", "Android Studio", "AI"],
      summary: "Movie app like Netflix that uses an AI chatbot to recommend films based on your mood.",
      desc: "Viewvie is an innovative movie streaming application developed using Kotlin and Android Studio to deliver a seamless mobile entertainment experience. The platform features an integrated AI chatbot designed to interact directly with users to understand their current emotional state and viewing preferences. By analyzing these conversational inputs, the intelligent system curates highly personalized film recommendations tailored specifically to your mood. This dynamic approach eliminates the frustration of endless scrolling, ensuring users instantly discover the perfect movie for any occasion.",
    },
    {
      title: "Shopping App",
      category: "web",
      date: "May 2024",
      images: [
        "/Projects/shop.jpg",
        "/Projects/shopp.jpg",
        "/Projects/shop1.png",
        "/Projects/shop2.png",
        "/Projects/shop3.png",
      ],
      tech: ["Java", "App"],
      summary: "A console based shopping app to check out products and add to cart.",
      desc: "Developed entirely in Java, the Shopping App is a reliable console-based software solution designed to simulate essential e-commerce functionalities. The application provides users with an intuitive terminal interface to effectively handle their product selections and comprehensive cart management. It features a structured checkout system that seamlessly processes the accumulated items, calculates total costs, and executes final transaction workflows. By building this system, core object-oriented programming principles are practically applied to create a functional, text-based digital storefront experience.",
    },
    {
      title: "College of Engineering Site",
      category: "web",
      date: "May 2024",
      images: ["/Projects/coe_web1.png", "/Projects/coe_web2.png", "/Projects/coe_web3.png"],
      tech: ["HTML", "CSS", "Javascript"],
      summary: "Professional website showcasing academic programs and admissions info.",
      desc: "The College of Engineering Site is a comprehensive front-end web platform serving as the digital front door for academic excellence. Tailored specifically for the Jose Rizal Memorial State University (JRMSU) community, the site focuses entirely on delivering an intuitive and visually engaging user interface. The dynamic, client-side design provides seamless navigation to important department updates, academic schedules, and necessary laboratory materials to streamline the educational experience. By utilizing responsive front-end technologies without relying on any backend architecture, the portal ensures an accessible and user-friendly environment across all devices.",
    },
    {
      title: "Car Rental Hub Website",
      category: "web",
      date: "Oct 2023",
      images: ["/Projects/carrent.png"],
      tech: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
      summary: "A full-stack PHP and MySQL web platform that streamlines real-time vehicle reservations.",
      desc: "The Car Rental Hub Website is a dynamic web-based platform designed to streamline vehicle reservations with seamless real-time booking capabilities. It features an intuitive user interface that allows customers to effortlessly browse available fleets, compare rental options, and verify current vehicle availability. The system efficiently manages reservation details and scheduling logic, ensuring a smooth and reliable transition from online booking to physical pick-up. By centralizing the entire rental process into a responsive digital environment, the platform significantly enhances operational efficiency while improving the overall customer experience.",
    },
    {
      title: "LABAI Startup",
      category: "iot",
      date: "May 2025",
      images: ["/Projects/labai.jpg"],
      tech: ["WADHWANI", "Startup"],
      summary: "Smart trash system that detects bin fullness and alerts local authorities.",
      desc: "LABAI Startup is a smart waste management solution centered around intelligent, sensor-equipped trash bins designed to optimize municipal sanitation. The system utilizes integrated capacity sensors to continuously monitor the internal volume of the receptacles in real-time. Once a specific bin reaches its maximum threshold, the embedded technology automatically transmits a network alert directly to local waste management authorities. By enabling data-driven collection routes and preventing public overflow, this automated approach significantly improves environmental hygiene while reducing overall operational costs.",
    },
    {
      title: "Capstone: ZNNHS Faculty Scheduling System",
      category: "web",
      date: "January 2026",
      images: [
        "/Projects/sched1.png",
        "/Projects/sched2.png",
        "/Projects/sched3.png",
        "/Projects/sched4.png",
      ],
      tech: ["PHP", "SQL", "Capstone"],
      summary: "A full-stack web application that streamlines academic timetabling.",
      desc: "Designed to resolve the chronic problem of disorganized and conflicting manual timetabling, the ZNNHS Faculty Scheduling System provides a comprehensive digital solution through a full-stack web application. Built with PHP and MySQL, the robust platform safely manages institutional resources by enforcing strict role-based access control for administrators, instructors, and staff. To improve accessibility, the system additionally features a public portal that allows students and guests to effortlessly search and view specific teacher schedules in real-time. By digitizing these traditionally inefficient workflows, this automated solution eliminates scheduling overlaps, improves campus transparency, and significantly enhances the school's overall operational efficiency.",
    },
    {
      title: "Capstone: Peerlink Navigator System",
      category: "web",
      date: "February 2026",
      images: [
        "/Projects/peer1.png",
        "/Projects/peer2.png",
        "/Projects/peer3.png",
        "/Projects/peer4.png",
        "/Projects/peer5.png",
        "/Projects/peer6.png",
        "/Projects/peer7.png",
        "/Projects/peer8.png",
        "/Projects/peer9.png",
      ],
      tech: ["PHP", "SQL", "Capstone"],
      summary: "A web-based peer counseling platform that connects students with trained Peer Listeners for anonymous support.",
      desc: "PeerLink Navigator is a web-based peer counseling platform that safely connects students with trained Peer Listeners for accessible and anonymous mental health support. The system relies on a role-based architecture where Students can request sessions and chat in real-time, Listeners can manage appointments and report critical cases, and Administrators oversee user verification and platform safety. Under the hood, the application is built using native PHP for server-side logic, a MySQL database for storing user and chat records, custom HTML/CSS for a fully mobile-responsive interface, and jQuery (AJAX) to handle asynchronous chat updates. Finally, the project is deployed on InfinityFree's shared hosting environment, utilizing a specifically optimized 5-second AJAX polling interval to maintain stable, real-time communication without triggering server rate limits or firewalls.",
    },
    {
      title: "GenMIND: Interactive Learning Platform",
      category: "android",
      date: "March 2026",
      images: [
        "/Projects/gen1.jpg",
        "/Projects/gen2.jpg",
        "/Projects/gen3.jpg",
        "/Projects/gen4.jpg",
        "/Projects/gen5.jpg",
        "/Projects/gen6.jpg",
        "/Projects/gen7.jpg",
      ],
      tech: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
      summary: "An adaptive cognitive learning platform developed as a native Android app.",
      desc: "GenMIND is an adaptive cognitive learning platform developed as a native Android application using Kotlin and Jetpack Compose. Serving as the lead developer, I architected a robust system focused on sophisticated user state management and conditional navigation logic. The platform features a secure authentication layer integrated with Android SharedPreferences to handle persistent user metadata and session tracking. A core technical highlight of the project is the implementation of an intelligent routing engine that manages the onboarding lifecycle; this system employs a logic-gate to distinguish first-time users, automatically directing them to a diagnostic pre-test while allowing returning users to bypass the gate and proceed directly to their personalized dashboard. I also engineered the interactive content delivery system, which facilitates seamless transitions between diverse educational modules, quizzes, and progress trackers. By prioritizing a unidirectional data flow and optimizing local asset management, I ensured that the application remains high-performing and responsive across a wide range of device specifications.",
    },
    {
      title: "Nexus-AI: Stealth RPA & Semantic Workflow Orchestrator",
      category: "ai",
      date: "March 2026",
      images: ["/Projects/make.png", "/Projects/make1.png"],
      tech: ["Make.com", "OpenAI Whisper", "Playwright", "Circleback"],
      summary: "A dual-layered meeting transcriber and stealth data gathering RPA bot.",
      desc: "Nexus-AI is a dual-layered automation engine designed to seamlessly convert raw audio into actionable intelligence while simultaneously automating complex web data gathering. The project features a sophisticated semantic pipeline that utilizes GPT-4 and OpenAI Whisper to accurately transcribe and summarize crucial meeting communications. Operating alongside this cognitive layer is a high-stealth Robotic Process Automation (RPA) tool powered by Playwright to effectively navigate restricted online environments. By intelligently emulating human-like GUI interactions, the system successfully bypasses advanced anti-bot detection mechanisms on major recruitment platforms to securely extract valuable information.",
    },
    {
      title: "OriginShield: AI Content Detection Platform",
      category: "web ai",
      date: "May 2026",
      images: ["/Projects/originshield1.png"],
      tech: ["Next.js", "React", "Tailwind CSS", "AI Detection"],
      summary: "A premium Next.js platform that analyzes text, images, and URLs to verify authentic human content.",
      desc: "OriginShield is a state-of-the-art AI Content Detection Platform built to verify trust and authenticity in the digital age at scale. Operating as a full-stack, mobile-responsive Next.js web application, the platform features robust server-side Route Handlers to securely communicate with cutting-edge deep learning models while safeguarding private API keys. OriginShield delivers advanced multi-modal scanning capabilities, routing text inputs through Transformer-based models like Sapling AI, and analyzing media uploads through Sightengine forensics to detect GAN artifacts, diffusion signatures, and pixel-level anomalies. The system also includes an intelligent URL content scanner that fetches and parses web pages in real-time. Equipped with custom rate-limiting protection, a premium glassmorphism interface, and detailed evidence-backed confidence scoring, the platform offers an enterprise-grade experience for authentic content verification.",
      live: "https://originshield.vercel.app/",
      github: "https://github.com/wayne2604/originshield",
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsList
    : projectsList.filter((p) => p.category.includes(activeCategory));

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCarouselIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const slidePrev = () => {
    if (!selectedProject) return;
    setCarouselIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const slideNext = () => {
    if (!selectedProject) return;
    setCarouselIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative z-10">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-bold text-[#A7D129] tracking-[0.2em] uppercase">01 &mdash; Selected Works</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">Portfolio</h2>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#A7D129] text-black shadow-[0_0_15px_rgba(167,209,41,0.25)]"
                    : "bg-[#232121]/40 border border-white/10 text-[#F8EEB4]/60 hover:text-white hover:border-[#A7D129]/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#232121]/30 border border-white/5 rounded-3xl p-6 backdrop-blur-md transition-all duration-400 hover:border-[#A7D129]/20 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 min-h-[300px]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7D129]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#616F39]/10 border border-[#616F39]/25 text-[#F8EEB4]/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#F8EEB4]/40 font-semibold uppercase tracking-widest">{project.date}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#A7D129] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="pt-6 relative z-10 border-t border-white/5 mt-4">
                <button
                  onClick={() => handleOpenProject(project)}
                  className="text-xs font-bold text-[#A7D129] hover:underline flex items-center gap-1 group/link"
                >
                  View Documentation 
                  <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Project Viewer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">{selectedProject.title}</h3>
                <span className="text-[10px] text-[#F8EEB4]/60 font-semibold uppercase tracking-wider">Date: {selectedProject.date}</span>
              </div>
              <button 
                onClick={handleCloseProject}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Media Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 bg-[#232121]/20 flex items-center justify-center">
                  
                  {/* Media item rendering */}
                  {selectedProject.images[carouselIndex].endsWith(".mp4") ? (
                    <video
                      src={selectedProject.images[carouselIndex]}
                      controls
                      autoPlay
                      muted
                      loop
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedProject.images[carouselIndex]}
                      alt={`${selectedProject.title} Media ${carouselIndex + 1}`}
                      className="max-w-full max-h-full object-contain p-2 select-none"
                    />
                  )}

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={slidePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={slideNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Carousel Indicator Counter */}
                      <span className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
                        {carouselIndex + 1} / {selectedProject.images.length}
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl border border-white/5 border-dashed flex flex-col items-center justify-center text-white/40 gap-2 bg-[#232121]/5 py-12">
                  <Sparkles className="w-8 h-8 opacity-40 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Technical documentation only</span>
                </div>
              )}

              {/* Full Description & Redirection Links */}
              <div className="space-y-6">
                <p className="text-[#F8EEB4]/80 text-sm sm:text-base leading-relaxed whitespace-pre-line border-l-2 border-[#A7D129] pl-4">
                  {selectedProject.desc}
                </p>

                {/* Render Custom Redirection Buttons if Defined */}
                {(selectedProject.live || selectedProject.github) && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-[#A7D129] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(167,209,41,0.2)] hover:shadow-[0_0_25px_rgba(167,209,41,0.4)] hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Live Demo</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-transparent text-[#F8EEB4] font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 border border-[#616F39] hover:bg-[#616F39]/20 hover:-translate-y-0.5 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
