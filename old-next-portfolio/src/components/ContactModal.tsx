"use client";

import React, { useState } from "react";
import { X, Send, AlertTriangle, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); x``
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("https://formsubmit.co/ajax/rmanubag308@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: subject.trim() || `New Portfolio Message from ${name.trim()}`,
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          text: "Message sent successfully! I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => onClose(), 3000);
      } else {
        throw new Error("Failed to submit form.");
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: "Failed to send online. Opening your email client instead...",
      });
      setTimeout(() => {
        const mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        window.location.href = `mailto:rmanubag308@gmail.com?subject=${encodeURIComponent(
          subject || "Portfolio Contact"
        )}&body=${mailBody}`;
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col">

        {/* Background Accent Blur */}
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#A7D129]/5 blur-[60px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <h3 className="text-xl font-black uppercase text-white tracking-tight">Let&apos;s Connect</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-[#F8EEB4]/60">Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-[#232121]/30 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#A7D129]/50 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-[#F8EEB4]/60">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@domain.com"
              className="w-full px-4 py-3 bg-[#232121]/30 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#A7D129]/50 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-[#F8EEB4]/60">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What is this regarding?"
              className="w-full px-4 py-3 bg-[#232121]/30 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#A7D129]/50 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-[#F8EEB4]/60">Message *</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 bg-[#232121]/30 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#A7D129]/50 focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Feedback Banners */}
          {status.text && (
            <div
              className={`p-4 rounded-xl flex items-center gap-3 text-xs font-semibold ${status.type === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 shrink-0" />
              )}
              <span>{status.text}</span>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#A7D129] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(167,209,41,0.2)] hover:shadow-[0_0_30px_rgba(167,209,41,0.4)] disabled:opacity-55 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{loading ? "Sending Message..." : "Send Message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
