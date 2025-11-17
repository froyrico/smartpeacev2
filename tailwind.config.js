/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          dark: '#1976D2',
          light: '#64B5F6',
        },
        secondary: {
          DEFAULT: '#5CB85C',
          dark: '#4CAE4C',
          light: '#80C780',
        },
        gray: {
          50: '#f5f5f5',
          100: '#f1f1f1',
          200: '#e1e1e1',
          300: '#d1d1d1',
          400: '#c1c1c1',
          500: '#b1b1b1',
          600: '#a1a1a1',
          700: '#919191',
          800: '#818181',
          900: '#717171',
        },
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};