import TimelineItem from "@/components/experience/TimelineItem";
import Section from "@/components/ui/Section";
import "./style.css";

const Experience = () => {
  return (
    <Section
      id="experience"
      className="experience"
      subtitle="Professional Timeline"
      title="5+ Years shipping enterprise-grade code"
    >
      <div className="experience-timeline">
        <TimelineItem
          date="2024 - 2026"
          company="Tech Corp"
          description="Lead Front-End Architect"
          text={[
            "Responsible for leading the front-end architecture and development of enterprise applications.",
            "Implemented performance optimizations and ensured accessibility compliance.",
            "Mentored junior developers and conducted code reviews to maintain code quality.",
          ]}
        />
        <TimelineItem
          date="2024 - 2026"
          company="Tech Corp"
          description="Lead Front-End Architect"
          text={[
            "Responsible for leading the front-end architecture and development of enterprise applications.",
            "Implemented performance optimizations and ensured accessibility compliance.",
            "Mentored junior developers and conducted code reviews to maintain code quality.",
          ]}
        />
        <TimelineItem
          date="2024 - 2026"
          company="Tech Corp"
          description="Lead Front-End Architect"
          text={[
            "Responsible for leading the front-end architecture and development of enterprise applications.",
            "Implemented performance optimizations and ensured accessibility compliance.",
            "Mentored junior developers and conducted code reviews to maintain code quality.",
          ]}
        />
      </div>
    </Section>
  );
};

export default Experience;
