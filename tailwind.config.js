module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        primary:['Monument Extended'],
        Nunito:['Nunito'],
        Popins:['Popins'],
        Ori:['Orbitron'],
        
      },
      
    }
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
