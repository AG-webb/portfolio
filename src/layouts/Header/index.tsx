import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header__wrap">
          <div className="header__name">{"<Ararat/Gevorgyan>"}</div>
          <div className="header__nav">
            <nav className="nav">
              <div className="nav__wrap">
                <div className="nav__link">About</div>
                <div className="nav__link">Projects</div>
                <div className="nav__link">Experience</div>
                <div className="nav__link">Contact</div>
              </div>
            </nav>
          </div>
          <div className="header__action">
            <Button size="medium" className="bg-accent-indigo">
              <span className='flex gap-2 items-center'>
                Hire Me
                <Icon type="arrow-right" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
