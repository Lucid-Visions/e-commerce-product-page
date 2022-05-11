module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sneaker-orange': { DEFAULT: 'hsl(26, 100%, 55%)' },
        'sneaker-pale-orange': { DEFAULT: 'hsl(25, 100%, 94%)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
