/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#030712',
          dark: '#060d1e',
          navy: '#0a1628',
          blue: '#0ea5e9',
          'blue-glow': '#38bdf8',
          cyan: '#06b6d4',
          'cyan-glow': '#67e8f9',
          purple: '#a855f7',
          'purple-glow': '#d8b4fe',
          pink: '#ec4899',
          green: '#10b981',
          yellow: '#f59e0b',
          white: '#f0f9ff',
          gray: '#1e293b',
          'gray-light': '#334155',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        fira: ['"Fira Code"', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 15s linear infinite reverse',
        'scan': 'scan 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'matrix': 'matrix 20s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'tilt': 'tilt 10s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'dash': 'dash 3s ease-in-out infinite',
        'particle': 'particle 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.7, filter: 'brightness(1.5)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(6, 182, 212, 0.8), 0 0 100px rgba(168, 85, 247, 0.4)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        dash: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(-100px) translateX(100px)', opacity: 0 },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #030712 0%, #060d1e 50%, #0a1628 100%)',
        'neon-gradient': 'linear-gradient(135deg, #06b6d4, #a855f7, #3b82f6)',
        'neon-gradient-reverse': 'linear-gradient(135deg, #a855f7, #06b6d4)',
        'card-glass': 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(168,85,247,0.05))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)',
        'card-glow': '0 8px 32px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(6, 182, 212, 0.1)',
        'card-hover': '0 20px 60px rgba(6, 182, 212, 0.25), 0 0 0 1px rgba(6, 182, 212, 0.2), 0 0 80px rgba(168, 85, 247, 0.1)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-hard': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
