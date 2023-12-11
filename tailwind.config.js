/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-color': '#170029',
        'ligth-color': '#f2f2f2',
      },
    },
  },
  plugins: [],
};
