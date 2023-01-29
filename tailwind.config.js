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
        veryDarkViolet: 'hsl(278, 68%, 11%)',
        fromColor: 'hsl(249, 99%, 64%)',
        toColor: 'hsl(278, 94%, 30%)'
      },
      fontFamily:{
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      }
    },
    backgroundImage:{
      'coloredSide' : "url('/images/bg-main-desktop.png')",
      'frontCard' : "url('/images/bg-card-front.png')",
      'backCard' : "url('/images/bg-card-back.png')"
    },
    screens: {

    },
  },
  plugins: [],
}