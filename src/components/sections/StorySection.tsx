import { storySteps } from "../../data/portfolioData";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const storyImages = [
  {
    label: "Early Work",
    description: "Collage of early design experiments, forum graphics, and self-initiated projects from the learning years",
  },
  {
    label: "Process Shot",
    description: "Behind-the-scenes workspace photo showing design tools, sketches, and work in progress",
  },
];

export default function StorySection() {
  return (
    <section className="section story-section">
      {/* Background grid */}
      <div className="story-bg-grid" aria-hidden="true" />
      
      {/* Section header */}
      <div className="story-header">
        <div className="story-header-top">
          <span className="editorial-label">
            <span className="label-dot" />
            Origin Story
          </span>
          <span className="story-chapter">Chapter 01</span>
        </div>
        
        <h2 className="section-title" data-reveal>
          FROM VISUAL
          <br />
          INSTINCT TO
          <br />
          CREATIVE
          <br />
          SYSTEMS.
        </h2>
      </div>

      {/* Main story content */}
      <div className="story-content">
        {/* Sticky sidebar with images */}
        <aside className="story-sidebar">
          <div className="story-sidebar-sticky">
            {/* Info card */}
            <div className="story-info-card" data-brutal-card>
              <span className="story-info-label">GMW / Creative Path</span>
              <strong>Built through experiments, pressure and taste.</strong>
            </div>

            {/* Image placeholders */}
            <div className="story-images">
              {storyImages.map((img, i) => (
                <div key={i} className="story-image-wrapper" data-brutal-card>
                  <ImagePlaceholder
                    label={img.label}
                    description={img.description}
                    aspectRatio="landscape"
                    variant={i === 0 ? "dark" : "accent"}
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Timeline steps */}
        <div className="story-timeline">
          {storySteps.map((step, index) => (
            <article className="story-step" key={step.number} data-brutal-card>
              {/* Step header */}
              <div className="story-step-header">
                <span className="story-number">{step.number}</span>
                <div className="story-step-meta">
                  <span className="story-label">{step.label}</span>
                  <span className="story-year">{2018 + index * 2}</span>
                </div>
              </div>

              {/* Step content */}
              <div className="story-step-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {/* Visual marker */}
              <div className="story-marker" aria-hidden="true">
                <span className="marker-line" />
                <span className="marker-dot" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom editorial element */}
      <div className="story-footer" data-brutal-card>
        <div className="story-footer-label">
          <span>Current Chapter</span>
          <strong>2026</strong>
        </div>
        <p className="story-footer-text">
          Now building visual systems that connect branding, motion, product logic, 
          and code into one clear creative direction.
        </p>
        <div className="story-footer-status">
          <span className="status-indicator" />
          <span>Actively creating</span>
        </div>
      </div>
    </section>
  );
}
