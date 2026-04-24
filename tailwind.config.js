/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'softwhite': "#F8FAFC",
        'darkslate': "#0F172A",
        'secondary-light': "#E2E8F0",
        'secondary-dark': "#1E293B",
        'card-light': "#FFFFFF",
        'card-dark': "#1E293B",
        'text-light': "#1E293B",
        'text-dark': "#F8FAFC",
        'accent': "#FFFFFF",
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}
