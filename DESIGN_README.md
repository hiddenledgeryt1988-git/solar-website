# National Infratech Solution --- Design System & UI/UX Prompt

> **Purpose:** This file is the visual and interaction specification for
> the website. Read it together with `README.md`. The attached Greenova
> screenshot is the primary visual reference.

## 1. Creative direction

Create a premium clean-energy website for National Infratech Solution
(NIS Solar), inspired by the supplied Greenova reference.

The design should feel: - Modern, confident and premium. - Clean, airy
and editorial rather than a generic solar-company template. -
Nature-inspired but technically credible. - Image-led, with strong
typography and generous white space. - Conversion-focused, making
WhatsApp enquiry actions obvious without turning every section into a
loud sales banner.

**Do not reproduce the Greenova brand, wordmark, exact copy or
proprietary assets.** Use its layout rhythm, visual hierarchy, image
treatment and colour relationships as inspiration.

## 2. Reference image breakdown

The screenshot uses a long, narrow desktop page composition with a light
neutral outer canvas and a central white website surface.

### Main visual characteristics to reproduce

1.  A large rounded hero panel with a full-bleed renewable-energy
    photograph.
2.  Minimal navigation placed over the hero image.
3.  Hero copy aligned to the left with a clear headline and compact CTA
    buttons.
4.  An oversized brand wordmark near the bottom of the hero, integrated
    into the image.
5.  A clean white About section with a small eyebrow label and large
    editorial heading.
6.  An asymmetrical image grid with one large image, one wide image and
    smaller metric/visual cards.
7.  A two-column feature section with accordion rows on the left and a
    large solar photograph on the right.
8.  A service section with horizontally arranged image cards.
9.  A testimonial section with a strong heading, short supporting copy
    and a visually balanced card composition.
10. A compact FAQ section with numbered questions and plus/minus
    controls.
11. Repeated use of rounded corners, restrained shadows and subtle lime
    accents.

The screenshot's narrow right-hand page view is simply another portion
of the same long website composition. Implement a coherent full-width
responsive page, not two separate columns or duplicated pages.

## 3. Colour palette

Use a controlled palette inspired by solar energy, sky and foliage.
These are proposed design tokens; tune them for accessible contrast.

``` css
:root {
  --color-primary: #1477A8;       /* clean solar blue */
  --color-primary-dark: #0B4568;  /* deep blue */
  --color-sky: #DCEFF7;           /* pale sky */
  --color-lime: #D5F36A;          /* energetic lime accent */
  --color-lime-dark: #AFCF3E;     /* hover/active lime */
  --color-green: #2E6847;         /* natural green */
  --color-ink: #172126;           /* main text */
  --color-muted: #66747A;         /* secondary text */
  --color-surface: #FFFFFF;       /* page surface */
  --color-soft: #F5F7F5;           /* subtle section background */
  --color-border: #E5EAE7;        /* fine separators */
}
```

### Colour usage

-   White/off-white is the dominant page background.
-   Blue is the main brand colour for links, hero overlays and selected
    details.
-   Lime is a distinctive accent for primary CTA fills, small
    highlights, icons and active states.
-   Dark green appears sparingly to connect the brand with nature.
-   Body copy should use deep charcoal, not pure black everywhere.
-   Avoid large neon-green blocks, excessive gradients and too many
    competing accent colours.
-   Keep text contrast accessible. Never place small white text directly
    over a bright photograph without a dark overlay.

## 4. Typography

Use a clean geometric/grotesk sans-serif system close to the reference.

Recommended: - **Primary:** Manrope. - **Alternative:** Inter or Plus
Jakarta Sans. - Use one family consistently, with a clear range of
weights. - Headings: 500--650 weight, tight but comfortable
line-height. - Body: 400--450 weight. - Eyebrow labels: 500--600 weight,
small uppercase or title case with subtle letter spacing.

Suggested responsive type scale: - Hero headline:
`clamp(2.5rem, 5.4vw, 5.2rem)`. - Oversized hero wordmark:
`clamp(4.5rem, 13vw, 11rem)`. - Section heading:
`clamp(2rem, 3.4vw, 3.5rem)`. - Card heading: 1.1--1.35rem. - Body:
0.95--1.05rem. - Eyebrow: 0.7--0.78rem.

Use line breaks intentionally on desktop, but let text wrap naturally on
mobile. Do not shrink body copy until it becomes difficult to read.

## 5. Layout grid and spacing

-   Maximum content width: approximately 1320--1440px.
-   Desktop side gutters: 4--6vw.
-   Tablet gutters: 24--32px.
-   Mobile gutters: 18--22px.
-   Use a 12-column desktop grid or equivalent CSS grid.
-   Section vertical spacing: generous, around 96--140px desktop and
    64--88px mobile.
