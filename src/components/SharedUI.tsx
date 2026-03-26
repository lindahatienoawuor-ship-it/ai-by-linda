import { Link } from "react-router-dom";

interface SectionEyebrowProps {
  children: React.ReactNode;
}
export const SectionEyebrow = ({ children }: SectionEyebrowProps) => (
  <span className="inline-block text-xs uppercase tracking-[0.2em] font-body font-semibold text-primary mb-4">
    {children}
  </span>
);

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}
export const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
  <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${className}`}>
    {children}
  </h2>
);

interface CtaButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}
export const CtaButton = ({ children, to, href, variant = "primary", className = "", type = "button", onClick }: CtaButtonProps) => {
  const base = variant === "primary"
    ? "inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body text-base font-semibold rounded-xl shadow-2xl shadow-primary/25 hover:bg-coral-light transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
    : "inline-flex items-center justify-center px-8 py-4 font-body text-base font-medium text-muted-foreground border border-border rounded-xl hover:border-primary/70 hover:text-foreground transition-all";

  if (to) return <Link to={to} className={`${base} ${className}`}>{children}</Link>;  if (href) return <a href={href} className={`${base} ${className}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${className}`}>{children}</button>;
};

interface DarkCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
export const DarkCard = ({ children, className = "", hover = true }: DarkCardProps) => (
  <div className={`bg-card rounded-card border border-border p-6 md:p-8 shadow-lg shadow-primary/10 transition-all duration-300 ${hover ? "hover:border-primary/30 hover:-translate-y-0.5" : ""} ${className}`}>
    {children}
  </div>
);

interface LightCardProps {
  children: React.ReactNode;
  className?: string;
}
export const LightCard = ({ children, className = "" }: LightCardProps) => (
  <div className={`bg-card rounded-card p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 ${className}`} style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
    {children}
  </div>
);
