/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "640px",
        lg: "875px",
      },
      colors: {
        "nav-link": "rgb(146, 155, 170)",
        "button-bg": "rgb(252, 183, 44)",
      },
    },
  },
  plugins: [],
};
