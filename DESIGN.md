---
name: Datadrift
description: A studio of senior specialists, set as sheets cut from one ISO A-series proportion in warm stone field, ink, and off-white, with no colour: the action is marked by contrast.
colors:
  field: "#D8D2C6"
  ink: "#14110F"
  ink-2: "#4A4743"
  ground: "#F2F2EE"
  on-ink: "#D6D2CA"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "min(6.2cqw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "4.6cqw"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  section:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "3.2cqw"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "max(1.25rem, 2.4cqw)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  nav:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "max(0.9375rem, 1.6cqw)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  deck:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "max(0.9375rem, 1.55cqw)"
    fontWeight: 400
    lineHeight: 1.38
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "max(0.9375rem, 1.3cqw)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 3vw, 40px)"
  tile-pad: "2.2cqw 2.4cqw"
  tile-pad-mobile: "18px"
  sheet-gap: "clamp(2.5rem, 6vw, 5rem)"
  cut: "1.5px"  # declared; Chrome renders it as 1px on standard displays
components:
  button-primary:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.8em 1.3em"
  button-primary-hover:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
  button-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.8em 1.3em"
  button-closing-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
  tile:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.tile-pad}"
  tile-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    padding: "{spacing.tile-pad}"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    padding: "{spacing.tile-pad}"
  tile-ink-copy:
    textColor: "{colors.on-ink}"
    typography: "{typography.body}"
  tile-copy:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
  nav-tile:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "{spacing.tile-pad}"
  nav-tile-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
---

# Design System: Datadrift

## Overview

**Creative North Star: "One Ratio"**

Every sheet on the page is the same rectangle: an ISO A-series proportion, 1 : 1.414 (the square root of two). Fold or cut an A-series sheet in half and you get two sheets of the same shape, so the page is built by cutting sheets rather than by placing boxes. The hero is one landscape sheet cut into a spiral of unit tiles; the practices are one sheet cut into a 4 x 2 grid whose lower row is shorter (1fr / 0.7fr); how-we-work is one sheet cut 2 x 2 with a shorter upper row (0.75fr / 1fr). The ratio belongs to the sheet; the tiles inside the lower sheets are cut by stated row weights, not always into equal halves. A firm that says it builds systems that hold shows a system that holds: one proportion, repeated.

Density is dense and ruled. Tiles meet along ink cuts declared at 1.5px (rendered as 1px on standard displays), the same weight as the sheet's outer edge, with small crop marks outside the sheet corners. Color is flat and block-wise: off-white stock, a warm stone field, and near-black ink as surfaces, with no hue anywhere. The one action is marked by contrast: the black hero tile and the button set against it. Everything is square, flat, and unornamented; the only ornament is the cut line and the crop mark. The studio mark is the one drawn object: the slipped-grid logo (see Logo).

Motion is the cut: each tile is revealed top to bottom by a clip-path wipe and settles with a small overshoot, once, on viewport entry.

**Key Characteristics:**
- Sheets hold 1 : 1.414 down to 701px wide. At 700px and below the hero turns into a portrait 8 x 16 spiral (about 0.65 at 390px, measured), and below 480px it stacks as separate sheets; the stacked practice and how-we-work sheets are not A-series.
- Type size is derived from sheet width (container query units) with rem floors, so type scales with the sheet.
- Three flat surfaces (stone field, ink, off-white) separated by ink cuts (1.5px declared); no colour on the page, the action is marked by contrast.
- Hero tiles carry content: two navigation links with a one-line descriptor, two fact tiles, and the tablet and phone layouts are unchanged from the sheet ratio rules.
- One typeface (Hanken Grotesk, self-hosted, 400 and 500), lowercase headings.
- No shadows, no radii, no on-page imagery; crop marks and cuts are the only ornament, and the inline SVG logo and `favicon.svg` are the only drawn marks. The only raster is `og.png` (1200 x 630), the social preview, authored with the site's own fonts and palette (stone headline sheet, ink tile carrying the off-white logo lockup, off-white scope line); no generative image.

## Colors

A fully neutral, warm palette with no accent hue: a stone field, a warm near-black, an off-white stock, and a warm grey for secondary text.

