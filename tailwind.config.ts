import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "var(--font-inter)", "system-ui", "sans-serif"],
      },
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
        background: "#000000",      // Deep Navy – trust, security, enterprise
        primary: "#2A9593",
        secondary: "#35B5B3",    // Steel Blue – corporate, IT infrastructure
        accent: "#2A9593"
      },
    },
  },
  plugins: [],
};
export default config;
