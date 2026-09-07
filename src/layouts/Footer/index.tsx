import SocialMEdia from "@/components/ui/SocialMedia";
import "./style.css";

const Footer = () => (
  <footer className="footer bg-[#0B1323]">
    <div className="container">
      <div className="footer__wrap flex items-center justify-between px-20 py-10">
        <div className="footer__copyright text-[12px] text-neutral-400">
          © 2026 Ararat/Gevorgyan. All rights reserved.
        </div>
        <div className="footer__social">
          <SocialMEdia />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
