import { Config } from "tailwindcss";

/** @type {Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#EDF2FF",
          light: "#C9D9FF",
          pure: "#304ffe",
          dark: "#143182",
          darkest: "#0D2262",
        },
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
} satisfies Config;
