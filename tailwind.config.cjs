module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      }, 
      colors: {
        'bg-slate-50': ['#F8FAFC'],
      },
    },
  },
  plugins: [],
}