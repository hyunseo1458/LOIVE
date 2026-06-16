---
name: TIDE
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8d9e5'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fe'
  surface-container: '#ecedf9'
  surface-container-high: '#e6e8f3'
  surface-container-highest: '#e0e2ed'
  on-surface: '#181c23'
  on-surface-variant: '#414755'
  inverse-surface: '#2d3039'
  inverse-on-surface: '#eef0fc'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#a43c12'
  on-secondary: '#ffffff'
  secondary-container: '#fe7e4f'
  on-secondary-container: '#6b1f00'
  tertiary: '#9e3d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c64f00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#380c00'
  on-secondary-fixed-variant: '#822800'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#f9f9ff'
  on-background: '#181c23'
  surface-variant: '#e0e2ed'
  ocean-blue: '#007AFF'
  deep-teal: '#005F6B'
  sun-yellow: '#FFD700'
  coral: '#FF7F50'
  error-red: '#FF3B30'
  success-green: '#34C759'
typography:
  display-lg:
    fontFamily: Pretendard
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Pretendard
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Pretendard
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-lg:
    fontFamily: Pretendard
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Pretendard
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Pretendard
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 12px
---

## Hard Constraints

- **Font:** Use **Pretendard** only, for every text style (headings, body, labels, prices). Do not use Plus Jakarta Sans, Hanken Grotesk, or any other typeface.
- **Icons:** No emojis anywhere in the UI or copy. All icons must be **Hero Icons SVG** (outline or solid set), sized and colored to match the surrounding text/icon color tokens.
- **Gradients:** No gradients anywhere (backgrounds, buttons, shimmer/skeleton states, etc.). Use solid colors or opacity/alpha variants of the existing palette instead.

## Brand & Style

The brand identity is built around the concept of "Pristine Vitality." It targets adventurous yet comfort-seeking travelers who value the rejuvenating power of the ocean. The UI must evoke feelings of freedom, clarity, and reliability through a "Bright & Airy" aesthetic.

The design style is **Corporate / Modern** with a **Minimalist** foundation, enhanced by **Glassmorphism** for navigational elements to mimic the translucency of water. 

**Visual Principles:**
- **Luminosity:** Maximize white space and high-key backgrounds to create a "breathable" interface.
- **Fluidity:** Use soft, organic transitions and rounded shapes that suggest water and movement.
- **Precision:** Maintain a rigorous grid to ensure the "Trustworthy" aspect of a booking platform.

## Colors

The palette is anchored by a vibrant **Ocean Blue** (#007AFF) to symbolize professional service and the sea. **Deep Teal** is used for high-contrast text and branding moments. 

**Coral** (#FF7F50) serves as the primary action/highlight color, providing an energetic contrast to the cool blues—ideal for "Book Now" buttons and active states. **Sun-yellow** is reserved for status indicators (e.g., "Ending Soon") and seasonal tags.

**Neutral Palette:** Use a scale of cool grays (Blue-Grays) rather than pure blacks to maintain the "Airy" feel. Backgrounds should favor pure white (#FFFFFF) or very light azure tints for section layering.

## Typography

This design system uses **Pretendard** as the sole typeface across the entire UI — headings, body copy, and functional labels/micro-copy alike. Its modern, welcoming character provides the "softness" required for a leisure app while maintaining excellent legibility, and its variable weights are enough to create contrast between headings and metadata (dates, seat counts, technical specs) without introducing a second font family.

**Hierarchy Rules:**
- **Product Names:** Always use `title-lg` or `headline-md` with 700 weight.
- **Price Emphasis:** Use `price-display` for final amounts, paired with secondary color for emphasis.
- **Secondary Info:** Use `body-md` in a medium-gray for descriptions to maintain whitespace balance.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop/tablet and a **4-column fluid grid** for mobile. The philosophy is "Maximum Breathing Room," using generous vertical margins between sections.

**Spacing Rhythm:**
- Use the **8px scale** for structural gaps (16, 24, 32).
- Use the **4px scale** for internal component padding (8, 12).
- **Safe Zones:** Cards and containers must maintain at least 16px internal padding to avoid visual crowding.
- **Mobile Margins:** Standard horizontal margin is 20px to allow images and cards to feel expansive without hitting the screen edge.

## Elevation & Depth

To achieve the "Airy" feel, avoid heavy black shadows. Use **Ambient Shadows** tinted with the primary Ocean Blue to create depth that feels integrated with the environment.

**Elevation Levels:**
- **Flat:** For input fields and secondary containers.
- **Low (Floating Cards):** `0px 4px 12px rgba(0, 122, 255, 0.08)` — used for product and course cards.
- **High (Nav & Bottom Sheets):** `0px -8px 24px rgba(0, 0, 0, 0.05)` — used for fixed booking bars and modals.

**Backdrop Blur:** Use a 20px blur with 80% opacity on headers and navigation bars to create a "Clear Water" glass effect when scrolling over content.

## Shapes

The shape language is defined by "Organic Softness." Most containers use a 16px (rounded-lg) or 24px (rounded-xl) radius to feel friendly and approachable.

**Corner Radius Strategy:**
- **Primary Cards:** 20px (custom) or 24px for large imagery-heavy items.
- **Buttons & Inputs:** 12px or 16px.
- **Chips/Tags:** Fully rounded (pill-shaped) to distinguish them from actionable buttons.
- **Images:** Must follow the container's radius for a unified "nested" look.

## Components

### Buttons
- **Primary:** Coral background, white text, 16px radius. On press, scale down to 0.98 for tactile feedback.
- **Secondary:** Ocean Blue background with 10% opacity, Ocean Blue text.
- **Floating Action (FAB):** High elevation, pill-shaped, used for "Quick Help" or "View Map."

### Cards
- **Product Card:** 20px radius, image-on-top layout. Price and rating should be clearly separated by whitespace.
- **Course Card:** Uses a 1px soft border (#E0E7FF) and a very subtle Ocean Blue shadow.

### Input Fields & Selectors
- **State Changes:** On focus, the border transitions from light gray to Ocean Blue (2px).
- **Interactive Skeleton:** Use a subtle pulsing opacity animation (e.g. `surface-container-low` fading between 100% and 60% opacity) — no gradient sweep.

### Navigation
- **Bottom Tab Bar:** Uses the Glassmorphism blur effect with a subtle 1px top border. Active icons use the Primary color with a small dot indicator below.

### Feedback Elements
- **Toasts:** Floating at the bottom-center with an 8px offset from the bottom bar, 12px radius, and dark-teal background for readability.
- **Calendar:** Active dates use a circular Primary color fill; "Closing Soon" dates use a Sun-yellow subtle highlight.