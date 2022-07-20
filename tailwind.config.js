/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        slidel: "slide1 10s ease-in-out infinite",
        slider: "slide2 10s ease-in-out infinite",
      },
      keyframes: {
        slide1: {
          "0%, 100%": { objectPosition: "40% 0" },
          "50%": { objectPosition: "60% 0" },
        },
        slide2: {
          "0%, 100%": { objectPosition: "60% 0" },
          "50%": { objectPosition: "40% 0" },
        },
      },
    },
  },
  plugins: [],
};
