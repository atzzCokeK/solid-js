/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: "Helvetica" },
    colors: {},
    borderWidth: { 1: "0.125rem" },
  },
  extend: {
    colors: {
      grey1: "#243c5a",
    },
  },
  plugins: [],
};
