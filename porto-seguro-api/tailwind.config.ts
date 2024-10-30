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
        aliceblue: '#f0f8ff',
        porto: '#3da3d0',
        oxigenio: '#68ee86'
      },
    },
  },
  plugins: [],
};
export default config;
  