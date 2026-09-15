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
          date="2019 - 2020"
          company="DUE-X LLC"
          description="Front-end markup intern"
          text={[
            "Developed responsive, semantic, and well-structured web pages using HTML5 and CSS3, with a strong focus on cross-browser compatibility and maintainable markup.",
            "Implemented JavaScript interactions and basic dynamic functionality to improve user experience and bring static interfaces to life.",
            "Collaborated with designers and developers to accurately translate designs into functional, responsive web interfaces.",
            "Built a strong foundation in front-end development through hands-on project work while continuously learning modern web technologies and best practices.",
          ]}
        />
        <TimelineItem
          date="2021 - 2025"
          company="Zoom Graphics"
          company_url="https://zoom.am/"
          description="Front-end developer"
          text={[
            "Translated UI designs into responsive, accessible web interfaces, ensuring consistent behavior across browsers and screen sizes.",
            "Developed interactive front-end features and reusable components with React and Redux, integrating application data through RESTful APIs.",
            "Enhanced user experiences with advanced CSS and GSAP animations, balancing visual quality with performance and usability.",
            "Delivered SEO-friendly websites and responsive email templates while following modern accessibility and front-end development standards.",
            "Worked within a collaborative development workflow using Git, contributing to code maintenance, feature development, and continuous improvement.",
          ]}
        />
        <TimelineItem
          date="2025 - 2026"
          company="EPAM Systems LLC"
          company_url="https://www.epam.com/"
          description="Software Engineer"
          text={[
            "Developed and maintained complex web applications, contributing across both responsive UI implementation and application functionality.",
            "Built reusable, responsive interfaces with HTML and SCSS while extending Angular components and implementing application logic in TypeScript(if needed).",
            "Solved complex internationalization challenges, including RTL layouts, text expansion, localization, and language-specific UI behavior.",
            "Collaborated within an Agile/Scrum team to deliver features, resolve UI and functional issues, and maintain consistent application quality.",
            "Participated in peer code reviews, providing and receiving constructive feedback to improve code quality, maintainability, and adherence to development standards.",
          ]}
        />
      </div>
    </Section>
  );
};

export default Experience;
