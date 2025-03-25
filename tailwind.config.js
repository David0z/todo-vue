/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
