import { supabase } from "@/lib/supabase/supabase";
import type { navItem } from "../types";

export const getNavService: () => Promise<navItem[] | null> = async () => {
  const { data: nav, error } = await supabase.from("nav").select("*");

  if (error) throw error;

  return nav;
};
