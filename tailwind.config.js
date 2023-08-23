/** @type {import('tailwindcss').Config} */

const { screens } = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["*", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
      backgroundImage: (theme) => ({
        scroller: "url('assets/bg.svg')",
      }),
      fontFamily: {
        gotham: ["Nanum Gothic", "sans-serif"],
        monetserrat: ["Montserrat", "sans-serif"],
        oxygen: ["Space Grotesk", "sans-serif"],
        rajdhani:["Rajdhani", "sans-serif"],
        rem:['REM', 'sans-serif']

      },
      screens: {
        xsm: { raw: "(max-width:595px)" },
        sm1: { raw: "(min-width:596px)" },
        mbl: "495px",
        
        ...screens
        // sm: "640px",
        // // => @media (min-width: 640px) { ... }

        // md: "768px",
        // // => @media (min-width: 768px) { ... }

        // lg: "1024px",
        // // => @media (min-width: 1024px) { ... }

        // xl: "1280px",
        // // => @media (min-width: 1280px) { ... }

        // "2xl": "1536px",
        // // => @media (min-width: 1536px) { ... }
      },
    
  },
  plugins: [],
};
