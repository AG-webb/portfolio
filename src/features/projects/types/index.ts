import type { Status } from "@/types";

export interface ProjectState {
  projects: Project[] | null;
  status?: Status;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  site_url?: string;
  github_url?: string;
  image_url?: string;
  isPrivate: boolean;
};
