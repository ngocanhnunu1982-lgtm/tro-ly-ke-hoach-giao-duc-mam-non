/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf4f0', 100: '#fbe5dc', 200: '#f6c9b6', 300: '#efa489',
          400: '#e67a56', 500: '#db5a35', 600: '#c84a2b', 700: '#a83c24',
          800: '#873322', 900: '#6d2c20',
        },
        secondary: {
          50: '#f0fdfa', 100: '#ccfbef', 200: '#99f6e0', 300: '#5eead4',
          400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a',
        },
        accent: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f',
        },
      },
    },
  },
  plugins: [],
};