### Neutral
- **Warm Stone Field** (`{colors.field}`): the large fields: the hero headline tile, the practices lead tile, the closing tile; also the button hover fill on the ink hero tile. Text on it is Ink (about 11:1).
- **Warm Ink** (`{colors.ink}`): headings, body text, every cut and sheet border, crop marks, the ink tiles, selection fill, the focus ring on every tile except the ink hero tile, button labels on off-white, and the closing-tile button fill.
- **Off-White Stock** (`{colors.ground}`): page ground and tile ground; text on ink tiles; the button fill on the ink hero tile (Ink label); the closing-tile button label and hover fill; the focus ring on the ink hero tile.
- **Secondary Ink** (`{colors.ink-2}`): copy on off-white tiles and the footer.
- **On-Ink Text** (`{colors.on-ink}`): paragraph copy on the ink tile in the practices sheet, a slightly softened off-white for long text on ink.

### Named Rules
**The Contrast Is The Action Rule.** There is no accent hue. The action is marked by contrast: the black hero tile and the button against it (off-white on ink, 16.7:1), and the ink button on the stone closing tile. Do not add a colour to make the action stand out.

**The Three Surfaces Rule.** Surfaces are stone field, ink, or off-white, flat and edge to edge within a tile. A new surface does not introduce another color, a tint, or a gradient.

**The Ink Tile Rule.** Ink fields are scarce: one among the seven practices, one in the hero's upper right, and one unit tile at the hero spiral's end. Add an ink tile only to mark a single distinction.

**The Ink Label Rule.** Text on the stone field and on the off-white button is always Ink, never off-white. The button inverts with its tile: off-white with Ink text on the ink hero tile, Ink with off-white text on the stone closing tile (`.end`), so it is always the highest-contrast object in its tile.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk (same family)

**Character:** One even grotesque at two weights. Headings are 500, lowercase, tightly tracked and set at a near-solid leading; copy is 400.

### Hierarchy
- **Display** (500, min(6.2cqw, 5.5rem), 0.98, -0.035em): the h1 in the stone hero tile (8.4cqw at 700px and below).
- **Headline** (500, 4.6cqw, 0.98, -0.035em): the closing statement (2rem on mobile).
- **Section** (500, 3.2cqw, 1): the practices lead heading (1.75rem on mobile).
- **Title** (500, max(1.25rem, 2.4cqw), 1.02, -0.03em): practice names; 2.6cqw for the 2 x 2 how-we-work names; 1.375rem on mobile.
- **Nav** (500, max(0.9375rem, 1.6cqw), 1, -0.02em): the two navigation tiles; the `.lbl` is underlined, followed by a 400-weight descriptor (`.desc`, max(0.875rem, 1.1cqw), 1.3, Secondary Ink, max 15em, hidden at 700px and below).
- **Deck** (400, max(0.9375rem, 1.55cqw), 1.38): the hero intro, max 30em.
- **Body** (400, max(0.9375rem, 1.3cqw), 1.45): the hero caption (max 24em) and button label; practice copy is max(1rem, 1.5cqw), how-we-work copy 1.4cqw, max 28em.
- **Fact** (500, max(0.875rem, 1.2cqw), 1.1, -0.02em): the hero fact tiles `.t5` and `.t6`; the how-we-work `.fact` line is max(1rem, 1.55cqw).
- **Label** (400, 0.875rem): footer; the header wordmark is no longer live type; it is drawn as outlines inside the logo SVG (see Logo).

### Named Rules
**The Sheet-Scaled Type Rule.** Type inside a sheet is sized in cqw (container query width) so it scales with the sheet, always with a rem floor of 0.9375rem for reading copy (1.25rem for titles). Do not size sheet type in vw.

**The Lowercase Voice Rule.** Headings, nav labels and descriptors, hero fact labels, and the drawn wordmark are lowercase; body copy and the button label keep sentence case.

**The Two Weights Rule.** Only 400 and 500 ship. Hierarchy comes from size and color, not bold or italic.

## Layout

