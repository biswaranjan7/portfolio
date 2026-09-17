"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { constellationSkills, skillCategories, type SkillNode } from "@/data/skills";
import { Sparkles, Layers, Cpu, Compass, CheckCircle2 } from "lucide-react";

export function SkillConstellation() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(constellationSkills[0]);
  const [activeSkillId, setActiveSkillId] = useState<string>("ts");

  const filteredSkills =
    selectedCategory === "All"
      ? constellationSkills
      : constellationSkills.filter((s) => s.category === selectedCategory);

  const activeSkill = constellationSkills.find((s) => s.id === activeSkillId) || constellationSkills[0];

  return (
    <section id="skills" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 02 // TECHNICAL MATRIX"
        title="MY CONSTELLATION"
        subtitle="An interconnected ecosystem of engineering disciplines, runtime environments, and algorithmic foundations."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all border ${
            selectedCategory === "All"
              ? "bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              : "bg-white/5 border-white/10 text-[#8B91A7] hover:text-white hover:bg-white/10"
          }`}
        >
          All Nodes ({constellationSkills.length})
        </button>
        {["Frontend", "Backend", "Programming", "Database", "Tools", "Core CS"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all border ${
              selectedCategory === cat
                ? "bg-cyan-500/30 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                : "bg-white/5 border-white/10 text-[#8B91A7] hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Constellation Map Canvas / SVG (Col 8) */}
        <div className="lg:col-span-8 relative glass-panel p-4 sm:p-8 rounded-3xl border border-white/10 overflow-hidden min-h-[460px] sm:min-h-[540px] flex items-center justify-center">
          {/* Subtle Grid Coordinates Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-4 left-4 text-[10px] font-mono-tech text-[#8B91A7] tracking-widest uppercase">
            COORDINATE GRID // INTERACTIVE CONSTELLATION MAP
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-mono-tech text-cyan-400/80 tracking-widest uppercase">
            CLICK OR HOVER ANY STAR NODE
          </div>

          <svg
            className="w-full h-[400px] sm:h-[480px] select-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Draw Constellation Connection Lines */}
            {constellationSkills.map((skill) => {
              const isSourceActive = skill.id === activeSkillId;
              return skill.connections.map((targetId) => {
                const targetSkill = constellationSkills.find((s) => s.id === targetId);
                if (!targetSkill) return null;

                const isLineConnectedToActive =
                  skill.id === activeSkillId || targetSkill.id === activeSkillId;

                return (
                  <line
                    key={`${skill.id}-${targetId}`}
                    x1={skill.x}
                    y1={skill.y}
                    x2={targetSkill.x}
                    y2={targetSkill.y}
                    stroke={
                      isLineConnectedToActive
                        ? "rgba(34, 211, 238, 0.75)"
                        : "rgba(255, 255, 255, 0.12)"
                    }
                    strokeWidth={isLineConnectedToActive ? 0.6 : 0.25}
                    strokeDasharray={isLineConnectedToActive ? "none" : "1 1"}
                    className="transition-all duration-300"
                  />
                );
              });
            })}

            {/* Draw Glowing Star Nodes */}
            {filteredSkills.map((skill) => {
              const isActive = skill.id === activeSkillId;
              const isHovered = hoveredSkill?.id === skill.id;

              return (
                <g
                  key={skill.id}
                  className="cursor-pointer group"
                  onClick={() => setActiveSkillId(skill.id)}
                  onMouseEnter={() => {
                    setHoveredSkill(skill);
                    setActiveSkillId(skill.id);
                  }}
                >
                  {/* Outer Pulsing Aura when Active */}
                  {isActive && (
                    <circle
                      cx={skill.x}
                      cy={skill.y}
                      r="4.5"
                      fill={skill.color || "#8B5CF6"}
                      opacity="0.25"
                      className="animate-pulse"
                    />
                  )}

                  {/* Star Outer Halo */}
                  <circle
                    cx={skill.x}
                    cy={skill.y}
                    r={isActive || isHovered ? "2.5" : "1.6"}
                    fill={skill.color || "#3B82F6"}
                    opacity={isActive || isHovered ? "0.9" : "0.5"}
                    className="transition-all duration-300"
                  />

                  {/* Star Bright Center */}
                  <circle
                    cx={skill.x}
                    cy={skill.y}
                    r={isActive || isHovered ? "1.2" : "0.8"}
                    fill="#FFFFFF"
                  />

                  {/* Star Label */}
                  <text
                    x={skill.x}
                    y={skill.y - 2.8}
                    textAnchor="middle"
                    fill={isActive ? "#22D3EE" : "#E2E8F0"}
                    fontSize="2.4"
                    fontWeight={isActive ? "700" : "500"}
                    fontFamily="var(--font-mono)"
                    className="transition-all duration-300 pointer-events-none"
                  >
                    {skill.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Bottom telemetry legend */}
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono-tech text-[#8B91A7] border-t border-white/5 pt-2">
            <span>ACTIVE SECTOR: {activeSkill.category.toUpperCase()}</span>
            <span>NODES LINKED: {activeSkill.connections.length}</span>
          </div>
        </div>

        {/* Selected Skill Information Telemetry Card (Col 4) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-2xl border border-white/12 relative overflow-hidden"
            >
              {/* Radial Accent Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: activeSkill.color ? `${activeSkill.color}33` : "rgba(139,92,246,0.2)" }}
              />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10">
                    {activeSkill.category}
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-white mt-2">
                    {activeSkill.name}
                  </h3>
                </div>
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    backgroundColor: activeSkill.color || "#8B5CF6",
                    boxShadow: `0 0 15px ${activeSkill.color || "#8B5CF6"}`,
                  }}
                />
              </div>

              <div className="text-xs font-mono-tech text-purple-300 mb-4">
                Proficiency Level: <span className="text-white font-semibold">{activeSkill.level}</span>
              </div>

              <p className="text-sm text-[#8B91A7] mb-6 leading-relaxed">
                {activeSkill.tagline}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono-tech text-white/90 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>APPLIED ARCHITECTURE & USE CASES:</span>
                </div>
                <ul className="space-y-1.5">
                  {activeSkill.usedFor.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#8B91A7] pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-cyan-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono-tech text-[#8B91A7] uppercase tracking-wider mb-2">
                  Interconnected Technologies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.connections.map((connId) => {
                    const conn = constellationSkills.find((s) => s.id === connId);
                    return conn ? (
                      <button
                        key={conn.id}
                        onClick={() => setActiveSkillId(conn.id)}
                        className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-colors"
                      >
                        {conn.name} ↗
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Core Categories Breakdown Drawer */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
            <div className="text-xs font-mono-tech text-[#8B91A7] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>CATEGORY DOMAINS</span>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                  <div className="font-heading font-semibold text-white mb-0.5">{cat.name}</div>
                  <div className="text-[11px] text-[#8B91A7] truncate">
                    {cat.skills.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
