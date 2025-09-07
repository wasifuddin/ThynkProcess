/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean Blue Serenity Palette
        'ocean': {
          '900': '#0E1A6A', // Headings/overlays
          '800': '#0C2F86', // Section headers, sticky nav bg
          '700': '#0D4E9E', // Buttons hover, accent borders
          '600': '#0F79B9', // Primary buttons/links
          '500': '#12A8D4', // Highlights, chips, icons
          '400': '#78D2E9', // Light cards/info bands
          '300': '#AEE7F2', // Soft backgrounds
          '200': '#D8F4FA', // Hero wash / very light panels
        },
        // Neutrals
        'neutral': {
          '900': '#0F172A',
          '700': '#334155',
          '500': '#64748B',
          '200': '#E2E8F0',
          '50': '#F8FAFC',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
