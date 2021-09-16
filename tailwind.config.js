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
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 10s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
