import { storySteps } from "../../data/portfolioData";

export default function StorySection() {
  return (
    <section className="section story-section">
      <div className="section-heading-row story-heading">
        <p className="eyebrow" data-reveal>
          Story
        </p>

        <h2 className="section-title" data-reveal>
          FROM VISUAL INSTINCT TO CREATIVE SYSTEMS.
        </h2>
      </div>

      <div className="story-stage">
        <div className="story-side-note" data-reveal>
          <span>GMW / Creative path</span>
          <strong>Built through experiments, pressure and taste.</strong>
        </div>

        <div className="story-list">
          {storySteps.map((step) => (
            <article className="story-step" key={step.number} data-brutal-card>
              <span className="story-number">{step.number}</span>

              <div className="story-content">
                <span className="story-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="story-marker" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}