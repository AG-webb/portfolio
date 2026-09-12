import clsx from "clsx";
import { type ElementType } from "react";
import Spinner from "../Spinner";
import type {
  ButtonSize,
  ButtonVariant,
  PolymorphicButtonProps,
} from "./types";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent-indigo",
  secondary: "border border-slate-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "btn_small px-4 h-6 text-xs font-semibold rounded-md",
  medium: "btn_medium px-5 h-8.5 text-xs font-semibold rounded-md",
  large: "btn_large px-7 h-12.5 text-xs font-semibold rounded-md",
};

const Button = <E extends ElementType = "button">({
  as,
  variant,
  size,
  isLoading,
  children,
  className,
  contentClassName,
  disabled,
  ...restProps
}: PolymorphicButtonProps<E>) => {
  const Component = as ?? "button";
  const isButton = Component === "button";

  const baseClasses = "relative inline-flex items-center justify-center btn cursor-pointer";
  const variantClasses = variant && variantStyles[variant];
  const sizeClasses = size && sizeStyles[size];

  const isDisabled = disabled || isLoading;
  const combinedClasses = clsx(
    baseClasses,
    variantClasses,
    sizeClasses,
    className,
    isDisabled && "opacity-60 pointer-events-none",
  );

  return (
    <Component
      className={combinedClasses}
      {...(isButton
        ? { disabled: isDisabled }
        : { "aria-disabled": isDisabled })}
      {...restProps}
    >
      {isLoading && (
        <Spinner
          className="absolute left-1/2 top-1/2 -translate-1/2"
          size={25}
        />
      )}
      <span
        className={clsx(
          "btn__content transition-opacity",
          contentClassName,
          isLoading && "opacity-0",
        )}
      >
        {children}
      </span>
    </Component>
  );
};

export default Button;
