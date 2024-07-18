/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'young-serif': ['"Young Serif"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'rose-800': '#7A284E',
        'rose-50': '#FFF7FB',
        'stone-900': '#312E2C',
        'stone-600': '#5F564D',
        'stone-150': '#E3DDD7',
        'stone-100': '#F3E5D7',
        'brown-800': '#854632',
      },
    },
  },
  plugins: [],
};
