/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors:{
        primary: "#0dcaf0",
        background: "#F6F5F3",
        secondary: "#222222"
      }
    },
  },
  plugins: [],
}

