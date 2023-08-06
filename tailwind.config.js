/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gotham':['Nanum Gothic','sans-serif'],
        'monetserrat':['Montserrat', 'sans-serif'],
        'oxygen':['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

