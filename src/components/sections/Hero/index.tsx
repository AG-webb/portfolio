import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CodeBox from "@/components/ui/CodeBox";
import Icon from "@/components/ui/Icon";
import "./style.css";
import resumeUrl from "/Ararat_Gevorgyan.pdf";

const code = `import React from 'react';
import { UI, <UX> } from './engine';

// Architectural excellence by design
const Ararat = {
  role: "Web Front-end Developer",
  stack: ["React.js", "Typescript", "CSS/Tailwind"],
  metrics: { coreWebVitals: "99/100", cleanCodeRating: "10/10" }
};

export default function Portfolio() {
  return (
    <UI.Grid optimized={
      deliverPremiumExperiences()
    }
    />
  );
}`;

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrap grid gap-12 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:items-center lg:gap-16">
          <div className="hero__content">
            <Badge className="hero__badge mb-4 lg:mb-8" palette="cyan">
              Available for Front-end Roles
            </Badge>
            <h1 className="hero__title text-xl lg:text-2xl font-extrabold mb-4 max-lg:leading-[1.2]">
              Building scalable web experiences with{" "}
              <span className="text-accent-indigo">clean code</span> and{" "}
              <span className="text-accent-cyan">modern UI</span>
            </h1>
            <div className="hero__text text-base text-slate-300 mb-4 lg:mb-8">
              Senior Front-End Engineer specializing in React, Next.js, and
              performance-driven design systems. Turning complex system
              architectures into delightful, intuitive user interfaces.
            </div>
            <div className="hero__btns grid sm:flex sm:flex-wrap gap-4">
              <Button
                size="large"
                variant="primary"
                contentClassName="flex gap-2 items-center justify-center"
              >
                Explore Work
                <Icon type="code" />
              </Button>
              <Button
                as="a"
                href={resumeUrl}
                download
                size="large"
                variant="secondary"
                contentClassName="flex gap-2 items-center justify-center"
              >
                Download Resume
                <Icon type="download" />
              </Button>
            </div>
          </div>
          <div className="hero__code">
            <CodeBox title="App.tsx — dev-portfolio" code={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
