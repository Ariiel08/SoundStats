/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./public/**/*.{html,js}",
      "./src/**/*.{html,js}",
      "./src/**/*"
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

