import { ArrowUpRight } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="GMWcreative home">
        <span className="brand-mark-icon">GMW</span>
        <strong className="brand-mark-text">creative</strong>
      </a>

      <nav className="top-nav" aria-label="Main navigation">
        <a href="#work" className="nav-link">
          <span className="nav-number">01</span>
          <span>Work</span>
        </a>
        <a href="#thinking" className="nav-link">
          <span className="nav-number">02</span>
          <span>Process</span>
        </a>
        <a href="#contact" className="nav-link">
          <span className="nav-number">03</span>
          <span>Contact</span>
        </a>
      </nav>

      <a className="header-cta" href="#contact">
        <span>Start Project</span>
        <ArrowUpRight size={16} strokeWidth={3} />
      </a>
    </header>
  );
}
