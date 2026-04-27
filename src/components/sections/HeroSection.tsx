export default function HeroSection() {
  return (
    <section className="section hero-section" id="top" data-pin-scene>
      <div className="hero-meta" data-hero-meta>
        <span>GMWcreative</span>
        <span>Portfolio 2026</span>
        <span>Graphic / Motion / UX</span>
      </div>

      <div className="hero-layout">
        <div className="hero-main">
          <p className="hero-label" data-hero-meta>
            Germaw Almiea
          </p>

          <h1 className="hero-title" data-hero-title>
            <span>DESIGN</span>
            <span>WITH</span>
            <span>PRESSURE.</span>
          </h1>

          <p className="hero-subtitle" data-hero-meta>
            I build bold visual systems, motion driven layouts and digital
            experiences that make ideas feel clear, sharp and remembered.
          </p>
        </div>

        <aside className="hero-side" data-hero-meta>
          <span>01</span>
          <p>
            Not decoration.
            <br />
            Direction.
          </p>
        </aside>
      </div>

      <div className="hero-bottom" data-hero-meta>
        <span>Brand Identity</span>
        <span>Motion Design</span>
        <span>UI/UX Systems</span>
        <span>Frontend Builds</span>
      </div>

      <a className="scroll-note" href="#work" data-hero-meta>
        Scroll
      </a>
    </section>
  );
}