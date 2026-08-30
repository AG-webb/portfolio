import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { ControllerRenderProps } from "react-hook-form";

export interface CustomInputProps
  extends
    ControllerRenderProps,
    Pick<
      ComponentPropsWithoutRef<"input">,
      "type" | "placeholder" | "autoComplete"
    > {
  className?: string;
  label?: string;
  errorMessage?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
