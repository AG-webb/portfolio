import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  contentClassName?: string,
  children: ReactNode;
}

export type PolymorphicButtonProps<E extends ElementType = "button"> =
  BaseButtonProps &
    Omit<ComponentPropsWithoutRef<E>, keyof BaseButtonProps | "as"> & {
      as?: E;
    };