-   Card gaps: 14--24px.
-   Use consistent radii: 12--18px for cards, 22--30px for hero/media
    panels, pill radius for buttons.
-   Keep sections visually separated by whitespace, subtle surface
    changes or thin dividers rather than heavy borders.

Avoid excessive empty space on mobile. Maintain the editorial feel while
prioritising content and CTA visibility.

## 6. Header design

### Desktop

-   Transparent or subtly tinted header over the hero.
-   Logo on the left.
-   Minimal navigation centred or right-aligned.
-   Lime or white pill-shaped WhatsApp CTA on the right.
-   Small typography and ample horizontal breathing room.
-   On scroll, transition to a white or lightly blurred sticky header
    with dark text and a subtle bottom border.

### Mobile

-   Compact logo and menu button.
-   Menu opens as a clean overlay or dropdown panel.
-   Include a visible WhatsApp CTA inside the mobile menu.
-   Lock background scrolling while the menu is open if using a
    full-screen overlay.
-   Ensure Escape key, focus management and accessible labels.

## 7. Hero section --- highest visual priority

### Composition

-   Large rounded rectangular hero media panel.
-   Use a cinematic, high-resolution image showing rooftop solar panels,
    blue sky and optionally a solar engineer or electrical
    infrastructure.
-   Use a subtle blue/charcoal gradient overlay to protect text
    legibility.
-   Header overlays the image.
-   Text sits in the left-middle region.
-   Include two CTAs: primary lime WhatsApp button, secondary
    transparent/outlined services button.
-   Place a very large "NIS" or "NATIONAL" typographic treatment near
    the bottom as an atmospheric brand element. Keep it behind the main
    content and avoid obstructing the photograph.
-   The real logo should remain distinct from decorative oversized text.

### Suggested hero copy

Eyebrow: `SOLAR • ELECTRICAL • INFRASTRUCTURE`

Headline: **"Powering a Brighter Future with Solar Energy."**

Supporting copy:
`Reliable solar and electrical solutions for homes, businesses and infrastructure projects.`

Primary CTA: `Enquire on WhatsApp`

Secondary CTA: `Explore Our Services`

Use copy only as a draft and revise against the confirmed service scope.

### Mobile hero

-   Keep the headline within a comfortable line length.
-   Position CTA buttons vertically or allow a balanced wrap.
-   Keep the focal solar subject visible.
-   Reduce decorative oversized lettering so it does not collide with
    copy.
-   Use a sensible minimum hero height and avoid forcing the desktop
    crop.

## 8. About section --- editorial asymmetric grid

Follow the reference's white-space-rich composition.

-   Small eyebrow pill: `ABOUT NIS`.
-   Large headline with selected words in muted grey or blue.
-   Two-column layout: copy and a mosaic of images.
-   Mosaic should be asymmetrical:
    -   One large portrait/landscape image of a solar installation or
        engineer.
    -   One wide image of rooftop solar panels.
    -   One small lime statistic/statement tile.
    -   One small supporting image tile.
-   Do not use fabricated metrics in the lime tile. Use a short brand
    statement such as "Built around precision" until real metrics are
    confirmed.
-   Use rounded corners and consistent crop quality.
-   Mobile: stack the heading and copy, then convert the mosaic to a
    simple two-column grid without tiny unreadable cards.

## 9. Feature section --- "Smarter energy, clear and proven impact"

Create a balanced two-column section similar to the reference.

Left side: - Eyebrow label. - Section heading. - Short explanatory
paragraph. - Accordion list with 4--5 items, each with a plus/minus
icon. - Potential accordion topics: 1. Solar system planning. 2.
Efficient energy use. 3. Quality installation practices. 4. System
monitoring and support (if offered). 5. Long-term system care (if
offered).

Right side: - One large solar-panel or installation image. - Soft
rounded corners. - Image should feel bright, natural and premium.

Interaction: - Smooth expand/collapse. - Clear active state using a pale
lime surface or subtle border. - Use accessible buttons and
`aria-expanded`. - Avoid large animated height jumps.

## 10. Services section --- image-led cards

Section title: **"Powering a cleaner, smarter future."**

-   Eyebrow: `OUR SERVICES`.
-   Short supporting copy.
-   Horizontal row or responsive grid of image-led cards.
-   On desktop, show 3--4 cards per row depending on available width.
-   Each card uses a tall landscape/portrait crop, rounded corners,
    short service title and subtle overlay.
-   Add small arrow affordance and contextual WhatsApp enquiry action.
-   Optional horizontal carousel arrows may be used on desktop, but do
    not hide important content behind a difficult carousel.
-   Mobile: use a swipe-friendly horizontal rail only if card widths
    remain usable; otherwise stack cards.

