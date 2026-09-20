"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springRotateX = useSpring(rotX, { stiffness: 300, damping: 25 });
  const springRotateY = useSpring(rotY, { stiffness: 300, damping: 25 });

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current || cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation with max ±7 degrees
    const rY = ((x - centerX) / (centerX || 1)) * 7;
    const rX = -((y - centerY) / (centerY || 1)) * 7;

    rotX.set(rX);
    rotY.set(rY);

    glareX.set((x / (rect.width || 1)) * 100);
    glareY.set((y / (rect.height || 1)) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotX.set(0);
    rotY.set(0);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      data-cursor="project"
      data-cursor-text="VIEW&#10;PLANET ↗"
      className="relative rounded-3xl p-5 sm:p-6 glass-card border border-white/10 group cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      {/* Moving Glare Reflection */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-3xl"
        style={{
          background: glareBackground,
        }}
      />

      {/* Planetary Glow Shadow */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10"
        style={{ background: project.glowColor }}
      />

      {/* Card Header & Image */}
      <div>
        {/* Planetary Metadata Tag */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono-tech tracking-[0.2em] text-cyan-300 uppercase">
              PLANET // {project.planetName}
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-white/5 border border-white/10 text-[#8B91A7]">
            {project.category}
          </span>
        </div>

        {/* Project Visual Image Showcase */}
        <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-[#080B14]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            loading="lazy"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03040A] via-transparent to-transparent opacity-80" />

          {/* Quick Action Overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
            <span>DEBRIEF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#8B91A7] line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Pills & Footer */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 text-white/80 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-tech text-[#8B91A7]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              title="Live Prototype"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
