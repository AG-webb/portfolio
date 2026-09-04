import { useEffect } from "react";

export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (!isLocked) {
      body.classList.remove("locked");
      body.style.removeProperty("--scrollbar-width");
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.classList.add("locked");
    if (scrollbarWidth) {
      body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    }

    return () => {
      body.classList.remove("locked");
      body.style.removeProperty("--scrollbar-width");
    };
  }, [isLocked]);
};
