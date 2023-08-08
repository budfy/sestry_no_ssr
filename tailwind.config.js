/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: [],
      title: []
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}