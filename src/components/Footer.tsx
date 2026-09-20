"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#03040A] text-[#F5F7FF] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Monogram / Top Anchor */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-white mb-8 group transition-all"
          title="Return to Zenith Orbit"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-[#8B91A7] group-hover:text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Developer Name & Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white mb-2">
          {portfolioData.name.toUpperCase()}
        </h3>
        <p className="text-xs sm:text-sm font-mono-tech text-[#8B91A7] max-w-md mb-8">
          Computer Science Engineering Student & Developer
        </p>

        {/* Social Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono-tech text-[#8B91A7] hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono-tech text-[#8B91A7] hover:text-purple-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-2 text-xs font-mono-tech text-[#8B91A7] hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={portfolioData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono-tech text-[#8B91A7] hover:text-white transition-colors"
          >
            <TwitterIcon className="w-3.5 h-3.5" />
            <span>X (Twitter)</span>
          </a>
        </div>

        {/* Keep Exploring Cosmic Signature */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-cyan-300 mb-8">
          <span>KEEP EXPLORING ✦</span>
        </div>

        {/* Copyright & System Status */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#8B91A7]/70">
          <div>© 2026 Biswa Ranjan Muduli. All rights reserved.</div>
          <div>BUILT WITH NEXT.JS • THREE.JS • TAILWIND</div>
        </div>
      </div>
    </footer>
  );
}
