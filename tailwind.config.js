/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: 'hsl(215, 25%, 20%)',
        secondary: 'hsl(212, 87%, 57%);'
      }
    },
  },
  plugins: [],
}

