import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
          400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a',
        },
        secondary: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a',
        },
        accent: {
          50: '#FFF8EB', 100: '#FFEDC6', 200: '#FFD88A', 300: '#FFC857',
          400: '#FFAA2A', 500: '#FF8A00', 600: '#E67A00', 700: '#CC6C00',
          800: '#A35700', 900: '#7A4100',
        },
        bordo: {
          50: '#fdf2f4', 100: '#fce7ec', 200: '#f9ced9', 300: '#f4a4b9',
          400: '#ed7396', 500: '#e34873', 600: '#c92952', 700: '#aa1f42',
          800: '#8e1c3a', 900: '#781934',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
