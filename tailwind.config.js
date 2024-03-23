/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'made': ["Lexend Deca" , "serif"],
      },
      colors: {
        'praymari': '#FAFF00',
        'regal-blue': '#243c5a',
      },
      maxWidth: {
        'container': '1160px',
      },
      backgroundImage: {
        'hero-pattern': "url('../../../../../../../../../')",
        
      }
    },
  },
  plugins: [],
};
