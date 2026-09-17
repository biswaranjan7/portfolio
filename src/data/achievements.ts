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
    id: "hackathon-winner",
    missionCode: "MSN-AURA-01",
    title: "National Hackathon Finalist & Top Innovator",
    organization: "Inter-Collegiate Innovation Conclave",
    date: "2024",
    category: "Hackathon",
    summary: "Built an intelligent edge telemetry monitoring system within 36 hours, evaluating real-time air quality indices across multi-sensor IoT meshes.",
    impactHighlights: [
      "Awarded Top 5 out of 180+ competitive engineering squads nationally",
      "Engineered full WebSocket data pipeline handling 2,000+ telemetry pings/sec",
      "Praised by industry jury for high visual polish and sub-50ms dashboard latency"
    ],
    satelliteType: "ORBITAL-RELAY",
    link: "https://github.com/biswaranjanmuduli"
  },
  {
    id: "dsa-milestone",
    missionCode: "MSN-CODEX-02",
    title: "Competitive Programming: 300+ Problems Solved",
    organization: "LeetCode & CodeChef",
    date: "2023 - Present",
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
    organization: "Computer Science & Engineering Department",
    date: "2023",
    category: "Academic",
    summary: "Acknowledged for sustained academic rigor, foundational theoretical proficiency, and practical software engineering project demonstrations.",
    impactHighlights: [
      "Top percentile GPA maintained across rigorous computer science curricula",
      "Excellence in Operating Systems, Database Systems, and Object-Oriented Design",
      "Selected as technical lab mentor for junior batches in C++ programming"
    ],
    satelliteType: "SOLAR-BEACON"
  },
  {
    id: "open-source-contrib",
    missionCode: "MSN-COSMOS-04",
    title: "Open Source Creator & Community Contributor",
    organization: "Global Developer Community",
    date: "2024 - Present",
    category: "Open Source",
    summary: "Created open-source UI libraries, developer boilerplate templates, and contributed documentation & bug fixes to popular modern web tooling.",
    impactHighlights: [
      "Created reusable modern React & Next.js starter templates with 50+ GitHub stars",
      "Authored clean technical documentation on WebGL and Three.js shader basics",
      "Active participant in developer forums and hackathons"
    ],
    satelliteType: "SATELLITE-PROBE",
    link: "https://github.com/biswaranjanmuduli"
  }
];
