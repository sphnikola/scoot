/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "640px",
        lg: "875px",
        xl: "1400px",
      },
      colors: {
        "nav-link": "rgb(146, 155, 170)",
        "button-bg": "rgb(252, 183, 44)",
        "p-color": "rgb(146,155,170)",
        "h4-color": "rgb(74,86,104)",
      },
      backgroundImage: {
        home_hero_mobile: "url('./src/assets/images/home-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
