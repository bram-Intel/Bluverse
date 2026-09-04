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
          blue: '#0416C0',          // Poster Deep Royal Blue
          'blue-hover': '#020E8A',
          'blue-soft': '#EEF2FF',
          'blue-light': '#E0E7FF',
          navy: '#04052D',          // Poster Midnight Text
          cyan: '#00D2FF',
          canvas: '#F8FAFC',        // Poster Clean Off-White
          card: '#FFFFFF',
          border: '#E2E8F0',
          'border-hover': '#93C5FD',
          pill: '#0312B4',          // Poster Solid Blue Pill
          muted: '#475569',
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
        'poster-card': '0 4px 20px -2px rgba(4, 22, 192, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'poster-card-hover': '0 12px 30px -4px rgba(4, 22, 192, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
        'pedestal-light': '0 25px 60px -15px rgba(4, 22, 192, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
