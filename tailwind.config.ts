import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
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
