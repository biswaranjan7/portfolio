export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  subtitle: string;
  tagline: string;
  bio: string;
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  aboutText: {
    lead: string;
    paragraphs: string[];
    focusAreas: string[];
    currently: string[];
  };
}

export const portfolioData: PersonalInfo = {
  name: "Biswaranjan Muduli",
  firstName: "BISWARANJAN",
  lastName: "MUDULI",
  role: "Computer Science Engineering Student & Developer",
  subtitle: "CSE STUDENT • DEVELOPER",
  tagline: "I build digital experiences, experiment with technology, and turn ideas into products.",
  bio: "Passionate about modern distributed web architectures, high-performance user interfaces, and systems engineering. Constantly exploring the boundaries of software, 3D interaction, and artificial intelligence.",
  location: "Bhubaneswar, India",
  status: "ONLINE // OPEN TO OPPORTUNITIES",
  email: "biswaranjanmuduli.dev@gmail.com",
  github: "https://github.com/biswaranjanmuduli",
  linkedin: "https://linkedin.com/in/biswaranjanmuduli",
  twitter: "https://twitter.com/biswaranjan_dev",
  resumeUrl: "/resume.pdf",
  aboutText: {
    lead: "Navigating the intersection of computational engineering and modern interface craftsmanship.",
    paragraphs: [
      "I am a Computer Science Engineering student obsessed with building resilient, scalable, and visually breathtaking software. My approach blends rigorous computer science principles with meticulous attention to UI aesthetics and micro-interactions.",
      "From full-stack distributed web applications to real-time interactive 3D simulations, I believe code should not just work flawlessly—it should inspire curiosity and elevate human capability."
    ],
    focusAreas: [
      "Full Stack Web Development (Next.js, TypeScript, Node.js)",
      "High-Performance 3D & Creative Coding (Three.js, WebGL)",
      "Distributed Systems & Cloud Architecture (PostgreSQL, Docker, AWS)",
      "Algorithms, Data Structures & System Optimization"
    ],
    currently: [
      "Deepening mastery of distributed backend systems & microservices",
      "Designing high-immersion 3D web applications with Three.js",
      "Building open-source developer tooling and automation systems",
      "Seeking impactful software engineering internships & opportunities"
    ]
  }
};
