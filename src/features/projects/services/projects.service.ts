import { supabase } from "@/lib/supabase/supabase";
import type { Project } from "../types";

export const getProjectsService: () => Promise<Project[] | null> = async () => {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return projects;
};
