import noImage from "@/assets/images/no-image.png";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import type { Project } from "@/features/projects/types";

const ProjectCard = ({
  image_url,
  title,
  description,
  stack,
  site_url,
  github_url,
  isPrivate,
}: Project) => {
  return (
    <div className="project-card w-full grid-rows-[auto_1fr_auto] grid bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
      <div className="project-card__img aspect-video">
        <img
          className="w-full h-full object-cover"
          src={image_url || noImage}
          alt="project"
          width="410"
          height="200"
        />
      </div>
      <div className="project-card__body p-5">
        <h3 className="project-card__title text-base font-bold mb-3 flex gap-2 items-center">
          {title}
          {isPrivate && (
            <Badge palette="indigo">
              Private <Icon type="lock" />
            </Badge>
          )}
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
            href={site_url || "#"}
            target="_blank"
            aria-label="live site url"
            className="text-[13px] font-semibold flex items-center gap-1 text-accent-cyan"
          >
            {isPrivate ? "Info" : "Explore Live Site"}
            <Icon type="external-link" />
          </a>
          {github_url ? (
            <a
              href={github_url}
              target="_blank"
              aria-label="github url"
              className="text-base flex text-neutral-400"
            >
              <Icon type="github" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
