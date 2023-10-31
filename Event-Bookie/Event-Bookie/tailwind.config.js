/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'orange-500': '#F97316',
        'orange-400': '#FB923C',
        'orange-300': '#FDBA74',
      },
      textColor: {
        'orange-600': '#FF6347', // Define the text color value
      },
    },
  },
  plugins: [],
}

