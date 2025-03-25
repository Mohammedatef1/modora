/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors:{
        primary: "#B88E2F",
        background: "#ffffff",
        secondary: "#1E1E1E",
        "light-gold": "#FFF3E3",
        slate: "#0D1B39",
        "light-gray-100": "#F7F7F7",
        "light-gray-200": "#EEEEEE"
      }
    },
  },
  plugins: [],
}

