import clsx from "clsx";
import Badge from "../Badge";
import type { BadgeGroupProps } from "./types";

const BadgeGroup = ({ title, badges, className }: BadgeGroupProps) => {
  return (
    <div
      className={clsx(
        "badge-group p-3 bg-slate-800/37 border border-slate-700 rounded-lg lg:p-3.75",
        className,
      )}
    >
      <div className="text-xs font-bold text-neutral-50 mb-3">{title}</div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => {
          const isOdd = index % 2 === 1;

          return (
            <Badge key={index} palette={isOdd ? "indigo" : "cyan"}>
              {badge}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeGroup;
