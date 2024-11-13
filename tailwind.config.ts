import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#be1623',
        'secundary': '#fac55d',
        'terciary': '#486966',
        'terciary-light': '#09D69C',
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    }
  },
  plugins: [],
};
export default config;