import type { CSSProperties } from "react";
import "./style.css";
import type { IndicatorProps } from "./types";

const Indicator = ({ indicator }: IndicatorProps) => {
  return (
    <div
      className="indicator grid gap-2"
      style={{ "--indicator-percent": `${indicator}%` } as CSSProperties}
    >
      <div className="indicator__heading flex flex-wrap items-c˝enter justify-between text-[12px]">
        <div className="indicator__title font-semibold text-neutral-400">
          Proficiency
        </div>
        <div className="indicator__value font-bold">
          {indicator}%
        </div>
      </div>
      <div className="indicator__element w-full h-2 rounded-lg bg-neutral-700 relative">
        <span className="indicator__truck absolute top-0 left-0 h-full w-(--indicator-percent) rounded-[inherit]"></span>
      </div>
    </div>
  );
};

export default Indicator;
