
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#4E5D78',
        placeHolder: "#B0B7C3",
        headline: '#323B4B',
        authText: '#8A94A6',
        authButton: '#F0F5FA',
        inputBorder: '#f3f3f3',
        button: '#377DFF',
        error: '#FF5630',


      },
      fontSize: {
        headerSize: '28px',
        headlineSize: '26px',
        authTextSize: '16px'
      }
    },
  },
  plugins: [],
}