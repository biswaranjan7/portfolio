export interface TrajectoryWaypoint {
  id: string;
  year: string;
  title: string;
  organization: string;
  roleType: "Academic Launch" | "Engineering Milestone" | "Internship / Industry" | "Leadership / Community" | "Next Mission";
  status: "COMPLETED" | "ACTIVE" | "FUTURE OBJECTIVE";
  description: string;
  achievements: string[];
  skills: string[];
  coordinates: string; // Sci-fi orbital telemetry
}

export const journeyWaypoints: TrajectoryWaypoint[] = [
  {
    id: "mission-init",
    year: "2022",
    title: "Launch: B.Tech in Computer Science & Engineering",
    organization: "University Engineering Campus",
    roleType: "Academic Launch",
    status: "COMPLETED",
    description: "Began foundational exploration into core computation: programming in C/C++, discrete mathematics, object-oriented concepts, and basic systems design.",
    achievements: [
      "Mastered low-level algorithms, dynamic memory structures, and recursion",
      "Achieved top quartile academic ranking across core computer science subjects",
      "Founded a collaborative peer study group focusing on algorithmic problem solving"
    ],
    skills: ["C/C++", "DSA Fundamentals", "Linux", "Git"],
    coordinates: "ORBIT // LEO-01 (LAT: 20.296° N, LON: 85.824° E)"
  },
  {
    id: "milestone-fullstack",
    year: "2023",
    title: "First Full-Stack Exploration & Web Systems",
    organization: "Independent Engineering Labs",
    roleType: "Engineering Milestone",
    status: "COMPLETED",
    description: "Expanded horizons from algorithmic theory to distributed web architectures. Built and deployed full-stack applications with React, Node.js, and relational databases.",
    achievements: [
      "Architected responsive SPAs with modern React hooks and Tailwind design systems",
      "Built resilient RESTful API micro-services with JWT authentication & MongoDB",
      "Participated in multiple 48-hour collegiate hackathons, leading frontend development"
    ],
    skills: ["React.js", "JavaScript ES6+", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    coordinates: "TRAJECTORY // LUNAR-TRANSFER-02"
  },
  {
    id: "swe-internship",
    year: "2024",
    title: "Software Engineering Intern / Web Developer",
    organization: "Tech Innovation Studio [Edit with your Company]",
    roleType: "Internship / Industry",
    status: "COMPLETED",
    description: "Collaborated in an agile product engineering squad, translating Figma specs into production-grade Next.js user interfaces and optimizing server response latencies.",
    achievements: [
      "Reduced client bundle size by 28% through dynamic imports and route code-splitting",
      "Engineered reusable UI component libraries adhered to strict accessibility standards",
      "Authored unit tests and automated CI verification workflows with GitHub Actions"
    ],
    skills: ["Next.js", "TypeScript", "RESTful APIs", "Jest", "PostgreSQL", "Docker"],
    coordinates: "ORBITAL INTERSECT // MARS-TRANSIT-03"
  },
  {
    id: "systems-3d",
    year: "2025 - Present",
    title: "Advanced Systems, 3D Web & Open Source",
    organization: "Computer Science Dept & Creative Labs",
    roleType: "Leadership / Community",
    status: "ACTIVE",
    description: "Leading technical initiatives, mentoring junior engineers, and researching the intersection of WebGL 3D graphics, edge compute, and high-concurrency architectures.",
    achievements: [
      "Designed and published open-source developer toolkits and interactive web graphics",
      "Spearheaded technical workshops on Next.js 15, TypeScript, and modern dev tools",
      "Refining algorithmic mastery with 300+ problems solved across competitive coding platforms"
    ],
    skills: ["Three.js", "TypeScript", "Redis", "Distributed Caching", "System Architecture"],
    coordinates: "GEOSTATIONARY // STATION-AETHER"
  },
  {
    id: "next-frontier",
    year: "2026 & Beyond",
    title: "Next Mission: Software Engineer / Distributed Systems",
    organization: "Global Technology Enterprises & Innovative Startups",
    roleType: "Next Mission",
    status: "FUTURE OBJECTIVE",
    description: "Seeking high-impact software engineering roles to architect scalable backend systems, robust full-stack platforms, and visionary user interfaces.",
    achievements: [
      "Ready to tackle challenging distributed systems, cloud computing, and real-time platforms",
      "Passionate about collaborating in world-class engineering cultures"
    ],
    skills: ["Full Stack Engineering", "Cloud Systems", "Modern Web Architecture"],
    coordinates: "DEEP SPACE // INTERSTELLAR-HORIZON"
  }
];
