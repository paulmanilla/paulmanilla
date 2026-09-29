const STACK = [
  "TypeScript",
  "Next.js / React",
  "Python",
  "Claude & GPT APIs",
  "Whisper",
  "Playwright",
  "Supabase",
  "Stripe",
  "GSAP",
];

export default function Stack() {
  return (
    <section id="stack" className="section-gap border-t border-line-800">
      <div className="container-app">
        <span className="eyebrow">Under the hood</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper-50 sm:text-4xl">
          The stack
        </h2>

        <ul className="mt-10 flex flex-wrap gap-3">
          {STACK.map((item) => (
            <li key={item} className="tag !px-4 !py-2 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
