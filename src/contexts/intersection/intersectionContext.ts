import type { Sections } from "@/types";
import { createContext } from "react";

type IntersectionContextType = {
  activeSection: Sections | null;
  registerSection: (id: string, element: HTMLElement | null) => void;
};

export const intersectionContext =
  createContext<IntersectionContextType | null>(null);
