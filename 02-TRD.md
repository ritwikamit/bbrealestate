# Baba Baidyanath Real Estate --- TRD

## Phase 1

Static website only. No database is required.

Recommended: - Next.js 15+ - React - TypeScript - Tailwind CSS -
shadcn/ui - Lucide React - Motion/Framer Motion

## Future

-   Next.js API/server actions or NestJS
-   PostgreSQL
-   Prisma
-   Authentication
-   Object storage
-   Admin/CRM

## Structure

``` text
app/
  page.tsx
  about/
  services/
  projects/
  contact/
  privacy/
  terms/
  disclaimer/
  layout.tsx
  sitemap.ts
  robots.ts
components/
  navigation/
  hero/
  company/
  projects/
  services/
  enquiry/
  location/
  ui/
data/
  company.ts
  services.ts
  projects.ts
  faqs.ts
types/
lib/
public/
```

## Company data

Keep verified corporate facts in one source:

``` ts
{
 name: "Baba Baidyanath Real Estate Private Limited",
 shortName: "Baba Baidyanath Real Estate",
 cin: "U68100BR2024PTC072121",
 incorporationDate: "2024-11-07",
 status: "Active",
 roc: "RoC Patna",
 registeredAddress: "C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India"
}
```

## Project type

``` ts
type Project = {
 id: string;
 name: string;
 slug: string;
 location?: string;
 propertyType?: string;
 status?: string;
 description?: string;
 images: string[];
 brochureUrl?: string;
 isPublished: boolean;
};
```

Do not seed fictional projects.

## Enquiry type

``` ts
type Enquiry = {
 name: string;
 phone: string;
 email?: string;
 enquiryType: string;
 propertyRequirement?: string;
 budget?: string;
 preferredLocation?: string;
 message: string;
};
```

## Routes

`/`, `/about`, `/services`, `/projects`, `/contact`, `/privacy`,
`/terms`, `/disclaimer`

Future: `/projects/[slug]`, `/blog`, `/admin`

## SEO

Metadata API, Open Graph, canonical, sitemap, robots, JSON-LD and
Organization schema using verified information only.

## Performance

Use Next/Image, WebP/AVIF, responsive sizes, lazy loading, optimized
fonts, server components by default and minimal third-party scripts.

## Accessibility

Semantic HTML, keyboard navigation, visible focus, accessible forms, alt
text, reduced motion and strong contrast.

## Deployment

GitHub + Vercel + custom domain + preview deployments.

## Future database

Entities: Company, Project, Property, Unit, Lead, Customer, Enquiry,
Document, Amenity, Location, User, AuditLog.
