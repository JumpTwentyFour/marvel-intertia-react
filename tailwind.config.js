// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Montserrat', 'Helvetica', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      red: colors.rose,
      blue: '#090228',
    },
    extend: {
      boxShadow: {
        '3xl': '0px 10px 30px -10px rgba(0, 0, 0, 0.5)',
        '4xl': '0px 35px 35px -25px rgba(0, 0, 0, 0.8)',
      },
      zIndex: {
        '1': '1',
        'inset-1': '-1',
      },
    },
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
    objectPosition: false,
    fontVariantNumeric: false,
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
