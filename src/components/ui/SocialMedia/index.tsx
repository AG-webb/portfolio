import Icon from "../Icon";

const SocialMEdia = () => {
  return (
    <div className="social-media flex gap-3 lg:gap-6">
      <a
        href="#"
        className="social-media__icon flex items-center justify-center"
      >
        <Icon type="github" />
      </a>
      <a
        href="#"
        className="social-media__icon flex items-center justify-center"
      >
        <Icon type="linkedin" />
      </a>
    </div>
  );
};

export default SocialMEdia;
