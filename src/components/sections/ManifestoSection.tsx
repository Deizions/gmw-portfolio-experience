import ImagePlaceholder from "../ui/ImagePlaceholder";

const manifestoPoints = [
  { text: "Visuals need purpose.", number: "01" },
  { text: "Motion needs rhythm.", number: "02" },
  { text: "Interfaces need logic.", number: "03" },
  { text: "Brands need memory.", number: "04" },
];

const capabilities = [
  "Brand Identity",
  "Visual Systems", 
  "Motion Design",
  "UI/UX",
  "Art Direction",
  "Creative Strategy",
];

export default function ManifestoSection() {
  return (
    <section className="section manifesto-section dark-section">
      {/* Background graphic elements */}
      <div className="manifesto-bg-glow" aria-hidden="true" />
      <div className="manifesto-bg-lines" aria-hidden="true" />

      {/* Main layout */}
      <div className="manifesto-layout">
        {/* Left column - Title and image */}
        <div className="manifesto-left">
          <div className="manifesto-header">
            <span className="editorial-label editorial-label--dark">
              <span className="label-dot label-dot--accent" />
              Manifesto
            </span>
            
            <h2 className="section-title" data-reveal>
              NOT JUST
              <br />
              A DESIGNER.
            </h2>
          </div>

          {/* Designer portrait placeholder */}
          <div className="manifesto-portrait" data-brutal-card>
            <ImagePlaceholder
              label="Designer Portrait"
              description="Candid black and white portrait of the designer at work, shot with dramatic lighting and shallow depth of field"
              aspectRatio="portrait"
              variant="dark"
            />
            <div className="manifesto-portrait-label">
              <span>Germaw Almiea</span>
              <span>Creative Director</span>
            </div>
          </div>
        </div>

        {/* Right column - Statement and points */}
        <div className="manifesto-right">
          {/* Main statement */}
          <div className="manifesto-statement" data-brutal-card>
            <span className="manifesto-statement-label">Core Statement</span>
            <p>
              I do not design to decorate. I design to build attention, trust,
              movement and memory.
            </p>
          </div>

          {/* Manifesto points grid */}
          <div className="manifesto-panel">
            {manifestoPoints.map((point) => (
              <article key={point.number} className="manifesto-point" data-brutal-card>
                <span className="manifesto-point-number">{point.number}</span>
                <p>{point.text}</p>
              </article>
            ))}
          </div>

          {/* Capabilities list */}
          <div className="manifesto-capabilities" data-brutal-card>
            <span className="manifesto-capabilities-label">Capabilities</span>
            <div className="manifesto-capabilities-grid">
              {capabilities.map((cap) => (
                <span key={cap} className="capability-tag">{cap}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="manifesto-strip" aria-hidden="true">
        <div className="manifesto-strip-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="manifesto-strip-content">
              <span>GRAPHIC DESIGN</span>
              <span className="strip-divider">*</span>
              <span>MOTION</span>
              <span className="strip-divider">*</span>
              <span>UI/UX</span>
              <span className="strip-divider">*</span>
              <span>FRONTEND</span>
              <span className="strip-divider">*</span>
              <span>STORYTELLING</span>
              <span className="strip-divider">*</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
