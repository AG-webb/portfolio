import { Controller, type FieldValues } from "react-hook-form";
import CustomInput from "../../CustomInput";

import type { FormInputProps } from "./types";

function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  type,
  placeholder,
  rules,
  errorMessage,
  autoComplete,
  prefix,
  suffix,
}: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <CustomInput
          {...field}
          label={label}
          type={type}
          prefix={prefix}
          suffix={suffix}
          autoComplete={autoComplete}
          placeholder={placeholder}
          errorMessage={errorMessage}
        />
      )}
    />
  );
}

export default FormInput;
