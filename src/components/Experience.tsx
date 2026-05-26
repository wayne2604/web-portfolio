"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  period: string;
  company: string;
  desc: string;
  tags: string[];
}

export default function Experience() {
  const experiencesList: ExperienceItem[] = [
    {
      role: "Support Role",
      period: "February 2026 - Present",
      company: "Balancer — Remote",
      desc: "Conducted thorough research and managed accurate data entry tasks to support organizational goals. Utilized automation techniques to streamline workflows and improve task efficiency.",
      tags: ["Research", "Data Entry", "Automation"],
    },
    {
      role: "OJT-Technical Support Intern",
      period: "July 2025 — August 2025",
      company: "Sangguniang Panlungsod - Dapitan City — Philippines",
      desc: "Completed a required 240-hour internship, supporting daily office operations by actively troubleshooting and fixing hardware, specifically computers and printers. Contributed to visual and creative projects by creating various graphic designs.",
      tags: ["Graphic Design", "Networking", "Troubleshooting"],
    },
    {
      role: "Tech Support Specialist",
      period: "2023 — 2024",
      company: "PhilEx Logistics — Philippines",
      desc: "Provided technical support to promptly resolve user issues and maintain optimal system efficiency. Strengthened core problem-solving capabilities through consistent troubleshooting and technical maintenance.",
      tags: ["Troubleshooting", "Technical Maintenance"],
    },
    {
      role: "Retail Sales / Customer Service Associate",
      period: "2020 — 2023",
      company: "Tourney Biker Shop — Philippines",
      desc: "Managed daily point-of-sale transactions and meticulously tracked store inventory to ensure smooth shop operations. Delivered exceptional customer support by assisting clients with product inquiries and actively driving retail sales.",
      tags: ["Sales", "Inventory Management", "Customer Service"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-transparent relative z-10 border-t border-white/5">
      <div className="container mx-auto max-w-4xl space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left border-b border-white/5 pb-8">
          <span className="text-[10px] font-bold text-[#A7D129] tracking-[0.2em] uppercase">03 &mdash; Career</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">Work Experience</h2>
        </div>

        {/* Experience Timeline Thread */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 ml-2 sm:ml-4">
          {experiencesList.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#616F39] bg-[#0c0c0c] z-10 transition-all duration-300 group-hover:border-[#A7D129] group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(167,209,41,0.5)]" />
              
              {/* Experience Card */}
              <div className="bg-[#232121]/30 border border-white/5 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:border-[#A7D129]/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 space-y-4">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#A7D129] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#F8EEB4]/70 text-xs font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#616F39]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-[#A7D129] bg-[#A7D129]/5 border border-[#A7D129]/15 self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {exp.desc}
                </p>

                {/* Tag list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#A7D129]/5 border border-[#A7D129]/10 text-[#F8EEB4]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
