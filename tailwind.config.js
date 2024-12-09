/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5542F6',
        secondary: '#C8C2FC',
        content: '#121F3E',
        accent: '#6D7D93',
      },
    },
  },
  plugins: [],
}
