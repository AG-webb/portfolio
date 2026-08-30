import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CodeBox from "@/components/ui/CodeBox";
import Icon from "@/components/ui/Icon";
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto">
        <div className="hero__wrap grid">
          <div className="hero__content">
            <Badge className="hero__badge mb-8" palette="cyan">
              Available for Front-end Roles
            </Badge>
            <h1 className="hero__title text-2xl mb-4">
              Building scalable web experiences with{" "}
              <span className="text-accent-indigo">clean code</span> and{" "}
              <span className="text-accent-cyan">modern UI</span>
            </h1>
            <div className="hero__text text-base text-slate-300 mb-8">
              Senior Front-End Engineer specializing in React, Next.js, and
              performance-driven design systems. Turning complex system
              architectures into delightful, intuitive user interfaces.
            </div>
            <div className="hero__btns flex flex-wrap gap-4">
              <Button size="large" className="bg-accent-indigo">
                <span className="flex gap-2 items-center">
                  Explore Work
                  <Icon type="code" />
                </span>
              </Button>
              <Button size="large" className="border border-slate-700">
                <span className="flex gap-2 items-center">
                  Download Resume
                  <Icon type="download" />
                </span>
              </Button>
            </div>
          </div>
          <div className="hero__code">
            <CodeBox title="App.tsx — dev-portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
