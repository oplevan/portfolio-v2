/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

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
          'header-bg': 'rgba(10, 25, 47, 0.8)',
          'global-bg': '#0a192f',
          navy: '#0a192f',
          'light-navy': '#112240',
          'lightest-navy': '#233554',
          'navy-shadow': 'rgba(2,12,27,0.7)',
        },
        light: {
          primary: '#3b71ca',
          'primary-shadow': 'rgba(59,113,202,0.6)',
          'header-bg': '#f3f8ffd6',
          'global-bg': '#f3f8ff',
        },
      },
      fontFamily: {
        sans: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
        mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
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
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
