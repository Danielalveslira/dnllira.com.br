const { keyframes, color } = require('@tripetto/runner-autoscroll');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}",

    '*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        colorPulse: {
          '0%, 10%': { backgroundColor: '#1B5E20' },
          '10%': { backgroundColor: ' #2E7D32' },
          '10%': { backgroundColor: '#388E3C' },
          '10%': { backgroundColor: '#43A047' },
          '10%': { backgroundColor: '#4CAF50' },
        },
      },
      animation: {
        colorPulse: 'colorPulse 9s infinite',
      },
      fontFamily: {
        'roboto-slab': [
          'Roboto Slab', 'serif',
          'Fira Code', 'monospace'
        ],
      },
      fontWeight: {
        'roboto-slab-light': 300,
        'roboto-slab-normal': 400,
        'roboto-slab-bold': 700,
      },
      colors: {
        'azulClaro': '#1a8cd8',
        'verdeHeader': '#1B5E20',
        'bg-black': '#0d1117'
      },
    },
    plugins: [],
  },
};