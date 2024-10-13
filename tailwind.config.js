/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2a86f5', // You can name this as per your preference
        secondaryBlue: '#d0e1f5',
        neutralWhite: '#d3d3d3',
      },
    },
  },
  plugins: [],
};
