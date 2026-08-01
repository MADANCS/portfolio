/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EFECE6',
          400: '#E5DFD3',
        },
        brand: {
          orange: '#FF5500',
          orangeHover: '#E04B00',
          dark: '#111111',
          muted: '#666666',
        },
        card: {
          cream: '#F7F4EE',
          beige: '#EFECE6',
          coral: '#FF5E5E',
          teal: '#54C5D0',
          dark: '#161922',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        pixel: ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
    },
  },
  plugins: [],
};

