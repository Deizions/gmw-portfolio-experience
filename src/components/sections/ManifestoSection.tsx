const manifestoPoints = [
  "Visuals need purpose.",
  "Motion needs rhythm.",
  "Interfaces need logic.",
  "Brands need memory.",
];

export default function ManifestoSection() {
  return (
    <section className="section manifesto-section dark-section">
      <div className="manifesto-layout">
        <div className="manifesto-left">
          <p className="eyebrow" data-reveal>
            Manifesto
          </p>

          <h2 className="section-title" data-reveal>
            NOT JUST
            <br />
            A DESIGNER.
          </h2>
        </div>

        <div className="manifesto-right">
          <div className="manifesto-statement" data-brutal-card>
            <p>
              I do not design to decorate. I design to build attention, trust,
              movement and memory.
            </p>
          </div>

          <div className="manifesto-panel">
            {manifestoPoints.map((point) => (
              <p key={point} data-brutal-card>
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="manifesto-strip" aria-hidden="true">
        <span>GRAPHIC DESIGN</span>
        <span>MOTION</span>
        <span>UI/UX</span>
        <span>FRONTEND</span>
        <span>STORYTELLING</span>
      </div>
    </section>
  );
}