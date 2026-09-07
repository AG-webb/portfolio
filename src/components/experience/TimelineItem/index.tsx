import type { TimelineItemProps } from "./types";

const TimelineItem = ({
  date,
  company,
  description,
  text,
}: TimelineItemProps) => {
  return (
    <div className="timeline-item max-sm:grid max-sm:grid-cols-[28px_auto] max-sm:gap-2 sm:gap-8 sm:flex">
      <div className="timeline-item__info grid content-start gap-1 sm:pb-12 shrink-0 sm:w-50 lg:w-70">
        <div className="timeline-item__date text-xs font-semibold text-accent-cyan max-sm:pt-0.5">
          {date}
        </div>
        <div className="timeline-item__company text-lg font-bold text-neutral-50">
          {company}
        </div>
        <div className="timeline-item__description text-xs text-neutral-400">
          {description}
        </div>
      </div>
      <div className="timeline-item__divider shrink-0 px-1 relative max-sm:col-start-1 max-sm:row-start-1 max-sm:row-span-2 sm:px-1.5">
        <div className="timeline-item__divider-line [display:var(--timeline-item-divider-line-display)] w-0.5 absolute top-5 bottom-6 bg-neutral-700 left-1/2 -translate-x-1/2"></div>
        <div className="timeline-item__divider-dot size-5 rounded-full border-3 border-accent-indigo relative">
          <div className="size-1.5 rounded-full bg-accent-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="timeline-item__content grid gap-4 grow pb-(--timeline-item-content-padding-bottom) text-neutral-300 text-xs leading-relaxed sm:text-[15px]">
        {text.map((line, index) => (
          <p key={index} className="timeline-item__text">
            ⚡ {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
