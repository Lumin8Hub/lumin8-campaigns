

# Strategy Update Plan

## Summary of Changes

Six updates: delete NonWinnersSection, update process/pricing/FAQ data files, update Hero text, update ContestSection, and adapt PricingSection + ProcessSection components to new data shapes.

## Technical Details

### 1. Delete `src/components/NonWinnersSection.tsx`
Remove the file entirely. Remove its import and usage from `src/pages/Index.tsx`.

### 2. Update `src/data/process.ts`
Replace with the provided 5-step, 7-day sprint data. Note: new shape uses `id`, `title`, `description`, `icon` (Lucide components) — no more `step`, `color`, `timeline` fields.

### 3. Update `src/components/ProcessSection.tsx`
Adapt to new data shape:
- Remove `colorMap` (no longer needed)
- Use `step.id` as key, `step.icon` as the icon in the circle
- Update headline from "18 days" to "7 days"
- Update subtitle to mention client accountability
- Render icon components instead of step numbers

### 4. Update `src/data/pricing.ts`
Replace with provided `pricingTiers` export. New shape: `name`, `price` (string), `description`, `features`, `isPopular` — no `highlighted`, `badge`, `tagline`, `cta`.

### 5. Update `src/components/PricingSection.tsx`
Adapt to new data shape:
- Import `pricingTiers` instead of `pricingPackages`
- Use `pkg.isPopular` instead of `pkg.highlighted`
- Use `pkg.description` instead of `pkg.tagline`
- Use generic CTA text (e.g., "Get Started →") instead of `pkg.cta`
- Show "MOST POPULAR" badge when `isPopular` is true
- Remove the Brand Starter Kit banner at the bottom (references old $1,400 bundle)

### 6. Update `src/components/Hero.tsx`
- Change "$500 CAD" → "$750 CAD"
- Change "valued at $1,400" → "valued at $750"

### 7. Update `src/components/ContestSection.tsx`
- Headlines: "Win a custom Starter Website." / "Valued at $750 CAD."
- Audience copy: "one deserving small business or community organization"
- Prize items: only Starter-relevant features (Custom React Landing Page, Mobile-Responsive Design, Basic SEO Setup, Contact Form Integration)
- Delete the "Not the winner?" paragraph at the bottom

### 8. Update `src/data/faq.ts`
Replace with provided `faqs` export (note: export name changes from `faqItems` to `faqs`).

### 9. Update `src/components/FAQSection.tsx`
Change import from `faqItems` to `faqs` to match new export name.

