---
name: Fresh Neighborhood Market
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#3f4941'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#6f7a71'
  outline-variant: '#bfc9bf'
  surface-tint: '#146c43'
  primary: '#005230'
  on-primary: '#ffffff'
  primary-container: '#146c43'
  on-primary-container: '#98eab7'
  inverse-primary: '#86d8a5'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#105132'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d6a49'
  on-tertiary-container: '#a7e7bd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f4c0'
  primary-fixed-dim: '#86d8a5'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#005230'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#b0f1c7'
  tertiary-fixed-dim: '#95d4ac'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#0f5132'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
typography:
  display-hero:
    fontFamily: Noto Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an organic, modern, and neighborhood-centric corporate commerce presence for E-Plus Mart (Pyeongnae & Toegyewon branches). The aesthetic merges the logistical precision and premium freshness of digital grocery pioneers with the welcoming reliability of a local hyper-local market.

### Visual Style
- **Warm Minimalist Grocery:** Layered warm-neutral canvases (`#FAFAF7`) accented with deep botanical forest greens and high-vitality mandarin highlights.
- **Micro-elevation & Tactile Softness:** Generous card radiuses (`rounded-2xl` / 1rem to 1.5rem) combined with soft, multi-tier ambient shadows that simulate clean natural daylight on organic produce.
- **Trust & Proximity:** Prominent branch identifiers, daily freshness certification badges, cold-chain assurance counters, and transparent corporate metrics.

## Colors

The palette is tuned for appetite appeal, agricultural vitality, and institutional dependability. 

- **Primary Green (`#146C43`) & Deep Forest (`#0F5132`):** Communicates farm freshness, quality inspection, and corporate endurance. Used for primary navigation bars, dominant interactive states, price highlights, and verification stamps.
- **Mandarin Accent (`#F97316`, hover: `#EA580C`):** Drives conversion across action-oriented elements such as daily flyers, instant flyer downloads, membership sign-ups, and urgent stock notifications.
- **Canvas & Containers:** Base canvas rests at `#FAFAF7` (warm morning milk), paired with pure white (`#FFFFFF`) elevated surface cards to maintain sharp optical contrast.
- **Neutral Stack:** Primary copy utilizes `#212529` for deep charcoal contrast without the harshness of pure black; supporting metadata utilizes `#6C757D` and borders rely on warm stone `#E9ECEF`.

## Typography

Typography prioritizes rapid scanning of Hangul character groupings, prices, unit weights, and branch announcements.

- **Typescale Hierarchy:** Built around a standard modern geometric Korean sans-serif engine (matching Pretendard / Noto Sans KR characteristics) with tightened letter tracking (`-0.01em` to `-0.03em`) on larger headers to prevent visual looseness common in Korean typography.
- **Numbers & Units:** Numeric price points, discount percentages, and weights within cards utilize semi-bold and bold weights for immediate visual recognition.
- **Line Heights:** Body copy sits at generous line-height ratios (`1.5` to `1.625`) to prevent dense character collisions across multi-line store notifications and ingredient sourcing details.

## Layout & Spacing

A responsive 12-column grid provides structure across corporate overviews, branch schedules, and product grids.

- **Breakpoints:**
  - **Mobile (< 768px):** 4 columns, `margin-mobile: 1rem`, `gutter-mobile: 0.75rem`. Cards collapse into vertical stacks or horizontal carousels with peek margins.
  - **Tablet (768px – 1024px):** 8 columns, `margin: 1.5rem`, `gutter: 1rem`. Product features and store cards sit in pairs.
  - **Desktop (> 1024px):** 12 columns, max-width `1280px` centered, `margin: 2rem`, `gutter: 1.5rem`. Enables 3-to-4 column catalog items and dual-branch split views.
- **Rhythm & Whitespace:** Generous vertical rhythm (`space-xl` and above) separates operational units (e.g., Today's Specials, Branch Selection, Corporate Vision) to prevent a cluttered discount-flyer appearance.

## Elevation & Depth

Visual hierarchy leverages soft, natural light simulations on clean paper substrates rather than heavy synthetic drop-shadows.

- **Base Layer (Level 0):** Neutral `#FAFAF7` background canvas. Flat, matte finish.
- **Surface Layer (Level 1):** Solid `#FFFFFF` cards, containers, and table blocks. Features a warm ambient shadow: `box-shadow: 0 4px 20px -2px rgba(20, 108, 67, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.03)` with a hairline border `1px solid rgba(0, 0, 0, 0.05)`.
- **Raised Interactive (Level 2):** Hover states on flyers, branch selector switches, and category cards: `box-shadow: 0 12px 28px -4px rgba(20, 108, 67, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)`. Subtly shifts upward (`translateY(-2px)`).
- **Floating Modals & Flyouts (Level 3):** Store switcher overlays, notification drawers, and image lightboxes: `box-shadow: 0 24px 48px -8px rgba(15, 81, 50, 0.14)`.

## Shapes

The design uses balanced rounded geometry (`roundedness: 2`, where containers scale to `1rem` and featured hero modules adopt `1.5rem`), referencing modern food packaging.

- **Standard Containers (`rounded-xl` / 1rem):** Used for item cards, notification boxes, branch information cards, and input fields.
- **Hero & Feature Banners (`rounded-2xl` / 1.5rem):** Used for large promotional banners, branch hero images, and flyer download modules.
- **Buttons, Badges & Chips (`rounded-full`):** Category pills, store indicators (평내점 / 퇴계원점), and interactive tags use complete pill radiuses to evoke friendly, tactile approachability.

## Components

### Buttons
- **Primary Action (Mandarin):** Solid `#F97316` fill, `#FFFFFF` text, `rounded-full` or `rounded-xl`, bold font weight. Used exclusively for high-intent conversions (e.g., "이번 주 전단지 보기", "스마트 영수증 신청").
- **Secondary Action (Forest Green):** Solid `#146C43` fill or outline with `2px solid #146C43`, providing institutional balance.
- **Subtle / Ghost:** Translucent green (`rgba(20, 108, 67, 0.08)`) with `#146C43` text for secondary in-card tools.

### Branch Badges & Chips
- **Store Badges:** Pill-shaped (`rounded-full`), padded with `0.25rem 0.75rem`. 
  - *평내점:* Light green background (`rgba(20, 108, 67, 0.1)`) with `#146C43` text.
  - *퇴계원점:* Warm amber/orange tint (`rgba(249, 115, 22, 0.1)`) with `#C2410C` text.
- **Status Chips:** Direct indicators such as "영업 중" (Forest Green dot + text) and "배달 마감" (Muted Slate).

### Cards & Flyers
- **Product & Fresh Food Cards:** Pure white background, embedded `rounded-lg` imagery with a 1:1 or 4:3 aspect ratio, title in `title-md`, price highlighted with primary or accent colors, and a clean tag for origin (e.g., "국내산 산지직송").
- **Branch Location Card:** Side-by-side or stacked layout showing operating hours, parking information, real-time customer service direct lines, and KakaoTalk Channel shortcut buttons.

### Form Inputs & Checkboxes
- **Inputs:** Pure white background with a subtle border (`#DEE2E6`), expanding to a 2px focus ring tinted with primary green (`#146C43`). Text uses `body-md`.
- **Checkboxes & Radios:** Forest Green fill when checked, styled with smooth transitions and rounded corners (`rounded-sm` for boxes, `rounded-full` for radios).

### Trust Metrics & Counters
- **Quality Assurance Strip:** Clean grid card containing an iconography row (e.g., 당일 입고, 콜드체인 보관, 친환경 인증), paired with crisp metric counters and subtle dividers.