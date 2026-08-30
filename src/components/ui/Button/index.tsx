import clsx from 'clsx';
import { useNavigate } from "react-router";
import "./style.css";
import type { ButtonType } from "./types";

const Button = ({
  className,
  type,
  link,
  size,
  loading,
  children,
  onClick,
}: ButtonType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }

    onClick?.();
  };

  return (
    <button
      className={clsx(
        "btn",
        size ? `btn_${size}` : "",
        className,
        loading ? "btn_disabled" : "",
      )}
      onClick={handleClick}
      type={type || "button"}
    >
      {}
      {loading ? (
        <span className="btn__spinner">
          loading
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
