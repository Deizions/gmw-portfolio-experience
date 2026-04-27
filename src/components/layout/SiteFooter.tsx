import { ArrowUp } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <span className="footer-brand">GMWcreative</span>
          <span className="footer-copyright">&copy; 2026</span>
        </div>
        <p className="footer-note">
          Designed as a scroll-based identity system.
          <br />
          Built with purpose, not decoration.
        </p>
      </div>

      <div className="footer-links">
        <a href="#top" className="footer-link">
          <ArrowUp size={14} strokeWidth={3} />
          <span>Top</span>
        </a>
        <a href="#work" className="footer-link">Work</a>
        <a 
          href="https://www.behance.net/germawalmiea" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Behance
        </a>
        <a href="mailto:hello@gmwcreative.com" className="footer-link footer-link-primary">
          Email
        </a>
      </div>
    </footer>
  );
}
