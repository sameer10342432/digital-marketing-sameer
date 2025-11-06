# Design Guidelines: Muhammad Sameer Digital Marketing Portfolio

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern professional portfolios (Dribbble, Behance) combined with trusted SaaS marketing sites (HubSpot, Mailchimp) and the clean precision of Linear. This creates a professional yet approachable aesthetic that builds credibility while showcasing creative marketing work.

**Core Principles**:
- Data-driven trust through visible metrics and results
- Professional credibility without corporate stiffness
- Content-first hierarchy that guides users to conversion points
- Strategic use of whitespace to elevate key information

## Typography System

**Font Families** (Google Fonts):
- Primary: Inter (headings, UI elements) - weights 400, 500, 600, 700
- Secondary: Lora (accent headlines, testimonials) - weights 400, 600
- Body: Inter (all body text, navigation) - weight 400

**Type Scale**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal, leading-relaxed
- Body Regular: text-base, leading-relaxed
- Small Text/Captions: text-sm, font-medium
- Metrics/Stats: text-4xl md:text-5xl, font-bold (for numerical displays)

## Layout System

**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Common patterns: p-8, gap-6, space-y-12, mt-16, py-20, py-32

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto
- Narrow forms/CTAs: max-w-2xl mx-auto

**Grid Systems**:
- Portfolio grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Services grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Blog grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Stats display: grid-cols-2 md:grid-cols-4 gap-6

## Page-Specific Layouts

### Homepage
**Hero Section** (h-screen or min-h-[600px]):
- Large hero image (full-width background) showing professional workspace or abstract marketing visuals
- Content overlay with backdrop-blur effect on buttons
- Split layout: Left 60% for headline/CTA, Right 40% space for visual balance
- Two CTAs: Primary "Get In Touch" + Secondary "View My Work"
- Subtle scroll indicator at bottom

**Services Preview**: py-20, 4-column grid on desktop, cards with icons, brief descriptions, hover lift effects

**Featured Case Studies**: py-24, 3-column grid, large preview cards with overlay metrics, "View All Projects" CTA

**Results/Metrics Bar**: py-16, 4-column stat display with large numbers, animated counter effect on scroll

**Testimonials**: py-20, 3-column grid with client photos, quote styling with Lora font

**CTA Section**: py-24, centered max-w-3xl, compelling headline with form or calendar booking integration

### Portfolio/Case Studies Page
**Filter Navigation**: Sticky top bar with pill-style category filters (All, SEO, PPC, Social Media, etc.)

**Project Grid**: Masonry-style or equal-height cards, each displaying:
- Project thumbnail/featured image
- Client logo (small, top corner)
- Project title and category tag
- Key metrics in badge format (e.g., "+250% ROI", "2M impressions")
- "View Case Study" link

**Individual Case Study Layout**:
- Full-width hero image with project title overlay
- Challenge/Strategy/Results sections in clear visual blocks
- 2-column layout for before/after comparisons
- Inline metric callouts with large numbers and icons
- Screenshot galleries in 2-3 column grids
- Related projects footer section

### Services Page
**Services Grid**: Each service gets dedicated card (icon, title, 3-4 bullet points, "Learn More" link)

**Process Timeline**: Horizontal or vertical stepped layout showing workflow (Discovery → Strategy → Execution → Optimization → Reporting)

**Tools & Platforms**: Logo grid display showing mastery of marketing tools

### Blog
**Featured Post**: Large hero card with image, category tag, title, excerpt, author info

**Blog Grid**: 3-column layout, thumbnail images, category tags, title, date, read time, excerpt

**Article Page**: Single column max-w-3xl, large featured image, readable line-height, inline subheadings with generous spacing, pull quotes in Lora font

### About Page
**Personal Introduction**: 2-column split - professional photo on left (40%), bio on right (60%)

**Certifications Grid**: Badge-style display of credentials with logos

**Timeline**: Visual career journey with milestone markers

**Skills Matrix**: Category grouping (Analytics, SEO, PPC, Social, Email) with tool logos

### Contact Page
**Split Layout**: Form on left (60%), contact information and social links on right (40%)

**Form Fields**: Name, Email, Service Interest (dropdown), Message, Submit button - all with consistent spacing (space-y-6)

## Component Library

### Navigation
**Header**: Sticky, backdrop-blur, py-4, logo left, navigation center, CTA button right
- Desktop: Horizontal menu with hover underline indicators
- Mobile: Hamburger menu with slide-in full-screen overlay

**Footer**: Multi-column (4 columns on desktop), newsletter signup, social icons, quick links, copyright

### Cards
**Project Cards**: Rounded-2xl, overflow-hidden, shadow-lg on hover, transform hover:-translate-y-2 transition
- Image area with aspect-ratio-video
- Content padding p-6
- Metric badges absolute positioned on image

**Service Cards**: Rounded-xl, border, p-8, icon at top (w-12 h-12), hover shadow effect

**Testimonial Cards**: Rounded-xl, p-6, quote icon, client photo (rounded-full, w-16 h-16), name and title beneath

### Buttons
**Primary CTA**: Rounded-full, px-8 py-4, text-lg font-semibold, backdrop-blur when on images
**Secondary**: Rounded-full, border-2, px-8 py-4, text-lg font-semibold
**Text Links**: Underline decoration-2, hover decoration-4 transition

### Forms
**Input Fields**: Rounded-lg, border, p-4, focus:ring-2, w-full
**Textarea**: Same as input, min-h-[150px]
**Labels**: text-sm font-medium, mb-2

### Badges/Tags
**Category Tags**: Rounded-full, px-4 py-2, text-sm font-medium, inline-block
**Metric Badges**: Rounded-lg, px-3 py-1, text-sm font-bold

## Images

**Hero Section**: Professional workspace photo or abstract digital marketing visualization (data flows, analytics dashboards) - full-width background image

**Case Study Headers**: Project-specific screenshots or campaign visuals - full-width aspect-ratio-21/9

**About Page**: Professional headshot - square or portrait orientation, high-quality

**Blog Thumbnails**: Relevant imagery for each article - aspect-ratio-16/9

**Client Logos**: Monochrome versions for testimonials and case studies

**Service Icons**: Use Heroicons or Font Awesome for service category icons

## Animations

**On Scroll**: Fade-in effects for sections as they enter viewport (use intersection observer)
**Hover States**: Subtle lift (translateY) on cards, scale on images
**Page Transitions**: Smooth fade between routes
**Metric Counters**: Animated count-up on scroll into view
**Loading States**: Skeleton screens for dynamic content

Keep animations subtle (duration-300, ease-in-out) - prioritize performance over spectacle.