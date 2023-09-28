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
        primary: '#ff014f',
        success: '#3EB75E',
        danger: '#FF0003',
        warning: '#FF8F3C',

        // dark theme colors
        'heading-dt': '#c4cfde',
        'body-dark': '#212428',
        'text-dark': '#c4cfde',
        'header-dark': '#212428de',
        'dt-primary-gradient-from': '#181a1d',
        'dt-primary-gradient-to': '#292f35',
        'dt-secondary-gradient-from': '#2b3035',
        'dt-secondary-gradient-to': '#0c0d0f',
        'dt-separator': '#121415',

        // light theme colors
        'heading-lt': '#1e2125',
        'body-light': '#ECF0F3',
        'text-light': '#3c3e41',
        'lt-primary-gradient-from': '#6a67ce',
        'lt-primary-gradient-to': '#fc636b',
        'lt-secondary-gradient-from': '#e2e8ec',
        'lt-secondary-gradient-to': '#ffffff',
        'lt-separator': '#dce1e4',

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
        'mobile-nav': '-10px 0px 19px #111214',
        'primary-dt': '10px 10px 19px #111214, -10px -10px 19px #262a2e',
        'primary-wt': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
        'inner-dt': '1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset',
        'inner-lt': '1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset',

        'neon-dark': '0 0 10px theme("colors.dark.primary"), 0 0 40px theme("colors.dark.primary"), 0 0 80px theme("colors.dark.primary")',
        'neon-light': '0 0 10px theme("colors.light.primary"), 0 0 40px theme("colors.light.primary"), 0 0 80px theme("colors.light.primary")',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
