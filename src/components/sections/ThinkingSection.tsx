const processItems = [
  {
    number: "01",
    title: "Find the friction",
    label: "Problem",
    text: "Before visuals, I define what is unclear, what blocks action and what the user needs to understand faster.",
  },
  {
    number: "02",
    title: "Read the room",
    label: "Research",
    text: "I look at the audience, the business goal, the emotional trigger and the visual language that fits the market.",
  },
  {
    number: "03",
    title: "Build the logic",
    label: "Structure",
    text: "I map hierarchy, sections, user flow and content order before touching colors, effects or animation.",
  },
  {
    number: "04",
    title: "Create pressure",
    label: "Design",
    text: "I use typography, contrast, spacing, motion and composition to make the experience feel sharp and intentional.",
  },
  {
    number: "05",
    title: "Move to action",
    label: "Result",
    text: "The final design needs to make people understand, trust, remember and do something.",
  },
];

const rules = [
  "No decoration without purpose",
  "Every section needs a job",
  "Motion must guide attention",
  "Visual hierarchy before style",
];

export default function ThinkingSection() {
  return (
    <section className="section thinking-section" id="thinking">
      <div className="thinking-hero">
        <div className="thinking-title-block">
          <p className="eyebrow" data-reveal>
            How I think
          </p>

          <h2 className="section-title" data-reveal>
            DESIGN IS A DECISION SYSTEM.
          </h2>
        </div>

        <div className="thinking-lead-card" data-brutal-card>
          <span>Core belief</span>
          <p>
            Looks good is only step one. A strong design needs logic, rhythm,
            hierarchy and a reason behind every visual decision.
          </p>
        </div>
      </div>

      <div className="thinking-board">
        <div className="thinking-board-header" data-reveal>
          <span>GMW / Creative logic map</span>
          <span>From problem to action</span>
          <span>05 steps</span>
        </div>

        <div className="thinking-map">
          <aside className="thinking-rules" data-brutal-card>
            <span className="thinking-rules-title">Rules I don’t break</span>

            <ul>
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </aside>

          <div className="process-lane">
            {processItems.map((item, index) => (
              <article className="process-node" key={item.number} data-brutal-card>
                <div className="process-node-top">
                  <span className="process-number">{item.number}</span>
                  <span className="process-label">{item.label}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                {index < processItems.length - 1 && (
                  <span className="process-connector" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="thinking-output" data-brutal-card>
          <span>Output</span>
          <strong>
            Clear story. Strong hierarchy. Sharp interface. Memorable visual
            system.
          </strong>
        </div>
      </div>
    </section>
  );
}