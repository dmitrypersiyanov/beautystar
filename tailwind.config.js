/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          yellow: "#FAEDCB",
          green: "#C9E4DE",
          blue: "#C6DEF1",
          // purple: "#DBCDF0",
          purple: "#575260",
          pink: "#F2C6DE",
          orange: "#F7D9C4",
          white: "rgb(255 255 255)",
        },
        white: "#FFFF",
      },
      fontFamily: {
        gistesy: ["gistesy", "cursive"],
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
