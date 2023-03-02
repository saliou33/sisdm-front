/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow3: '#F8F2AA',
        secondary5: '#25A182',
        neutral10: '#101114',
        neutral7: '#7E87A0',
        neutral6: '#B1BAD3',
        neutral1: '#F5F6F9',
        neutral2: '#EBEEF4',
        neutral3: '#E2E5EE',
        neutral4: '#D8DDE9',
        primary5: '#25578A',
        primary7: '#0C1D2E',
        primary6: '#122B45',
        light: '#F9F9FA',
      },
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
