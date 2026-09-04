import type { Sections } from "@/types";
import { useCallback } from "react";
import { useIntersection } from "./useInterSection";

export const useIntersectionSection = (id: Sections) => {
  const { registerSection } = useIntersection();

  return useCallback(
    (element: HTMLElement | null) => {
      registerSection(id, element);
    },
    [id, registerSection],
  );
};
