import { Link } from "react-router-dom";
import logo from "@/assets/aibylindalogo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Results", to: "/results" },
  { label: "Book a Call", to: "/book" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="max-w-6xl mx-auto px-[5%] py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="AI by Lindah" className="h-8 w-auto" />
            <span className="font-display text-lg font-bold tracking-tight">
              <span className="text-foreground">AI by </span>
              <span className="text-primary italic">Lindah</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm font-body text-muted-foreground">
            © 2026 AI by Lindah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
