/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#090d1a',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.2), 0 20px 50px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.22), transparent 40%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.22), transparent 40%), radial-gradient(circle at 60% 75%, rgba(16,185,129,0.2), transparent 35%)',
      },
    },
  },
  plugins: [],
};
