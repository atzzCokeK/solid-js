/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: "Helvetica" },
    colors: {
      primary: "#0CDC73",
      white: colors.white,
      gray: colors.gray,
    },
  },
  extend: {
    colors: {
      grey1: "#243c5a",
    },
  },
  plugins: [],
};
