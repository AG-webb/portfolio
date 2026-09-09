import ProjectCard from "@/components/project/ProjectCard";
import Section from "@/components/ui/Section";
import Skeleton from "@/components/ui/Skeleton";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { getProjects } from "@/features/projects/model/projectsThunks";
import { useEffect } from "react";

const Projects = () => {
  const { projects, status, dispatch } = useProjects();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Section
      id="projects"
      className="projects"
      subtitle="Featured Projects"
      title="Architecting solutions with production-grade code"
    >
      <div className="projects__list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {status === "loading" ? (
          <Skeleton />
        ) : (
          projects?.map((project) => (
            <div className="projects__item flex" key={project.id}>
              <ProjectCard {...project} />
            </div>
          ))
        )}
      </div>
    </Section>
  );
};

export default Projects;
