"use client";

import React from "react";
import { X, Eye, Download, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Background Accent Blur */}
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#A7D129]/5 blur-[60px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <h3 className="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#A7D129]" />
            <span>Resume / CV</span>
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content body */}
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-white/70 text-sm leading-relaxed">
            Select an option below to view my professional credentials in full detail:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/CV/Rhett Wayne Manubag.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-[#A7D129] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(167,209,41,0.15)] hover:shadow-[0_0_25px_rgba(167,209,41,0.35)] hover:-translate-y-0.5 transition-all text-center"
            >
              <Eye className="w-4 h-4" />
              <span>View PDF</span>
            </a>
            <a
              href="/CV/Rhett Wayne Manubag.pdf"
              download="Rhett Wayne Manubag - Resume.pdf"
              className="flex-1 py-4 bg-transparent text-[#F8EEB4] font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-[#616F39] hover:bg-[#616F39]/20 hover:-translate-y-0.5 transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
