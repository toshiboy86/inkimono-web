# MUI → shadcn/ui + Tailwind Migration Plan

## Context

The app currently uses MUI v5 + Emotion as its component and styling system. The goal is to remove all `@mui/*` and `@emotion/*` packages and replace them with plain HTML + Tailwind CSS classes, using shadcn/ui components only where complex interactive behavior is needed (accordion, dialog, collapsible, sheet). This aligns with the CLAUDE.md direction of a modern, minimal Japanese-inspired design and removes heavy runtime CSS-in-JS overhead (~400KB+).

## Pre-conditions (Already in Place)

- Tailwind CSS configured with OKLCH `accent-*` and `neutral-*` scales (`tailwind.config.js`)
- `cn()` utility at `lib/utils.ts`
- Manual `components/ui/card.tsx` shadcn-style card primitives
- Installed in node_modules (not yet in package.json): `lucide-react`, `class-variance-authority`, `tailwindcss-animate`, `@radix-ui/react-slot`
- **No** `components.json` — shadcn CLI init required
- **No** Radix UI primitives for accordion/dialog/collapsible/sheet — must be installed

---

## Phase 0: Setup (Before Any File Edits)

### 0.1 Initialize shadcn/ui
```bash
bunx shadcn@latest init
```
Prompts: Default style, Neutral base, CSS variables yes, paths as existing. After init, review the added `:root` block in `styles/globals.css` — remove any color overrides that conflict with the existing OKLCH system (our custom `accent-*`/`neutral-*` tokens take precedence).

### 0.2 Install shadcn components
```bash
bunx shadcn@latest add accordion button collapsible dialog sheet
```
Generates: `components/ui/accordion.tsx`, `components/ui/button.tsx`, `components/ui/collapsible.tsx`, `components/ui/dialog.tsx`, `components/ui/sheet.tsx`

### 0.3 Add runtime packages to package.json
```bash
bun add lucide-react class-variance-authority clsx tailwindcss-animate
bun add @radix-ui/react-slot
```
These are already in node_modules but not declared as dependencies.

---

## Phase 1: Remove ThemeProvider

### Files Modified
- `app/[lang]/layout.tsx` — remove `CreateTheme` import and wrapper; move `globals.css` import here
- `app/[lang]/createTheme.tsx` — **delete**

**New layout.tsx structure:**
```tsx
import '../../styles/globals.css';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';

export default async function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <ResponsiveAppBar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
```

---

## Phase 2: Leaf Components

### 2.1 `components/ui/InstagramButton.tsx`
- Remove: `IconButton` (@mui/material), `InstagramIcon` (@mui/icons-material)
- Replace with: `<a>` tag + Tailwind, inline Instagram SVG path
- Change prop: `sx` → `className`
- Update callsites: `ResponsiveAppBar.tsx`, `Footer.tsx` (remove `sx={{...}}`)

### 2.2 `components/MapCard.tsx`
- Remove: `CardMedia` (@mui/material)
- Replace with: plain `<iframe>` + Tailwind classes

### 2.3 `components/TopImage.tsx`
- Remove: `Box`, `Container`, `Typography`
- Replace with: semantic `<div>` hierarchy + Tailwind
- Background image stays as inline `style={{ backgroundImage: ... }}` (runtime value)
- Dark overlay: `<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />`

### 2.4 `components/Typography/Article.tsx`
- Remove: `Box`, `Grid`
- Replace with: CSS Grid (`grid grid-cols-1 md:grid-cols-12 gap-8`)
- `order={{ xs:2, md:1 }}` → `order-2 md:order-1`

### 2.5 Delete dead code
- `components/ImageModal.tsx` — not imported anywhere
- `components/Typography/Typography.tsx` — not imported anywhere
- `theme.ts` (root) — not imported anywhere

---

## Phase 3: Card Components

### 3.1 `components/LocationCard.tsx`
- Remove: `Card`, `CardHeader`, `CardMedia`, `CardContent`, `Box`, `IconButton`, `Typography`, `CalendarMonthIcon`, `styled()`
- Replace with: shadcn `Card`/`CardHeader`/`CardTitle`/`CardContent` from `components/ui/card.tsx`, lucide `Calendar`
- Remove unused `expanded` state and `handleExpandClick` (dead code)

