"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Compass, FileText } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { portfolioData } from "@/data/portfolioData";

const CelestialOrb = dynamic(
  () => import("./CelestialOrb").then((mod) => mod.CelestialOrb),
  {
    ssr: false,
    loading: () => (
      <div className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px]" />
    ),
  }
);

export function Hero() {
  const firstNameLetters = portfolioData.firstName.split("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* 3D Celestial Orb as Hero Centerpiece Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-70 pointer-events-auto">
        <CelestialOrb />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* 0.3s: Technical Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono-tech tracking-[0.25em] text-cyan-300 uppercase">
            DIGITAL UNIVERSE // SYSTEM ONLINE
          </span>
        </motion.div>

        {/* 0.7s: First Name (Character-by-character reveal) */}
        <h1 className="hero-title font-heading font-black tracking-tighter text-[#F5F7FF] flex flex-wrap justify-center overflow-hidden">
          {firstNameLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 80, opacity: 0, rotateX: 45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6 + index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* 1.1s: Surname (Smooth upward slide with cosmic gradient) */}
        <div className="overflow-hidden mb-6 -mt-2 sm:-mt-4">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-title font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-cyan-300"
          >
            {portfolioData.lastName}
          </motion.h2>
        </div>

        {/* 1.5s: Subtitle & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="space-y-3 mb-8 max-w-xl"
        >
          <div className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.25em] text-purple-300 font-semibold">
            {portfolioData.subtitle}
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#8B91A7] font-normal leading-relaxed">
            {portfolioData.tagline}
          </p>
        </motion.div>

        {/* 1.8s: Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollToSection("about")}
          >
            <Compass className="w-4 h-4 text-cyan-300" />
            <span>EXPLORE UNIVERSE</span>
          </MagneticButton>

          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <MagneticButton variant="secondary">
              <FileText className="w-4 h-4 text-purple-300" />
              <span>VIEW RESUME</span>
            </MagneticButton>
          </a>
        </motion.div>

        {/* 2.2s: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase text-[#8B91A7] group-hover:text-cyan-300 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400/60 transition-colors"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
