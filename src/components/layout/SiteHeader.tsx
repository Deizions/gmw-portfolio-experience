export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="GMWcreative home">
        <span>GMW</span>
        <strong>creative</strong>
      </a>

      <nav className="top-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#thinking">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-cta" href="#contact">
        Start
      </a>
    </header>
  );
}