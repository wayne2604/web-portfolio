"use client";

import React, { useState } from "react";
import { Eye, X, Award } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [hoveredCert, setHoveredCert] = useState<Certificate | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const certificatesList: Certificate[] = [
    {
      title: "Introduction to Visual Graphic Design",
      issuer: "TESDA",
      date: "2026",
      image: "/Certificates/Introduction to Visual Graphic Design.png",
    },
    {
      title: "Establishing & Operating MSMEs",
      issuer: "TESDA",
      date: "2025",
      image: "/Certificates/Tesda.png",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "/Certificates/Cyber Threat Management.png",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "/Certificates/Introduction to Cybersecurity.png",
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "/Certificates/Introduction to IOT.png",
    },
    {
      title: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2025",
      image: "/Certificates/Artificial intelligence Fundamentals.png",
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "/Certificates/Packet Tracer.png",
    },
    {
      title: "C++ Intermediate",
      issuer: "Sololearn",
      date: "2023",
      image: "/Certificates/C++ Intermediate.png",
    },
    {
      title: "Introduction to C++",
      issuer: "Sololearn",
      date: "2023",
      image: "/Certificates/Introduction to C++.png",
    },
    {
      title: "Introduction to Python",
      issuer: "Sololearn",
      date: "2023",
      image: "/Certificates/Introduction to Python.png",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    // Skip calculations on mobile
    if (window.innerWidth <= 900) return;
    setMousePos({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const handleMouseEnter = (cert: Certificate) => {
    if (window.innerWidth <= 900) return;
    setHoveredCert(cert);
  };

  const handleMouseLeave = () => {
    setHoveredCert(null);
  };

  const handleOpenCertificate = (cert: Certificate) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const handleCloseCertificate = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="certificates" className="py-24 px-6 bg-transparent relative z-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left border-b border-white/5 pb-8">
          <span className="text-[10px] font-bold text-[#A7D129] tracking-[0.2em] uppercase">02 &mdash; Credentials</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">Certifications</h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenCertificate(cert)}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(cert)}
              onMouseLeave={handleMouseLeave}
              className="group relative flex flex-col justify-between bg-[#232121]/30 border border-white/5 rounded-2xl p-6 cursor-pointer backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#F8EEB4]/40 font-semibold text-[10px] uppercase tracking-widest">
                  <span>{cert.date}</span>
                  <span className="flex items-center gap-1 text-[#A7D129] opacity-0 group-hover:opacity-100 transition-opacity">
                    View <Eye className="w-3 h-3" />
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#A7D129] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-[#F8EEB4]/60 text-xs font-medium uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cursor-Tracking Image Preview Box (Desktop Only) */}
      {hoveredCert && (
        <div
          className="fixed pointer-events-none z-[100] w-[280px] rounded-2xl border-2 border-[#A7D129]/30 bg-[#232121] overflow-hidden shadow-2xl p-1 transition-all duration-75 animate-fade-in"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <img
            src={hoveredCert.image}
            alt={hoveredCert.title}
            className="w-full h-auto rounded-xl object-contain bg-black"
          />
        </div>
      )}

      {/* Fullscreen Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <button 
            onClick={handleCloseCertificate}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/15 bg-black/40 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center border border-white/10 rounded-3xl overflow-hidden bg-black shadow-2xl p-4">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
