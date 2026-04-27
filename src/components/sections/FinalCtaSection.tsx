const contactLinks = [
  {
    label: "Behance",
    value: "Selected work",
    href: "https://www.behance.net/germawalmiea",
  },
  {
    label: "Email",
    value: "Start a project",
    href: "mailto:hello@gmwcreative.com",
  },
  {
    label: "Instagram",
    value: "Visual updates",
    href: "#",
  },
];

export default function FinalCtaSection() {
  return (
    <section className="section cta-section" id="contact">
      <div className="cta-poster-label" data-reveal>
        <span>Final frame</span>
        <span>GMWcreative</span>
        <span>Available for selected projects</span>
      </div>

      <div className="cta-layout">
        <div className="cta-main">
          <p className="eyebrow" data-reveal>
            Contact
          </p>

          <h2 className="hero-title" data-reveal>
            LET’S BUILD
            <br />
            SOMETHING
            <br />
            LOUD.
          </h2>

          <p className="cta-copy" data-reveal>
            If the goal is to look like everyone else, I am probably not the
            right designer. If the goal is to be clear, sharp and remembered,
            we should talk.
          </p>
        </div>

        <aside className="cta-side" data-brutal-card>
          <span className="cta-side-label">Open for</span>

          <ul>
            <li>Brand identity</li>
            <li>Portfolio experiences</li>
            <li>Landing pages</li>
            <li>Motion driven visuals</li>
            <li>UI/UX direction</li>
          </ul>
        </aside>
      </div>

      <div className="cta-link-grid">
        {contactLinks.map((link) => (
          <a
            className="cta-link-card"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            key={link.label}
            data-brutal-card
            data-cursor="pointer"
          >
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>

      <div className="cta-background-word" aria-hidden="true">
        GMW
      </div>
    </section>
  );
}