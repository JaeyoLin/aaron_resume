/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#647b71',
      },
      screens: {
        'print': { 'raw': 'print' },
      },
    },
  },
  plugins: [],
}
