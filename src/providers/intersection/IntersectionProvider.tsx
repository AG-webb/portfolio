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
    let intersectingSections: { id: string; isIntersecting: boolean }[] = [];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      console.log(entries)

      const visibleSections = entries.filter((entry) => {
        if (intersectingSections.length) {
          intersectingSections = [
            ...intersectingSections,
            { id: entry.target.id, isIntersecting: entry.isIntersecting },
          ];
        } else {
          intersectingSections = [
            ...intersectingSections.map((section) => {
              if (section.id === entry.target.id) {
                return { ...section, isIntersecting: entry.isIntersecting };
              } else {
                return section;
              }
            }),
          ];
        }

        return entry.isIntersecting;
      });

      if (!visibleSections.length) {
        if (!intersectingSections.some((section) => section.isIntersecting)) {
          setActiveSection(null);
        }
        return;
      }

      const topMostSection = visibleSections.reduce((prev, current) => {
        return prev.boundingClientRect.top < current.boundingClientRect.top
          ? prev
          : current;
      });

      setActiveSection(topMostSection.target.id as Sections);
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

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
