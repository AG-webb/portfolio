import type { HeadingGroupProps } from "./types";

const HeadingGroup = ({ title, subtitle }: HeadingGroupProps) => {
  return (
    <div className="heading-group">
      <div className="heading-group__subtitle text-xs font-semibold text-accent-cyan uppercase mb-3">
        {subtitle}
      </div>
      <div className="heading-group__title text-lg lg:text-xl font-extrabold text-neutral-50">
        {title}
      </div>
    </div>
  );
};

export default HeadingGroup;
