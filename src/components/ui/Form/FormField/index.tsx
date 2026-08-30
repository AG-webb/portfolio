import { cn } from "@/lib/utils";
import "./style.css";
import type { FormFieldProps } from "./types";

const FormField = ({
  className,
  label,
  errorMessage,
  htmlFor,
  children,
  prefix,
  suffix,
}: FormFieldProps) => {
  return (
    <div
      className={cn(
        "form-field",
        prefix ? "form-field_prefix" : suffix ? "form--field_suffix" : "",
        className,
      )}
    >
      {label ? (
        <label className="form-field__label" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      <div className="form-field__element">
        {prefix ? (
          <div className="form-field__icon form-field__icon_prefix">
            {prefix}
          </div>
        ) : null}
        {children}
        {suffix ? (
          <div className="form-field__icon form-field__icon_suffix">
            {suffix}
          </div>
        ) : null}
      </div>
      {typeof errorMessage === "string" && (
        <div className="form-field__message form-field__message_error">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormField;
