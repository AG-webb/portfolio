import { intersectionContext } from "@/contexts";
import type { Sections } from "@/types";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const IntersectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<Sections | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef(new Map<string, HTMLElement>());

  const registerSection = useCallback(
    (id: string, element: HTMLElement | null) => {
      if (!element) {
        sectionRefs.current.delete(id);
        return;
      }

      sectionRefs.current.set(id, element);
      observerRef.current?.observe(element);
    },
    [],
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (!visibleSections.length) {
        setActiveSection(null);
        return;
      }

      const topMostSection = visibleSections.reduce((prev, current) => {
        return prev.boundingClientRect.top < current.boundingClientRect.top
          ? prev
          : current;
      });

      setActiveSection(topMostSection.target.id as Sections);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    observerRef.current = observer;

    sectionRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  return (
    <intersectionContext.Provider value={{ activeSection, registerSection }}>
      {children}
    </intersectionContext.Provider>
  );
};
