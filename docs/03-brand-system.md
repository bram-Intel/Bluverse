# 03 — Brand & Design System Specification (Poster Anchor)

## 1. Brand Identity & Persona

* **Brand Name**: **BULVERSE**
* **Primary Taglines**:
  * *"Your Digital Infrastructure, All In One Place."*
  * *"Build. Run. Grow with Bulverse Cloud."*
* **Design Philosophy**:
  * **Clean Light Space**: High negative space, airy, crisp white and technical slate backgrounds.
  * **Primary Anchor Color**: **Bulverse Deep Royal Blue** (`#0416C0`), sampled directly from the official poster headline and bottom pills.
  * **Midnight Text**: `#04052D` (high-contrast, commanding, legible).
  * **Precision Architecture**: Precision-engineered cards, technical dot matrices, and physical status indicators.

---

## 2. Design Tokens (CSS Variables)

```css
:root {
  /* Brand Primary & Accents (Sampled from Poster) */
  --color-primary: #0416C0;            /* Deep Royal Blue */
  --color-primary-hover: #020E8A;
  --color-primary-soft: #EEF2FF;
  --color-pill-blue: #0312B4;          /* Solid Pill Banner */
  --color-accent: #00D2FF;             /* Cyan Telemetry Accent */

  /* Surfaces & Hierarchy (Clean Light Theme) */
  --color-background: #F8FAFC;         /* Clean Canvas Floor */
  --color-surface-card: #FFFFFF;       /* Pure White Card */
  --color-surface-elevated: #F1F5F9;   /* Subtle Card Tint */
  --color-border: #E2E8F0;
  --color-border-hover: #93C5FD;

  /* Typography Colors */
  --color-text-primary: #04052D;       /* Midnight Navy */
  --color-text-secondary: #475569;     /* Slate Neutral */
  --color-text-muted: #64748B;
  --color-text-brand: #0416C0;

  /* Telemetry & State */
  --color-status-active: #10B981;       /* Online Green */
  --color-status-warning: #F59E0B;
  --color-status-error: #EF4444;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

---

## 3. Typography Hierarchy
1. **Headline Font**: `Space Grotesk` or `Outfit` — Geometric, high-density, authoritative.
2. **Body Font**: `Inter` — Crisp, legible for technical specifications.
3. **Telemetry Font**: `JetBrains Mono` — Server hostnames, IP allocations, tier pill capacities.

---

## 4. Poster Component Specifications
* **Cards**: Pure white surface, subtle slate border (`#E2E8F0`), soft blue ambient drop shadow (`0 4px 20px -2px rgba(4, 22, 192, 0.06)`).
* **Pill Banner**: Solid deep royal blue (`#0312B4`) with white monospace text, displaying available capacities.
* **Trust Strip**: Clean white rounded bar with deep blue iconography.
