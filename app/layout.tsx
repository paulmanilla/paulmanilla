import type { Metadata, Viewport } from "next";
import "./globals.css";

// Sin dominio de producción asignado todavía: se configura via NEXT_PUBLIC_SITE_URL
// cuando exista. localhost es un fallback seguro para metadataBase mientras tanto.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  .trim()
  .replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Paul Manilla | AI & Automation Engineering",
    template: "%s | Paul Manilla",
  },
  description:
    "I build AI systems that operate real businesses — agents, quoting bots, voice assistants and dashboards, shipped to production, not stuck in a demo.",
  keywords: [
    "AI agency",
    "AI automation",
    "AI agents",
    "Claude API",
    "GPT API",
    "Playwright automation",
    "voice assistant",
    "Paul Manilla",
  ],
  authors: [{ name: "Paul Manilla" }],
  creator: "Paul Manilla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Paul Manilla — AI & Automation Engineering",
    title: "Paul Manilla | AI & Automation Engineering",
    description:
      "AI systems that operate real businesses — agents, quoting bots, voice assistants and dashboards, shipped to production.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Manilla | AI & Automation Engineering",
    description: "AI systems that operate real businesses — not demos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ink-950 font-sans text-paper-50 antialiased">{children}</body>
    </html>
  );
}
