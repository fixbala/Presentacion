export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    hint: string;
  };
};

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Certification = {
    source: string;
    courses: string[];
};

export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
};

export type Translation = {
  [key: string]: any;
};

export type ProjectPlan = {
  projectName: string;
  projectSummary: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  methodology: {
    name: string;
    description: string;
  };
  team: {
    role: string;
    responsibilities: string;
  }[];
};
