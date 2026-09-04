# 03 — Brand & Design System Specification

## 1. Brand Identity & Persona

* **Brand Name**: **BULVERSE**
* **Brand Meaning**: A universe of digital infrastructure; empowering upward momentum and continuous growth.
* **Taglines**:
  * Primary: *"Your Digital Infrastructure, All In One Place."*
  * Mantra: *"Build. Run. Grow with Bulverse Cloud."*
* **Brand Character**:
  * Reliable, technical, authoritative, accessible, and scalable.
  * **Not** a generic cheap cPanel host.
  * **Not** an over-hyped speculative crypto project.
  * **Not** an elitist, unapproachable enterprise monolith.

---

## 2. Visual Benchmarks & Aesthetics
* **Cuzmify Benchmark**: Luxury craft, meticulous tokenization, WCAG AA compliance, and bespoke micro-interactions.
* **Veltrix Benchmark**: Aerospace engineering precision, obsidian surfaces, electric cyan & royal blue highlights, and live telemetry instrumentation.
* **Poster Identity**: 3-tier illuminated blade server on a circular pedestal, crowned by a radiant cloud, with orbiting infrastructure nodes.

---

## 3. Design Tokens (CSS Variables)

```css
:root {
  /* Brand Primary & Accents */
  --color-primary: #1B4DF5;            /* Bulverse Royal Blue */
  --color-primary-hover: #1640D6;
  --color-primary-soft: rgba(27, 77, 245, 0.12);
  --color-accent: #00D2FF;             /* Electric Cyan */
  --color-accent-glow: rgba(0, 210, 255, 0.25);

  /* Surfaces & Hierarchy */
  --color-background: #050814;          /* Deep Obsidian Void */
  --color-surface-base: #0A0F24;        /* Elevated Navy Card */
  --color-surface-raised: #111A3A;      /* Interactive Active Surface */
  --color-surface-glass: rgba(10, 15, 36, 0.7);
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(27, 77, 245, 0.4);

  /* Typography Colors */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #94A3B8;      /* WCAG AA Compliant */
  --color-text-muted: #64748B;

  /* Telemetry & State */
  --color-status-active: #10B981;       /* Online / Operational Green */
  --color-status-warning: #F59E0B;      /* Latency / Degraded Amber */
  --color-status-error: #EF4444;        /* Offline / Error Red */

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

---

## 4. Typography Hierarchy
1. **Headline Font**: `Space Grotesk` or `Outfit` — Geometric, confident, technical.
2. **Body Font**: `Inter` / `Geist` — Clear, neutral, optimal for dense specifications.
3. **Telemetry Font**: `JetBrains Mono` — Server hostnames, IP allocations, uptime clocks, latency numbers.

---

## 5. Component Patterns
* **Service Cards**: Dark glass cards with a top subtle gradient sheen, crisp icon badge, clear feature checklist, and bottom tier selector pills.
* **Tier Selector Pills**: Standardized `text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full`.
* **Pulse Indicators**: `relative flex h-2.5 w-2.5` with an animated ping ring for active servers and datacenters.
