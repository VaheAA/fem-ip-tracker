module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    colors: {
      veryDarkGray: 'hsl(0, 0%, 17%)',
      darkGray: 'hsl(0, 0%, 59%)',
      white: '#fff'
    },
    extend: {
      backgroundImage: {
        'pattern-bg': "url('./src/assets/images/pattern-bg.png')"
      }
    }
  },
  plugins: []
};
