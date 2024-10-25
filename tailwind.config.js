/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // Incluir index.html en la raíz
    './src/**/*.html',       // Incluir todos los archivos HTML en src
    './public/**/*.html'     // Incluir todos los archivos HTML en public (si es necesario)
  ],
  theme: {
    extend: {},
    colors: {
      'black-japan': '#2D2D2D',
      'white-japan': '#F3F2E0',
      'red-japan': '#8A0303'
    },
    fontFamily: {
      serif: ['EB Garamond', 'serif'],
    },
  },
  plugins: [],
};
