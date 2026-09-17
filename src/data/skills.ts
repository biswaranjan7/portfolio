export interface SkillNode {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Programming" | "Database" | "Tools" | "Core CS";
  level: "Advanced / Core" | "Proficient" | "Specialized";
  tagline: string;
  usedFor: string[];
  connections: string[];
  x: number; // 0 to 100 percentage for constellation positioning
  y: number; // 0 to 100 percentage for constellation positioning
  color?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Architecting responsive, high-performance, accessible client interfaces.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "HTML5/CSS3", "Framer Motion"]
  },
  {
    name: "Backend",
    description: "Building scalable distributed APIs, microservices, and asynchronous pipelines.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "GraphQL", "FastAPI"]
  },
  {
    name: "Programming",
    description: "Core algorithmic problem-solving and systems software engineering.",
    skills: ["C / C++", "Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"]
  },
  {
    name: "Database & Cloud",
    description: "Relational, document, and in-memory data storage and cloud infrastructure.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM", "Firebase"]
  },
  {
    name: "Tools & DevOps",
    description: "Modern developer toolchains, containerization, and version management.",
    skills: ["Git & GitHub", "Docker", "Linux / Bash", "Postman", "Vercel", "Vite / Webpack"]
  },
  {
    name: "Core CS",
    description: "Foundational computer science theory and engineering rigor.",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems", "Operating Systems", "Computer Networks"]
  }
];

export const constellationSkills: SkillNode[] = [
  // Programming & Core
  {
    id: "cpp",
    name: "C / C++",
    category: "Programming",
    level: "Advanced / Core",
    tagline: "Low-level memory control & competitive programming foundations",
    usedFor: ["High-performance algorithms", "Data structure implementation", "System-level concepts"],
    connections: ["dsa", "python", "java"],
    x: 20,
    y: 35,
    color: "#3B82F6"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    category: "Core CS",
    level: "Advanced / Core",
    tagline: "Algorithmic problem solving and complexity optimization",
    usedFor: ["Optimal time-complexity architectures", "Graph algorithms & dynamic programming", "Technical interview readiness"],
    connections: ["cpp", "python", "java", "ts"],
    x: 32,
    y: 22,
    color: "#8B5CF6"
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    level: "Proficient",
    tagline: "Rapid prototyping, automation, and AI data engineering",
    usedFor: ["Scripting & tooling", "Backend microservices", "Data analysis & machine learning experiments"],
    connections: ["cpp", "dsa", "backend_node"],
    x: 18,
    y: 55,
    color: "#22D3EE"
  },
  {
    id: "java",
    name: "Java",
    category: "Programming",
    level: "Advanced / Core",
    tagline: "Object-oriented enterprise engineering and robust architectures",
    usedFor: ["OOP design patterns", "Modular software engineering", "Concurrency fundamentals"],
    connections: ["cpp", "dsa", "postgres"],
    x: 30,
    y: 50,
    color: "#F59E0B"
  },

  // Frontend & Creative
  {
    id: "ts",
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced / Core",
    tagline: "Strict type safety for large-scale production codebases",
    usedFor: ["Scalable application architecture", "Full-stack contract safety", "Developer experience & DX"],
    connections: ["dsa", "react", "nextjs", "backend_node"],
    x: 50,
    y: 32,
    color: "#3B82F6"
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    level: "Advanced / Core",
    tagline: "Declarative component-driven UI architecture",
    usedFor: ["Interactive single-page apps", "Custom hooks & state orchestration", "Reusable design systems"],
    connections: ["ts", "nextjs", "tailwind", "threejs"],
    x: 62,
    y: 24,
    color: "#22D3EE"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Advanced / Core",
    tagline: "Modern full-stack React framework with server-side rendering",
    usedFor: ["Server Components & SSR", "API routing & Edge rendering", "Production web applications"],
    connections: ["react", "ts", "backend_node", "postgres"],
    x: 68,
    y: 42,
    color: "#F5F7FF"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced / Core",
    tagline: "Utility-first design system engine for pixel-perfect aesthetics",
    usedFor: ["Responsive UI layouts", "Custom design tokens & glassmorphism", "Micro-animations & transitions"],
    connections: ["react", "nextjs"],
    x: 78,
    y: 28,
    color: "#38BDF8"
  },
  {
    id: "threejs",
    name: "Three.js / WebGL",
    category: "Frontend",
    level: "Specialized",
    tagline: "Interactive 3D graphics and spatial web experiences",
    usedFor: ["Procedural cosmic starfields", "3D tilt & physics simulations", "Immersive creative web design"],
    connections: ["react", "ts"],
    x: 82,
    y: 45,
    color: "#8B5CF6"
  },

  // Backend & Database
  {
    id: "backend_node",
    name: "Node.js & Express",
    category: "Backend",
    level: "Advanced / Core",
    tagline: "Event-driven asynchronous server-side runtime",
    usedFor: ["RESTful API gateways", "Real-time WebSocket servers", "Microservice architectures"],
    connections: ["ts", "nextjs", "postgres", "mongo", "docker"],
    x: 52,
    y: 60,
    color: "#10B981"
  },
  {
    id: "postgres",
    name: "PostgreSQL & SQL",
    category: "Database",
    level: "Proficient",
    tagline: "Relational database modeling with strict ACID compliance",
    usedFor: ["Schema design & indexing", "Complex analytical queries", "Prisma ORM integration"],
    connections: ["backend_node", "nextjs", "mongo", "java"],
    x: 42,
    y: 75,
    color: "#3B82F6"
  },
  {
    id: "mongo",
    name: "MongoDB",
    category: "Database",
    level: "Proficient",
    tagline: "Document database for rapid schema iteration",
    usedFor: ["NoSQL collection modeling", "Aggregation pipelines", "Full-stack prototype storage"],
    connections: ["backend_node", "postgres"],
    x: 62,
    y: 72,
    color: "#10B981"
  },
  {
    id: "docker",
    name: "Docker & Linux",
    category: "Tools",
    level: "Proficient",
    tagline: "Containerization and reproducible server environments",
    usedFor: ["Multi-stage Docker builds", "Bash server automation", "Local service orchestration"],
    connections: ["backend_node", "git"],
    x: 75,
    y: 65,
    color: "#22D3EE"
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    level: "Advanced / Core",
    tagline: "Distributed version control and team collaborative workflows",
    usedFor: ["Branching & code review", "CI/CD automated pipelines", "Open-source contribution"],
    connections: ["docker", "cpp", "ts"],
    x: 85,
    y: 78,
    color: "#F97316"
  }
];
