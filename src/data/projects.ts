export interface Project {
  id: string;
  title: string;
  planetName: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "AI & Systems" | "Creative Tech" | "Developer Tools";
  technologies: string[];
  image: string;
  gradient: string;
  glowColor: string;
  github: string;
  live: string;
  features: string[];
  architectureHighlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "orbit-flow",
    title: "OrbitFlow — Real-Time Cloud Workspace",
    planetName: "KEPLER-PRIME",
    tagline: "Collaborative distributed workspace with edge state synchronization",
    description: "A high-performance collaborative suite featuring real-time multiplayer document sync, visual workflow builder, and distributed edge caching.",
    longDescription: "OrbitFlow was architected to solve real-time latency challenges in collaborative web environments. Built on top of Next.js 15, WebSockets, and CRDTs (Conflict-free Replicated Data Types), it delivers sub-30ms state convergence across geographically distributed users with zero data corruption.",
    category: "Full Stack",
    technologies: ["Next.js 15", "TypeScript", "Node.js", "WebSocket", "Redis", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/project-1.webp",
    gradient: "from-purple-600/30 via-indigo-600/20 to-blue-600/30",
    glowColor: "rgba(139, 92, 246, 0.4)",
    github: "https://github.com/biswaranjan7/orbit-flow",
    live: "https://orbit-flow-demo.vercel.app",
    features: [
      "CRDT-based conflict-free multiplayer canvas & state sync",
      "Dynamic visual node engine for automated cloud workflows",
      "Granular role-based access control with JWT & session caching",
      "Sub-30ms global broadcast through Redis Pub/Sub cluster"
    ],
    architectureHighlights: [
      "Distributed WebSocket connection pool with automatic heartbeat reconnection",
      "Prisma ORM with PostgreSQL read replicas for sub-millisecond query caching",
      "Optimistic UI updates with reversible client transaction logs"
    ],
    featured: true
  },
  {
    id: "neural-space",
    title: "NeuroSphere — Visual Graph Intelligence",
    planetName: "NOVA-CHRONOS",
    tagline: "3D knowledge graph visualizer powered by semantic vector embeddings",
    description: "An interactive 3D knowledge map rendering complex multi-dimensional knowledge graphs with semantic proximity clustering and natural language exploration.",
    longDescription: "NeuroSphere bridges cognitive knowledge retrieval and spatial 3D interaction. Leveraging Three.js GPU instanced rendering and OpenAI/HuggingFace embeddings, it projects tens of thousands of scientific research papers and codebase symbols into an interactive, navigable 3D galaxy.",
    category: "AI & Systems",
    technologies: ["Three.js", "WebGL", "React", "Python", "FastAPI", "Vector DB", "Tailwind CSS"],
    image: "/projects/project-2.webp",
    gradient: "from-blue-600/30 via-cyan-600/20 to-teal-600/30",
    glowColor: "rgba(34, 211, 238, 0.4)",
    github: "https://github.com/biswaranjan7/neurosphere-ai",
    live: "https://neurosphere-ai.vercel.app",
    features: [
      "Hardware-accelerated 3D force-directed graph physics simulation",
      "Semantic vector indexing using cosine similarity embeddings",
      "Instant fuzzy search with contextual breadcrumb navigation",
      "Dynamic filtering by node cluster, temporal tags, and citation density"
    ],
    architectureHighlights: [
      "Octree spatial partitioning for handling 50,000+ interactive nodes at 60 FPS",
      "FastAPI asynchronous streaming response for LLM contextual summaries",
      "Custom GLSL glow shaders for celestial node highlight effects"
    ],
    featured: true
  },
  {
    id: "apex-compiler",
    title: "Vortex CLI & Build Profiler",
    planetName: "SOLIS-IX",
    tagline: "Ultra-fast developer telemetry and AST dependency analyzer",
    description: "A developer toolchain utility that parses codebases into Abstract Syntax Trees, identifying circular dependencies, performance bottlenecks, and bundle bloat.",
    longDescription: "Vortex was crafted out of a need for lightning-fast architectural insights during CI/CD pipelines. Implemented with Rust core bindings and TypeScript CLI frontends, it parses 100k+ lines of TypeScript in under 350ms and generates visual dependency radiation maps.",
    category: "Developer Tools",
    technologies: ["TypeScript", "Node.js", "Babel AST", "Rust", "WebAssembly", "Tailwind CSS"],
    image: "/projects/project-3.webp",
    gradient: "from-violet-600/30 via-purple-600/20 to-pink-600/30",
    glowColor: "rgba(168, 85, 247, 0.4)",
    github: "https://github.com/biswaranjan7/vortex-profiler",
    live: "https://vortex-profiler.vercel.app",
    features: [
      "Parallel AST parsing across multi-threaded worker pools",
      "Automated circular import detection with graph cycle traversal",
      "CI/CD export to Markdown and JSON telemetry dashboards",
      "Interactive SVG treemap visualization of bundle weight"
    ],
    architectureHighlights: [
      "Zero-dependency AST visitor optimized for V8 Turbofan execution",
      "Memory-efficient bitwise flag tracking for visited graph nodes",
      "WebAssembly-compiled tokenizer for ultra-high throughput"
    ],
    featured: true
  },
  {
    id: "cosmic-commerce",
    title: "AetherStore — Headless Next-Gen Commerce",
    planetName: "AETHERIA-V",
    tagline: "Headless e-commerce engine with predictive prefetching & micro-animations",
    description: "A showcase modern store experience combining fluid page transitions, instant search, server components, and secure Stripe payment processing.",
    longDescription: "AetherStore explores the frontier of retail web performance. Featuring Next.js Server Actions, optimistic checkout updates, and automated image compression pipelines, the platform achieves a perfect 100 Lighthouse performance score.",
    category: "Full Stack",
    technologies: ["Next.js", "React", "Stripe API", "Supabase", "Zustand", "Framer Motion"],
    image: "/projects/project-4.webp",
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-600/30",
    glowColor: "rgba(59, 130, 246, 0.4)",
    github: "https://github.com/biswaranjan7/aether-store",
    live: "https://aether-store.vercel.app",
    features: [
      "Instant speculative prefetching of product routes on hover",
      "Full end-to-end cart persistence with encrypted localStorage backup",
      "Stripe payment intent integration with webhook reconciliation",
      "Smooth layout animations with Framer Motion shared layout ID"
    ],
    architectureHighlights: [
      "Incremental Static Regeneration (ISR) for instant catalog updates",
      "Edge middleware geo-based currency conversion and tax computation",
      "Zero-shift responsive image delivery via next/image WebP pipeline"
    ],
    featured: false
  }
];
