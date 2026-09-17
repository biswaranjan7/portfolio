"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  sector: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({
  sector,
  title,
  subtitle,
  alignment = "center",
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {/* Sci-Fi Sector Telemetry Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] md:text-xs font-mono-tech tracking-[0.2em] text-cyan-300 uppercase">
          {sector}
        </span>
      </motion.div>

      {/* Primary Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#8B91A7] font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
