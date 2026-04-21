# Design Brief

## Direction
$Pigeon Nest — A dark edgy meme coin website with brutalist minimalism and shocking neon accents. Black backgrounds with electric green and cyan pops create maximum visual impact and meme energy.

## Tone
Brutalist minimalism with neon maximalism — bold, aggressive, no-nonsense. Sharp geometric forms and high-contrast color placement over soft effects. Playful meme energy through typography boldness rather than animation.

## Differentiation
Sharp neon borders on interactive elements, aggressive uppercase geometric headlines in Space Grotesk, and selective glow effects on active states create an unforgettable dark edgy aesthetic that stands apart from generic crypto sites.

## Color Palette

| Token      | OKLCH        | Role                      |
| ---------- | ------------ | ------------------------- |
| background | 0.12 0 0     | Deep black base            |
| foreground | 0.92 0 0     | Off-white text             |
| card       | 0.16 0 0     | Elevated card surfaces     |
| primary    | 0.68 0.8 145 | Neon green accent (main)   |
| accent     | 0.63 0.75 290| Cyan/purple accent (secondary)|
| muted      | 0.2 0 0      | Disabled/subtle states     |
| border     | 0.25 0 0     | Card/section dividers      |

## Typography

- Display: Space Grotesk — bold, uppercase headlines and hero text. Geometric and aggressive.
- Body: General Sans — clean, readable copy and UI labels. Professional counterpoint.
- Mono: Geist Mono — price tickers, data displays, code/addresses.
- Scale: h1 `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl font-bold tracking-tight`, label `text-xs font-semibold text-uppercase-tight`, body `text-base leading-relaxed`

## Elevation & Depth

Flat geometric surfaces with sharp 1px borders in neon colors. No soft shadows — only discrete 1px separation lines using border token. Neon glow effects on hover/active states only, never ambient.

## Structural Zones

| Zone    | Background      | Border                | Notes                                         |
| ------- | --------------- | --------------------- | --------------------------------------------- |
| Header  | bg-background   | border-b border-border| Sticky navigation, logo, minimal chrome       |
| Hero    | bg-background   | —                     | Full-width dark section, pigeon imagery, CTAs |
| Content | bg-background   | —                     | Alternate bg-card for sections (tokenomics)   |
| Footer  | bg-card         | border-t border-neon-green| Bright accent border, community links       |

## Spacing & Rhythm

Section gaps at `3rem md:4rem`. Content grouping with `2rem` card padding. Micro-spacing via `gap-3` to `gap-6`. Aggressive headline sizing creates visual rhythm; body text breathing room balances visual intensity.

## Component Patterns

- Buttons: `bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:glow-primary transition-smooth`
- Cards: `bg-card border-neon-green rounded-sm p-6`
- Badges: `bg-muted text-foreground text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1`
- Data: `font-mono text-primary glow-primary`

## Motion

- Entrance: Fade-in on scroll with 0.3s ease-out. No bounce.
- Hover: `transition-smooth` (0.3s cubic-bezier) on all interactive elements. Glow effect appears on hover.
- Decorative: `animate-pulse-neon` for live indicators, `animate-float` for accent elements, `animate-ticker` for scrolling marquee.

## Constraints

- No gradients — flat color fields only.
- No soft shadows — use borders for separation, glow only on hover/active.
- Neon colors used sparingly: primary for CTAs, accent for accents, dark grey for disabled.
- Uppercase headlines preserve hierarchy without font-weight abuse.
- Mobile-first design: all components fully responsive at `sm:` breakpoint and up.

## Signature Detail

Sharp 1px neon borders on cards and interactive elements paired with geometric uppercase typography in Space Grotesk. This combination creates a distinctive brutalist-meets-neon aesthetic that visually communicates the edgy meme coin energy.
