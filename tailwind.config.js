/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#bae2fd',
          300: '#7ccbfb',
          400: '#3fa9f5', // Main brand primary blue from salespartners.io
          500: '#158deb',
          600: '#066fca',
          700: '#0658a3',
          800: '#0a4b85',
          900: '#0e3f6e',
          950: '#0a2849',
          navy: '#0b1329',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
