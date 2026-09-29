const PRINCIPLES = [
  {
    title: "Production over demos",
    description: "If it doesn't run unattended, it isn't done. A working agent beats a good pitch.",
  },
  {
    title: "One owner, whole pipeline",
    description:
      "From the ad to the CRM to the bot to the follow-up — one person who understands every hop, so nothing gets lost in a handoff.",
  },
  {
    title: "Real constraints, real businesses",
    description:
      "Built for a firm doing real client closes and a real book of business — not a hackathon weekend.",
  },
];

export default function Approach() {
  return (
    <section className="section-gap border-t border-line-800">
      <div className="container-app">
        <span className="eyebrow">How I work</span>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-paper-50 sm:text-4xl">
          Three rules I don&apos;t break.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <div key={principle.title}>
              <span className="font-mono text-sm text-accent-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-paper-50">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
