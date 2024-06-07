/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: 'cursor-custom',
      },
      boxShadow: {
        'md-down': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' }, // Match the final opacity
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