Suggested card imagery: - Rooftop solar installation. -
Commercial/industrial solar arrays. - Electrical engineer inspecting
equipment. - Electrical infrastructure/line work, only if confirmed as
an offered service.

Avoid generic EV charging or wind turbine cards unless those are actual
NIS services. The visual reference contains broader clean-energy
imagery; the NIS website should remain truthful to its real business.

## 11. Benefits / process section

Use a spacious section with alternating content and imagery.

Possible layout: - Left: headline, short paragraph and 3--4 concise
benefit rows. - Right: a project image or a vertical sequence of process
steps. - Use simple line icons, not cartoon illustrations. - Benefits
should describe approach, not unsupported performance guarantees.

Process steps can use numbered circles with a thin connecting line: 01
Enquiry 02 Requirement discussion 03 Site review / assessment, if
applicable 04 Proposal and quotation 05 Installation and handover,
according to agreed scope

## 12. Projects / gallery

-   Use a clean editorial gallery with varied image sizes.
-   Give every image a consistent radius and carefully controlled crop.
-   Optional filter chips: All, Residential, Commercial, Industrial,
    Infrastructure. Only show categories that have real project content.
-   Project captions should be concise.
-   Use a detail modal only if there is enough genuine project
    information.
-   Never use stock photos as evidence of NIS completed work.
-   If no project photos are ready, use a clearly labelled "Illustrative
    solar applications" section or temporarily hide the gallery.

## 13. Testimonials

Follow the reference's balanced, card-based visual treatment: - Eyebrow
label. - Strong heading: "What Our Customers Say". - Short supporting
sentence. - One or more testimonial cards with generous padding and
subtle background contrast. - Optional project photo as a centre visual
element only when it is genuine and approved. - Do not generate fake
quotes, names, star ratings or profile photos. - If verified
testimonials are unavailable, hide the section until content is
provided.

## 14. FAQ section

-   White or soft neutral background.
-   Two-column desktop layout: title and contact prompt on left,
    accordion on right.
-   Number each question subtly.
-   Use plus/minus icons aligned to the right.
-   Animate open/close smoothly.
-   Keep answer text readable and concise.
-   On mobile, stack title above the accordion.
-   Include a final WhatsApp help CTA below the FAQs.

## 15. Contact section and WhatsApp conversion design

The enquiry experience should be the clearest action on the page.

Use these owner-confirmed details in the contact design:
- WhatsApp: `7498646660` (link target: `https://wa.me/917498646660`).
- Phone: `7498646660` (use `tel:7498646660`).
- Email: `prajwalnale356@gmail.com` (use `mailto:prajwalnale356@gmail.com`).
- Service areas: Pune and Yavatmal, Maharashtra.

Do not add a street address, map pin or office hours until the owner supplies verified details.

### Primary conversion block

-   Contrasting blue or deep-green panel with a short headline.
-   Example: **"Ready to explore solar for your property?"**
-   Supporting line: "Tell us a little about your requirement and
    connect with our team on WhatsApp."
-   Large lime WhatsApp CTA.
-   Secondary phone CTA using the confirmed number `7498646660`.

### Enquiry form

-   Clean, minimal form with rounded fields.
-   Name, customer type, service, location and optional message.
-   Strong focus states and inline validation.
-   Button label: `Continue on WhatsApp`.
-   Explain that the form prepares a message and the user sends it from
    WhatsApp.
-   Do not show a fake "successfully submitted" state before WhatsApp is
    opened and the visitor sends the message.

### Floating WhatsApp button

-   Fixed near the lower-right corner.
-   WhatsApp green icon or approved brand icon.
-   White/green circular or compact pill treatment.
-   Subtle shadow.
-   Small hover label on desktop: `Chat with NIS`.
-   On mobile, keep it compact and clear of bottom navigation/safe-area
    insets.
-   Add a gentle entrance only; no pulsing animation that distracts
    visitors.

### Service-specific visual and enquiry treatment

The owner-confirmed service categories are:
- Residential Rooftop Solar
- Commercial Solar
- Industrial Solar
- Electrical Infrastructure
- Solar Maintenance
- Solar Consultation
- Government Solar Schemes

Design the service cards to accommodate all seven categories without making the section crowded. Use a responsive grid or grouped card layout. Give each card its own WhatsApp enquiry action and prefilled message naming that service. Use solar rooftop, commercial/industrial installation, electrical infrastructure and maintenance imagery that accurately matches the category.

For **Government Solar Schemes**, use a neutral information/enquiry visual. Do not use government emblems, official-looking seals, subsidy badges, or claims that NIS is an authorised/empanelled vendor. Scheme details and the company's exact role are still unconfirmed.

