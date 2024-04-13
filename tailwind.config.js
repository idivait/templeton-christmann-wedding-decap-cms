/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: `rgb(0, 7, 77)`,
        blush: `rgb(247, 141, 167)`,
        "blush-dark": `rgb(244, 103, 138)`
      },
      fontFamily: {
        "josefin": ["Josefin Sans", "Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}

