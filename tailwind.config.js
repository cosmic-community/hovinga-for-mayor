/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        gold: '#F5A623',
        'navy-overlay': 'rgba(10, 22, 40, 0.55)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['36px', { lineHeight: '1.1', fontWeight: '800' }],
        'h1-tablet': ['48px', { lineHeight: '1.1', fontWeight: '800' }],
        'h1-desktop': ['80px', { lineHeight: '1.05', fontWeight: '800' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        content: '1100px',
      },
      spacing: {
        'section-mobile': '60px',
        'section-tablet': '80px',
        'section-desktop': '120px',
      },
      minHeight: {
        'cta': '48px',
      },
    },
  },
  plugins: [],
}