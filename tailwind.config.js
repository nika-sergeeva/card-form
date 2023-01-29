/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        red: 'hsl(0, 100%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrayish: 'hsl(270, 3%, 87%)',
        darkGrayish: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)'
      },
      fontFamily:{
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      }
    },
    screens: {

    },
  },
  plugins: [],
}