/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fef5d6',
          200: '#fde8ad',
          300: '#fbd47a',
          400: '#f8b944',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          goldAccent: '#D4AF37',
          goldGlow: '#FFD700',
        },
        emeraldGlow: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        borneo: {
          900: '#061412',
          800: '#0c2420',
          700: '#123932',
          600: '#1d544b',
        },
        slateDark: {
          950: '#07090E',
          900: '#0B0F19',
          850: '#101626',
          800: '#172033',
          750: '#1E293B',
          700: '#2A374F',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-gold': 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #FBBF24 100%)',
        'glass-panel': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-gold': 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.02) 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'emerald-lg': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
        'cyan-lg': '0 0 35px -5px rgba(6, 182, 212, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
