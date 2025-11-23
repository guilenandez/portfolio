# Brittany Chiang v4 Style Portfolio - Design Guidelines

## Design Approach: Reference-Based
**Primary Reference**: Brittany Chiang v4 Portfolio (v4.brittanychiang.com)
**Justification**: Specific aesthetic requirement for a proven, influential developer portfolio design with 8.1k+ GitHub stars.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 10 15% 8% (deep navy)
- Surface: 220 15% 11% (slightly lighter navy)
- Text Primary: 204 10% 90% (light slate)
- Text Secondary: 204 10% 65% (medium slate)
- Text Muted: 204 10% 45% (dim slate)
- Accent: 167 70% 70% (teal-green #64ffda equivalent)
- Accent Hover: 167 70% 80% (lighter teal)

### B. Typography

**Font Families**
- Headings: "SF Mono", "Fira Code", "Fira Mono", monospace (for numbers/labels)
- Body: "Inter", -apple-system, sans-serif
- Code/Technical: "Fira Code", monospace

**Scale & Weights**
- Hero Title: 4xl-7xl, font-bold (responsive)
- Section Headers: 3xl-5xl, font-bold with numbered prefix
- Subsection: xl-2xl, font-semibold
- Body: base-lg, font-normal
- Small Text: sm, font-normal

### C. Layout System

**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for consistency

**Structure**
- Single-page scrolling layout
- Fixed left sidebar navigation (hidden on mobile, hamburger menu)
- Main content: max-w-6xl with asymmetric padding (more on right)
- Sections: Full viewport height for hero, natural height for others
- Vertical rhythm: py-20 to py-32 between major sections

### D. Component Library

**Navigation**
- Fixed left sidebar with numbered section links (01-05)
- Social icons at bottom of sidebar (GitHub, LinkedIn, etc.)
- Hamburger menu overlay for mobile
- Smooth scroll behavior between sections
- Active section highlighting in nav

**Hero Section**
- Large typographic introduction (no hero image)
- Greeting in accent color with monospace font
- Name in oversized bold text
- Tagline in muted color
- Brief introduction paragraph (2-3 lines)
- Single prominent CTA button in accent color with border
- Positioned left-aligned, taking ~60% width

**About Section**
- Two-column layout (text + profile image on desktop)
- Numbered heading "01. About"
- Skills list in two-column grid with accent bullets
- Profile image with subtle border in accent color
- Image overlay effect on hover (accent color tint)

**Experience Section**
- Numbered heading "02. Where I've Worked"
- Vertical tab navigation on left (company names)
- Content panel on right showing role details
- Each role includes: title, date range, bullet points
- Active tab highlighted with accent left border
- Tab content fades in on selection

**Projects Section**
- Numbered heading "03. Some Things I've Built"
- Featured projects: alternating left/right image layouts
- Project cards with:
  - Background image with dark overlay
  - Overline label in accent color
  - Title and description
  - Tech stack tags
  - External links (GitHub, demo)
- Additional projects in 3-column grid (mobile: 1 column)
- "Show More" button to reveal additional projects with fade-in

**Contact Section**
- Numbered heading "04. What's Next?"
- Centered, minimal design
- Title, paragraph, and CTA button
- No form - focus on email link
- Additional text below with alternative contact info

**Footer**
- Centered attribution text
- Small, muted color
- GitHub repo link

### E. Interactions & Animations

**Subtle, Professional Motion**
- Smooth scroll with easing
- Link hover: slight color shift to lighter accent (167 70% 80%)
- Button hover: background accent with navy text
- Cards: gentle lift on hover (translateY: -8px)
- Tab switching: 300ms fade transition
- Project reveal: staggered fade-in (100ms delay between items)
- Navigation: 200ms color transition
- All transitions: ease-in-out curve

**Hover States**
- Links: underline with accent color
- Project images: scale 1.05 with accent overlay
- Social icons: translateY(-4px) and color shift
- Buttons: background fill, transform scale(1.02)

### F. Technical Details

**Numbered Sections**
- All major sections prefixed with monospace numbers
- Format: "01." in accent color
- Horizontal line extends from heading across section

**Project Cards Structure**
- Featured: Image background with content overlay (semi-transparent navy card)
- Grid cards: Solid navy background, no images
- Tech stack: Small pills in muted accent color
- Icons: Use Heroicons for external links

**Responsiveness**
- Desktop (lg): Sidebar visible, two-column layouts
- Tablet (md): Hamburger menu, single column with some two-column elements
- Mobile: Full single column, reduced spacing (py-12 to py-16)

### G. Content Sections Order
1. Hero (full viewport)
2. About (natural height ~600-800px)
3. Experience (natural height based on content)
4. Projects (natural height, expandable)
5. Contact (smaller section ~400-600px)
6. Footer (minimal)

## Images

**Profile Image**: Place in About section, right side. Should be a professional headshot with subtle green tint overlay on hover. No hero image - design is typography-focused.

**Project Images**: Use for featured projects only (3-4 projects). Images should be screenshots or mockups of the work, displayed as background with dark overlay for text legibility.

## Key Design Principles

1. **Developer-First Aesthetic**: Monospace accents, code-like structure, technical feel
2. **Restrained Color**: Almost entirely grayscale with single accent color for impact
3. **Attention to Detail**: Precise spacing, numbered sections, consistent hover states
4. **Content Hierarchy**: Clear visual flow from hero through to contact
5. **Performance**: Minimal animations, optimized assets, smooth interactions