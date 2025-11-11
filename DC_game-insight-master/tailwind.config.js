/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c',
        'secondary': '#2d3748',
        'accent': '#4299e1',
        'text-primary': '#ffffff',
        'text-secondary': '#a0aec0',
      },
    },
  },
  plugins: [],
}