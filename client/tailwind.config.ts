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
        primary: "#42ABD1",
        secondary: "#A3D154",
        black: "#000000",
        slate: "#d4d4d8",
        white: "#ffffff",
        background_blue: "#F6F8FA",
        background_dark: "#1e353e",
        light_blue: "#f0f9ff",

        header: "#1d263a",
        gray: "#525252",
        sky_text :"#42abd1",
        icon_color: "#A3AFB0",
        text_primary: "#3A5377",
        text_secondary: "#66797C",
        button_primary: "#00adef",
        admin_button: "#1294F2"
        

      },
      backgroundImage: {
        reviewLeft: "url('/images/landing-page/left-review.png')",
        reviewRight: "url('/images/landing-page/right-review.png')",
        reviewMiddle: "url('/images/landing-page/middle-review.png')",

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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
