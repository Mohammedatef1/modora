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
        secondary: "#1E1E1E"
      }
    },
  },
  plugins: [],
}

