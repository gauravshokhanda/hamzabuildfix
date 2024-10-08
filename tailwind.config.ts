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
        primary: "#40A8CD",
        secondary: "#A3D154",
        black: "#000000",
        slate: "#1d263a",
        white: "#ffffff",
        background_blue: "#F6F8FA",
        background_dark: "#1e353e",

        header: "#1d263a",
        gray: "#525252",
      },
      backgroundImage: {
        reviewLeft: "url('./public/images/landing-page/left-review.png')",
        reviewRight: "url('./public/images/landing-page/right-review.png')",
        reviewMiddle: "url('./public/images/landing-page/middle-review.png')",

        bgHero:
          "linear-gradient(rgba(64, 168, 205, 0.67), rgba(32, 84, 103, 0.67))",
      },
      boxShadow: {
        box: "0px 54px 100px 0px rgba(10, 4, 60, 0.1)",
        boxDark: "0px 6.75px 20.24px 0px rgba(30, 61, 96, 0.03)",
        peopleBox: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
