"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#03040A]/85 backdrop-blur-xl -z-10"
          />

          {/* Modal Content Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative w-full max-w-4xl bg-[#080B14]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header Telemetry & Close */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono-tech tracking-widest text-cyan-300 uppercase">
                    SECTOR // PLANET {project.planetName}
                  </span>
                </div>
                <h3
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight"
                >
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Project Showcase Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 border border-white/10 bg-[#03040A]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent opacity-60" />
            </div>

            {/* Description & Overview */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-widest text-purple-300 mb-2">
                  // MISSION OVERVIEW & ARCHITECTURE
                </h4>
                <p className="text-sm sm:text-base text-[#8B91A7] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-widest text-cyan-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>CORE CAPABILITIES & ENGINEERING HIGHLIGHTS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#8B91A7] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>DEPLOYED TECH STACK</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/5 border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-heading font-medium bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-heading font-medium bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
                >
                  <span>LAUNCH LIVE PROTOTYPE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
