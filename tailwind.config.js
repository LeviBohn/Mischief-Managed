/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          primary: '#740001',
          secondary: '#D3A625',
        },
        slytherin: {
          primary: '#1A472A',
          secondary: '#5D5D5D',
        },
        hufflepuff: {
          primary: '#FFD800',
          secondary: '#000000',
        },
        ravenclaw: {
          primary: '#0E1A40',
          secondary: '#946B2D',
        },
      },
      fontFamily: {
        harry: ['Cinzel Decorative', 'cursive'],
        spells: ['MedievalSharp', 'cursive'],
        main: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 