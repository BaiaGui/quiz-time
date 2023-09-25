/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'grey-1': '#D9D9D9',
      'grey-2': '#565E6D',
      'grey-3': '#252C3A',
      'grey-4': '#1D2330',
      'grey-5': '#181D28',
      'grey-6': '#161A24',
      'green-dark': '#5CAD1D',
      'green-light': '#ABF770',
      'red-dark': '#AB3030',
      'red-light': '#F77070',
    },
    extend: {},
  },
  plugins: [],
}

