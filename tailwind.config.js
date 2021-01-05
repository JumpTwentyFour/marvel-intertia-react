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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
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
