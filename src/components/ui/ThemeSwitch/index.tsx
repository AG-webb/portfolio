import { useState } from "react";
import Icon from "../Icon";

const bodyElement = document.body;

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleThemeClick = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "dark") {
        bodyElement.classList.add("light-theme");
        return "light";
      }

      bodyElement.classList.remove("light-theme");
      return "dark";
    });
  };

  return (
    <div
      className="fixed flex p-2 bottom-6 right-3 rounded-lg z-2 text-[32px] cursor-pointer border border-slate-500 bg-primary-600"
      onClick={handleThemeClick}
    >
      {theme === "dark" ? <Icon type="moon" /> : <Icon type="sun" />}
    </div>
  );
};

export default ThemeSwitch;
