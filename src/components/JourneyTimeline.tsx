"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { journeyWaypoints } from "@/data/experience";
import { Rocket, CheckCircle, Navigation, Radio, Sparkles } from "lucide-react";

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        sector="// SECTOR 04 // TRAJECTORY CHRONICLES"
        title="MY JOURNEY"
        subtitle="A spacecraft flightpath charting academic launches, technical breakthroughs, and future mission horizons."
      />

      {/* Trajectory Launch Header */}
      <div className="flex flex-col items-center mb-12">
        <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-cyan-300 flex items-center gap-2">
          <Rocket className="w-3.5 h-3.5 animate-bounce" />
          <span>ORIGIN LAUNCH // BASE STATION EARTH</span>
        </div>
      </div>

      {/* Vertical Trajectory Flightpath */}
      <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-dashed border-white/15 space-y-12 ml-4 sm:ml-8 md:ml-16">
        {/* Animated Glow Line Indicator */}
        <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-blue-500 pointer-events-none opacity-60" />

        {journeyWaypoints.map((waypoint, index) => {
          const isCurrent = waypoint.status === "ACTIVE";
          const isFuture = waypoint.status === "FUTURE OBJECTIVE";

          return (
            <motion.div
              key={waypoint.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Waypoint Orbital Node Pin */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCurrent
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-110"
                    : isFuture
                    ? "bg-purple-600/40 border border-purple-400 text-purple-300"
                    : "bg-[#080B14] border-2 border-white/30 text-white group-hover:border-cyan-400"
                }`}
              >
                {isCurrent ? (
                  <Radio className="w-3.5 h-3.5 animate-pulse text-black" />
                ) : isFuture ? (
                  <Sparkles className="w-3.5 h-3.5" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white group-hover:bg-cyan-400 transition-colors" />
                )}
              </div>

              {/* Waypoint Content Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden transition-all duration-300 group-hover:border-white/20">
                {/* Subtle Glow Corner */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none ${
                    isCurrent
                      ? "bg-cyan-500/15"
                      : isFuture
                      ? "bg-purple-600/15"
                      : "bg-blue-600/10"
                  }`}
                />

                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-white/10 text-white border border-white/10">
                      {waypoint.year}
                    </span>
                    <span className="text-xs font-mono-tech text-cyan-400/90 tracking-wider uppercase">
                      {waypoint.roleType}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full border ${
                      isCurrent
                        ? "border-cyan-400 text-cyan-300 bg-cyan-500/10"
                        : isFuture
                        ? "border-purple-400 text-purple-300 bg-purple-500/10"
                        : "border-white/10 text-[#8B91A7] bg-white/5"
                    }`}
                  >
                    {waypoint.status}
                  </span>
                </div>

                {/* Waypoint Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {waypoint.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono-tech text-[#8B91A7] mb-4">
                  {waypoint.organization}
                </div>

                {/* Description */}
                <p className="text-sm text-[#8B91A7] leading-relaxed mb-5">
                  {waypoint.description}
                </p>

                {/* Key Milestones */}
                <div className="space-y-2 mb-5">
                  {waypoint.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-white/90"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Waypoint Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {waypoint.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 border border-white/5 text-[#8B91A7]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono-tech text-[#8B91A7]/80">
                    {waypoint.coordinates}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trajectory Next Frontier Beacon */}
      <div className="flex flex-col items-center mt-16 text-center">
        <div className="w-8 h-8 rounded-full border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center mb-3">
          <Navigation className="w-4 h-4 text-cyan-400 rotate-45" />
        </div>
        <div className="text-xs font-mono-tech text-cyan-300 tracking-[0.25em] uppercase">
          DESTINATION: NEXT IMPACTFUL SOFTWARE ROLE
        </div>
      </div>
    </section>
  );
}
