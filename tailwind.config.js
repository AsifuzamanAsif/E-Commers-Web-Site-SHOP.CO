/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: [ "Poppins", 'sans-serif'],
        // secondary: ["Alatsi", "sans-serif"],
        // bannerfont: ["Abril Fatface", "sans-serif"],
        // productfont: ["Abel", "sans-serif"],
      },
    },
    container:{
      center:true,
    }
  },
  plugins: [],
};
