type Project = {
  name: string;
  tag: string;
  description: string;
  chips: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Kontly",
    tag: "AI accounting agent",
    description:
      "Classifies invoices and builds financial statements for Mexican CFDI/SAT compliance. Cut a real accounting firm's monthly close from 16 hours to 2 hours per client.",
    chips: ["461 automated tests", "Python"],
    href: "https://kontly.vercel.app",
  },
  {
    name: "JARVIS",
    tag: "Local voice assistant",
    description:
      "Makes real phone calls to book appointments, reads mail and calendar read-only, and navigates a 51,802-node personal knowledge graph. Runs 24/7.",
    chips: ["Voice", "Always on"],
  },
  {
    name: "paulmanilla.com",
    tag: "Insurance business, automated",
    description:
      "My own insurance business, run by agents: a Meta ad feeds a landing page, which feeds a CRM, which triggers a Playwright bot that quotes on the insurer's own portal — and emails the PDF, unattended.",
    chips: ["Next.js", "Playwright", "CRM"],
    href: "https://paulmanilla.com",
  },
  {
    name: "Landucci · Kuranderos",
    tag: "Commerce, built end to end",
    description: "Two commerce sites with cinematic motion, designed and shipped end to end.",
    chips: ["Next.js", "Motion"],
    href: "https://landucci-pizza.vercel.app",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-gap border-t border-line-800">
      <div className="container-app">
        <span className="eyebrow">Running right now</span>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-paper-50 sm:text-4xl">
          Live systems, not slide decks.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.name} className="card flex flex-col p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-paper-50">{project.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-paper-400">
                    {project.tag}
                  </p>
                </div>
                <span
                  className="mt-1.5 h-2 w-2 flex-none rounded-full bg-signal-500"
                  aria-label="In production"
                  title="In production"
                />
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-paper-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.chips.map((chip) => (
                  <span key={chip} className="tag">
                    {chip}
                  </span>
                ))}
              </div>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 text-sm font-medium text-accent-400 hover:text-accent-500"
                >
                  Visit ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
