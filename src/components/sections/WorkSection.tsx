import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/portfolioData";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const projectImageDescriptions: Record<string, { poster: string; detail: string }> = {
  arosport: {
    poster: "High-contrast product photography of athletic footwear on minimal white background with dramatic shadows",
    detail: "E-commerce product grid showing clean UI with bold typography and accent color highlights",
  },
  traceflow: {
    poster: "AR interface mockup showing drawing tools overlaid on real-world environment with neon accent lines",
    detail: "Mobile app screens displaying gesture controls and real-time drawing preview",
  },
  inkverse: {
    poster: "Bold comic character illustration in high-contrast black and white with acid green accents",
    detail: "Brand identity spread showing logo variations, typography system, and color palette",
  },
};

export default function WorkSection() {
  return (
    <section className="section work-section" id="work">
      {/* Background graphic elements */}
      <div className="bg-graphic bg-graphic-dots work-bg-dots" aria-hidden="true" />
      
      {/* Section header with editorial layout */}
      <div className="work-header">
        <div className="work-header-left">
          <span className="editorial-label">
            <span className="label-dot" />
            Selected Work
          </span>
          <h2 className="section-title" data-reveal>
            PROJECTS
            <br />
            WITH A
            <br />
            POINT OF
            <br />
            VIEW.
          </h2>
        </div>
        
        <aside className="work-header-aside" data-brutal-card>
          <span className="work-header-aside-label">Portfolio</span>
          <p>
            Each project is a statement. Brand systems, product experiences, 
            and visual narratives designed to move people.
          </p>
          <div className="work-stats">
            <div className="work-stat">
              <strong>50+</strong>
              <span>Projects</span>
            </div>
            <div className="work-stat">
              <strong>12</strong>
              <span>Industries</span>
            </div>
            <div className="work-stat">
              <strong>8</strong>
              <span>Countries</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Project showcase with image placeholders */}
      <div className="project-showcase">
        {projects.map((project, index) => (
          <article
            className={`project-card project-card-${project.id}`}
            key={project.id}
            data-brutal-card
            data-project-poster
          >
            {/* Project header bar */}
            <div className="project-card-header">
              <span className="project-index">{project.index}</span>
              <span className="project-field">{project.field}</span>
              <span className="project-year">{project.year}</span>
            </div>

            {/* Main project content */}
            <div className="project-card-body">
              {/* Visual column with image placeholders */}
              <div className="project-visuals">
                {/* Main poster image */}
                <div className="project-poster-image" data-mouse-layer="poster">
                  <ImagePlaceholder
                    label="Hero Visual"
                    description={projectImageDescriptions[project.id]?.poster || "Project hero image"}
                    aspectRatio="portrait"
                    variant={index % 2 === 0 ? "light" : "dark"}
                  />
                  <span className="poster-overlay-number" aria-hidden="true">
                    {project.index}
                  </span>
                </div>
                
                {/* Secondary detail image */}
                <div className="project-detail-image" data-mouse-layer="detail">
                  <ImagePlaceholder
                    label="Case Study Preview"
                    description={projectImageDescriptions[project.id]?.detail || "Project detail view"}
                    aspectRatio="landscape"
                    variant="accent"
                  />
                </div>
              </div>

              {/* Content column */}
              <div className="project-content">
                <div className="project-content-top">
                  <span className="project-role-badge">{project.role}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-content-bottom">
                  <div className="project-meta-grid">
                    <div className="project-meta-item">
                      <span>Role</span>
                      <strong>{project.role}</strong>
                    </div>
                    <div className="project-meta-item">
                      <span>Tone</span>
                      <strong>{project.tone}</strong>
                    </div>
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project CTA */}
            <a className="project-cta" href="#contact" data-cursor="pointer">
              <span>View Case Study</span>
              <ArrowUpRight size={24} strokeWidth={3} />
            </a>
          </article>
        ))}
      </div>

      {/* Portfolio CTA strip */}
      <div className="work-cta-strip" data-brutal-card>
        <div className="work-cta-content">
          <span className="editorial-label editorial-label--dark">More Work</span>
          <p>See the complete portfolio on Behance with detailed case studies and process breakdowns.</p>
        </div>
        <a 
          href="https://www.behance.net/germawalmiea" 
          target="_blank"
          rel="noopener noreferrer"
          className="work-cta-link"
          data-cursor="pointer"
        >
          <span>Behance Portfolio</span>
          <ArrowUpRight size={24} strokeWidth={3} />
        </a>
      </div>
    </section>
  );
}