The page is a stack of sheets inside a centered wrap (1440px max, fluid `{spacing.gutter}` side padding). A sheet's width is `--sw`: `min(100%, max((100svh - 6.5rem) * 1.41421356, 880px))`. It is the smaller of the wrap width and the width that lets a 1 : 1.414 sheet fit the viewport height less 6.5rem, but never below 880px, so tiles do not overflow on short windows; on windows shorter than about 700px tall the sheet is therefore taller than the viewport. The header and footer align to the same sheet width. Vertical rhythm between sheets is fluid (`{spacing.sheet-gap}`).

Each sheet is a CSS grid. The hero spiral has equal unit cells; the practices and how-we-work sheets use weighted rows:
- **Hero:** 16 x 8 units on a landscape sheet, cut as a spiral: an 8 x 8 stone field tile (headline and caption "For founders and product teams who need it built right the first time."), then 8 x 4 ink (deck, ending "We have worked in many startups that scaled up.", and button), 4 x 4 (`.t3` "practices"), 4 x 2 (`.t4` "how we work"), 2 x 2 (`.t5` fact "15 years of experience"), 2 x 1 (`.t6` fact "based in greece"), and two 1 x 1 end units (`.t7` empty, `.t8` ink), both aria-hidden. The two navigation tiles are links; the fact tiles are plain text (500 weight, bottom-aligned). There is no contact tile in the hero. The `span` labels of `.t5` and `.t6` are hidden between 701px and 1000px, where the tiles are too small; at 700px and below only `.t6`'s label is hidden (`.t5` keeps its label). The 1 : 1.414 proportion holds only down to 701px wide. At 700px and below the spiral is a portrait 8 x 16 grid (aspect-ratio declared 1 : 1.414; measured about 0.65 at 390px) and the nav descriptors are hidden. At 480px and below the hero stops being one sheet and stacks as separate sheets: the stone tile full width at the sheet ratio, the ink tile full width beneath it, then `.t3`, `.t4` and `.t5` in one row; `.t6`, `.t7` and `.t8` are hidden.
- **Practices:** 4 x 2 cut of seven practice tiles plus one stone lead tile, rows 1fr / 0.7fr (the lower row is shorter, so tiles are not exactly equal cuts above 1000px). At 1000px and below it becomes 2 columns, each tile holding the sheet ratio (the sheet itself no longer does); at 700px and below it becomes one joined stack of full-width tiles separated by cuts (min-height 9rem, 18px padding). The stacked practice and how-we-work sheets are not A-series.
- **How we work:** 2 x 2 cut of three practice-style tiles and a stone closing tile, rows 0.75fr / 1fr (the upper row is shorter); same tablet and mobile behavior (tiles take the sheet ratio at 1000px and below, so the tablet and phone layouts are not affected by the row weights). The first two tiles end with a bottom-pinned `.fact` line (see Tiles); the third has none.

Cuts are drawn once, by one rule: the sheet owns its top and left edges and every tile draws its right and bottom edges (one `--cut`, 1.5px declared, 1px rendered on standard displays), so each seam and the outer frame are the same weight with no per-tile overrides.

Tile padding is `{spacing.tile-pad}` (cqw-based; 12px on the hero at 700px and below, 18px on the practice stacks). Practice and how-we-work tiles are top-aligned: the title first, the copy directly beneath it (gap 0.9em, 2.5rem on mobile stacks). Lead and closing tiles differ: the lead heading sits at the tile bottom, the closing tile sets heading top and action bottom (space-between). The header bar has 0.7rem block padding with items centered; the logo link carries 0.4rem block padding around a 2.5rem-tall SVG. There is no header or footer email link. The closing tile ends with the line "Tell us what you are building: info@datadrift.gr" (the address is a link, 0.4rem block padding). The footer reads "© 2026 datadrift". Crop marks, 8px ticks at 14px outside each corner, frame each sheet and are hidden at 700px and below.

## Elevation & Depth

Flat. There are no shadows, blurs, or layered surfaces. Depth comes from field contrast (stone, ink, off-white) and from the ink cuts. The only state response is fill: nav tiles and buttons swap fills on hover, and the nav descriptor shifts from Secondary Ink to On-Ink text (`#D6D2CA`) on the ink fill. No hue shifts.

