export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'MLOps & Pipeline' | 'Explainable AI' | 'BI & Analytics';
  role: string;
  techStack: string[];
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  githubUrl?: string;
  demoType: 'careai' | 'pyspark' | 'superstore' | 'churn';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  logo?: string;
  location?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  date?: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
