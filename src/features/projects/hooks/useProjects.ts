import { useAppDispatch, useAppSelector } from "@/app/store";
import { projectsSelector, statusSelector } from "../model/projectsSelectors";

export const useProjects = () => {
  const projects = useAppSelector(projectsSelector);
  const status = useAppSelector(statusSelector);
  const dispatch = useAppDispatch();

  return {
    projects,
    status,
    dispatch,
  };
};