## Shapes

Square. No radii anywhere. Form language is the rectangle, the 1.414 proportion, and the cut: 1.5px declared (1px rendered on standard displays) ink between tiles and around the sheet, and 1px crop-mark ticks at the corners. Links are underlined at 1px thickness with a 0.2em offset.

## Components

### Buttons
- **Shape:** square, no border.
- **Primary (`.btn`), on the ink hero tile:** off-white fill (`{colors.ground}`), Ink 500-weight label (max(0.9375rem, 1.3cqw)), padding 0.8em 1.3em, no underline. Hover: stone field fill, Ink text, 0.2s.
- **Closing (`.end .btn`), on the stone closing tile:** inverted: Ink fill, off-white label. Hover: off-white fill, Ink text.
- **Focus:** 3px outline, 3px offset, Ink on every tile except the ink hero tile (`.t2`), where it is off-white. Nav tiles (`.nav`) are the exception to the offset: the ring is drawn inside the tile (outline-offset -8px), Ink; a hovered and focused nav tile (`.nav:hover:focus-visible`) gets an off-white ring, since the fill is then Ink. At 700px and below the hero button is block width and centered.

### Tiles
- **Plain tile:** off-white, Ink title, Secondary Ink copy, top-aligned.
- **Field tile:** stone (`{colors.field}`), Ink text: hero headline, practices lead, closing tile.
- **Ink tile:** Ink fill, off-white text, On-Ink copy in the practices sheet.
- **Fact line (`.fact`):** in the first two how-we-work tiles, a bottom-pinned (margin-top auto) Ink line, 500 weight, max(1rem, 1.55cqw), line-height 1.3, max 22em: "15 years of building and running engineering, in corporate and startup companies." and "A small senior core, with associates brought in project by project." The third tile ("built to be run") has no fact line.
- **Hero fact tiles (`.t5`, `.t6`):** "15 years of experience" and "based in greece", class `fact`, 500 weight, max(0.875rem, 1.2cqw), tracking -0.02em, bottom-aligned; the `span` labels are hidden between 701px and 1000px, and `.t6`'s also at 700px and below.
- Tiles are separated only by the Ink cuts (1.5px declared) they draw on their right and bottom edges; the sheet draws top and left.

### Navigation
The header is the logo link (left, `aria-label="Datadrift, top of page"`, SVG `aria-hidden`) alone, no menu and no email link. Inside the hero, two nav tiles (`.t3` "practices", `.t4` "how we work") stack an underlined 500-weight label (`.lbl`) over a one-line descriptor (`.desc`: "seven practices, from architecture to product"; "a small senior core, with associates as needed"), aligned to the tile bottom; hover fills the tile Ink with off-white label and On-Ink descriptor; the focus ring sits inside the tile. Contact is the two buttons (hero and closing tile) and the address line in the closing tile. A skip link appears on focus as an Ink block. The page title is "Datadrift: senior engineering studio".

### Social preview
`og.png` (1200 x 630) is referenced by `og:image`, `og:image:width`, `og:image:height` and `twitter:card` `summary_large_image`. Its composition reuses the sheet language: a stone headline sheet, an ink tile carrying the logo lockup in off-white (stone centre cell kept), and an off-white scope line. Regenerated from the lockup in `brand/`; it is not an on-page image.

### Favicon
`favicon.svg` (linked as `image/svg+xml`, replacing the earlier data-URI): an off-white square (`{colors.ground}`) holding the Ink grid mark with the Stone centre cell (`{colors.field}`), the mark only, no wordmark.

### Logo
The "slipped grid" lockup, inline SVG in the header (`.mark svg`, 2.5rem tall, width auto, viewBox 730 x 250, `aria-hidden`; the link supplies the accessible name). A 3 x 3 grid of 64-unit squares with 12-unit gaps in Ink (`currentColor`), whose right column is shifted down 34 units; the centre cell is Stone (`#D8D2C6`). Beside it, the lowercase wordmark "datadrift" is drawn as outlines from Hanken Grotesk 500 at 0.8 x 150 units, so it does not depend on the font loading. The grid is the sheet idea in miniature: cells cut from one unit, one column drifted. Sources: `brand/logo-datadrift.svg`; ten explored alternatives in `brand/logo-alternatives/` (PNG and SVG), kept as reference, not for use on the page. The mark inherits Ink via `.mark` colour; it is not otherwise themed.

