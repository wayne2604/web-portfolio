"use client";

import React, { useState, useEffect } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ContactModal from "@/components/ContactModal";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "certificates", "experience", "about"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#A7D129]/30 select-none">
      {/* 1. Star / Meteor Particle Engine Backdrop */}
      <SpaceBackground />

      {/* 2. Glassmorphic Navigation controls */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        openContact={() => setIsContactOpen(true)} 
      />

      {/* 3. Portfolio Panels */}
      <main className="relative z-10 w-full">
        {/* Home / Hero */}
        <Hero 
          onNavigate={handleNavigate} 
          openContact={() => setIsContactOpen(true)} 
        />

        {/* Selected Works (Projects) */}
        <Projects />

        {/* Credentials (Certificates) */}
        <Certificates />

        {/* Career timeline (Experience) */}
        <Experience />

        {/* Biography & Bento Stats (About) */}
        <About openResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 4. Footer Summary Branding */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/40 backdrop-blur-sm text-center">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F8EEB4]/40 text-xs font-semibold uppercase tracking-widest">
            © 2026 <span className="text-white">Rhett Wayne Manubag</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-[#F8EEB4]/40">
            <span className="text-white hover:text-[#A7D129] cursor-pointer" onClick={() => setIsResumeOpen(true)}>
              Credentials
            </span>
            <span className="text-white hover:text-[#A7D129] cursor-pointer" onClick={() => setIsContactOpen(true)}>
              Message Me
            </span>
          </div>
        </div>
      </footer>

      {/* 5. Connected Portals / Dialogs */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
