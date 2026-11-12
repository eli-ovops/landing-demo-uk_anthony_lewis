# Local Demo QA — 2026-08-24

## Evidence and method

Temporary no-login Playwright/Chromium rendered the local static Demo through a loopback-only server. The server was stopped after QA. No deployment, upload, form submission, external contact or third-party login occurred.

| Check | Result |
|---|---|
| Desktop rendering | PASS — refreshed `evidence/desktop-1440x900.png`; browser viewport `1440×900`, `clientWidth=1440`, `scrollWidth=1440`. |
| Mobile rendering | PASS — refreshed `evidence/mobile-390x844.png`; browser viewport `390×844`, `clientWidth=390`, `scrollWidth=390`. |
| Image loading | PASS — all three page images loaded with non-zero natural dimensions in both required viewports. |
| Main CTA paths | PASS — all displayed first-contact actions use verified `tel:+441939291415` and `mailto:[REDACTED_EMAIL]`; Instagram points to the official account. No link lacks an `href`. |
| Responsive navigation | PASS — at 390px, Menu control changes `aria-expanded` from `false` to `true` and reveals the three in-page navigation links. |
| Console | PASS — final post-redesign session produced 0 console errors and 0 warnings. |
| Client-visible internal-text scan | PASS — page-text scan found no `AI-generated`, `rights status`, `customer authorization`, `not authorised to send`, `DRAFT ONLY`, or `PMO` text. The allowed `Independent concept preview` label remains visible. |
| Business fidelity | PASS for the bounded slice — Hero, services and CTA map to the internal Business Fidelity Map. Bathrooms are included under Bespoke Solutions. No project name, testimonial, price, guarantee, service area or certification was invented. |
| Image uniqueness | PASS — each of the three selected official-account images has one page placement only; no carousel, collage or duplicate-image variant. |
| Bottom 40% commercial architecture | PASS — the second half introduces a real-work image/link, a craft statement, first-conversation reassurance and direct call/email conversion, rather than repeating a generic CTA. |

## Visual review

Owner visual review: The redesigned Desktop is a project-led cabinetmaker portfolio: real-project Hero, editorial work sequence, craft proof and direct contact close. Mobile retains readable stacked content, working menu and no horizontal overflow. This is Owner QA only.

## Required status

`BUSINESS-FIDELITY QA = PASS`  
`CLIENT-VISIBLE INTERNAL-TEXT GATE = PASS`  
`INDEPENDENT VISUAL ACCEPTANCE = AWAITING`  
`CLIENT-SHOWABLE DEMO = FAIL` until a different Owner completes the independent Desktop/Mobile visual review.  
`OUTREACH = DRAFT ONLY — NOT AUTHORISED TO SEND`
