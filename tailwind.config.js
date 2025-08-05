/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'ios-dark': {
          50: '#ffffff',
          100: '#f5f5f7',
          200: '#e5e5e7',
          300: '#d6d6d8',
          400: '#9c9c9c',
          500: '#6e6e73',
          600: '#48484a',
          700: '#3a3a3c',
          800: '#2c2c2e',
          900: '#1c1c1e',
          950: '#000000',
        }
      },
      backdropBlur: {
        '25': '25px',
      },
      spacing: {
        '393': '393px',
        '852': '852px',
      }
    },
  },
  plugins: [],
}