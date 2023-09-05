/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        grey: '#999',
        'dark-grey': '#313131',
        dark: {
          primary: '#E5FF45',
          'primary-shadow': 'rgba(230,255,69,0.3)',
          secondary: {
            1: '#0a192f', // navy color, used for the global background #030413
            2: '#112240', // light navy color
            3: '#233554', // lightest navy color
            4: 'rgba(2,12,27,0.7)', // shadow color
            5: 'rgba(10, 25, 47, 0.85)', // header background
          },
        },
        light: {
          primary: '#3b71ca',
          'primary-shadow': 'rgba(59,113,202,0.6)',
          secondary: {
            1: '#f1f7fd',
            2: '#e0edf9',
            3: '#c9dff4',
            4: '#a3cbed',
            5: '#78aee2',
            6: '#5891d9',
            7: '#3b71ca',
          },
        },
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      'nav-height': {
        default: '100px',
        minimised: '70px',
        mobile: '70px',
      },
      boxShadow: {
        'primary-dark': '0 0 15px 3px theme("colors.dark.primary-shadow")',
        'primary-light': '0 0 15px 3px theme("colors.light.primary-shadow")',
        'neon-dark': '0 0 10px theme("colors.dark.primary"), 0 0 40px theme("colors.dark.primary"), 0 0 80px theme("colors.dark.primary")',
        'neon-light': '0 0 10px theme("colors.light.primary"), 0 0 40px theme("colors.light.primary"), 0 0 80px theme("colors.light.primary")',
        header: '0 10px 30px -10px theme("colors.dark.secondary-4")',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
