import ProjectCard from "@/components/project/ProjectCard";
import Section from "@/components/ui/Section";

const Projects = () => {
  return (
    <Section
      id="projects"
      className="projects"
      subtitle="Featured Projects"
      title="Architecting solutions with production-grade code"
    >
      <div className="projects__list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="projects__item">
          <ProjectCard
            title="Synthetix Analytics Suite"
            description="Real-time stream telemetry platform showcasing interactive WebGL maps and high-performance Web Worker threads. Reduced memory footprint by 32%."
            stack={["React", "TypeScript", "Tailwind CSS"]}
            liveSiteUrl="https://example.com/project1"
            githubUrl="#"
          />
        </div>
        <div className="projects__item">
          <ProjectCard
            title="Synthetix Analytics Suite"
            description="Real-time stream telemetry platform showcasing interactive WebGL maps and high-performance Web Worker threads. Reduced memory footprint by 32%."
            stack={["React", "TypeScript", "Tailwind CSS"]}
            liveSiteUrl="https://example.com/project1"
            githubUrl="#"
          />
        </div>
        <div className="projects__item">
          <ProjectCard
            title="Synthetix Analytics Suite"
            description="Real-time stream telemetry platform showcasing interactive WebGL maps and high-performance Web Worker threads. Reduced memory footprint by 32%."
            stack={["React", "TypeScript", "Tailwind CSS"]}
            liveSiteUrl="https://example.com/project1"
            githubUrl="#"
          />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
