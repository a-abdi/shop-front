module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cart': "url('/src/assets/cart.svg')",
      }),
      spacing: {
        'sm': '640px',
      },
      minWidth: {
        'sm': '640px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
