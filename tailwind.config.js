/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'primary': {
          light: '#e00000',
          dark: '#e11b22',
        },
      },
    },
  },
  plugins: [],
}
