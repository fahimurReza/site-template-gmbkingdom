export type ProjectType =
  | "All Projects"
  | "Patio"
  | "Driveway"
  | "Sidewalk"
  | "Stamped"
  | "Foundation"
  | "Resurfacing";

export interface Project {
  imageSrc: string;
  imageAlt: string;
  isFeatured: boolean;
  title: string;
  location: string;
  description: string;
  area: string;
  duration: string;
  services: string[];
  projectType: ProjectType;
}
