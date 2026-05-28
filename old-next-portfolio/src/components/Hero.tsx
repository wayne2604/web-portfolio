"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  openContact: () => void;
}

export default function Hero({ onNavigate, openContact }: HeroProps) {
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Initializing System...",
    "Embedded Systems Engineer",
    "AI Developer",
    "Web App Creator",
    "Job Ready.",
  ];

  useEffect(() => {
    const cur = roles[roleIndex];
    let timer: NodeJS.Timeout;

    const tick = () => {
      if (!isDeleting) {
        setTypingText(cur.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === cur.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setTypingText(cur.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
          return;
        }
      }
      
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const techBadges = [
    { src: "/Icons/php.png", alt: "PHP", deg: 0 },
    { src: "/Icons/supabase.png", alt: "Supabase", deg: 22.5 },
    { src: "/Icons/react.png", alt: "React", deg: 45 },
    { src: "/Icons/kotlin.png", alt: "Kotlin", deg: 67.5 },
    { src: "/Icons/arduino.png", alt: "Arduino", deg: 90 },
    { src: "/Icons/pic.png", alt: "PIC", deg: 112.5 },
    { src: "/Icons/python.png", alt: "Python", deg: 135 },
    { src: "/Icons/slack.png", alt: "Slack", deg: 157.5 },
    { src: "/Icons/circleback.png", alt: "Circleback", deg: 180 },
    { src: "/Icons/make.png", alt: "Make", deg: 202.5 },
    { src: "/Icons/html.png", alt: "HTML", deg: 225 },
    { src: "/Icons/css.png", alt: "CSS", deg: 247.5 },
    { src: "/Icons/firebase.png", alt: "Firebase", deg: 270 },
    { src: "/Icons/SQL.png", alt: "SQL", deg: 292.5 },
    { src: "/Icons/js.png", alt: "Javascript", deg: 315 },
    { src: "/Icons/SketchUp.jpg", alt: "SketchUp", deg: 337.5 },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden md:py-32"
    >
      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A7D129]/20 bg-[#A7D129]/5 text-[#A7D129] text-[10px] font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Computer Engineer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[1.05] tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-white to-[#A7D129] bg-clip-text text-transparent">
              Rhett Wayne
            </span>
            <br />
            Manubag
          </h1>

          <div className="text-xl md:text-2xl font-bold text-[#F8EEB4]/90 h-8">
            <span>{typingText}</span>
            <span className="animate-pulse">_</span>
          </div>

          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Bridging the gap between <span className="text-[#A7D129] font-semibold">hardware</span> and <span className="text-[#A7D129] font-semibold">intelligence</span>.<br />
            Specializing in Embedded Systems, AI integration, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => onNavigate("projects")}
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#A7D129] text-black font-extrabold rounded-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(167,209,41,0.2)] hover:shadow-[0_0_35px_rgba(167,209,41,0.45)] hover:-translate-y-0.5 border border-[#A7D129]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={openContact}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#F8EEB4] font-extrabold rounded-xl flex items-center justify-center gap-2 border border-[#616F39] hover:bg-[#616F39]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Let&apos;s Connect</span>
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right 3D Spinning Profile Ring */}
        <div className="flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-white/5 flex items-center justify-center bg-[#232121]/10 backdrop-blur-md">
            {/* Spinning Badge Ring */}
            <div className="absolute inset-0 animate-spin-ring pointer-events-none">
              {techBadges.map((badge, idx) => {
                const rotation = badge.deg;
                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-[#232121] shadow-lg flex items-center justify-center p-1.5"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(140px) rotate(-${rotation}deg)`,
                      // Compensate on sm size screen
                      // transform is adjusted dynamically via tailwind and custom CSS
                    }}
                  >
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>

            {/* Profile Avatar center */}
            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border-4 border-[#616F39] overflow-hidden group shadow-2xl transition-all duration-500 hover:border-[#A7D129] hover:shadow-[0_0_40px_rgba(167,209,41,0.25)]">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 grayscale hover:grayscale-0 scale-105 group-hover:scale-100"
                style={{ backgroundImage: "url('/Profile/1x1.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/40 to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges Spin Animation style overrides inside components */}
      <style jsx global>{`
        @keyframes spin-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-ring {
          animation: spin-ring 45s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-ring 12s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-spin-ring > div {
            transform: translate(-50%, -50%) rotate(var(--rot)) translate(110px) rotate(calc(-1 * var(--rot))) !important;
          }
        }
      `}</style>
    </section>
  );
}
