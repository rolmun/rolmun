// Shared Tailwind config object
const config = {
  darkMode: 'class', // use the .dark class (for your toggleTheme)
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      animation: {
        spin_slow: 'spin 6s linear infinite',
      },
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
    },
  },
};

// 1) For Tailwind CLI / VS Code extension (Node environment)
if (typeof module !== 'undefined') {
  module.exports = config;
}

// 2) For CDN usage in the browser (cdn.tailwindcss.com)
if (typeof window !== 'undefined' && window.tailwind) {
  window.tailwind.config = config;
}