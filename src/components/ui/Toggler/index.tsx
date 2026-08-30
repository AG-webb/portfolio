import { useId, type ReactNode } from "react";
import type { ControllerRenderProps } from 'react-hook-form';

import "./style.css";

interface TogglerProps extends ControllerRenderProps {
  children: ReactNode;
}

const Toggler = ({ children, ...rest }: TogglerProps) => {
  const togglerId = useId();

  return (
    <label
      className={`toggler ${rest.value ? "toggler_active" : ""}`}
      htmlFor={togglerId}
    >
      <input
        {...rest}
        type="checkbox"
        id={togglerId}
        className="toggler__input"
      />
      <span className="toggler__button"></span>
      {children && <span className="toggler__text">{children}</span>}
    </label>
  );
};

export default Toggler;
