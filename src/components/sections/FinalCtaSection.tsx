import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const contactLinks = [
  {
    label: "Behance",
    value: "Full Portfolio",
    href: "https://www.behance.net/germawalmiea",
    icon: ExternalLink,
  },
  {
    label: "Email",
    value: "Start a Project",
    href: "mailto:hello@gmwcreative.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "Visual Updates",
    href: "#",
    icon: ExternalLink,
  },
];

const services = [
  "Brand Identity Systems",
  "Portfolio Experiences", 
  "Landing Pages",
  "Motion-Driven Visuals",
  "UI/UX Direction",
  "Creative Strategy",
];

export default function FinalCtaSection() {
  return (
    <section className="section cta-section" id="contact">
      {/* Background elements */}
      <div className="cta-bg-word" aria-hidden="true">GMW</div>
      <div className="cta-bg-grid" aria-hidden="true" />

      {/* Top editorial bar */}
      <div className="cta-top-bar" data-reveal>
        <span className="cta-bar-item cta-bar-label">Final Frame</span>
        <span className="cta-bar-item cta-bar-brand">GMWcreative</span>
        <span className="cta-bar-item cta-bar-status">
          <span className="status-dot" />
          Available for Selected Projects
        </span>
      </div>

      {/* Main CTA content */}
      <div className="cta-layout">
        {/* Left - Main CTA */}
        <div className="cta-main">
          <span className="editorial-label">
            <span className="label-dot" />
            Let&apos;s Connect
          </span>

          <h2 className="cta-title" data-reveal>
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="cta-title-accent">LOUD.</span>
          </h2>

          <div className="cta-statement" data-brutal-card>
            <p>
              If the goal is to look like everyone else, I am probably not the
              right designer. If the goal is to be clear, sharp and remembered,
              we should talk.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="cta-right">
          {/* Services list */}
          <aside className="cta-services" data-brutal-card>
            <span className="cta-services-label">Open For</span>
            <ul className="cta-services-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </aside>

          {/* Featured work preview */}
          <div className="cta-featured" data-brutal-card>
            <ImagePlaceholder
              label="Featured Work"
              description="Bold graphic design piece showcasing the designer's signature style with strong typography and acid green accents"
              aspectRatio="landscape"
              variant="dark"
            />
            <div className="cta-featured-label">
              <span>Latest Project</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact cards grid */}
      <div className="cta-link-grid">
        {contactLinks.map((link) => (
          <a
            className="cta-link-card"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            key={link.label}
            data-brutal-card
            data-cursor="pointer"
          >
            <div className="cta-link-top">
              <span className="cta-link-label">{link.label}</span>
              <link.icon size={20} strokeWidth={2.5} />
            </div>
            <strong className="cta-link-value">{link.value}</strong>
            <ArrowUpRight size={28} strokeWidth={3} className="cta-link-arrow" />
          </a>
        ))}
      </div>

      {/* Bottom editorial strip */}
      <div className="cta-bottom-strip">
        <div className="cta-strip-item">
          <span>Location</span>
          <strong>Worldwide</strong>
        </div>
        <div className="cta-strip-item">
          <span>Timezone</span>
          <strong>Flexible</strong>
        </div>
        <div className="cta-strip-item cta-strip-cta">
          <a href="mailto:hello@gmwcreative.com" data-cursor="pointer">
            <span>hello@gmwcreative.com</span>
            <ArrowUpRight size={18} strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
