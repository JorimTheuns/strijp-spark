/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "day-green": "#B7FEB9",
        "night-green": "#1BFF37",
        "day-teal": "#A8FEFF",
        "night-teal": "#12FFFF",
        "day-pink": "#FEB1FE",
        "night-pink": "#FF31FF",
        blackish: "#080F0F",
        "day-gray": "#E9EAEB",
        "night-gray": "#646568",
        "link-blue": "#4169E1",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        slidel: "slide1 10s ease-in-out infinite",
        slider: "slide2 10s ease-in-out infinite",
        slidein: "slidein .5s ease-out",
        slideup: "slideup .5s ease-out",
        slidein1: "slidein .5s ease-in-out 100ms",
        slidein2: "slidein .5s ease-in-out 200ms",
        slidein3: "slidein .5s ease-in-out 300ms",
        slideout: "slideout .1s",
      },
      keyframes: {
        slideout: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        slidein: {
          "0%": {
            opacity: 0,
            transform: "scale(.1)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        slideup: {
          "0%": {
            opacity: 0,
            transform: "scale(.8)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        slide1: {
          "0%, 100%": { objectPosition: "40% 0" },
          "50%": { objectPosition: "60% 0" },
        },
        slide2: {
          "0%, 100%": { objectPosition: "60% 0" },
          "50%": { objectPosition: "40% 0" },
        },
      },
      gridTemplateColumns: {
        // basic icon-text grid
        icon: "minmax(auto, max-content) 2fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
        logos: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        // basic icon-text grid
        section: "auto minmax(auto, max-content)",
        auto: "minmax(auto, min-content)",
      },
    },
  },
  plugins: [],
}
