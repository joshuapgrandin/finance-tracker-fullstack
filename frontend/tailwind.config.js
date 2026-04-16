/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a1929",
        "card-bg": "#0f2537",
        "income-bg": "#1a4d4d",
        "income-text": "#2dd4bf",
        "expense-bg": "#4d1a1a",
        "expense-text": "#ff5757",
        "income-hover": "#2d6b6b",
        "expense-hover": "#6b2d2d",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
