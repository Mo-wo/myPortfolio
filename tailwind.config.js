module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    screens:{
      'xsm':'200px',
      'sm':'320px',
      '2sm':'450px',
      '3sm':'550px',
      'md': '640px',
      '2md': '768px',
      '3md': '800px',
      '4md': '900px',
      'lg':'960px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
    extend: {
      fontFamily:{
        cinzel: ['Cinzel', 'serif'],
        cinzel_2: ['Cinzel Decorative', 'cursive'],
      },
      backgroundImage:{
        'bg1': "url('./images/bg-1.jpg')",
        'bg2': "url('./images/bg-2.jpg')",
        'bg3': "url('./images/bg-3.jpg')"
      }
    },
  },
  plugins: [],
}
