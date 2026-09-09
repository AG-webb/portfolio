import Icon from "../Icon";

const SocialMedia = () => {
  return (
    <div className="social-media flex gap-3 lg:gap-6">
      <a
        href="https://github.com/AG-webb"
        target="_blank"
        aria-label="Github link"
        className="social-media__icon size-8 rounded-md flex items-center justify-center border border-neutral-700 bg-neutral-800/50 text-neutral-300"
      >
        <Icon type="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/ararat-gevorgyan-3b2023235"
        target="_blank"
        aria-label="Linkedin link"
        className="social-media__icon size-8 rounded-md flex items-center justify-center border border-neutral-700 bg-neutral-800/50 text-neutral-300"
      >
        <Icon type="linkedin" />
      </a>
    </div>
  );
};

export default SocialMedia;
