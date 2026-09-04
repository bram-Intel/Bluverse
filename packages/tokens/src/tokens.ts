export const tokens = {
  colors: {
    primary: {
      default: '#0416C0',       // Bulverse Deep Royal Blue (Sampled from poster #0312b4 / #0615b5)
      hover: '#020E8A',
      soft: '#EEF2FF',
      glow: 'rgba(4, 22, 192, 0.25)',
    },
    accent: {
      cyan: '#00D2FF',          // Electric Accent
      blue: '#2563EB',
    },
    background: {
      canvas: '#F8FAFC',        // Clean white / off-white floor
      surface: '#FFFFFF',       // Pure white card
      elevated: '#F1F5F9',
      border: '#E2E8F0',
      borderHighlight: 'rgba(4, 22, 192, 0.3)',
    },
    text: {
      primary: '#04052D',       // Deep midnight black
      secondary: '#475569',     // Slate gray
      muted: '#64748B',
      brand: '#0416C0',
    },
    status: {
      active: '#10B981',        // Online Green
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
  typography: {
    fonts: {
      display: '"Space Grotesk", "Outfit", system-ui, sans-serif',
      body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
  },
} as const;

export type Tokens = typeof tokens;