### Sheet
The signature component: a 1 : 1.414 rectangle with crop marks, cut into unit tiles by a grid (equal in the hero spiral, weighted rows in the lower sheets); the sheet draws top and left cuts, tiles draw right and bottom. Any new section is a sheet cut by a stated ratio (for example 4 x 2 or 2 x 2), not a free-form layout.

### Motion
Tiles enter once, when their sheet is 20% visible: a clip-path cut from the top (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`), settling with a slight overshoot. The clip ends at `inset(-8px)`, not `inset(0)`, so outlines (inside-drawn focus rings and edges) are not clipped after the entrance, staggered 110ms per tile in source order. With reduced motion or no IntersectionObserver, all tiles render static in their final state.

## Do's and Don'ts

### Do:
- **Do** keep every new sheet at 1 : 1.414 while it is a sheet (701px wide and up) and cut it into stated units (the hero spiral, 4 x 2, 2 x 2); row weights may differ (practices 1fr / 0.7fr, how-we-work 0.75fr / 1fr) while the outer sheet stays 1 : 1.414.
- **Do** size sheet type in cqw with a rem floor, and fall back to rem on mobile stacks.
- **Do** draw cuts as 1.5px Ink right and bottom borders on tiles, with the sheet owning top and left.
- **Do** keep Ink as the text color on stone and off-white, and off-white as the text color on Ink.
- **Do** mark the action by contrast (off-white button on the ink tile, ink button on the stone tile), and keep the focus ring Ink except on the ink hero tile, where it is off-white.
- **Do** use the logo only as built: Ink (`currentColor`) grid with the Stone centre cell (`#D8D2C6`), on off-white or stone; on the ink tile (social preview) the lockup is off-white with the stone centre cell. Keep clear space of one grid cell (64 units) on every side, and never render it shorter than the built 2.5rem header height.
- **Do** play the cut-in once and keep a static fallback for reduced motion.

### Don't:
- **Don't** add shadows, radii, gradients, or on-page imagery.
- **Don't** add another surface color, tint, or a second typeface, or a third weight.
- **Don't** introduce any hue or accent colour; the page is neutral, and the action is marked by contrast, not colour.
- **Don't** recolour the logo beyond Ink / off-white with the Stone centre cell, retype the wordmark in live text, or restyle, stretch, outline or shadow it; do not invent client logos or proof (metrics, testimonials); none exists.
- **Don't** distort the sheet ratio to fit a layout above 700px; below that, the hero turns portrait and the lower sheets stack, and the stack is not claimed to be A-series.

### Not canonized
Observed in the build and not recorded as rules: the hero's two smallest tiles (`.t7`, `.t8`) are empty, aria-hidden spiral units hidden at 480px and below; the logo's Stone centre cell (`#D8D2C6`) and `favicon.svg`/`og.png` colours are hard-coded in the SVG sources, and the minimum logo height is the built 2.5rem rather than a tested floor; the declared `--cut` of 1.5px renders as 1px in Chrome on standard displays, so the "same weight" claim holds only in declared value; the portrait hero measures about 0.65 rather than the declared 0.707 at 390px; the On-Ink color `#D6D2CA` is hard-coded in the stylesheet (copy on the practices ink tile and the hovered nav descriptor) rather than drawn from a custom property, and `--on-ink` is a token here but only `--field`, `--ink`, `--ink-2` and `--ground` exist in the CSS root; the unequal row weights (0.7fr, 0.75fr) are recorded as built layout, not as a license to break the ratio elsewhere; `.t5`'s label stays visible at 700px and below while `.t6`'s is hidden, and both are hidden at 701 to 1000px, a pragmatic fit to tile size rather than a rule; the `.t5`/`.t6` `fact` class carries no styles of its own (the how-we-work `.fact` rule is scoped to `.cut4`).
