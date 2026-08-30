import { useId } from "react";
import FormField from "../Form/FormField";

import "./style.css";
import type { CustomInputProps } from "./types";

const CustomInput = ({
  className,
  label,
  errorMessage,
  type = "text",
  placeholder,
  autoComplete,
  prefix,
  suffix,
  ...rest
}: CustomInputProps) => {
  const inputId = useId();

  return (
    <FormField
      label={label}
      htmlFor={inputId}
      errorMessage={errorMessage}
      className={className}
      prefix={prefix}
      suffix={suffix}
    >
      <input
        id={inputId}
        className="form-field__input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        {...rest}
      />
    </FormField>
  );
};

export default CustomInput;
