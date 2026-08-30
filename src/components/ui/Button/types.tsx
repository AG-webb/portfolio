import type { ReactNode } from "react";

export type ButtonType = {
  className?: string;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
} & (
  | {
      link: string;
      type?: never;
    }
  | {
      link?: never;
      type?: "submit" | "button";
    }
);
