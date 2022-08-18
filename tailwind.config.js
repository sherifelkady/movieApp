/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#2b2b31",
      darker: "#28282d",
      black: "141313",
      primary: "#eb2158",
      secondary: "#ff55a5",
      third: "#ff5860",
      ...colors,
    },
    fontFamily: {
      sans: ["Lato", "ui-serif"],
    },
    extend: {},
  },
  plugins: [],
};
