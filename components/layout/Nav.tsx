const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-800/80 bg-ink-950/80 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-paper-50">Paul Manilla</span>
          <span className="hidden font-mono text-xs text-paper-400 sm:inline">AI Agency</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-300 transition-colors hover:text-paper-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
          Book a call
        </a>
      </nav>
    </header>
  );
}
