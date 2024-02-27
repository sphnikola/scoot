/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "580px",
        lg: "875px",
        xl: "1400px",
      },
      colors: {
        "nav-link": "rgb(146, 155, 170)",
        "button-bg": "rgb(252, 183, 44)",
        "p-color": "rgb(146,155,170)",
        "h4-color": "rgb(74,86,104)",
        "footer1st-bg": "rgb(74,86,104)",
        "footer2nd-bg": "rgb(51,58,68)",
        "jobs-bg": "rgb(230,237,244)",
      },
      backgroundImage: {
        home_hero_mobile: "url('./src/assets/images/home-hero-mobile.jpg')",
      },
      fontFamily: {
        mono: ["Space-Mono", "monospace"],
      },
    },
  },
  plugins: [],
});
