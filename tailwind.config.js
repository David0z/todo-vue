/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          800: '#141E33',
        },
      },
      screens: {
        '2xl': '1736px',
      },
    },
  },
  plugins: [lineClamp],
  darkMode: 'class',
}
