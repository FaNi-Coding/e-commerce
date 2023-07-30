/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      primary: '#D87D4A',
      secondary: '#101010',
      tertiary: '#F1F1F1',
      fourthly: '#fbaf85',
      grey: '#808080',
      'black-hover': '#4C4C4C',
      'snow-white': '#FAFAFA',
      error: '#CD2C2C',
      white: '#FFFFFF',
      black: '#000000',
      header: '#181818',
      backdrop: '#979797',
    },
    extend: {
      padding: {
        '16.5rem': '16.5rem',
      },
    },
  },
  plugins: [],
};
