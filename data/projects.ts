export type Project = {
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Project Coming Soon",
    description: "A new digital experience currently in development.",
    year: "2026",
    type: "Coming Soon",
    image: "/images/project-placeholder-1.jpg",
  },
  {
    title: "Work in Progress",
    description: "An interface exploration being shaped with design and code.",
    year: "2026",
    type: "Coming Soon",
    image: "/images/project-placeholder-2.jpg",
  },
  {
    title: "Project Coming Soon",
    description: "A creative web experiment will live here soon.",
    year: "2026",
    type: "Coming Soon",
    image: "/images/project-placeholder-3.jpg",
  },
];
