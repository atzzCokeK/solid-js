/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: "Helvetica" },
    extend: {
      colors: {
        primary: "#0CDC73",
        secondary: "#243C54",
        background: "#F8F9F9",
      },
    },
  },

  plugins: [],
};