Hybrid solar systems and detailed project installation claims are not confirmed. Do not create a dedicated Hybrid Solar card, hybrid-system badge, or specific installation-process graphic until the owner confirms those details.

## 16. Motion and interaction language

Motion should be refined and restrained: - Hero content: subtle
fade/slide on first load. - Sections: gentle reveal as they enter
viewport. - Cards: slight image scale or lift on hover. - Buttons: small
colour/arrow transition. - Accordion: smooth height and opacity. -
Header: subtle background and shadow transition on scroll. - Use
reduced-motion preferences to disable nonessential effects. - Avoid
parallax that causes mobile performance issues. - Avoid cursor-following
effects, excessive blur, spinning objects or constant animations.

Motion should never delay access to content or WhatsApp CTAs.

## 17. Photography and visual assets

Use coherent, high-quality photography: - Solar panels on Indian
residential rooftops. - Commercial and industrial solar installations. -
Solar technicians and engineers wearing appropriate safety equipment. -
Electrical infrastructure and distribution work where relevant. - Bright
daylight, natural sky tones and clean compositions.

Image rules: - Do not use competitor logos or Greenova assets. - Do not
imply stock imagery depicts NIS projects. - Prefer owner-provided
images. - Use responsive formats and lazy loading. - Apply consistent
colour grading: natural blue sky, balanced greens, neutral highlights. -
Avoid overly saturated artificial green or obviously AI-generated
technical details. - Ensure solar panel geometry and electrical
equipment look plausible.

## 18. Responsive design rules

### Desktop (1200px and above)

-   Wide content container.
-   Multi-column editorial layouts.
-   Large hero image and oversized display type.
-   Four-card service row when space permits.

### Tablet (768px--1199px)

-   Reduce section gutters and heading sizes.
-   Use two-column layouts where comfortable.
-   Avoid cramped four-column cards.
-   Keep CTAs visible.

### Mobile (below 768px)

-   Single-column flow for most sections.
-   Compact header and menu.
-   Hero image with readable overlay and stacked CTAs.
-   About mosaic becomes a simple responsive grid.
-   Service cards stack or use a touch-friendly horizontal rail.
-   Accordions full width.
-   Contact form fields full width.
-   Floating WhatsApp button stays above the safe-area inset.
-   Avoid tiny captions, clipped headings and horizontal scrolling.

Test at 360px, 390px, 430px, 768px, 1024px, 1440px and 1920px.

## 19. Accessibility and usability

-   Semantic headings in correct order.
-   Keyboard-operable menu and accordions.
-   Visible focus indicators.
-   Accessible names for icon-only buttons.
-   Sufficient colour contrast.
-   Useful alt text for meaningful images; decorative images should have
    empty alt text.
-   Do not communicate status using colour alone.
-   Respect reduced-motion settings.
-   Use large enough touch targets.
-   Forms must have labels, helpful validation and clear error messages.

## 20. Final visual quality checklist

-   [ ] The site feels close to the supplied reference in layout rhythm
    and visual sophistication.
-   [ ] NIS branding is clear and consistent.
-   [ ] Blue, white, natural green and lime accents are balanced.
-   [ ] Typography is clean and editorial.
-   [ ] Hero is visually strong and has legible text.
-   [ ] About section uses an asymmetric image mosaic.
-   [ ] Feature section has accordion + large image.
-   [ ] Service cards are image-led and truthful to NIS services.
-   [ ] Projects/testimonials contain no fabricated content.
-   [ ] FAQ layout is clean and accessible.
-   [ ] WhatsApp CTA is consistently visible and visually prominent.
-   [ ] Mobile layout is polished, not just a compressed desktop page.
-   [ ] Animations are subtle and performant.
-   [ ] No horizontal overflow, clipped content or awkward spacing.

## 21. Confirmed contact details in the design

Use the following exact information in visible contact components and relevant CTA labels:
- WhatsApp: `7498646660` — `https://wa.me/917498646660`
- Phone: `7498646660` — `tel:7498646660`
- Email: `prajwalnale356@gmail.com` — `mailto:prajwalnale356@gmail.com`
- Service areas: `Pune and Yavatmal, Maharashtra`

Keep phone and email readable in the footer and contact section. On mobile, provide tap-to-call, tap-to-email and WhatsApp actions. Do not place all three actions at equal visual prominence: WhatsApp remains the primary CTA.

## 22. Instruction to Antigravity

Use this document as the design source of truth. Build the actual
responsive website, not a static image or design-only mockup. Combine
the visual direction here with the functional, content and WhatsApp
requirements in `README.md`.

Where a design choice conflicts with accessibility, mobile usability,
truthful company information or reliable WhatsApp conversion, prioritise
usability and accuracy while preserving the overall visual language.
