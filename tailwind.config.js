/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0C0907',
          dark: '#291C16',
          primary: '#2E1F18',
          secondary: '#6F4F3F',
          cta: '#ff0000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        logo: ['Bimbo Sharpie', 'cursive'],
        numbers: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
