module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        indigo: '#4F46E5',
        cyan: '#06B6D4',
        navy: '#0F172A',
        surface: 'rgba(15,23,42,0.72)',
      },
      boxShadow: {
        glow: '0 28px 80px rgba(37,99,235,0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(37,99,235,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(6,182,212,0.14), transparent 22%)',
      },
    },
  },
  plugins: [],
};