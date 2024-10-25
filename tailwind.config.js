/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./index.html", "./src/*.html"],
  theme: {
    extend: {
      colors: {
        'black-japan': '#2D2D2D',
        'white-japan': '#F3F2E0' ,
        'red-japan': '#8A0303'
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
