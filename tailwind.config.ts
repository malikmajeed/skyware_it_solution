import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-slower': 'float 7s ease-in-out infinite',
      },
      colors: {
        primary: "#000000",      // Deep Navy – trust, security, enterprise
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
