import type { ReactElement, ReactNode } from "react";

export type FormFieldProps = {
  children: ReactElement;
  htmlFor: string,
  className?: string;
  label?: string;
  errorMessage?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
};
