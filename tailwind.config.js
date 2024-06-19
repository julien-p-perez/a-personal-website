// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.html"], // Paths to your HTML or EJS files
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        c1: '#b2b2b2',
        c2: '#ffffff',
        c3: '#d9d9d9',
        midnight: '#121063',
      }, 
      spacing: {
        '82': '82px',
      }, 
      backgroundImage: {
        'custom-background': "url('public/images/background.jpeg')",
      }
    ,
  },
  plugins: [],
}
};
