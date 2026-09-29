import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function Contact() {
  return (
    <section id="contact" className="section-gap border-t border-line-800 bg-hero-glow">
      <div className="container-app flex flex-col items-center text-center">
        <span className="eyebrow">Get in touch</span>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-paper-50 sm:text-4xl">
          Have a workflow worth automating?
        </h2>
        <p className="mt-4 max-w-md text-paper-300">
          Tell me what&apos;s manual today. I&apos;ll tell you honestly whether an agent
          can run it.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:paulmanillabello@gmail.com?subject=Let%27s%20talk%20about%20automating%20a%20workflow"
            className="btn-primary"
          >
            Book a call
          </a>
          <CopyEmailButton />
        </div>

        <a
          href="https://landing-cv-paul.vercel.app/Paul_Manilla_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-8 text-sm font-medium text-paper-400 hover:text-paper-50"
        >
          Download CV (PDF) ↗
        </a>
      </div>
    </section>
  );
}
