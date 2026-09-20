import Link from "next/link";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { PageTransition } from "@/components/PageTransition";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Journey Trajectory — Biswa Ranjan Muduli",
  description: "Spacecraft flightpath and chronological milestones of Biswa Ranjan Muduli.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO UNIVERSE ZENITH</span>
          </Link>
        </div>
        <JourneyTimeline />
      </div>
    </PageTransition>
  );
}
