import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section hero-section" id="top" data-pin-scene>
      {/* Editorial Top Bar */}
      <header className="hero-header" data-hero-meta>
        <div className="hero-header-left">
          <span className="hero-folio-number">Folio &apos;26</span>
          <span className="hero-divider">/</span>
          <span className="hero-location">Worldwide</span>
        </div>
        <div className="hero-header-center">
          <span className="hero-tagline">Visual Identity &amp; Art Direction</span>
        </div>
        <div className="hero-header-right">
          <span className="hero-availability">
            <span className="availability-dot" />
            Open for Projects
          </span>
        </div>
      </header>

      {/* Main Hero Composition */}
      <div className="hero-composition">
        {/* Left Typography Column */}
        <div className="hero-typography" data-hero-title>
          <div className="hero-name-block" data-hero-title-line>
            <span className="hero-first-name">GERMAW</span>
          </div>
          <div className="hero-surname-block" data-hero-title-line>
            <span className="hero-surname">ALMIEA</span>
          </div>
          <div className="hero-role-block" data-hero-meta>
            <span className="hero-role-line" />
            <span className="hero-role-text">Creative Director</span>
          </div>
        </div>

        {/* Portrait Container - Visual Centerpiece */}
        <div className="hero-portrait-container" data-hero-meta>
          <div className="hero-portrait-frame">
            {/* Portrait Placeholder - Replace with actual transparent PNG */}
            <div className="hero-portrait-placeholder">
              <div className="portrait-outline" />
              <div className="portrait-label">
                <span className="portrait-label-title">Portrait</span>
                <span className="portrait-label-desc">Transparent PNG</span>
                <span className="portrait-label-note">Designer headshot with transparent background, editorial lighting, confident pose</span>
              </div>
            </div>
            
            {/* Portrait Decorative Elements */}
            <div className="portrait-accent-ring" aria-hidden="true" />
            <div className="portrait-accent-dot" aria-hidden="true" />
          </div>
          
          {/* Floating Stats */}
          <div className="hero-portrait-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Years Exp</span>
            </div>
          </div>
        </div>

        {/* Right Info Column */}
        <aside className="hero-info-column" data-hero-meta>
          <div className="hero-manifesto">
            <p className="manifesto-text">
              I craft visual identities that command attention and transform brands into cultural movements.
            </p>
          </div>
          
          <div className="hero-services-list">
            <span className="services-label">Core Expertise</span>
            <ul className="services-items">
              <li>Brand Identity Systems</li>
              <li>Art Direction</li>
              <li>Motion Design</li>
              <li>Digital Experiences</li>
            </ul>
          </div>

          <div className="hero-cta-block">
            <a href="#work" className="hero-cta-button">
              <span>View Work</span>
              <ArrowDownRight size={18} strokeWidth={3} />
            </a>
            <a href="#contact" className="hero-cta-secondary">
              Let&apos;s Talk
            </a>
          </div>
        </aside>
      </div>

      {/* Editorial Bottom Strip */}
      <footer className="hero-footer" data-hero-meta>
        <div className="hero-footer-left">
          <span className="footer-label">Selected Clients</span>
          <div className="footer-clients">
            <span>Nike</span>
            <span>Apple</span>
            <span>Spotify</span>
            <span>Porsche</span>
          </div>
        </div>
        <div className="hero-footer-center">
          <span className="footer-scroll-hint">
            <span className="scroll-arrow">↓</span>
            Scroll to explore
          </span>
        </div>
        <div className="hero-footer-right">
          <span className="footer-recognition">
            <span className="recognition-icon">★</span>
            Top 1% Awwwards
          </span>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="hero-bg-noise" aria-hidden="true" />
    </section>
  );
}
