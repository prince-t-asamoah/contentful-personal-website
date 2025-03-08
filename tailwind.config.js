/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
        colors: {
            primary: '#00abe1',    // Bright blue
            secondary: '#161f6d',  // Deep navy blue
        }
    }
},
  plugins: [],
};
