module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          primary: '#580E7F',
          secondary: {
              100: '#897896'
          },
          highlighted: '#C0913A',
          light: '#F5F4F3',
          dark: '#1B1B2B'
      }

    },
  },
  variants: {
    extend: {
        width: ['hover'],
        margin: ['hover']
    },
  },
  plugins: [],
}
