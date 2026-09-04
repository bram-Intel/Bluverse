import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bulverse: {
          blue: '#1B4DF5',
          'blue-hover': '#1640D6',
          'blue-dark': '#0B2174',
          cyan: '#00D2FF',
          'cyan-glow': 'rgba(0, 210, 255, 0.35)',
          void: '#030611',
          card: '#080E24',
          'card-hover': '#0E1738',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(27, 77, 245, 0.5)',
          muted: '#94A3B8',
          subtle: '#64748B',
          active: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'Outfit', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(27, 77, 245, 0.5)',
        'glow-cyan': '0 0 35px -8px rgba(0, 210, 255, 0.45)',
        'pedestal': '0 20px 60px -15px rgba(27, 77, 245, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit-1': 'orbit 12s linear infinite',
        'orbit-2': 'orbit 18s linear infinite reverse',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
