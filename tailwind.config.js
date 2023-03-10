/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      kaushan: ['Kaushan'],
    },
    boxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c'
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0A0B0E',
          200: '#16181D',
          300: '#16181D',
          500: '#0F1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow:['dark']
    }
  },
  plugins: [],
}
