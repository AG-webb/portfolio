import { useAppDispatch } from "@/app/store";
import Burger from "@/components/header/Burger";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Skeleton from "@/components/ui/Skeleton";
import SocialMedia from "@/components/ui/SocialMedia";
import { useContent } from "@/features/content/hooks/useContent";
import { getNav } from "@/features/content/model/contentThunks";
import { useBodyScrollLock, useIntersection } from "@/hooks";
import { scrollToSection } from "@/lib/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { nav, status } = useContent();
  const { activeSection } = useIntersection();

  const dispatch = useAppDispatch();

  useBodyScrollLock(isOpen);

  const handleClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    dispatch(getNav());
  }, [dispatch]);

  return (
    <header
      className={clsx(
        "header shift-element py-4 md:py-5",
        isOpen ? "header_open" : "",
      )}
    >
      <div className="container">
        <div className="header__wrap">
          <div className="header__burger lg:hidden">
            <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div
            className={clsx(
              "header__name text-sm lg:text-lg max-lg:absolute max-lg:right-6 max-md:right-4 transition-opacity",
              !isOpen ? "max-lg:opacity-0" : "",
            )}
          >
            {"<Ararat/Gevorgyan>"}
          </div>
          <div className="header__nav lg:z-1 lg:relative">
            <div
              className={clsx(
                "header-menu max-lg:fixed max-lg:inset-0 max-lg:bg-primary-900 max-lg:overflow-y-scroll max-lg:transition-transform max-lg:grid",
                isOpen ? "" : "max-lg:-translate-x-full",
              )}
            >
              <nav className="nav text-neutral-300 max-lg:p-6 max-lg:grid max-lg:content-between max-md:p-4">
                <div className="nav__wrap grid gap-8 lg:flex max-lg:pt-20">
                  {status === "loading"
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="min-h-5 min-w-20" />
                      ))
                    : nav?.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleClick(item.name)}
                          type="button"
                          className={clsx(
                            "nav__link text-2lg lg:text-xs font-medium text-left cursor-pointer",
                            {
                              "text-accent-indigo":
                                activeSection ===
                                item.name?.toLocaleLowerCase(),
                            },
                          )}
                        >
                          {item.name}
                        </button>
                      ))}
                </div>
                <div className="nav__footer flex items-center gap-4 mt-10 lg:hidden">
                  <SocialMedia />
                </div>
              </nav>
            </div>
          </div>
          <div className="header__action">
            <Button
              size="medium"
              variant="primary"
              contentClassName="flex gap-2 items-center"
              className={clsx(
                "transition-opacity",
                isOpen ? "max-lg:opacity-0" : "",
              )}
            >
              Hire Me
              <Icon type="arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
