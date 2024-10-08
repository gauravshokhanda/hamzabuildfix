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
        white: "#ffffff",
        background_blue: "#F6F8FA",
        icon_color: "#A3AFB0",
        text_primary: "#3A5377",
        text_secondary: "#66797C",
        button_primary: "#00adef",
        admin_button: "#1294F2"
      },
      backgroundImage: {
        'reviewLeft': "url('./public/images/landing-page/left-review.png')",
        'reviewRight': "url('./public/images/landing-page/right-review.png')",
        'reviewMiddle': "url('./public/images/landing-page/middle-review.png')",
      },
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
