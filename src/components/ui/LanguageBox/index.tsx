import Badge from "../Badge";
import Indicator from "../Indicator";
import "./style.css";
import type { LanguageBoxProps } from "./types";

const LanguageBox = ({
  title,
  level,
  description,
  indicator,
}: LanguageBoxProps) => {
  return (
    <div className="language-box grid gap-3 p-3 bg-neutral-800 border border-neutral-700 rounded-xl lg:p-5">
      <div className="language-box__header flex flex-wrap items-center justify-between">
        <div className="language-box__title text-sm font-bold text-neutral-50">
          {title}
        </div>
        <div className="language-box__level">
          <Badge>{level}</Badge>
        </div>
      </div>
      <div className="language-box__description text-[13px] leading-[150%] text-neutral-300">
        {description}
      </div>
      <div className="language-box__indicator">
        <Indicator indicator={indicator} />
      </div>
    </div>
  );
};

export default LanguageBox;
