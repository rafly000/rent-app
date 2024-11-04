/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { min: '320px' },
      md: { min: '600px' },
      lg: { min: '1024px' },
      xl: { min: '1200px' },
    },
  },
  plugins: [],
}
