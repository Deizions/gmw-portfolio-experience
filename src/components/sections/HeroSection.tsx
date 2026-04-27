import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section hero-section" id="top" data-pin-scene>
      {/* Top Status Bar */}
      <div className="hero-status-bar" data-hero-meta>
        <div className="hero-status-item">
          <span className="hero-status-label">Status</span>
          <span className="hero-status-value hero-status-available">
            <span className="status-dot" />
            Available for Projects
          </span>
        </div>
        <div className="hero-status-item">
          <span className="hero-status-label">Based</span>
          <span className="hero-status-value">Worldwide</span>
        </div>
        <div className="hero-status-item">
          <span className="hero-status-label">Focus</span>
          <span className="hero-status-value">Design Systems</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        {/* Left Column - Name & Title */}
        <div className="hero-identity" data-hero-meta>
          <div className="hero-name-wrapper">
            <span className="hero-name-label">Creative Director</span>
            <h2 className="hero-name">Germaw Almiea</h2>
          </div>
          <div className="hero-year">
            <span>&copy; 2026</span>
          </div>
        </div>

        {/* Center - Massive Title */}
        <div className="hero-title-container">
          <h1 className="hero-title" data-hero-title>
            <span className="hero-title-line" data-hero-title-line>
              <span className="hero-title-text">VISUAL</span>
            </span>
            <span className="hero-title-line" data-hero-title-line>
              <span className="hero-title-text hero-title-outline">IDENTITY</span>
            </span>
            <span className="hero-title-line" data-hero-title-line>
              <span className="hero-title-text">SYSTEMS</span>
              <span className="hero-title-accent" data-hero-meta>*</span>
            </span>
          </h1>

          {/* Floating Badge */}
          <div className="hero-floating-badge" data-hero-meta>
            <span className="badge-number">01</span>
            <span className="badge-text">Top 1% Designer</span>
          </div>
        </div>

        {/* Right Column - Description */}
        <aside className="hero-description" data-hero-meta>
          <p className="hero-desc-text">
            Crafting bold visual systems and motion-driven experiences 
            that transform brands into cultural forces.
          </p>
          <div className="hero-desc-cta">
            <a href="#work" className="hero-cta-link">
              <span>View Selected Work</span>
              <ArrowDownRight size={20} strokeWidth={3} />
            </a>
          </div>
        </aside>
      </div>

      {/* Bottom Services Strip */}
      <div className="hero-services" data-hero-meta>
        <div className="hero-service-item">
          <span className="service-number">01</span>
          <span className="service-name">Brand Identity</span>
        </div>
        <div className="hero-service-item">
          <span className="service-number">02</span>
          <span className="service-name">Motion Design</span>
        </div>
        <div className="hero-service-item">
          <span className="service-number">03</span>
          <span className="service-name">UI/UX Systems</span>
        </div>
        <div className="hero-service-item">
          <span className="service-number">04</span>
          <span className="service-name">Art Direction</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a className="hero-scroll-indicator" href="#work" data-hero-meta>
        <span className="scroll-text">Scroll</span>
        <span className="scroll-line" />
      </a>

      {/* Decorative Elements */}
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-accent-block" aria-hidden="true" />
    </section>
  );
}
