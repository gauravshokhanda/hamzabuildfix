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
        white: "#ffffff",
        background_blue: "#F6F8FA"
      },
      backgroundImage: {
        'reviewLeft': "url('./public/images/landing-page/left-review.png')",
        'reviewRight': "url('./public/images/landing-page/right-review.png')",
        'reviewMiddle': "url('./public/images/landing-page/middle-review.png')",
      },
    },

  },
  plugins: [],
};
export default config;
