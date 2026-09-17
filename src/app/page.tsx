"use client";

import { Hero } from "@/components/Hero";
import { AboutPlanet } from "@/components/AboutPlanet";
import { SkillConstellation } from "@/components/SkillConstellation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { AchievementSatellite } from "@/components/AchievementSatellite";
import { ContactStation } from "@/components/ContactStation";
import { PageTransition } from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col space-y-16 md:space-y-24">
        {/* Sector 00: Central Celestial Hero */}
        <Hero />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Sector 01: About My Universe & 3D Planet */}
        <AboutPlanet />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        {/* Sector 02: Interactive Skill Constellation */}
        <SkillConstellation />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Sector 03: Planetary Projects System */}
        <ProjectsSection />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
        </div>

        {/* Sector 04: Spacecraft Trajectory Flightpath */}
        <JourneyTimeline />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>

        {/* Sector 05: Orbital Missions & Satellites */}
        <AchievementSatellite />

        {/* Section Divider Telemetry */}
        <div className="w-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Sector 06: Transmission Communication Station */}
        <ContactStation />
      </div>
    </PageTransition>
  );
}
