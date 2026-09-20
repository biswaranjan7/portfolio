export interface MissionAchievement {
  id: string;
  missionCode: string;
  title: string;
  organization: string;
  date: string;
  category: "Hackathon" | "Academic" | "Competitive" | "Open Source";
  summary: string;
  impactHighlights: string[];
  satelliteType: "SATELLITE-PROBE" | "ORBITAL-RELAY" | "DEEP-RADAR" | "SOLAR-BEACON";
  link?: string;
}

export const achievements: MissionAchievement[] = [
  {
    id: "dsa-milestone",
    missionCode: "MSN-CODEX-02",
    title: "Competitive Programming: 300+ Problems Solved",
    organization: "LeetCode & CodeChef",
    date: "2024 - Present",
    category: "Competitive",
    summary: "Consistent dedication to algorithmic mastery across data structures, graph theory, tree traversals, dynamic programming, and binary search.",
    impactHighlights: [
      "Solved 300+ algorithmic challenges with optimized asymptotic complexities",
      "Ranked in top percentiles in multiple weekly competitive coding contests",
      "Special focus on space-time optimization and edge-case boundary testing"
    ],
    satelliteType: "DEEP-RADAR",
    link: "https://leetcode.com/u/biswaranjanmuduli"
  },
  {
    id: "academic-merit",
    missionCode: "MSN-APEX-03",
    title: "Academic Excellence & Dean's Merit Recognition",
    organization: "Government College of Engineering, Kalahandi (CSE Dept)",
    date: "2025",
    category: "Academic",
    summary: "Acknowledged for sustained academic rigor, foundational theoretical proficiency, and practical software engineering project demonstrations.",
    impactHighlights: [
      "Top percentile GPA maintained across core B.Tech Computer Science curricula",
      "Excellence in Operating Systems, Database Systems, and Object-Oriented Design",
      "Active participant in technical problem-solving and peer peer-mentoring"
    ],
    satelliteType: "SOLAR-BEACON"
  },
  {
    id: "open-source-contrib",
    missionCode: "MSN-COSMOS-04",
    title: "Open Source Creator & Community Contributor",
    organization: "Global Developer Community",
    date: "2025 - Present",
    category: "Open Source",
    summary: "Created open-source UI libraries, developer boilerplate templates, and contributed documentation & bug fixes to popular modern web tooling.",
    impactHighlights: [
      "Created reusable modern React & Next.js starter templates with 50+ GitHub stars",
      "Authored clean technical documentation on WebGL and Three.js shader basics",
      "Active participant in developer forums and hackathons"
    ],
    satelliteType: "SATELLITE-PROBE",
    link: "https://github.com/biswaranjan7?tab=repositories"
  }
];
