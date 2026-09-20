export interface TrajectoryWaypoint {
  id: string;
  year: string;
  title: string;
  organization: string;
  roleType:
    | "Schooling"
    | "Higher Secondary"
    | "Academic Launch"
    | "Engineering Milestone"
    | "Internship / Industry"
    | "Leadership / Community"
    | "Next Mission"
    | string;
  status: "COMPLETED" | "ACTIVE" | "FUTURE OBJECTIVE";
  description: string;
  achievements: string[];
  skills: string[];
  coordinates: string; // Sci-fi orbital telemetry
}

export const journeyWaypoints: TrajectoryWaypoint[] = [
  {
    id: "stage-1-schooling",
    year: "2022",
    title: "Stage I: Schooling",
    organization: "BENUBABA NODAL BIDYAPITHA, SABHAMUL",
    roleType: "Schooling",
    status: "COMPLETED",
    description: "The beginning of my academic journey and the foundation for how I learned to approach problems with curiosity.",
    achievements: [
      "Completed secondary school education with strong academic focus on mathematics and fundamental sciences",
      "Cultivated foundational analytical thinking, discipline, and curious problem-solving approach",
      "Active participant in school academic and science exhibitions"
    ],
    skills: ["Mathematics", "General Science", "Logical Reasoning", "Problem Solving"],
    coordinates: "ORIGIN BASE // SABHAMUL-01 (LAT: 20.264° N, LON: 86.175° E)"
  },
  {
    id: "stage-2-higher-secondary",
    year: "2024",
    title: "Stage II: Higher Secondary",
    organization: "Devi Kandal Nityananda College, Eranch",
    roleType: "Higher Secondary",
    status: "COMPLETED",
    description: "A stage that strengthened my interest in technology and prepared me for the next step into engineering.",
    achievements: [
      "Completed Higher Secondary (+2) education specializing in Science (Physics, Chemistry & Mathematics)",
      "Strengthened mathematical foundations, physical sciences, and computational logic",
      "Prepared thoroughly for competitive examinations and admission into engineering"
    ],
    skills: ["Physics", "Mathematics", "Chemistry", "Computational Logic", "Analytical Thinking"],
    coordinates: "ASCENT TRAJECTORY // ERANCH-02 (LAT: 20.245° N, LON: 86.012° E)"
  },
  {
    id: "academic-launch-btech",
    year: "2024 - 2028",
    title: "Launch: B.Tech in Computer Science & Engineering",
    organization: "Government College of Engineering, Kalahandi • Expected Graduation 2028",
    roleType: "Academic Launch",
    status: "ACTIVE",
    description: "Pursuing undergraduate degree in Computer Science & Engineering, mastering foundational computation, algorithms, operating systems, and modern software engineering paradigms.",
    achievements: [
      "Enrolled in core CSE curriculum: Data Structures & Algorithms, OOP, Database Systems & Computer Architecture",
      "Mastered low-level algorithms, dynamic memory management, and recursion in C/C++",
      "Exploring scalable web systems, distributed software development, and modern JavaScript/TypeScript ecosystems"
    ],
    skills: ["C/C++", "DSA Fundamentals", "Web Development", "Database Systems", "Git"],
    coordinates: "ORBITAL NODE // GCEK-03 (LAT: 19.907° N, LON: 83.164° E)"
  },
  {
    id: "internship-edunet-ai",
    year: "2026",
    title: "Artificial Intelligence Intern",
    organization: "Edunet Foundation (in collaboration with AICTE & IBM SkillsBuild)",
    roleType: "Internship / Industry",
    status: "COMPLETED",
    description: "Completed intensive 6 weeks internship on Artificial Intelligence in collaboration with All India Council for Technical Education (AICTE), implemented by Edunet Foundation.",
    achievements: [
      "Engineered and evaluated predictive machine learning models using Python and Scikit-Learn with data preprocessing pipelines",
      "Analyzed real-world datasets, optimized model evaluation metrics, and implemented classification algorithms under industry mentorship",
      "Awarded verified Certificate of Completion (STU ID: STU69e9e8d6703681776937174)"
    ],
    skills: ["Python", "Artificial Intelligence", "Machine Learning", "Scikit-Learn", "Data Analysis", "IBM SkillsBuild"],
    coordinates: "ORBITAL RELAY // AICTE-EDUNET-04 (VERIFIED CERTIFICATE)"
  },
  {
    id: "milestone-fullstack",
    year: "2024 - 2025",
    title: "Full-Stack Exploration & Modern Web Systems",
    organization: "Independent Engineering Labs",
    roleType: "Engineering Milestone",
    status: "COMPLETED",
    description: "Expanded horizons from core computation to distributed web architectures. Built and deployed full-stack applications with React, Next.js, Node.js, and relational databases.",
    achievements: [
      "Architected responsive SPAs with modern React hooks, TypeScript, and Tailwind design systems",
      "Built resilient RESTful API micro-services with JWT authentication & MongoDB / PostgreSQL",
      "Participated in collegiate hackathons, leading frontend development and state synchronization"
    ],
    skills: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    coordinates: "TRAJECTORY // LUNAR-TRANSFER-04"
  },
  {
    id: "systems-3d",
    year: "2025 - Present",
    title: "Advanced Systems, 3D Web & Open Source",
    organization: "Creative Tech & Open Source Labs",
    roleType: "Leadership / Community",
    status: "ACTIVE",
    description: "Leading technical initiatives, mentoring peers, and researching the intersection of WebGL 3D graphics, edge compute, and high-concurrency architectures.",
    achievements: [
      "Designed and published open-source developer toolkits and interactive web graphics",
      "Spearheaded technical workshops on Next.js 15, TypeScript, and modern dev tools",
      "Refining algorithmic mastery with 300+ problems solved across competitive coding platforms"
    ],
    skills: ["Three.js", "Next.js", "TypeScript", "Redis", "Distributed Caching", "System Architecture"],
    coordinates: "GEOSTATIONARY // STATION-AETHER"
  },
  {
    id: "next-frontier",
    year: "2028 & Beyond",
    title: "Next Mission: Software Engineer / Distributed Systems",
    organization: "Global Technology Enterprises & Innovative Startups",
    roleType: "Next Mission",
    status: "FUTURE OBJECTIVE",
    description: "Seeking high-impact software engineering roles to architect scalable backend systems, robust full-stack platforms, and visionary user interfaces.",
    achievements: [
      "Ready to tackle challenging distributed systems, cloud computing, and real-time platforms",
      "Passionate about collaborating in world-class engineering cultures upon B.Tech graduation"
    ],
    skills: ["Full Stack Engineering", "Cloud Systems", "Modern Web Architecture"],
    coordinates: "DEEP SPACE // INTERSTELLAR-HORIZON"
  }
];
