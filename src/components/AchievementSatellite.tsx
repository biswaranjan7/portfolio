"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { achievements, type MissionAchievement } from "@/data/achievements";
import { Award, Radio, CheckCircle, ExternalLink, ShieldCheck, X } from "lucide-react";

export function AchievementSatellite() {
  const [activeMission, setActiveMission] = useState<MissionAchievement | null>(null);

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 05 // ORBITAL MISSIONS"
        title="MISSIONS COMPLETED"
        subtitle="Floating orbital telemetry stations representing competitive milestones, hackathon awards, and academic honors."
      />

      {/* Satellite Mission Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {achievements.map((achievement, index) => {
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveMission(achievement)}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Floating Orbit Aura */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 group-hover:bg-purple-600/20 rounded-full blur-3xl transition-colors pointer-events-none" />

              <div>
                {/* Mission Header Bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    <span className="text-[10px] font-mono-tech tracking-[0.2em] text-purple-300 uppercase">
                      {achievement.missionCode} // {achievement.satelliteType}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-white/5 border border-white/10 text-cyan-300">
                    {achievement.date}
                  </span>
                </div>

                {/* Mission Title */}
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 tracking-tight">
                  {achievement.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#8B91A7] mb-4">
                  {achievement.organization}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#8B91A7] line-clamp-2 leading-relaxed mb-6">
                  {achievement.summary}
                </p>
              </div>

              {/* Mission Highlights List Preview */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-mono-tech text-[11px] group-hover:underline">
                  INSPECT MISSION TELEMETRY ↗
                </span>
                <ShieldCheck className="w-4 h-4 text-purple-400" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mission Debrief Dialog Modal */}
      <AnimatePresence>
        {activeMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMission(null)}
              className="fixed inset-0 bg-[#03040A]/85 backdrop-blur-xl -z-10"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-xl bg-[#080B14] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[10px] font-mono-tech tracking-widest text-cyan-400 uppercase mb-1">
                    MISSION BRIEF // {activeMission.missionCode}
                  </div>
                  <h4 className="text-2xl font-heading font-extrabold text-white">
                    {activeMission.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveMission(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs font-mono-tech text-purple-300 mb-6">
                Organization: <span className="text-white">{activeMission.organization}</span> ({activeMission.date})
              </div>

              <p className="text-sm text-[#8B91A7] mb-6 leading-relaxed">
                {activeMission.summary}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono-tech text-white uppercase tracking-wider">
                  VERIFIED IMPACT & RESULTS:
                </div>
                {activeMission.impactHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#8B91A7]">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {activeMission.link && (
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={activeMission.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono-tech bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-1.5"
                  >
                    <span>EXTERNAL VERIFICATION</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
