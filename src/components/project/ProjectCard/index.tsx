import noImage from "@/assets/images/no-image.png";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import type { ProjectCardProps } from "./types";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  stack,
  liveSiteUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="project-card bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
      <div className="project-card__img aspect-video">
        <img
          className="w-full h-full object-cover"
          src={imageUrl || noImage}
          alt="project"
          width="410"
          height="200"
        />
      </div>
      <div className="project-card__body p-5">
        <h3 className="project-card__title text-base font-bold mb-3">
          {title}
        </h3>
        <p className="project-card__description text-xs text-neutral-300">
          {description}
        </p>
      </div>
      <div className="project-card__footer grid gap-4 p-5 border-t border-neutral-700">
        <div className="project-card__stack flex flex-wrap gap-1.5">
          {stack.map((tech, index) => (
            <Badge key={index} palette="cyan">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="project-card__links flex gap-3 justify-between">
          <a
            href={liveSiteUrl || "#"}
            aria-label="live site"
            className="text-[13px] font-semibold flex items-center gap-1 text-accent-cyan"
          >
            {liveSiteUrl ? "Explore Live Site" : "Live Site"}
            <Icon type="external-link" />
          </a>
          <a
            href={githubUrl || "#"}
            aria-label="github"
            className="text-base flex text-neutral-400"
          >
            <Icon type="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
