/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        jazzNavy: "#1a1a2e",
        jazzBurgundy: "#2c003e",
        jazzAccent: "#511845",
        jazzGold: "#FACC15",
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}
