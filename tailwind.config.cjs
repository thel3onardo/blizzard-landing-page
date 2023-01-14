/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins': 'Poppins'
    },
    extend: {
      colors: {
        blue: {
          500: '#00AEFF'
        },
        gray: {
          800: '#828792'
        }
      }
    }
  },
  plugins: [],
}