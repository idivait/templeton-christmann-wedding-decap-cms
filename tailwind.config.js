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
        // blush: `rgb(247, 141, 167)`,
        cyan: `hsl(188, 84%, 44%)`,
        blush: `hsl(328, 66%, 48%)`,
        "blush-dark": `hsl(328, 66%, 35%)`,
        green: `hsl(107, 38%, 54%)`,
        orange: `hsl(12, 73%, 53%)`,
        purple: `hsl(272, 31%, 41%)`,
        yellow: `hsl(46, 93%, 57%)`

      },
      fontFamily: {
        "josefin": ["Josefin Sans", "Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}

