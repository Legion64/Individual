module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#7562E0',
        'footer': '#6B59CE'
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      backgroundOpacity: ['odd']
    },
  },
  plugins: [],
}
