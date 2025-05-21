/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
        colors: {
          'custom-green': '#096B68',
          'customLightGreen': '#B0DB9C',
        }
    },
  },
  plugins: [],
};
