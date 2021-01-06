// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'Helvetica', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      purple: colors.violet,
      red: colors.rose,
      'blue': '#090228',
      'pink': '#340432',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.5'),
          maxWidth: '100%',
          '@screen md': {
            paddingInline: theme('spacing.8'),
          },
          '@screen lg': {
            paddingInline: theme('spacing.10'),
          },
          '@screen 2xl': {
            maxWidth: theme('screens.2xl'),
          },
        },
      })
    },
  ],
  corePlugins: {
    container: false,
    float: false,
    clear: false,
    objectFit: false,
    objectPosition: false,
    fontVariantNumeric: false,
    placeholderColor: false,
    placeholderOpacity: false,
    verticalAlign: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    ringWidth: false,
    ringColor: false,
    ringOpacity: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    borderCollapse: false,
    tableLayout: false,
    resize: false,
    outline: false,
    appearance: false,
    userSelect: false,
  },
}
