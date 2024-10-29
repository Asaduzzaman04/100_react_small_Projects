/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        light: '#eceff2',
        button: '#10028a',
        dark: '#212529',
        success: '#28a745',
        warning: '#f9563a',
      },
    backgroundImage :{
    'purple-gradient' : 'linear-gradient(to right, #10028a, #4B05AD)',
    }
    },
  },
  plugins: [],
}