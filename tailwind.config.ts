import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080B",
          900: "#0D0F14",
          800: "#14171F",
          700: "#1B1F2A",
        },
        line: {
          800: "#1F2430",
          700: "#2A3040",
        },
        paper: {
          50: "#F5F6F8",
          300: "#C7CBD4",
          400: "#9CA3B0",
        },
        accent: {
          400: "#7C97FF",
          500: "#5B7CFA",
          600: "#4763DB",
        },
        signal: {
          500: "#34D399",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #7C97FF 0%, #5B7CFA 45%, #8B7CFA 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(91,124,250,0.18) 0%, rgba(7,8,11,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
