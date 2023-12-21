import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "d-0.03": { min: "340px" },
      "d-0.02": { min: "480px" },
      "d-0.01": { min: "600px" },
      "d-0": { min: "768px" },
      "d-0.1": { min: "970px" },
      "d-0.2": { min: "1080px" },
      "d-0.3": { min: "1200px" },
      "d-1": { min: "1440px" },
      "u-0": { min: "1575px" },
      "u-1": { min: "2400px" },
    },
    fontSize: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "4rem"
    },
    extend: {
      colors: {
        "primary-blue": "#3BC9DB",
        "dark-blue": "#0C8599",
        "gray-100": "#F6f6f6",
        "gray-200": "#F1F3F5",
        "gray-300": "#E9ECEF",
        "gray-400": "#CED4DA",
        "gray-500": "#868E96",
        "gray-600": "#343A40",
        "gray-700": "#2d2d2d",
      },
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(59,201,219,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
