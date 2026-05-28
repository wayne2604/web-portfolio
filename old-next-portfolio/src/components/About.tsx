"use client";

import React, { useEffect, useState, useRef } from "react";
import { User, Award, Brain, FileText, Zap, BookOpen } from "lucide-react";

interface AboutProps {
  openResume: () => void;
}

export default function About({ openResume }: AboutProps) {
  const [yearsCoding, setYearsCoding] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    // Animate Years Coding
    let yearsCount = 0;
    const yearsTimer = setInterval(() => {
      yearsCount += 1;
      if (yearsCount >= 4) {
        setYearsCoding(4);
        clearInterval(yearsTimer);
      } else {
        setYearsCoding(yearsCount);
      }
    }, 150);

    // Animate Projects Count
    let projectsCount = 0;
    const projectsTimer = setInterval(() => {
      projectsCount += 1;
      if (projectsCount >= 11) {
        setTotalProjects(11);
        clearInterval(projectsTimer);
      } else {
        setTotalProjects(projectsCount);
      }
    }, 80);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 bg-transparent relative z-10 border-t border-white/5 pb-32"
    >
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left border-b border-white/5 pb-8">
          <span className="text-[10px] font-bold text-[#A7D129] tracking-[0.2em] uppercase">04 &mdash; Profile</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">About Me</h2>
        </div>

        {/* Content Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Biography Text Panel */}
          <div className="bg-[#232121]/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md space-y-6">
            <div className="flex items-center gap-3 text-[#A7D129] border-b border-white/5 pb-4">
              <User className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-widest">Digital Craftsman</h3>
            </div>
            <div className="text-[#F8EEB4]/85 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                I am a <strong className="text-white">Computer Engineer</strong> with a passion for the intersection of hardware and software.
              </p>
              <p>
                While my peers focus solely on writing code for screens, I enjoy the unique challenge of making code interact directly with the physical world through <strong className="text-white">microcontrollers, sensor arrays, and custom robotics setups</strong>.
              </p>
              <p>
                Currently, I am heavily focused on strengthening my skills in <strong className="text-white">Cybersecurity</strong> and <strong className="text-white">Generative AI integration</strong>, with the ultimate goal of designing secure, intelligent, and autonomous embedded systems for the future.
              </p>
            </div>
          </div>

          {/* Premium Bento Stats Grid */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Bento Card 1 */}
            <div className="group relative bg-[#232121]/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 min-h-[160px]">
              <div className="text-[#A7D129] w-8 h-8 rounded-xl bg-[#A7D129]/5 flex items-center justify-center border border-[#A7D129]/10">
                <Zap className="w-4 h-4" />
              </div>
              <div className="space-y-1 mt-4">
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none">
                  {yearsCoding}+
                </h3>
                <p className="text-[#F8EEB4]/40 text-[9px] font-bold uppercase tracking-widest">Years Coding</p>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="group relative bg-[#232121]/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 min-h-[160px]">
              <div className="text-[#A7D129] w-8 h-8 rounded-xl bg-[#A7D129]/5 flex items-center justify-center border border-[#A7D129]/10">
                <Award className="w-4 h-4" />
              </div>
              <div className="space-y-1 mt-4">
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none">
                  {totalProjects}+
                </h3>
                <p className="text-[#F8EEB4]/40 text-[9px] font-bold uppercase tracking-widest">Total Projects</p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="group relative bg-[#232121]/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 min-h-[160px]">
              <div className="text-[#A7D129] w-8 h-8 rounded-xl bg-[#A7D129]/5 flex items-center justify-center border border-[#A7D129]/10">
                <Brain className="w-4 h-4" />
              </div>
              <div className="space-y-1 mt-4">
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">PIC / AI</h3>
                <p className="text-[#F8EEB4]/40 text-[9px] font-bold uppercase tracking-widest">Specialist & Enthusiast</p>
              </div>
            </div>

            {/* Bento Card 4 (Double Width) */}
            <div className="group relative bg-[#232121]/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 col-span-2 min-h-[180px]">
              <div className="flex items-start justify-between">
                <div className="text-[#A7D129] w-8 h-8 rounded-xl bg-[#A7D129]/5 flex items-center justify-center border border-[#A7D129]/10">
                  <BookOpen className="w-4 h-4" />
                </div>
                
                {/* Embedded CV / Resume Trigger Button */}
                <button
                  onClick={openResume}
                  className="px-4 py-2 bg-[#A7D129] text-black font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center gap-1.5 shadow-[0_0_15px_rgba(167,209,41,0.15)] hover:shadow-[0_0_20px_rgba(167,209,41,0.35)] transition-all group/btn"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Resume</span>
                  <span className="transition-transform group-hover/btn:translate-y-0.5">&darr;</span>
                </button>
              </div>

              <div className="space-y-1 mt-4">
                <h3 className="text-lg font-bold text-white tracking-tight">JRMSU Major</h3>
                <p className="text-[#F8EEB4]/40 text-[9px] font-bold uppercase tracking-widest">Computer Engineering Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
