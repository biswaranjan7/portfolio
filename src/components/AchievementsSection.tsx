"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { credentialGroups } from "@/data/credentials";
import { Award, Flame, Users, Sparkles, ShieldCheck, ExternalLink } from "lucide-react";

export function AchievementsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "certifications":
        return <Award className="w-8 h-8 text-amber-400" />;
      case "soft-skills":
        return <Flame className="w-8 h-8 text-orange-400" />;
      case "extra-curricular":
        return <Users className="w-8 h-8 text-cyan-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-purple-400" />;
    }
  };

  const getHeaderColor = (type: string) => {
    switch (type) {
      case "certifications":
        return "text-amber-300 group-hover:text-amber-200";
      case "soft-skills":
        return "text-orange-300 group-hover:text-orange-200";
      case "extra-curricular":
        return "text-cyan-300 group-hover:text-cyan-200";
      default:
        return "text-white";
    }
  };

  const getDiamondColor = (type: string) => {
    switch (type) {
      case "certifications":
        return "text-amber-400";
      case "soft-skills":
        return "text-orange-400";
      case "extra-curricular":
        return "text-cyan-400";
      default:
        return "text-purple-400";
    }
  };

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 06 // HONORS & CREDENTIALS"
        title="ACHIEVEMENTS"
        subtitle="Accredited technical certifications, foundational soft skills, and collegiate co-curricular engagements."
      />

      {/* Grid of 3 Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {credentialGroups.map((group, index) => {
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-7 sm:p-8 rounded-3xl border ${group.accentBorder} relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl`}
            >
              {/* Dynamic Aura Glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                style={{ backgroundColor: group.accentGlow }}
              />

              <div>
                {/* Header Sector Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono-tech tracking-[0.2em] text-[#8B91A7] uppercase">
                    {group.code}
                  </span>
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shadow-inner">
                    {getIcon(group.type)}
                  </div>
                </div>

                {/* Group Title */}
                <h3
                  className={`text-2xl font-heading font-black tracking-wider uppercase mb-3 transition-colors ${getHeaderColor(
                    group.type
                  )}`}
                >
                  {group.title}
                </h3>

                <p className="text-xs text-[#8B91A7] leading-relaxed mb-8">
                  {group.description}
                </p>

                {/* Items List */}
                <div className="space-y-5">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`text-sm ${getDiamondColor(group.type)} mt-0.5 shrink-0`}>
                          ✦
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-sm font-heading font-semibold text-white tracking-tight">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span
                                className={`text-[9px] font-mono-tech px-2 py-0.5 rounded-full border shrink-0 ${group.badgeColor}`}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.subtitle && (
                            <p className="text-xs text-[#8B91A7] leading-relaxed">
                              {item.subtitle}
                            </p>
                          )}
                          {item.certId && (
                            <div className="text-[10px] font-mono-tech text-slate-400 mt-1 flex items-center gap-1.5">
                              <span className="text-[#8B91A7]">Cert ID:</span>
                              <span className="text-white/80 font-mono">{item.certId}</span>
                            </div>
                          )}
                          {item.verifyUrl && (
                            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                              <a
                                href={item.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-mono-tech text-amber-300 hover:text-amber-200 hover:underline transition-colors"
                              >
                                <span>VIEW VERIFIED CERTIFICATE</span>
                                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
                              </a>
                              <span className="text-[9px] font-mono-tech text-emerald-400">
                                ● VERIFIED
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Telemetry Verification Bar */}
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#8B91A7]">
                <div className="flex items-center gap-1.5 text-white/80 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>VERIFIED RECORD</span>
                </div>
                <span className="text-[10px] uppercase text-[#8B91A7]/70">
                  {"// B.TECH CSE"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
