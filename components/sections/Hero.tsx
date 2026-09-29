const STATS = [
  { value: "461", label: "automated tests · Kontly" },
  { value: "16h → 2h", label: "monthly close, per client" },
  { value: "24/7", label: "voice agent, always on" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="container-app flex flex-col items-center pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <span className="eyebrow">AI &amp; Automation Engineering · Zapopan, MX</span>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-paper-50 sm:text-5xl md:text-6xl">
          AI systems that run real businesses
          <span className="bg-accent-gradient bg-clip-text text-transparent"> — not demos.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-paper-300">
          I design, build and operate the agents, bots and dashboards your business
          runs on — from the first message to production, unattended.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:paulmanillabello@gmail.com?subject=Let%27s%20talk%20about%20automating%20a%20workflow"
            className="btn-primary"
          >
            Book a call
          </a>
          <a href="#work" className="btn-outline">
            See the work
          </a>
        </div>

        <dl className="mt-20 grid w-full max-w-2xl grid-cols-1 gap-8 border-t border-line-800 pt-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-paper-50">{stat.value}</dd>
              <dd className="mt-1 text-xs text-paper-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
