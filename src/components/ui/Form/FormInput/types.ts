import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type {
  Control,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface FormInputProps<T extends FieldValues> extends Pick<
  ComponentPropsWithoutRef<"input">,
  "type" | "placeholder" | "autoComplete"
> {
  control: Control<T>;
  name: Path<T>;
  errorMessage: string;
  rules?: RegisterOptions<T, FieldPath<T>>;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
