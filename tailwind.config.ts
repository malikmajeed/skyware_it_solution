import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C2D",      // Deep Navy – trust, security, enterprise
        secondary: "#1F4E79",    // Steel Blue – corporate, IT infrastructure
        accent: "#00C2FF",       // Electric Cyan – CTAs, links, highlights
        "neutral-light": "#F4F6F8",
        "neutral-dark": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
