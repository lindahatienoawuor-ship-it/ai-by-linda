import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aibylindalogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Results", to: "/results" },
  { label: "Book a Call", to: "/book" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-[5%] border-b border-border" style={{ background: "rgba(11,15,25,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img src={logo} alt="AI by Linda" className="h-9 w-auto" />
        <span className="font-display text-lg font-bold tracking-tight">
          <span className="text-foreground">AI by </span>
          <span className="text-primary italic">Linda</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-xs uppercase tracking-[0.15em] font-body font-medium transition-colors ${
              location.pathname === link.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/book"
          className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-md hover:bg-coral-light transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
        >
          Book a Free Call →
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden ml-auto flex items-center gap-3">
        <Link
          to="/book"
          className="px-4 py-2 bg-primary text-primary-foreground font-body text-xs font-medium rounded-md"
        >
          Book a Call
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 border-b border-border p-6 flex flex-col gap-4 md:hidden" style={{ background: "rgba(11,15,25,0.97)", backdropFilter: "blur(20px)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm uppercase tracking-[0.12em] font-body font-medium py-2 ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
