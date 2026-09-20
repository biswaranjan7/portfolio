"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { achievements, type MissionAchievement } from "@/data/achievements";
import { internshipData } from "@/data/internship";
import {
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  X,
  FileText,
  Sparkles,
  Eye
} from "lucide-react";

export function AchievementSatellite() {
  const [activeMission, setActiveMission] = useState<MissionAchievement | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="missions" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 05 // ORBITAL MISSIONS"
        title="MISSIONS COMPLETED"
        subtitle="Floating orbital telemetry stations representing competitive milestones, accredited industry internships, and academic honors."
      />

      {/* 1. SEPARATE FEATURED INTERNSHIP WITH CERTIFICATE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 glass-card rounded-3xl border border-cyan-500/30 p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-[0_8px_40px_rgba(6,182,212,0.12)] backdrop-blur-xl group"
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-mono-tech tracking-[0.25em] text-cyan-300 uppercase">
              // INDUSTRY EXPEDITION // OFFICIALLY VERIFIED INTERNSHIP
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED CREDENTIAL</span>
          </div>
        </div>

        {/* Internship Content (Exact Format Requested) */}
        <div>
          {/* Company Name */}
          <div className="mb-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
              {internshipData.companyName}
            </h3>
            <p className="text-xs sm:text-sm font-mono-tech text-cyan-400 mt-1">
              {internshipData.organizationDetails}
            </p>
          </div>

          {/* Role — Duration */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm sm:text-base font-heading font-bold text-amber-300">
              {internshipData.role} — {internshipData.duration}
            </span>
            <span className="text-xs font-mono-tech text-purple-300">
              ({internshipData.dateRange})
            </span>
          </div>

          {/* Short 2-3 line description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {internshipData.description}
          </p>

          {/* Work / Contributions */}
          <div className="mt-5 space-y-2.5">
            {internshipData.contributions.map((contribution, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <span className="text-cyan-400 font-bold text-base leading-none mt-0.5">•</span>
                <span className="leading-relaxed">{contribution}</span>
              </div>
            ))}
          </div>

          {/* Tech: Python • React • etc. */}
          <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono-tech text-amber-400 font-bold tracking-wider mr-1">
              Tech:
            </span>
            <span className="text-xs sm:text-sm font-mono-tech text-cyan-300 font-medium">
              {internshipData.techStack.join(" • ")}
            </span>
          </div>

          {/* Actions for Certificate */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={internshipData.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#03040A] font-heading font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW CERTIFICATE (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setShowCertificateModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono-tech text-xs transition-colors"
              >
                <Eye className="w-4 h-4 text-purple-400" />
                <span>INSPECT CERTIFICATE PREVIEW</span>
              </button>
            </div>

            <div className="font-mono-tech text-xs text-slate-400 flex items-center gap-2">
              <span className="text-cyan-300">STU ID:</span>
              <span className="text-white font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {internshipData.studentId}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. THE 3 REMAINING MISSION SECTIONS */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <h3 className="text-xs font-mono-tech tracking-[0.25em] text-purple-300 uppercase">
            // ORBITAL MISSIONS & COMPETITIVE TELEMETRY ({achievements.length} ACTIVE STATIONS)
          </h3>
        </div>

        {/* 3 Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                {/* Floating Orbit Aura */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 group-hover:bg-purple-600/20 rounded-full blur-3xl transition-colors pointer-events-none" />

                <div>
                  {/* Mission Header Bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      <span className="text-[10px] font-mono-tech tracking-[0.2em] text-purple-300 uppercase">
                        {achievement.missionCode}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-white/5 border border-white/10 text-cyan-300">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Mission Title */}
                  <h4 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 tracking-tight leading-snug">
                    {achievement.title}
                  </h4>
                  <div className="text-xs font-mono-tech text-[#8B91A7] mb-4">
                    {achievement.organization}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#8B91A7] line-clamp-3 leading-relaxed mb-6">
                    {achievement.summary}
                  </p>
                </div>

                {/* Mission Highlights List Preview */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-mono-tech text-[11px] group-hover:underline">
                    INSPECT TELEMETRY ↗
                  </span>
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Full Modal Dialog (Native PDF Embed) */}
      <AnimatePresence>
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertificateModal(false)}
              className="fixed inset-0 bg-[#03040A]/90 backdrop-blur-2xl -z-10"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-4xl bg-[#080B14] border border-cyan-500/30 rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 pb-3 border-b border-white/10">
                <div>
                  <div className="text-[10px] font-mono-tech tracking-widest text-cyan-400 uppercase mb-1">
                    ACCREDITED CERTIFICATE OF COMPLETION
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                    {internshipData.role}
                  </h4>
                  <p className="text-xs font-mono-tech text-slate-400">
                    {internshipData.companyName} • AICTE • IBM SkillsBuild
                  </p>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex-1 min-h-[460px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 my-2">
                <iframe
                  src={`${internshipData.certificateUrl}#toolbar=0`}
                  className="w-full h-full min-h-[460px] rounded-xl border-0"
                  title="Official Edunet AI Internship Certificate"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="font-mono-tech text-cyan-300">
                  STU ID: <span className="text-white font-mono">{internshipData.studentId}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={internshipData.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full font-heading font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-[#03040A] flex items-center gap-1.5 transition-all"
                  >
                    <span>OPEN OFFICIAL PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setShowCertificateModal(false)}
                    className="px-4 py-2 rounded-full font-mono-tech text-xs bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
