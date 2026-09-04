export const tokens = {
  colors: {
    primary: {
      default: '#1B4DF5',       // Bulverse Royal Blue
      hover: '#1640D6',
      soft: 'rgba(27, 77, 245, 0.12)',
      glow: 'rgba(27, 77, 245, 0.35)',
    },
    accent: {
      cyan: '#00D2FF',          // Electric Cyan
      glow: 'rgba(0, 210, 255, 0.28)',
      soft: 'rgba(0, 210, 255, 0.10)',
    },
    background: {
      void: '#030611',          // Pure dark background
      base: '#060B1E',          // Deep space canvas
      elevated: '#0B132B',      // Card surface
      raised: '#111C3E',        // Hover / Active surface
      glass: 'rgba(11, 19, 43, 0.75)',
    },
    borders: {
      subtle: 'rgba(255, 255, 255, 0.08)',
      highlight: 'rgba(27, 77, 245, 0.40)',
      cyanHighlight: 'rgba(0, 210, 255, 0.50)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',     // High contrast WCAG AA compliant
      muted: '#64748B',
      accent: '#00D2FF',
    },
    status: {
      active: '#10B981',        // Online / Operational Green
      warning: '#F59E0B',       // Latency Warning
      error: '#EF4444',         // Failed / Offline
      provisioning: '#3B82F6',  // Deploying Blue
    }
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  typography: {
    fonts: {
      display: '"Space Grotesk", "Outfit", system-ui, sans-serif',
      body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", monospace',
    }
  }
} as const;

export type Tokens = typeof tokens;
