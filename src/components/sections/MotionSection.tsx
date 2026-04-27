const motionFrames = [
  { time: "00:01", label: "Hook", text: "Catch attention before the scroll dies." },
  { time: "00:04", label: "Cut", text: "Remove noise. Keep only what moves the story." },
  { time: "00:08", label: "Pace", text: "Control rhythm with timing, spacing and tension." },
  { time: "00:12", label: "Impact", text: "Leave a visual memory, not just a transition." },
];

export default function MotionSection() {
  return (
    <section className="section motion-section dark-section">
      <div className="motion-top">
        <div>
          <p className="eyebrow" data-reveal>
            Motion language
          </p>

          <h2 className="section-title" data-reveal>
            EDITING IS RHYTHM.
          </h2>
        </div>

        <p className="motion-lead" data-reveal>
          Motion is how attention is directed. It decides what enters, what
          exits, what gets remembered and what feels alive.
        </p>
      </div>

      <div className="marquee-window" aria-hidden="true">
        <div className="marquee-track" data-marquee-track>
          <span>CUT</span>
          <span>PACE</span>
          <span>ENERGY</span>
          <span>TIMING</span>
          <span>FRAMES</span>
          <span>RHYTHM</span>
          <span>CUT</span>
          <span>PACE</span>
          <span>ENERGY</span>
          <span>TIMING</span>
          <span>FRAMES</span>
          <span>RHYTHM</span>
        </div>
      </div>

      <div className="editing-board" data-brutal-card>
        <div className="editing-header">
          <span>GMW / Motion Board</span>
          <span>Timeline View</span>
          <span>00:00:12</span>
        </div>

        <div className="preview-stage">
          <div className="preview-window">
            <div className="preview-grid">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="preview-title">
              <span>FRAME</span>
              <strong>IMPACT</strong>
            </div>

            <div className="preview-shape preview-shape-a" />
            <div className="preview-shape preview-shape-b" />
          </div>

          <div className="frame-notes">
            {motionFrames.map((frame) => (
              <article key={frame.time} data-brutal-card>
                <span>{frame.time}</span>
                <h3>{frame.label}</h3>
                <p>{frame.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="timeline-editor">
          <div className="time-ruler">
            <span>00:00</span>
            <span>00:03</span>
            <span>00:06</span>
            <span>00:09</span>
            <span>00:12</span>
          </div>

          <div className="timeline-track timeline-track-video">
            <span className="clip clip-long">Visual</span>
            <span className="clip clip-short">Type</span>
            <span className="clip clip-mid">Shape</span>
          </div>

          <div className="timeline-track timeline-track-motion">
            <span className="clip clip-mid">Ease</span>
            <span className="clip clip-long">Parallax</span>
          </div>

          <div className="timeline-track timeline-track-sound">
            <span className="clip clip-short">Hit</span>
            <span className="clip clip-mid">Pause</span>
            <span className="clip clip-short">Drop</span>
          </div>

          <div className="playhead" data-timeline-fill />
        </div>
      </div>
    </section>
  );
}