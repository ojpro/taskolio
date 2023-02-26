/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wrapper-bg': "url('/src/assets/wrapper-bg.jpg')",
      }
    },
  },
  plugins: [],
}
