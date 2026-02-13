/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./projects/**/*.html", "./assets/**/*.html"],   // add all files using Tailwind classes
  darkMode: 'class',           // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        pinkLight: '#ffe4ec',
        pinkDark: '#d6336c',
      },
    },
  },
  plugins: [],
}
