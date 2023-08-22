/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    fontFamily: {
      sans: ["Arial"],
      title: ["Times New Roman"]
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
}