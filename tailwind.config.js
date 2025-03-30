/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors:{
        primary: "#E58411",
        "primary-dark": "#B88E2F",
        background: "#ffffff",
        secondary: "#1E1E1E",
        "light-gold": "#FFF3E3",
        slate: "#0D1B39",
        "light-gray-50": "#fafafa",
        "light-gray-100": "#F7F7F7",
        "light-gray-200": "#EEEEEE",
        "light-pink-100": "#F9F1E7"
      }
    },
  },
  plugins: [],
}

