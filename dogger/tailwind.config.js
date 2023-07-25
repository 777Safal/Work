/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        topimg:'#F8F9FA',
        trainers:'#A2C0BE',
        contact:'#6C757D',
        foot:'#333333',
        dark:'#343A40'
      }
    },
  },
  plugins: [],
}

