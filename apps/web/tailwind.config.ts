import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
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
        'poster-card-hover': '0 16px 36px -4px rgba(4, 22, 192, 0.14), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'pedestal-light': '0 25px 60px -15px rgba(4, 22, 192, 0.25)',
        'antigravity': '0 8px 32px 0 rgba(4, 22, 192, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'antigravity-hover': '0 20px 48px -6px rgba(4, 22, 192, 0.18), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'glow-blue': '0 0 50px -10px rgba(4, 22, 192, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(0, 210, 255, 0.35)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(4, 22, 192, 0.12), rgba(0, 210, 255, 0.05) 50%, transparent 80%)',
        'radial-glow': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
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
