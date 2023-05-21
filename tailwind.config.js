import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      colors: {
        'cyan-400': 'rgb(10, 197, 179)',
        'white-400': 'rgb(236, 237, 238)',
        'gray-800': 'rgb(32, 36, 37)',
        'gray-700': 'rgb(49, 53, 56)',
        'gray-600': 'rgb(105, 113, 119)',
        'gray-400': 'rgb(155, 161, 166)',
      },
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}