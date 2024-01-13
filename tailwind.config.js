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
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [],
};