### 3.2 `components/ServiceDetails.tsx`
- Remove: `CardActions`, `Collapse`, `Box`, `Button`, `IconButton`, `Typography`, `styled()`, `ExpandMoreIcon`, `PortraitIcon`
- Replace with: shadcn `Collapsible`/`CollapsibleTrigger`/`CollapsibleContent`, shadcn `Button`, lucide `ChevronDown` + `User`
- **Critical**: Wrap both `CollapsibleTrigger` and `CollapsibleContent` inside a single `<Collapsible>` context (MUI's `Collapse` was separate from the trigger)
- Chevron rotation: `className={cn('transition-transform duration-200', isExpanded && 'rotate-180')}`

### 3.3 `components/ServiceCard.tsx`
- Remove: `Card`, `CardHeader`, `CardMedia`, `CardContent`, `Box`, `Typography`, `CalendarMonthIcon`
- Replace with: shadcn Card primitives, lucide `Calendar`
- **Fix existing bug**: Component is both `'use client'` AND `async` — remove `'use client'`; also remove unused `useState(false)` and `handleExpandClick`

---

## Phase 4: Navigation

### 4.1 `components/ResponsiveAppBar.tsx`
- Remove: `AppBar`, `Box`, `Toolbar`, `IconButton`, `Typography`, `Menu`, `MenuItem`, `Button`, `Container`, `MenuIcon`
- Replace with:
  - Outer: `<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">`
  - Mobile: shadcn `Sheet`/`SheetContent`/`SheetTrigger` (off-canvas drawer), lucide `Menu` icon
  - Desktop: `<nav data-testid="main-nav">` with `<Link>` elements + Tailwind
  - Language button stays as styled `<Link>` with accent background
- **Add** `data-testid="main-nav"` to desktop nav (required for e2e test fix)

---

## Phase 5: Remaining Components

### 5.1 `components/TopHeader.tsx`
- Same pattern as `TopImage.tsx`: `<div>` + Tailwind + overlay `<div>`

### 5.2 `components/TopIntroduction.tsx`
- Remove: `Box`, `Typography`, `Grid`, `Button`
- Replace Grid with `grid grid-cols-1 md:grid-cols-12 gap-8`
- CTA becomes `<Link className="inline-flex...bg-accent-500...">`
- Rich text wrapper: use `[&_p]:mb-4` Tailwind arbitrary variant for Contentful output

### 5.3 `components/Inquiry.tsx`
- Remove: `Container`, `Box`, `Typography`, `Button`
- Replace with div + Tailwind glassmorphism pattern

### 5.4 `components/ImageGrid.tsx`
- Remove: `Grid` (with `GridTypeMap` type), `Box`, `Modal`
- Replace with: CSS Grid, shadcn `Dialog`/`DialogContent`
- **Change prop API** (two changes):
  - `props?: GridTypeMap['props']` → `className?: string`
  - Per `architecture-avoid-boolean-props`: split `isModal` boolean into two explicit components — `ImageGrid` (plain grid, no lightbox) and `ModalImageGrid` (extends `ImageGrid`, adds Dialog). Update the 3 callsites accordingly.
- Callers change `props={{ sx: { backgroundColor: 'oklch(21.8% 0.014 210)' } }}` → `className="bg-neutral-900"`
- Update `DialogOverlay` in `components/ui/dialog.tsx` to add `backdrop-blur-sm`

### 5.5 `components/Footer.tsx`
- Remove: `Box`, `Stack`, `Paper`, `styled()`
- Replace: `<footer>` with Tailwind, link grid via `flex flex-wrap gap-8 justify-center`
- Remove JS hover handlers (`onMouseEnter`/`onMouseLeave`) → CSS `hover:text-accent-500`
- Per `rendering-hoist-jsx`: hoist the `footerLinks` array outside the component function

---

## Phase 6: Page Files

All pages follow the same mechanical pattern: remove MUI layout primitives, replace with HTML + Tailwind. All are server components.

| File | Key MUI Removed | Key Replacement Pattern |
|------|----------------|------------------------|
| `app/[lang]/home-page.tsx` | `Box`, `Container`, `Typography`, `Button` | `<main>`, `<div className="max-w-5xl mx-auto px-6">`, `<h2>`, `<Link>` |
| `app/[lang]/faq/faq-page.tsx` | `Accordion`, `AccordionSummary`, `AccordionDetails`, `ExpandMoreIcon` | shadcn `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent` with `type="single" collapsible` |
| `app/[lang]/inquiry/inquiry-page.tsx` | `Container`, `Box`, `Typography`, `Button`, `EmailRoundedIcon`, `ContentCopyIcon` | Tailwind layout, lucide `Mail` + `Copy` |
| `app/[lang]/service/service-page.tsx` | `Container`, `Grid`, `Typography`, `Box`, `CardContent` | CSS Grid, semantic HTML |
| `app/[lang]/workshop/workshop-page.tsx` | `Box`, `Container`, `Typography`, `Button`, `Grid` | CSS Grid, outlined + filled `<Link>` CTAs |
| `app/[lang]/location/location-page.tsx` | `Box`, `Container`, `Grid`, `Typography` | `grid grid-cols-1 md:grid-cols-2 gap-8` |
| `app/[lang]/portfolio/portfolio-page.tsx` | `Container`, `Box`, `Typography` | `<main>`, semantic HTML |

---

## Phase 7: Package Cleanup

After all files compile without MUI imports:
```bash
bun remove @emotion/react @emotion/styled @mui/material @mui/icons-material
```

---

## Phase 8: E2E Test Updates (`e2e/index.spec.ts`)

After migration, navigation elements become `<a>` (role="link"), not `<button>`. Update all affected tests:

| Line | Current | After |
|------|---------|-------|
| 86 | `page.locator('.css-zgx43k')` | `page.locator('[data-testid="main-nav"]')` |
| 90 | `getByRole('button', { name })` | `getByRole('link', { name })` |
| 32 | `getByRole('button', { name: 'View Plans & Pricing' })` | `getByRole('link', { name: 'View Plans & Pricing' })` |
| 41 | `getByRole('button', { name: 'See Portfolio' })` | `getByRole('link', { name: 'See Portfolio' })` |
| 50 | `getByRole('button', { name: 'View Plans & Pricing' }).nth(1)` | `getByRole('link', { name: 'View Plans & Pricing' }).nth(1)` |
| 60 | `getByRole('button', { name: 'Inquiry' })` | `getByRole('link', { name: 'Inquiry' })` |

---

## Icon Mapping

| MUI Icon | lucide-react |
|----------|-------------|
| `MenuIcon` | `Menu` |
| `ExpandMoreIcon` | `ChevronDown` |
| `EmailRoundedIcon` | `Mail` |
| `ContentCopyIcon` | `Copy` |
| `CalendarMonthIcon` | `Calendar` |
| `PortraitIcon` | `User` |
| `InstagramIcon` | Inline SVG (not in lucide-react) |

---

## Execution Order

```
Phase 0  (shadcn init + installs)
    ↓
Phase 1  (layout.tsx + delete createTheme.tsx)
    ↓
Phase 2  (leaf components: InstagramButton, MapCard, TopImage, Article)
Phase 2.5 (delete dead files)
    ↓
Phase 3.1 (LocationCard)
Phase 3.2 (ServiceDetails)     ← depends on Phase 2 icons
Phase 3.3 (ServiceCard)        ← depends on Phase 3.2
    ↓
Phase 4  (ResponsiveAppBar)    ← depends on InstagramButton
Phase 5.1 (TopHeader)
Phase 5.2 (TopIntroduction)    ← depends on Article, MapCard
Phase 5.3 (Inquiry)
Phase 5.4 (ImageGrid)
Phase 5.5 (Footer)             ← depends on InstagramButton
    ↓
Phase 6  (all page files)      ← depend on all components
    ↓
Phase 7  (bun remove MUI/emotion — only after build passes)
Phase 8  (e2e test fixes)
```

---

## Critical Files

| File | Change |
|------|--------|
| `app/[lang]/layout.tsx` | Remove CreateTheme wrapper |
| `app/[lang]/createTheme.tsx` | Delete |
| `components/ResponsiveAppBar.tsx` | Most complex migration; Sheet + data-testid |
| `components/ServiceDetails.tsx` | Collapsible restructuring (single context wrapper) |
| `components/ImageGrid.tsx` | Prop API change + split into two components; update 3 callsites |
| `e2e/index.spec.ts` | Fix all button→link role selectors + css class selector |
| `components/ui/dialog.tsx` | Add `backdrop-blur-sm` to overlay |
| `package.json` | Add runtime packages, remove MUI/emotion |

---

## Constraints from Local Skills (`.agents/skills/`)

### vercel-react-best-practices

| Rule | Impact on Migration |
|------|-------------------|
| `bundle-barrel-imports` | Import shadcn components directly — never through a barrel file (e.g., `from '@/components/ui/accordion'`, not `from '@/components/ui'`) |
| `bundle-dynamic-imports` | Keep `MapCard` (Google Maps iframe) wrapped in `next/dynamic({ ssr: false })` — already done in `TopIntroduction` |
| `async-parallel` | Page-level data fetches should use `Promise.all()` for independent Contentful queries |
| `server-parallel-fetching` | Restructure pages so independent data fetches happen in parallel, not serial |
| `server-dedup-props` | Don't pass duplicate/redundant props through RSC → client component boundaries |
| `rendering-conditional-render` | Use ternary (`a ? b : c`), not `&&` (`a && b`) to avoid 0-renders |
| `rendering-hoist-jsx` | Extract static JSX arrays (e.g., the `pages` nav list, `footerLinks`) outside component functions |

### vercel-composition-patterns

| Rule | Impact on Migration |
|------|-------------------|
| `architecture-avoid-boolean-props` | `ImageGrid`'s `isModal?: boolean` prop becomes two explicit components: `ImageGrid` (plain) and `ModalImageGrid` (with lightbox) |
| `patterns-explicit-variants` | CTA buttons have two variants (filled vs outlined) — create a shared `ctaLink` utility class rather than copy-pasting Tailwind strings |
| `patterns-children-over-render-props` | `Article` layout wrapper already uses `children` for the text slot — keep this pattern |

### web-design-guidelines
Invoke after implementation to audit the migrated components for accessibility and UX compliance against Vercel's Web Interface Guidelines.

---

## Verification

1. **TypeScript check after each phase**: `bun run build` — catches type errors and `'use client'`+`async` conflicts
2. **Dev server visual check**: `bun dev` — verify each page visually (nav, footer, cards, modals, accordion)
3. **Unit tests**: `bun unit:test` — should pass unchanged (tests utils, not components)
4. **E2E tests**: `bun e2e:test` — must pass after Phase 8 fixes
5. **Bundle analysis**: `bun run build:analyze` — confirm MUI/emotion no longer in bundle
6. **UI audit**: invoke `web-design-guidelines` skill on migrated components
