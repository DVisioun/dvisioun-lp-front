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
      "d-0.2": { max: "600px" },
      "d-0.3": { max: "440px" },
      "d-1": { max: "345px" },
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
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    extend: {
      colors: {
        "primary-blue": "#3BC9DB",
        "dark-blue": "#0C8599",
        "gray-100": "#F8F9FA",
        "gray-200": "#F1F3F5",
        "gray-300": "#E9ECEF",
        "gray-400": "#CED4DA",
        "gray-500": "#868E96",
        "gray-600": "#343A40",
        "gray-700": "#2d2d2d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
