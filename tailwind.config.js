/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'orange-glow': '0 4px 10px rgba(255, 140, 0, 1)', // Soft yellow shadow
      },
    },
  },
  plugins: [],
}

