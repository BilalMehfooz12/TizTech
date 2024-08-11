/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      baseColor: "rgb(116,231,192)",
      black: "#000000",
      white: "#ffffff",
      borderColor: "rgb(53, 57, 53)",
    },
    fontFamily: {
      popins: ["Popins", "sans-serif"],
    },
  },
  plugins: [],
};
