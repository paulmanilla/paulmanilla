export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-800">
      <div className="container-app flex flex-col items-center gap-4 py-10 text-sm text-paper-400 md:flex-row md:justify-between">
        <p>
          © {year} Paul Manilla — AI &amp; Automation Engineer, Zapopan, MX.
        </p>
        <div className="flex gap-6">
          <a href="#work" className="hover:text-paper-50">
            Work
          </a>
          <a href="#stack" className="hover:text-paper-50">
            Stack
          </a>
          <a href="#contact" className="hover:text-paper-50">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
