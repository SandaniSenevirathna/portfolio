import { Project, Service, ExperienceItem, EducationItem, AchievementItem, SkillCategory } from '../types';

import myPortrait from '../assets/images/my.png';
import careAiImage from '../assets/images/careai_project_1786206402815.jpg';
import bigDataImage from '../assets/images/bigdata_pipeline_project_1786206421042.jpg';
import superstoreImage from '../assets/images/superstore_analytics_project_1786206438324.jpg';
import mlopsImage from '../assets/images/mlops_pipeline_project_1786206462447.jpg';
import sltcLogo from '../assets/images/sltc_logo.jpg';
import pinnawalaLogo from '../assets/images/pinnawala_logo.jpg';

export const PERSONAL_INFO = {
  name: "SANDANI SENEVIRATHNA",
  shortName: "Sandani Senevirathna",
  title: "Data Science Undergraduate & MLOps Specialist",
  location: "Kegalle, Sri Lanka",
  phone: "+94 71 354 9078",
  email: "sandanisenevirathna2002@gmail.com",
  github: "https://github.com/SandaniSenevirathna",
  linkedin: "https://www.linkedin.com/in/sandani-senevirathna-8807562ba/",
  profileImage: myPortrait,
  bio: "Data Science undergraduate with a strong foundation in data analysis, machine learning, and data visualization. Passionate about solving real-world problems using data-driven approaches and eager to apply academic knowledge and technical skills in a data science internship.",
};

export const PROJECTS: Project[] = [
  {
    id: "careai",
    title: "CareAI: Explainable AI Mobile Health System",
    subtitle: "Postpartum Depression (PPD) Prediction & Conversational Screening",
    category: "Explainable AI",
    role: "Lead Researcher & ML Engineer",
    techStack: ["Python", "Scikit-learn", "TensorFlow", "SHAP", "Dialogflow CX", "Flutter", "Supabase", "PostgreSQL"],
    image: careAiImage,
    shortDesc: "Integrated 3-tier mobile health system for early PPD prediction, transparent SHAP risk explanations, and AI conversational screening.",
    fullDesc: "Final Year Research Project focused on early detection and transparent risk explanation for Postpartum Depression. Combines machine learning risk prediction models with SHAP (SHapley Additive exPlanations) for clinical interpretability, alongside a Dialogflow CX conversational interface built into a Flutter mobile frontend.",
    highlights: [
      "Built a 3-tier mobile architecture combining Flutter, Supabase, and a Python FastAPI backend.",
      "Applied SHAP feature attribution to explain individual risk factor weights to healthcare personnel.",
      "Integrated Dialogflow CX for empathetic conversational screening and longitudinal monitoring.",
      "Engineered PostgreSQL database schemas for encrypted patient data protection."
    ],
    githubUrl: "https://github.com/SandaniSenevirathna",
    demoType: "careai"
  },
  {
    id: "ecom-pyspark",
    title: "E-Commerce Big Data Processing & NoSQL Pipeline",
    subtitle: "Bronze-Silver-Gold Architecture with PySpark & MongoDB",
    category: "MLOps & Pipeline",
    role: "Data Engineer (Group Project)",
    techStack: ["PySpark", "MongoDB Atlas", "Parquet", "Python", "Data Engineering"],
    image: bigDataImage,
    shortDesc: "Multi-stage big data pipeline utilizing PySpark for raw ingestion, schema enforcement, and transactional Gold layer querying in MongoDB Atlas.",
    fullDesc: "An enterprise-grade big data ingestion and processing pipeline designed to handle high-throughput e-commerce transaction logs. Utilized PySpark to partition, clean, and enrich raw data across Bronze (raw), Silver (cleansed), and Gold (aggregated BI) storage tiers.",
    highlights: [
      "Architected Medallion data lakehouse layers (Bronze -> Silver -> Gold) using PySpark & Parquet formats.",
      "Implemented strict schema enforcement and transactional anomaly handling.",
      "Streamed Gold analytics records into MongoDB Atlas for fast downstream BI dashboarding.",
      "Optimized PySpark transformation jobs to reduce memory overhead during batch runs."
    ],
    githubUrl: "https://github.com/SandaniSenevirathna",
    demoType: "pyspark"
  },
  {
    id: "global-superstore",
    title: "Global Superstore BI & Predictive Sales Analytics",
    subtitle: "Multi-Region Forecasting & Profit Driver Identification",
    category: "BI & Analytics",
    role: "Data Analyst & BI Specialist (Individual Project)",
    techStack: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "Seaborn", "Power BI"],
    image: superstoreImage,
    shortDesc: "Exploratory data analysis, inferential statistics, and regression models to forecast sales volume and uncover regional profitability drivers.",
    fullDesc: "Comprehensive supply chain and sales analytics initiative on multi-region global transaction datasets. Executed hypothesis testing to uncover loss-making product sub-categories, built predictive sales forecasting models, and derived supply chain optimization strategies.",
    highlights: [
      "Executed exploratory data analysis (EDA) and inferential statistical hypothesis testing.",
      "Developed multivariate regression models to forecast sales volume and profit margins.",
      "Identified critical regional supply chain bottlenecks causing shipping margin leaks.",
      "Constructed interactive Power BI dashboards for executive decision support."
    ],
    githubUrl: "https://github.com/SandaniSenevirathna",
    demoType: "superstore"
  },
  {
    id: "customer-churn-mlops",
    title: "Customer Churn MLOps & Production Pipeline",
    subtitle: "Airflow Orchestration, MLflow Tracking & Docker Containers",
    category: "MLOps & Pipeline",
    role: "MLOps & Machine Learning Engineer (Group Project)",
    techStack: ["Python", "Apache Airflow", "MLflow", "Docker", "DVC", "DAGsHub"],
    image: mlopsImage,
    shortDesc: "End-to-end production-grade MLOps pipeline for churn forecasting with Airflow DAG orchestration, DVC versioning, and MLflow experiment tracking.",
    fullDesc: "Production-ready MLOps framework automating the full lifecycle of customer churn forecasting models. Includes automated Airflow DAG workflows for data preprocessing, DVC for dataset versioning, MLflow for tracking experiments, and Docker containers for seamless cloud deployment.",
    highlights: [
      "Orchestrated DAG workflows using Apache Airflow for scheduled model retraining.",
      "Version-controlled large dataset artifacts using DVC integrated with DAGsHub.",
      "Automated hyperparameter tuning, evaluation metrics, and model registry in MLflow.",
      "Packaged microservices into lightweight Docker containers for production deployment."
    ],
    githubUrl: "https://github.com/SandaniSenevirathna",
    demoType: "churn"
  }
];

