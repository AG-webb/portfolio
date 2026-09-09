import type { RootState } from "@/app/store";

export const projectsSelector = (state: RootState) => state.projects.projects;
export const statusSelector = (state: RootState) => state.projects.status;