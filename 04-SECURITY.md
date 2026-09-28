# Baba Baidyanath Real Estate --- Security Document

## Scope

Phase 1 is a static corporate website with an enquiry form. Future
phases may contain property, customer and lead data.

## Threats

-   Form spam
-   XSS
-   Malicious input
-   Dependency vulnerabilities
-   Secret exposure
-   Hosting misconfiguration
-   Incorrect/unauthorized property information

## Input validation

Use Zod/schema validation, length limits, email/phone validation and
required-field checks. Client validation is not sufficient once an API
exists.

## XSS

Never render unsanitized user HTML. Avoid unsafe
`dangerouslySetInnerHTML` with user-controlled content.

## Secrets

Never commit database credentials, API keys, authentication secrets,
email-provider keys or payment credentials. Private secrets must not use
`NEXT_PUBLIC_`.

## Future admin

Roles may include: ADMIN, EDITOR, SALES, VIEWER. Authorization must be
enforced server-side.

## Property data integrity

Future admins must control publication of: - Project status - Prices -
Availability - Area - Amenities - RERA details - Brochures

Important property changes should be auditable.

## File uploads

For future brochures: - MIME/type restrictions - Size limits - Random
server-side filenames - Secure object storage - Malware scanning where
appropriate - No executable uploads

## Database

Future PostgreSQL should use least privilege, TLS, backups, migration
control and no public database access.

## Authentication

Future admin/client portal: - Strong password hashing - Secure
sessions - HttpOnly cookies - Rate limiting - MFA where appropriate -
Server-side authorization

## HTTP headers

Use CSP, HSTS, X-Content-Type-Options, Referrer-Policy and
Permissions-Policy. Test CSP with all required assets.

## Privacy

Collect only data necessary for enquiries. Publish Privacy Policy, Terms
and Disclaimer. Define retention before persistent lead storage.

## Logging

Log authentication, admin actions, property changes and security events.
Never log passwords, API secrets or unnecessary personal information.

## Testing

Before production: dependency audit, secret scan, XSS testing,
form-abuse testing, authorization testing, file-upload testing and
rate-limit testing.

## Incident response

Detect → Contain → Investigate → Fix → Verify → Document.
