import ProjectCard from "@/components/project/ProjectCard";
import Section from "@/components/ui/Section";
import Skeleton from "@/components/ui/Skeleton";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { getProjects } from "@/features/projects/model/projectsThunks";
// @ts-expect-error Splide's CSS entry point has no TypeScript declarations.
import { Splide, SplideSlide, type Options } from "@splidejs/react-splide";
// @ts-expect-error Splide's CSS entry point has no TypeScript declarations.
import "@splidejs/react-splide/css/core";
import clsx from "clsx";
import { useEffect } from "react";
import "./style.css";

const splideOptions: Options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "24px",
  classes: {
    arrows: "splide__arrows projects-slider__arrows",
    arrow: "splide__arrow projects-slider__arrow",
    prev: "splide__arrow--prev projects-slider__arrow_prev",
    next: "splide__arrow--next projects-slider__arrow_next",
  },
  breakpoints: {
    1024: {
      perPage: 2,
      gap: "16px",
      arrows: false,
    },
    640: {
      perPage: 1,
      gap: "10px",
    },
  },
};

const Projects = () => {
  const { projects, status, dispatch } = useProjects();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Section
      id="projects"
      className="projects overflow-hidden"
      subtitle="Featured Projects"
      title="Architecting solutions with production-grade code"
    >
      <div
        className={clsx(
          "projects__list",
          status === "loading" && "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {status === "loading" ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex">
                <Skeleton className="w-full h-145 rounded-xl" />
              </div>
            ))}
          </>
        ) : (
          <Splide
            className="projects-slider"
            options={splideOptions}
            aria-label="Featured Projects"
          >
            {projects?.map((project) => (
              <SplideSlide key={project.id}>
                <ProjectCard {...project} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </Section>
  );
};

export default Projects;
