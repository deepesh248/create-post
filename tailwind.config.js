/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        DancingScript : ['Dancing Script', 'cursive'],
        TiltPrism : ['Tilt Prism', 'cursive'],
      },
    },
  },
  plugins: [],
}

