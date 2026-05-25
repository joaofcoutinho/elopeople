import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1B0F3F",
          deep: "#2A1B5E",
          purple: "#3D2B7A",
          violet: "#5B3FB8",
          accent: "#6B47C9",
          light: "#F4F2F8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1B0F3F 0%, #2A1B5E 50%, #3D2B7A 100%)",
        "panel-gradient":
          "linear-gradient(180deg, #2A1B5E 0%, #3D2B7A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
