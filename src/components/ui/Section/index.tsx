import { useIntersectionSection } from "@/hooks";
import type { Sections } from "@/types";
import HeadingGroup from "../HeadingGroup";
import type { SectionProps } from "./types";

const Section = ({ id, subtitle, title, children, ...props }: SectionProps) => {
  const ref = useIntersectionSection(id as Sections);

  return (
    <section id={id} ref={ref} {...props}>
      <div className="container">
        <div className="grid gap-8 lg:gap-16">
          {subtitle && title ? (
            <HeadingGroup subtitle={subtitle} title={title} />
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
