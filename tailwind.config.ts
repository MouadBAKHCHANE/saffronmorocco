import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#23201D",
          "container-low": "#2C2926",
          container: "#35322F",
          "container-high": "#403C39",
          "container-highest": "#4D4945",
          "container-lowest": "#1B1815",
        },
        "on-surface": {
          DEFAULT: "#E9E1DC",
          variant: "#E0BEBF",
        },
        primary: {
          DEFAULT: "#BC1A36",
          container: "#8B0000",
        },
        "on-primary": "#68001A",
        secondary: {
          DEFAULT: "#E1B9E7",
          container: "#5A3B61",
        },
        tertiary: "#CBC6BD",
        outline: {
          DEFAULT: "#A8898A",
          variant: "#594142",
        },
        error: "#FFB4AB",
      },
      fontFamily: {
        headline: ["var(--font-newsreader)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        caption: [
          "clamp(0.7rem, 0.65rem + 0.25vw, 0.8rem)",
          { lineHeight: "1.5" },
        ],
        small: [
          "clamp(0.8rem, 0.75rem + 0.25vw, 0.9rem)",
          { lineHeight: "1.6" },
        ],
        base: [
          "clamp(0.9rem, 0.85rem + 0.25vw, 1rem)",
          { lineHeight: "1.7" },
        ],
        "body-lg": [
          "clamp(1rem, 0.925rem + 0.375vw, 1.15rem)",
          { lineHeight: "1.7" },
        ],
        h4: [
          "clamp(1.1rem, 0.95rem + 0.75vw, 1.5rem)",
          { lineHeight: "1.3" },
        ],
        h3: [
          "clamp(1.3rem, 1.05rem + 1.25vw, 2rem)",
          { lineHeight: "1.25" },
        ],
        h2: [
          "clamp(1.6rem, 1.15rem + 2.25vw, 2.75rem)",
          { lineHeight: "1.15" },
        ],
        h1: [
          "clamp(2rem, 1.3rem + 3.5vw, 4rem)",
          { lineHeight: "1.05" },
        ],
      },
      letterSpacing: {
        heading: "-0.02em",
        overline: "0.15em",
        nav: "0.08em",
        button: "0.06em",
      },
      maxWidth: {
        content: "1280px",
        wide: "1400px",
        readable: "680px",
      },
      spacing: {
        "section-gap": "clamp(6rem, 12vw, 10rem)",
        "sub-gap": "clamp(3rem, 6vw, 5rem)",
      },
      borderRadius: {
        card: "8px",
        button: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
