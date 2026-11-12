# Website audit — 2026-08-24

**Official URL:** https://www.anthonylewis.co.uk/  
**Method:** no-login temporary real-browser renders. HTTP success was not used as acceptance evidence; no link/form transaction was submitted.

## Browser evidence

| Viewport | Evidence | Measured result |
|---|---|---|
| 1440×900 | `evidence/desktop.png` | `innerWidth=1440`, `innerHeight=900`, `clientWidth=1425`, `scrollWidth=3000`; two rendered `nav` elements. Screenshot visibly shows both duplicated menus, repeated hero copy/slides, missing logo/image assets, and horizontal scroll. |
| 390×844 | `evidence/mobile.png` | `innerWidth=390`, `innerHeight=844`, `clientWidth=375`, `scrollWidth=3000`; two rendered `nav` elements. Screenshot visibly shows the duplicated full navigation before repeated hero content and a horizontal scroll affordance. |

## Audit findings

| Area | Evidence-led finding | Customer impact | Priority |
|---|---|---|---|
| Responsive width | Document `scrollWidth` is 3000px at both required widths—1,575px wider than desktop client width and 2,625px wider than mobile client width. | Visitors must contend with a horizontally oversized document rather than a stable responsive hierarchy. | P0 |
| Navigation | Both browser snapshots show the complete six-item navigation twice: Kitchens; Bedrooms & Dressing Rooms; Bespoke Solutions; Projects; About Us; Contact. | Duplicate choices create confusion and push the core proposition below the opening interaction surface. | P0 |
| Hero | “Handmade Kitchens & Furniture” and related welcome/copy repeat across five slider panels before the short business introduction. | The first impression repeats rather than helping a homeowner identify the most relevant craft/service and next step. | P0 |
| Assets / technical errors | Browser console recorded 81 errors after the mobile audit. Representative failures are 403 responses for WordPress theme/plugin CSS/JS, home-slider images, logo files, Contact Form 7 assets and Instagram-feed assets. The rendered screenshots show image/logo failures. | A visitor in an affected environment receives unstyled content and missing images; this is a current functional presentation defect, not an aesthetic preference. | P0 |
| Service hierarchy | The home page exposes general copy and navigation routes but not a concise first-screen distinction between kitchens, bedrooms/dressing rooms and broader bespoke furniture. Linked service pages returned a rendered `403 Forbidden — Request forbidden by administrative rules` in this environment. | A visitor has less help judging fit before attempting a blocked/uncertain deeper route. | P1 |
| Project proof | A Projects route is present, but current direct browser opening of `/projects/` rendered 403. The home page therefore cannot be relied upon here to move a visitor from craft claim to visible project proof. | Work quality may be harder to evaluate; no assertion is made that the project content is missing globally. | P1 |
| Contact | The owned home footer visibly contains telephone and business email; neither is the dominant first-screen action in the captured states. | A static page could make the already-public call/email action available once a homeowner understands scope. | P1 |
| Broken/degraded routes | `/the-company/`, `/why-choose-us/` and `/projects/` each rendered `403 Forbidden — Request forbidden by administrative rules` in this current browser environment. | Record as `ACCESS_BLOCKED_FROM_CURRENT_ENVIRONMENT`; do not infer universal site failure or use those routes in a future Demo until retested. | P1 |

## Link and technical boundary

The home-page snapshot exposes internal service/project/company/contact links, Facebook, Instagram and Pinterest links, a privacy/cookies route and a reCAPTCHA iframe. This bounded research did not submit a contact form, open social accounts, or mechanically traverse every link. The three directly reopened internal routes above were visibly 403; all other links remain **NOT FULLY AUDITED**.

## Opportunity framing

The evidence supports a static one-page improvement: one responsive hierarchy that makes verified kitchen/bedroom/bespoke-work scope intelligible, shows a selected public proof slice only where rights permit, gives workshop/craft reassurance, and repeats a direct call/email CTA. It does **not** justify claims about leads, bookings, sales, a new website purchase, or generic aesthetic replacement.
