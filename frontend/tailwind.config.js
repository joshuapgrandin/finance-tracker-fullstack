/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand scale — five blues from your palette
        brand: {
          500: "#0466C8", // bright accent
          600: "#0353A4", // hover on primary
          700: "#023E7D", // primary button / default
          800: "#002855", // balance card / strong surfaces
          900: "#001845", // darkest, hover on dark surfaces
          950: "#001233", // text on light brand bg
        },
        // Neutral scale — your five grey-blues, plus white/near-white
        neutral: {
          50: "#f8fafc", // page background
          100: "#eef1f5", // subtle surface
          200: "#dde1e8", // borders
          300: "#979DAC", // muted / disabled text
          400: "#7D8597", // secondary text
          500: "#5C677D", // tertiary text
          600: "#33415C", // strong muted text
          900: "#001233", // primary text
        },
        // Semantic — kept separate so meaning doesn't shift with rebrands
        income: {
          DEFAULT: "#059669",
          bg: "#d1fae5",
          fg: "#064e3b",
        },
        expense: {
          DEFAULT: "#b91c1c",
          bg: "#fee2e2",
          fg: "#7f1d1d",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