export const SERVICES: Service[] = [
  {
    id: "mlops",
    number: "01",
    title: "MLOPS & PRODUCTION PIPELINES",
    shortDesc: "Building automated, scalable model retraining pipelines with Airflow, MLflow, Docker, and versioned data artifacts.",
    fullDesc: "Designing robust end-to-end Machine Learning Operations workflows. I automate model retraining, version control datasets with DVC, log hyperparameter experiments, and package prediction endpoints inside containerized Docker environments.",
    capabilities: ["Airflow DAG Orchestration", "MLflow Experiment Tracking", "DVC & DAGsHub Versioning", "Docker Containerization"],
    tools: ["Apache Airflow", "MLflow", "Docker", "DVC", "Python"]
  },
  {
    id: "bigdata",
    number: "02",
    title: "BIG DATA ENGINEERING & ETL",
    shortDesc: "Designing Medallion architecture (Bronze/Silver/Gold) data pipelines with PySpark and MongoDB Atlas.",
    fullDesc: "Architecting scalable data engineering pipelines capable of ingesting and transforming massive datasets. Expert in PySpark batch/stream processing, transactional schema enforcement, and NoSQL document modeling.",
    capabilities: ["PySpark Distributed Computing", "Medallion Data Lakehouse Design", "NoSQL MongoDB Atlas Storage", "Schema Enforcement & Cleansing"],
    tools: ["PySpark", "MongoDB Atlas", "Parquet", "PostgreSQL", "SQL"]
  },
  {
    id: "explainable-ai",
    number: "03",
    title: "EXPLAINABLE AI & PREDICTIVE ML",
    shortDesc: "Creating interpretable ML models using SHAP, TensorFlow, Scikit-learn, and conversational AI interfaces.",
    fullDesc: "Specializing in high-stakes domain AI solutions where model transparency matters (such as healthcare mHealth apps). Combining predictive algorithms with SHAP explainability techniques and conversational agent interfaces.",
    capabilities: ["SHAP Feature Attribution", "Predictive Risk Modeling", "Conversational Agents (Dialogflow)", "TensorFlow & Scikit-Learn Models"],
    tools: ["SHAP", "Scikit-Learn", "TensorFlow", "Dialogflow CX", "Python"]
  },
  {
    id: "bi-analytics",
    number: "04",
    title: "BUSINESS INTELLIGENCE & ANALYTICS",
    shortDesc: "Translating complex sales, financial, and operational datasets into executive Power BI dashboards and forecasting models.",
    fullDesc: "Transforming raw operational data into actionable business intelligence. Conducting exploratory data analysis, inferential statistics, hypothesis testing, and multivariate sales regression forecasting.",
    capabilities: ["Exploratory Data Analysis (EDA)", "Inferential Statistical Testing", "Executive Power BI Dashboards", "Forecasting & Profitability Models"],
    tools: ["Power BI", "Pandas", "Statsmodels", "Seaborn", "Excel"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "leo-board",
    role: "Board Director",
    organization: "Leo Club of SLTC",
    period: "2024 - 2025",
    description: "Oversee club initiatives, community service operations, youth engagement projects, and inter-organizational events.",
    highlights: [
      "Directed operational strategy across multiple social impact initiatives.",
      "Coordinated cross-functional student teams and community outreach programs."
    ],
    badge: "Leadership"
  },
  {
    id: "christmas-smiles",
    role: "Project Chairman – 'Christmas Smiles'",
    organization: "Leo Club of SLTC",
    period: "2024",
    description: "Led a comprehensive mental well-being initiative at Apeksha Hospital Maharagama for pediatric cancer patients.",
    highlights: [
      "Managed fundraising, hospital resource coordination, and volunteer deployment.",
      "Honored with 3 Triple Awards at A2 CON 25 for exceptional project execution."
    ],
    badge: "Award Winning Project"
  },
  {
    id: "itia-logistics",
    role: "Logistics Team Head – 'ITIA Career v1.0'",
    organization: "ITIA Club, SLTC",
    period: "2024",
    description: "Managed end-to-end event logistics and resource coordination for a computing career workshop empowering tech undergraduates.",
    highlights: [
      "Engineered schedule timelines and resource allocation for industry speaker sessions.",
      "Handled venue logistics and attendee operations for computing students."
    ],
    badge: "Operations"
  },
  {
    id: "inspiher-content",
    role: "Content & Media Team",
    organization: "InspiHER{Tech} v3.0 (IEEE WIE SLTC)",
    period: "2024",
    description: "Authored promotional content to boost engagement for a national STEM initiative empowering women undergraduates in technology.",
    highlights: [
      "Crafted digital outreach messaging and technical career content.",
      "Promoted diversity and inclusion in Sri Lankan tech communities."
    ],
    badge: "Community"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "sltc-bsc",
    degree: "BSc (Hons) in Data Science",
    institution: "Sri Lanka Technological Campus (SLTC)",
    location: "Padukka, Sri Lanka",
    period: "Nov 2023 – Present",
    details: "Focusing on Machine Learning, Big Data Engineering, MLOps, Statistics, and Database Management Systems.",
    logo: sltcLogo
  },
  {
    id: "pinnawala-al",
    degree: "G.C.E. Advanced Level (Common Stream)",
    institution: "Pinnawala Central College",
    location: "Rambukkana, Sri Lanka",
    period: "2021",
    details: "Subjects: Combined Mathematics, Physics, and Information & Communication Technology (ICT).",
    logo: pinnawalaLogo
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "inspiher-hacknova",
    title: "1st Runner-Up — InspiHER{Tech} HackNova Competition",
    organizer: "SLTC IEEE WIE",
    description: "Secured 2nd place out of competing national teams after advancing through three rigorous phases: MLArena (ML competition), QuantumQuest, and the Final Pitch.",
    tags: ["Hackathon", "Machine Learning", "Quantum", "1st Runner-Up"]
  },
  {
    id: "a2con-triple",
    title: "Triple Award Winner — A2 CON 25",
    organizer: "Leo Club of SLTC",
    description: "Received three 1st Runner-Up awards for leading project 'Christmas Smiles' at Apeksha Hospital Maharagama: Best Project for Childhood Cancer, Best Project for Youth, and Best Project with Non-Leo.",
    tags: ["Leadership", "Community Service", "Triple Award"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "Java", "JavaScript", "PHP", "HTML", "CSS"]
  },
  {
    category: "Data Science & ML Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "PySpark", "SHAP", "Statsmodels", "Seaborn"]
  },
  {
    category: "Analytics & BI Tools",
    skills: ["Power BI", "Excel", "Data Storytelling", "Hypothesis Testing", "Regression Modeling"]
  },
  {
    category: "MLOps & Version Control",
    skills: ["Apache Airflow", "MLflow", "Docker", "Git", "GitHub", "DAGsHub", "DVC"]
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "MongoDB Atlas", "PostgreSQL", "Supabase", "Parquet"]
  },
  {
    category: "Frameworks & Environments",
    skills: ["Flutter", "Dialogflow CX", "VS Code", "Jupyter Notebook", "Google Colab", "Jira"]
  }
];

export const SOFT_SKILLS = [
  { name: "Problem Solving", desc: "Develops practical solutions using analytical and logical reasoning." },
  { name: "Collaboration & Teamwork", desc: "Works effectively with multidisciplinary teams to achieve project goals." },
  { name: "Project Management", desc: "Organizes tasks, tracks progress, and delivers projects on time." },
  { name: "Time Management", desc: "Effectively prioritizes work and consistently meets deadlines." }
];
