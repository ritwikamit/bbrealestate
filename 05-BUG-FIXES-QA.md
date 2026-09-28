# Baba Baidyanath Real Estate --- Bug Fixes, QA & Maintenance

## Severity

### P0

Website unavailable, security breach, data loss, critical outage.

### P1

Contact form broken, major navigation failure, important page
inaccessible, severe mobile failure.

### P2

Layout issue, SEO issue, non-critical form problem, animation problem.

### P3

Minor spacing, copy typo, small visual issue.

## Bug report

``` text
Bug ID:
Title:
Reporter:
Date:
URL:
Browser:
Device:
Environment:
Description:
Steps to reproduce:
Expected:
Actual:
Severity:
Screenshot/video:
Console error:
Network error:
Related commit:
```

## Workflow

Report → Reproduce → Root cause → Fix → Test → Build → Review → Preview
→ QA → Production.

## Required checks

``` bash
npm run lint
npm run typecheck
npm run build
```

If configured:

``` bash
npm test
npm run test:e2e
```

## Responsive QA

Test 320, 375, 390, 414, 768, 1024, 1280, 1440 and 1920px.

## Browser QA

Current Chrome, Edge, Firefox, Safari, Android Chrome and iOS Safari.

## Functional QA

Navigation, mobile menu, enquiry CTA, contact form, map/directions link,
project links, 404 and footer.

## Content QA

Verify company name, CIN, incorporation date, status, ROC, address,
directors and capital figures against approved records.

## Property QA

Before publishing a property/project: - Name verified - Location
verified - Company role verified - Type verified - Images approved -
Price verified - Area verified - Amenities verified - RERA details
verified where applicable - Brochure approved - Enquiry CTA tested

## SEO QA

Titles, descriptions, canonical, Open Graph, sitemap, robots, JSON-LD,
headings, alt text and no accidental noindex.

## Accessibility QA

Keyboard, focus, labels, contrast, heading hierarchy, alt text, mobile
controls and reduced motion.

## Performance QA

Lighthouse, Core Web Vitals, images, fonts, JavaScript bundle, CLS, LCP
and INP.

## Regression

Reproduce original bug → fix root cause → update test where practical →
retest original scenario → test related components → test mobile/desktop
→ production build.

## Definition of done

No known critical bugs, build passes, responsive behavior works,
accessibility remains intact, production behavior is verified and the
change is documented.
