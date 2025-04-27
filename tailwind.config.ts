/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'styflex-gold': '#D4AF37',
        'styflex-dark': '#2D2A26',
        'styflex-pastel': '#F5F5DC',
      },
    },
  },
  plugins: [],
};
