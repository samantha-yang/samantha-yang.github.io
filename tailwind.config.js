/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./projects/**/*.html", "./assets/**/*.html"],
  safelist: ['animate-marquee','animate-marquee2'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
