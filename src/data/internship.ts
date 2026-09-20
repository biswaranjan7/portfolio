export interface Internship {
  id: string;
  companyName: string;
  organizationDetails: string;
  role: string;
  duration: string;
  dateRange: string;
  description: string;
  contributions: string[];
  techStack: string[];
  certificateUrl: string;
  studentId: string;
  signatories: {
    name: string;
    title: string;
    org: string;
  }[];
}

export const internshipData: Internship = {
  id: "edunet-ai-internship",
  companyName: "Edunet Foundation",
  organizationDetails: "In collaboration with All India Council for Technical Education (AICTE) & IBM SkillsBuild",
  role: "Artificial Intelligence Intern",
  duration: "6 Weeks",
  dateRange: "11th May, 2026 – 21st June, 2026",
  description: "Completed intensive 6 weeks internship on Artificial Intelligence in collaboration with All India Council for Technical Education (AICTE), implemented by Edunet Foundation. Built machine learning models, executed end-to-end data science pipelines, and solved real-world AI problem statements.",
  contributions: [
    "Engineered and evaluated predictive machine learning models using Python and Scikit-Learn with comprehensive data preprocessing pipelines.",
    "Analyzed real-world datasets, optimized model evaluation metrics, and implemented classification algorithms under industry mentorship."
  ],
  techStack: [
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Scikit-Learn",
    "Data Analysis",
    "IBM SkillsBuild",
    "AICTE"
  ],
  certificateUrl: "/edunet-internship-certificate.pdf",
  studentId: "STU69e9e8d6703681776937174",
  signatories: [
    {
      name: "Nagesh Singh",
      title: "Chairman",
      org: "Edunet Foundation"
    },
    {
      name: "Dr. Buddha Chandrasekhar",
      title: "Chief Coordinating Officer",
      org: "AICTE"
    }
  ]
};
