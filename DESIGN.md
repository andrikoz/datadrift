---
name: Datadrift
description: A monochrome studio page that is simply there: black, white, Geist, one framed live diagram of a system holding under failure, everything held in a strict grid.
colors:
  ground: "#F4F4F4"
  white: "#FFFFFF"
  ink: "#0A0A0A"
  mid: "#5F5F5F"
  mid-on-ink: "#A8A8A8"
  line: "rgba(10, 10, 10, 0.2)"
  line-on-ink: "rgba(255, 255, 255, 0.2)"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 9.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 3vw, 40px)"
  row-inset: "clamp(10px, 1.4vw, 20px)"
  row-pad: "1.6rem"
  section: "clamp(3rem, 7vw, 6rem)"
  wrap-max: "1440px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.4em"
  button-ink-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.4em"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  button-paper:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.4em"
  button-paper-hover:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
  system-frame:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mid}"
    rounded: "{rounded.none}"
  row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1.6rem clamp(10px, 1.4vw, 20px)"
  row-hover:
    backgroundColor: "{colors.white}"
  row-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  header:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "0.6rem 0"
  close:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    padding: "clamp(5rem, 12vw, 10rem) 0 1.5rem"
---

# Design System: Datadrift

## Overview

**Creative North Star: "The System Holding"**

Datadrift is black and white and nothing else. There is no loader: the page is simply present. The hero mark spins in, the headline and mono subline scramble through glyph noise into place, and below the hero a light framed panel draws a small service architecture on a dot grid: requests flow through it, one replica goes down, traffic reroutes, it recovers. After that the page is held: a strict 12-column grid, 1px rules, square corners. The only thing allowed to slip is the logo, so slippage reads as the brand's single idea rather than a texture.

Display type is Geist set uppercase and tight; labels and buttons are Geist Mono uppercase. Depth is carried by inversion (ground to ink and back), never by shadow, gradient or hue. The system is recognizable with the copy removed: ruled rows, one framed system diagram, a grid of squares with a column out of line.

**Key Characteristics:**
- Strictly monochrome: ground, white, ink, two greys. No accent hue.
- Uppercase, tightly tracked Geist display; uppercase Geist Mono for every label and button.
- Square corners everywhere; structure from 1px hairlines.
- Inversion for emphasis: one black row, black close section, and the momentary ink inversion of a node inside the pale diagram.
- No loader; one authored motion (a diagram of a service failing over and recovering) that loops quietly on a 12s cycle.

## Colors

A two-surface palette (light ground, near-black ink) with white as the highest-contrast value on ink and as a hover wash on ground. Greys exist only to demote secondary text.

