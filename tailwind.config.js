/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    fontFamily: {
      'default': ['akzidenz-grotesk', 'Akzidenz'],
  },

    extend: {
      colors: {
        transparent: 'transparent',
        'primary': {
          light: '#e00000',
          dark: '#e11b22',
        },
        'secondary': {
          light: '#34454e',
          dark: '#3a4d57',
        },
        'tertiary': {
          light: '#e6eaed',
          dark: '#597685',
        },
        'light': {
          light: '#e6eaed',
          dark: '#7090a0',
        },
        'dark': {
          light: '#34454e',
          dark: '#f0f0f0',
        },
        'white-cla': {
          light: '#ffffff',
          dark: '#3a4d57',
        },
        'black-cla': {
          light: '#000000',
          dark: '#ffffff',
        },
        'danger': {
          light: '#333333',
          dark: '#cccccc',
        },
        'danger-form': {
          light: '#dc3545',
          dark: '#cf6679',
        },
        'info': {
          light: '#17a2b8',
          dark: '#a7e9f4',
        },
      },
    },
  },
  plugins: [],
}

