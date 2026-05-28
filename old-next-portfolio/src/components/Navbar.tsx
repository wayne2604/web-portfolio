"use client";

import React, { useState, useEffect } from "react";
import { 
  LayoutGrid, 
  User, 
  Award, 
  Briefcase, 
  Mail, 
  ExternalLink 
} from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  openContact: () => void;
}

export default function Navbar({ activeSection, onNavigate, openContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: LayoutGrid },
    { id: "projects", label: "Projects", icon: Award },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "about", label: "About", icon: User },
  ];

  return (
    <>
      {/* Desktop Floating Glass Navbar */}
      <nav 
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-6 px-6 py-3.5 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
          scrolled 
            ? "bg-[#0c0c0c]/85 border-[#A7D129]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
            : "bg-[#0c0c0c]/40 border-white/10"
        }`}
      >
        <span 
          className="text-xl font-extrabold tracking-tighter cursor-pointer bg-gradient-to-r from-white to-[#A7D129] bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:filter hover:drop-shadow-[0_0_8px_rgba(167,209,41,0.3)] pr-4 border-r border-white/10"
          onClick={() => onNavigate("home")}
        >
          RWM
        </span>
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#A7D129]/10 text-[#A7D129] border border-[#A7D129]/20"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={openContact}
            className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-white/60 hover:text-white hover:bg-white/5 border border-transparent transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile Native-Style Bottom Navigation Tab Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="flex items-center justify-around bg-[#0c0c0c]/85 border border-white/10 rounded-2xl py-2.5 px-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 py-1 px-3 transition-all ${
                  isActive 
                    ? "text-[#A7D129] scale-105 font-bold" 
                    : "text-white/40 active:scale-95"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[9px] tracking-tight">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 w-1 h-1 bg-[#A7D129] rounded-full" />
                )}
              </button>
            );
          })}
          <button
            onClick={openContact}
            className="flex flex-col items-center gap-1 py-1 px-3 text-white/40 active:scale-95 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="text-[9px] tracking-tight">Contact</span>
          </button>
        </div>
      </div>
    </>
  );
}
