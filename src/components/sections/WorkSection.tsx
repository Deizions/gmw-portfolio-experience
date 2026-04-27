import { projects } from "../../data/portfolioData";

export default function WorkSection() {
  return (
    <section className="section work-section" id="work">
      <div className="section-heading-row work-heading">
        <p className="eyebrow" data-reveal>
          Selected work
        </p>

        <h2 className="section-title" data-reveal>
          PROJECTS WITH A POINT OF VIEW.
        </h2>
      </div>

      <div className="project-showcase">
        {projects.map((project) => (
          <article
            className={`project-poster project-poster-${project.id}`}
            key={project.id}
            data-brutal-card
            data-project-poster
          >
            <div className="project-poster-meta">
              <span>{project.index}</span>
              <span>{project.field}</span>
              <span>{project.year}</span>
            </div>

            <div className="project-poster-body">
              <div className="project-copy">
                <p className="project-role">{project.role}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-facts">
                  <span>Role</span>
                  <strong>{project.role}</strong>
                  <span>Tone</span>
                  <strong>{project.tone}</strong>
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div
                className="project-visual"
                aria-label={`${project.title} visual placeholder`}
              >
                <div className="mockup-frame" data-mouse-layer="mockup">
                  <div className="mockup-topbar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="mockup-content">
                    <div className="mockup-line mockup-line-wide" />
                    <div className="mockup-line" />
                    <div className="mockup-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className="poster-number" data-mouse-layer="number">
                  {project.index}
                </div>

                <div
                  className="poster-shape poster-shape-a"
                  data-mouse-layer="shape-a"
                />
                <div
                  className="poster-shape poster-shape-b"
                  data-mouse-layer="shape-b"
                />
              </div>
            </div>

            <a className="project-link" href="#contact" data-cursor="pointer">
              Discuss this direction
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}