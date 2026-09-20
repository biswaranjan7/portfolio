import Link from "next/link";
import { AchievementsSection } from "@/components/AchievementsSection";
import { PageTransition } from "@/components/PageTransition";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Achievements & Credentials — Biswa Ranjan Muduli",
  description: "Certifications, soft skills, and co-curricular pursuits of Biswa Ranjan Muduli.",
};

export default function AchievementsPage() {
  return (
    <PageTransition>
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO UNIVERSE ZENITH</span>
          </Link>
        </div>
        <AchievementsSection />
      </div>
    </PageTransition>
  );
}
