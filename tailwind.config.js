/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'dmSans': ["'DM Sans'", 'sans-serif'],
      'poppins': ["'Poppins'", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

