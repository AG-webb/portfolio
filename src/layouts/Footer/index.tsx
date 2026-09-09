import SocialMedia from "@/components/ui/SocialMedia";
import "./style.css";

const Footer = () => (
  <footer className="footer bg-[#0B1323]">
    <div className="container">
      <div className="footer__wrap grid gap-4 py-5 sm:flex sm:items-center sm:justify-between md:py-10">
        <div className="footer__copyright text-[12px] text-neutral-400">
          © 2026 Ararat/Gevorgyan. All rights reserved.
        </div>
        <div className="footer__social">
          <SocialMedia />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
