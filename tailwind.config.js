/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      qr_code_body: '#d6e2f0',
      qr_code_title: '#1f3251',
      qr_code_par: '#7b879d'
    },
    extend: {},
  },
  plugins: [],
}
