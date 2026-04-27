export type Project = {
  id: string;
  index: string;
  title: string;
  field: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  tone: string;
};

export type StoryStep = {
  number: string;
  title: string;
  description: string;
  label: string;
};

export const storySteps: StoryStep[] = [
  {
    number: "01",
    label: "Origin",
    title: "Started with visuals",
    description:
      "Before it was a profession, it was curiosity. Forums, experiments, edits, covers, posters and visual worlds built from instinct.",
  },
  {
    number: "02",
    label: "Discipline",
    title: "Learned the system",
    description:
      "Design became more than style. It became spacing, hierarchy, contrast, rhythm, accessibility and decisions that serve a goal.",
  },
  {
    number: "03",
    label: "Product",
    title: "Moved into experiences",
    description:
      "UI, UX and frontend changed the way I think. A screen is not a picture. It is a system someone needs to understand and use.",
  },
  {
    number: "04",
    label: "Direction",
    title: "Built a creative engine",
    description:
      "Today the work connects branding, motion, storytelling, product logic and code into one clear creative direction.",
  },
];

export const projects: Project[] = [
  {
    id: "arosport",
    index: "01",
    title: "Arosport",
    field: "eCommerce / UI Redesign",
    description:
      "A sharper commerce experience built around clarity, trust and product discovery.",
    tags: ["UX", "UI", "Commerce"],
    role: "Experience Designer",
    year: "2026",
    tone: "Clean / Sport / Conversion",
  },
  {
    id: "traceflow",
    index: "02",
    title: "TraceFlow",
    field: "AR Product Concept",
    description:
      "A mobile creative tool that turns real-world drawing into an assisted AR workflow.",
    tags: ["Product", "AR", "Mobile"],
    role: "Product + UI Direction",
    year: "2026",
    tone: "Futuristic / Practical / Creator-first",
  },
  {
    id: "inkverse",
    index: "03",
    title: "INKVERSE",
    field: "Brand / Comic System",
    description:
      "A visual world for comics, characters and scroll-based storytelling environments.",
    tags: ["Branding", "Illustration", "Story"],
    role: "Brand Designer",
    year: "2026",
    tone: "Bold / Character / Graphic",
  },
];