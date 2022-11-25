/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: "Helvetica" },
    colors: {
      white: colors.white,
      gray: colors.gray,
    },
    borderWidth: { 1: 1 },
  },
  extend: {
    colors: {
      grey1: "#243c5a",
    },
  },
  plugins: [],
};
