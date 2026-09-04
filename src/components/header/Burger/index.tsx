import clsx from "clsx";
import "./style.css";
import type { BurgerProps } from "./types";

const Burger = ({ onClick, isOpen }: BurgerProps) => {
  return (
    <button
      type="button"
      className={clsx("burger", isOpen ? "burger_open" : "")}
      onClick={onClick}
    >
      <div className="burger__inner">
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
    </button>
  );
};

export default Burger;
