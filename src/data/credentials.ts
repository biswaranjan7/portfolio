export interface CredentialItem {
  name: string;
  subtitle?: string;
  tag?: string;
  verifyUrl?: string;
  certId?: string;
}

export interface CredentialGroup {
  id: string;
  title: string;
  code: string;
  type: "certifications" | "soft-skills" | "extra-curricular";
  description: string;
  accentGlow: string;
  accentBorder: string;
  badgeColor: string;
  items: CredentialItem[];
}

export const credentialGroups: CredentialGroup[] = [
  {
    id: "certifications",
    title: "CERTIFICATIONS",
    code: "SECTOR-HONOR // CRD-01",
    type: "certifications",
    description: "Accredited technical credentials and professional domain specializations.",
    accentGlow: "rgba(245, 158, 11, 0.15)",
    accentBorder: "border-amber-500/30 group-hover:border-amber-400/60",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
    items: [
      {
        name: "Machine Learning Specialization",
        subtitle: "DeepLearning.AI & Stanford Online (Instructed by Andrew Ng)",
        tag: "Stanford & DL.AI",
        verifyUrl: "https://coursera.org/share/30594765b22356a33b75a4e4cc8138c1",
        certId: "L7XQIDUJBR2J"
      },
      {
        name: "Oracle Certified Foundations Associate — Agentic AI",
        subtitle: "Oracle University • Agentic AI Foundations Associate",
        tag: "Oracle Certified",
        verifyUrl: "/certificates/oracle-agentic-ai.pdf",
        certId: "103490200AAI26OFA"
      },
      {
        name: "AI in Manufacturing — Skill Competency",
        subtitle: "Microsoft & NCVET (National Council for Vocational Education)",
        tag: "Microsoft & NCVET",
        verifyUrl: "/certificates/microsoft-ai-manufacturing.pdf",
        certId: "2026062705985980-165105"
      },
      {
        name: "TCS iON Career Edge — Generative AI Essentials",
        subtitle: "Tata Consultancy Services (TCS iON) • Prompt Eng & GenAI",
        tag: "TCS iON Certified",
        verifyUrl: "/certificates/tcs-ion-generative-ai.pdf",
        certId: "8766-32775363-1016"
      }
    ]
  },
  {
    id: "soft-skills",
    title: "SOFT SKILLS",
    code: "SECTOR-HONOR // SFT-02",
    type: "soft-skills",
    description: "Interpersonal competencies, team coordination, and problem-solving mastery.",
    accentGlow: "rgba(251, 146, 60, 0.15)",
    accentBorder: "border-orange-500/30 group-hover:border-orange-400/60",
    badgeColor: "text-orange-300 bg-orange-500/10 border-orange-500/20",
    items: [
      {
        name: "Leadership",
        subtitle: "Guiding peer groups & leading development sprints",
        tag: "Initiative"
      },
      {
        name: "Problem Solving",
        subtitle: "Analytical deconstruction & algorithmic rigor",
        tag: "Analysis"
      },
      {
        name: "Team Collaboration",
        subtitle: "Agile alignment, peer feedback & shared success",
        tag: "Synergy"
      },
      {
        name: "Communication",
        subtitle: "Technical documentation & transparent ideation",
        tag: "Clarity"
      }
    ]
  },
  {
    id: "extra-curricular",
    title: "EXTRA-CURRICULAR",
    code: "SECTOR-HONOR // EXT-03",
    type: "extra-curricular",
    description: "Athletics, collaborative community clubs, and campus cultural pursuits.",
    accentGlow: "rgba(34, 211, 238, 0.15)",
    accentBorder: "border-cyan-500/30 group-hover:border-cyan-400/60",
    badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
    items: [
      {
        name: "Cricket",
        subtitle: "Tactical positioning & high-pressure focus",
        tag: "Team Sport"
      },
      {
        name: "Badminton",
        subtitle: "High-agility reflexes & strategic endurance",
        tag: "Athletics"
      },
      {
        name: "Literature Club",
        subtitle: "Creative expression, analytical discourse & debates",
        tag: "Culture"
      },
      {
        name: "Coding Club",
        subtitle: "Hackathon collaboration & peer tech mentorship",
        tag: "Community"
      }
    ]
  }
];
