/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f2faf7',
          100: '#e3f4ec',
          200: '#c6e9da',
          300: '#a3dac5',
          400: '#8fc9b3',
          500: '#6fb59b',
          600: '#559880',
          700: '#437a67',
          800: '#375f52',
          900: '#2e4d43',
        },
        sand: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f2ead9',
          300: '#e7dabf',
          400: '#d8c39d',
        },
        clay: {
          400: '#e0876a',
          500: '#d16b4c',
          600: '#b8563a',
        },
        lagoon: {
          400: '#4fa3b5',
          500: '#337f92',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(55, 95, 82, 0.25)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
