import clsx from "clsx";
import type { ReactNode } from "react";
import "./style.css";

type BadgeProps = {
  className?: string;
  children: ReactNode;
  palette: "indigo" | "cyan";
};

const Badge = ({ children, className, palette }: BadgeProps) => {
  return (
    <div
      className={clsx("badge", palette ? `badge_${palette}` : "", className)}
    >
      {children}
    </div>
  );
};

export default Badge;