### Primary
- **Ink** (`ink`, #0A0A0A): text, solid buttons, borders, focus rings, node borders, packets and status text in the system frame, the dark row and the close section.

### Neutral
- **Ground** (`ground`, #F4F4F4): page background, header, text on ink buttons, the logo's cut-out cell, the system frame ground.
- **White** (`white`, #FFFFFF): text on ink surfaces, the paper button, the row hover wash, node fills in the system frame.
- **Mid** (`mid`, #5F5F5F): secondary copy on ground (sub line, captions, paragraphs, the system frame bar and its ILLUSTRATION label).
- **Mid on Ink** (`mid-on-ink`, #A8A8A8): secondary copy on ink (address, footer, dark-row paragraph).
- **Hairline** (`line`, rgba(10,10,10,0.2)): rules on ground: header border, row rules, three-column dividers, the system frame border and bar rule.
- **Hairline on Ink** (`line-on-ink`, rgba(255,255,255,0.2)): rules on ink: the footer border.

### System Frame Canvas Values (canvas only)
The diagram uses only existing tokens drawn at alpha: ink at 13% (dot grid), 55% (live lines), 30% (dashed lines of the down node), 28% (hatch), plus white, ink and `mid` (#5F5F5F). These live inside the canvas script, not as page tokens; they are not a licence for new greys or alpha colours in CSS.

### Named Rules
**The No Hue Rule.** No colour enters the system. Emphasis is made by inverting a surface or changing weight, never by an accent.

**The Two Greys Rule.** Secondary text is `mid` on ground and `mid-on-ink` on ink. Do not introduce a third grey; do not use `mid` on ink.

## Typography

**Display Font:** Geist (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo, monospace)

**Character:** Geist is neutral and engineered; set uppercase at negative tracking it becomes severe and compact. Geist Mono carries the machine voice for anything that acts or labels. Self-hosted woff2 (400, 500 for Geist; 400, 500 for Mono), `font-display: swap`.

### Hierarchy
- **Display** (500, clamp(2.25rem, 9.2vw, 6rem), 0.92, -0.04em, uppercase): the hero h1 and the close heading (which scales to 2.5rem-6rem).
- **Headline** (500, clamp(2rem, 5.2vw, 4.25rem), 0.95, -0.035em, uppercase): section h2, balanced wrap, max 14em.
- **Title** (500, clamp(1.25rem, 2.2vw, 1.875rem), 1, -0.035em, uppercase): row and column h3.
- **Statement** (500, clamp(1.5rem, 3.4vw, 2.75rem), 1.2, -0.025em, sentence case): the single large about paragraph, max 24em, balanced.
- **Body** (400, clamp(1rem, 1.25vw, 1.125rem), 1.5, `mid`): row and column paragraphs, max 26-34em. The small intro and caption run 0.9375rem-1.25rem.
- **Label** (Geist Mono 500, 0.8125rem, 0.02em, uppercase): buttons and nav links. The sub line scales clamp(0.875rem, 1.6vw, 1.25rem); the system frame bar and footer are 0.75rem; canvas node labels are Geist Mono 400 at 10-11px, drawn in the canvas only.

### Named Rules
**The Case Split Rule.** Headings are uppercase Geist; prose is sentence-case Geist; anything clickable or label-like is uppercase Geist Mono. Do not mix the roles.

**The Tight Display Rule.** Display sizes always carry negative tracking (-0.025em to -0.04em) and line-height at or below 1.2.

## Layout

A centred wrap (max 1440px) with a fluid gutter of clamp(16px, 3vw, 40px). The hero is a centred column; everything after it is left-aligned on a 12-column grid. Practice rows put the title in columns 1-5 and copy in 6-12; the how-we-work block is three equal ruled columns. Section padding is fluid, roughly clamp(3rem, 7vw, 6rem), growing to clamp(5rem, 12vw, 10rem) above the close. Rows use 1.6rem vertical padding with a fluid inset (10px-20px) so hover washes have breathing room.

Responsive: at 900px rows collapse to one column and the three columns stack with top rules. At 640px nav links hide (the contact button stays), the system canvas changes aspect from 2.6:1 to 0.85:1 (and the script turns the flow vertical when the canvas is under 560px wide), and buttons go full width. Coarse pointers get taller buttons and links.

## Elevation & Depth

Flat. There are no shadows, gradients or blurs. Depth is made by tonal inversion (ground to ink) and by hairlines. The build contains no box-shadows at all.

### Named Rules
**The Flat Always Rule.** Surfaces never lift. Hover is a fill change, not a shadow.

## Shapes

Square. Radius is 0 on buttons, the system frame, nodes, rows and logo cells. Form is built from 1px hairlines and filled rectangles. The logo is a 3x3 grid of squares with a cut-out centre and its right column slipped down; the diagram's nodes, packets and status marker are plain squares, with no slipped geometry.

## Components

### Buttons
- **Shape:** square, 1px ink border, Geist Mono 500 uppercase 0.8125rem, padding 0.95em 1.4em (taller on coarse pointers).
- **Ink (primary):** ink fill, ground text; hover inverts to transparent with ink text. Used for the nav contact and the hero action.
- **Line (secondary):** transparent, ink text; hover fills ink.
- **Paper (on ink):** white fill, ink text; hover goes transparent with white text. Used only in the close section.
- **Press:** `translateY(1px)`. Transitions 0.2s on background and colour.
- **Focus:** 2px ink outline, 3px offset (white on ink surfaces).

### Header
Sticky, ground background, 1px hairline below. Logo lockup left (2.25rem high, 2rem on mobile), mono nav links right with an underline that draws in on hover (0.3s) and the ink contact button. Hovering or focusing the mark replays the right-column slip.

### Ruled Rows
A list with a 1px hairline above each row and one below the last. Title left, mid-grey copy right. Hover washes the row white. One row (agentic development) is permanently ink with white text, as a single inverted emphasis in the list; its top rule is drawn ink so it merges with the fill.

### Three Ruled Columns
Three articles divided by 1px vertical hairlines under a 1px top rule; each ends with a short ink 500-weight fact pinned to the bottom (min-height 22rem on desktop).

### System Frame (signature)
A light framed panel: 1px `line` border, ground fill, no radius (`.frame`). Inside, a canvas (`.sys`, aspect 2.6:1, 0.85:1 under 640px) draws a live, synthetic diagram of a service architecture holding under failure. Faint 24px dot grid (ink at 13%) on the ground. Eight square nodes (CLIENT, EDGE, API A, API B, QUEUE, WORKER A, WORKER B, DATABASE), white fill, 1px ink border, Geist Mono 400 uppercase 11px (10px on narrow), 118x34 (92x28 narrow). Elbow connector lines 1px at 55% ink. Request packets are 7px ink squares with a 1px white keyline; a node inverts to ink fill with white label for 160ms when a packet arrives. Status line top-left: a 9px square, filled when healthy and hollow when down, followed by mono text (ALL SERVICES HEALTHY, API B DOWN. TRAFFIC REROUTED, API B RECOVERED). A `mid` "ILLUSTRATION" label sits bottom-right: the diagram is synthetic and says so.

Motion: nodes appear left to right (scale 0.85 to 1 with fade, 400ms each) and connector lines draw in behind them from 1.5s (the panel's own start delay); packet flow begins at about 3.2s, one request every 650-1000ms from client to database at 190px/s. Every 12s API B goes down for 4s (hatched ink-at-28% fill, dashed border, dashed lines at 30% ink, `mid` label), in-flight packets on it are dropped, new traffic routes through API A, then it recovers and the status reads RECOVERED until the cycle returns to healthy. Rendering runs at about 30fps and pauses when the canvas is offscreen. Under 560px canvas width the flow turns vertical (client top, database bottom) and packets slow to 110px/s. The canvas carries a role="img" description of the whole sequence. Under `prefers-reduced-motion` it draws one static healthy diagram with no loop. Below the canvas, a mono status bar (0.75rem uppercase, `mid`, 1px `line` top rule) holds two facts, "15 years of experience" left and "based in greece" right.

### Close Section
Full-bleed ink with white text. Display heading in three lines, a left-aligned paper button, the contact address in `mid-on-ink` with a white link, and a right-aligned mono footer over a 20% white hairline.

### Page Entry Motion
There is no loader or overlay; the page is present on arrival, and `main` fades in with a 6px rise (0.5s, ease-out). The hero staging copies factory.com's own sequence, driven by `script.js` while `html.pre` holds the hero parts at opacity 0 (cleared by the script, with a 5s failsafe). The hero mark spins in from -540deg to 0 over 1.6s, ease-out quart `cubic-bezier(0.165, 0.84, 0.44, 1)`, fading in over 0.5s. The h1 (two lines) is split into letters that scramble through the glyph noise `0123456789!<>-_/[]{}=+*^?#%&$@|~;:` left to right: 20ms stagger, 340ms per letter, the face alternating Geist Mono and Geist on every 40ms tick, the last 28% of each letter showing the real character. Line two starts after half of line one's letters. The mono subline scrambles from 0.9s (12ms stagger, 300ms per letter, 34ms tick). The buttons, the caption and the framed system panel fade in together at 1.25s (0.6s, ease-out), and the diagram starts drawing at about 1.5s. The h1 keeps its full text as an `aria-label`. Hovering or focusing the header mark still replays the right-column slip (0.7s). Easing for scroll arrival and the slip is `cubic-bezier(0.16, 1, 0.3, 1)`; the hero staging uses the ease-out curves named above.

### Scroll Arrival
Ruled lines draw in (scaleX, 1.1s, 70ms stagger), three-column borders fade in, and the close heading lines rise through masks (0.9s, 90ms stagger; the only remaining use of mask-rise), each when its section reaches 15% visibility.

### Reduced Motion
With `prefers-reduced-motion: reduce` there is no hero staging (no spin, scramble, fades or page rise), everything is settled and visible, there are no rise, slip or line-draw animations, no smooth scroll, and sections are marked arrived immediately. Without JavaScript nothing is hidden either: the `pre` hold is only ever set by script. The system frame draws a single static healthy diagram and runs no loop.

## Do's and Don'ts

### Do:
- **Do** use only `ink`, `ground`, `white`, `mid` and `mid-on-ink`; make emphasis by inversion.
- **Do** keep corners square and structure at 1px hairlines.
- **Do** set headings uppercase Geist 500 with negative tracking; set buttons and labels in uppercase Geist Mono.
- **Do** keep one slip per surface: the logo is the only slipped thing.
- **Do** keep reduced-motion users on the final composed state with nothing hidden.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for scroll arrival and settle motion; the hero staging keeps its own ease-out curves.

### Don't:
- **Don't** add an accent hue, gradient, shadow, blur or rounded corner.
- **Don't** introduce cards; use ruled rows and ruled columns.
- **Don't** use `mid` text on ink or `mid-on-ink` on ground.
- **Don't** add a loader, intro overlay or any motion that blocks interaction; the page is present on arrival.

### Known drift (recorded, not canonized)
- The surface brief quotes mid as #6B6B6B and hairlines at ink 14%; the build uses #5F5F5F and 20%. The build is recorded here.
- Hairlines are stored as hard-coded rgba values in `:root`, not as ground/ink derivations; they should be treated as two fixed tokens, not a pattern for new alpha colours.
- The detector's overused-font notice for Geist is a deliberate choice for this world, not an oversight.
- Mono uppercase lines under the hero ("by senior specialists") and the system frame bar are tolerated by this build as page-specific copy lines; they are not a license for new kicker or eyebrow labels above headings.
