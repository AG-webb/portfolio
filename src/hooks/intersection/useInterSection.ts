import { intersectionContext } from "@/contexts";
import { useContext } from "react";

export const useIntersection = () => {
  const context = useContext(intersectionContext);

  if (!context) {
    throw new Error(
      "useIntersection must be used within an IntersectionProvider",
    );
  }

  return context;
};
