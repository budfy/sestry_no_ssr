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
    screens: {
      'mobile-s': '350px',
      'mobile': '640px',
      'tablet-s': '768px',
      'tablet': '991px',
      'desktop-s': '1024px',
      'desktop': '1366px',
      'desktop-l': '1600px',
      'desktop-hd': '1920px'
    }
  },
}