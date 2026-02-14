/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d4c4a8',
          400: '#c0a87f',
          500: '#a88b5f',
          600: '#8a6f4a',
          700: '#6f5a3d',
          800: '#594835',
          900: '#483a2e',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f3ead2',
          300: '#e8d9b0',
          400: '#dcc488',
          500: '#cfac5f',
          600: '#b88d45',
          700: '#986f37',
          800: '#7c5a30',
          900: '#664a29',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(168, 139, 95, 0.15)',
        elegant: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}