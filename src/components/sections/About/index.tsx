import BadgeGroup from "@/components/ui/BadgeGroup";
import CodeBox from "@/components/ui/CodeBox";
import Section from "@/components/ui/Section";

const code = `# Biography
// Front-end developer focused on building
// responsive, accessible, and interactive web experiences.
// I turn designs and ideas into clean, reusable interfaces
// with a strong focus on performance, usability, and detail.

// I enjoy working across the entire front-end process —
// from translating designs into responsive layouts
// to implementing interactions, animations, and
// connecting interfaces with APIs.

$ whoami --experience
// - 5+ years of experience in front-end development
// - Building modern web interfaces with React & JavaScript
// - Strong foundation in HTML5, CSS/SCSS & responsive design
// - Working with TypeScript and Redux Toolkit
// - Creating interactive experiences with GSAP
// - Integrating REST APIs into web applications
// - Focused on Web Accessibility & Core Web Vitals
// - Using Git, GitHub/GitLab & Jira in Agile/Scrum teams
// - Experience maintaining and improving existing codebases
// - Comfortable collaborating with designers and developers`;

const About = () => {
  return (
    <Section
      id="about"
      className="about"
      subtitle="About & Tech Stack"
      title="Technical expertise built on solid fundamentals"
    >
      <div className="about__content grid gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:items-start lg:gap-16">
        <CodeBox title="bash - profile.md" code={code} />
        <div className="about__stack grid gap-3 lg:gap-6">
          <BadgeGroup
            title="Core Frontend"
            badges={["HTML5", "CSS", "Javascript(ES6+)", "Typescript", "JQuery"]}
          />
          <BadgeGroup
            title="Frameworks, Libs & Development Tolls"
            badges={["React", "Redux Toolkit", "GSAP", "Gulp", "WebPack"]}
          />
          <BadgeGroup
            title="Styling & UI"
            badges={["Tailwind CSS", "SCSS", "Responsive Web Design", "CSS Animations"]}
          />
          <BadgeGroup
            title="Web APIs & Performance"
            badges={["REST APIs", "Core Web Vitals", "Web Accessibility(a11y)"]}
          />
          <BadgeGroup
            title="Version Control & Collaboration"
            badges={["Git", "GitHub", "GitLab"]}
          />
          <BadgeGroup
            title="Project Management & Methodologies"
            badges={["Agile", "Scrum", "Jira"]}
          />
        </div>
      </div>
    </Section>
  );
};
export default About;
