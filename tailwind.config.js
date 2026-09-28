export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { paper: '#EEF2F6', ink: '#0F1B2D', night: '#0B1220', line: '#1E5EFF', signal: '#FF7A1A' },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
