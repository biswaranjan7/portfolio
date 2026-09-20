"use client";

import { useState, useMemo } from "react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

export function ProjectsSection({ isFullPage = false }: { isFullPage?: boolean }) {
  void isFullPage;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "AI & Systems", "Developer Tools"];

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 03 // PLANETARY SYSTEMS"
        title="MY PLANETS"
        subtitle="A curated constellation of distributed platforms, AI graph tools, and developer utilities."
      />

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all border ${
              selectedCategory === cat
                ? "bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                : "bg-white/5 border-white/10 text-[#8B91A7] hover:text-white hover:bg-white/10"
            }`}
          >
            {cat} {cat === "All" ? `(${projects.length})` : ""}
          </button>
        ))}
      </div>

      {/* Projects Planetary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setActiveModalProject(proj)}
          />
        ))}
      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
