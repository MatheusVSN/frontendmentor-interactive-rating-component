/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#fb7413",
      white: "#ffffff",
      "light-grey": "#959eac",
      "medium-grey": "#7c8798",
      "dark-blue": "#252d37",
      "dark-blue-2": "#323c49",
      "very-dark-blue": "#121417",
    },
    fontFamily: {
      "overpass": ["Overpass"],
    },
  },
  plugins: [],
};

