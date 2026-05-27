# Hitek Work Landing Page — Status

**Last updated:** 2026-05-27 | **Branch:** main

---

## 🎯 At a glance

Feature đa ngôn ngữ (vi/en/ko) hoàn tất 14/14 tasks và đã deploy production qua Vercel (auto-deploy từ `main`). Site live tại `https://work.hitek.com.vn/` với URL Locale Prefix bắt buộc, LanguageSwitcher header, hreflang Set + canonical, sitemap.xml. Phase 1.5 follow-ups: native EN/KO review JSON translations, setup `i18next-parser` CI check, Vitest test suite.

---

## ✅ Done (this sprint)

> Latest at top. Roll older items to git history / changelog khi sprint end.

| Date | Description |
|------|-------------|
| 2026-05-27 | i18n hardening: extract Minimum Activity / Check Frequency labels to translations |
| 2026-05-27 | i18n cleanup: translate remaining English design labels in `ko/*.json` (8 demo labels + 2 current-state labels) |
| 2026-05-27 | i18n bug fix: add `components` prop to all 53 Trans across 16 files — fixes slot indexing causing VN/EN bleed on Korean pages |
| 2026-05-27 | Multilingual feature shipped — 14/14 tasks done (i18next + react-i18next + detector, URL `/:lang/` routing, LocalizedShell, RootRedirect, LanguageSwitcher, Noto Sans + Noto Sans KR fonts, common namespace, 5 pages translated to vi/en/ko, useSEOMeta hook + hreflang Set, static sitemap.xml) |
| 2026-05-27 | Workflow artefacts: CONTEXT.md domain glossary, spec.md, 14 task files + plan.md trong `plans/260527-1011-multilingual-vi-en-ko/` |
| 2026-05-27 | Repository hygiene: `.gitignore` cho node_modules/dist/env/IDE/playwright debug artefacts |

---

## 🚧 In progress

> Active work right now. Empty if between sprints.

- **None** active — multilingual feature deployed, awaiting Phase 1.5 follow-ups

---

## 📋 Next up

**Sprint goal:** Phase 1.5 — i18n hardening + project workflow bootstrap.

- Native English reviewer chỉnh `en/*.json` (B2B SaaS tone)
- Native Korean reviewer chỉnh `ko/*.json` (존댓말 formal register priority cao)
- Setup `i18next-parser` trong CI để auto-detect hardcoded strings (prevent regression)
- Bootstrap `docs/agents/conventions.md` + `reference-impls.md` + `verify-commands.md` (chạy `/feature-bootstrap`)
- Vitest setup + unit tests cho Language Resolution Chain + LanguageSwitcher component
- Submit `https://work.hitek.com.vn/sitemap.xml` lên Google Search Console
- Fix Header "Yêu cầu Demo" button visibility (observation từ grilling, viewport <lg ẩn)
- Localized 404 page nếu site add 404 route

---

## 🚫 Blockers / Risks

> Empty list = healthy. Document everything that could derail timeline.

- **AI translation quality ~85%** — chấp nhận risk Phase 1 launch, mitigation = native review Phase 1.5
- **No SSR pre-render meta tags** — Google bot index meta tags chậm hơn HTML tĩnh; monitor Search Console coverage
- **Bundle size warning** — main JS chunk 601KB (174KB gzip) > Vite 500KB threshold; defer code-splitting Phase 2

---

## 🔗 Quick links

- **Remote:** https://github.com/hitekcompany/Hitekworklandingpage.git
- **Production:** https://work.hitek.com.vn/
- **README:** [README.md](README.md)
- **Spec parent:** [plans/260527-1011-multilingual-vi-en-ko/spec.md](plans/260527-1011-multilingual-vi-en-ko/spec.md)
- **Domain glossary:** [CONTEXT.md](CONTEXT.md) — 25 terms (Supported Languages, URL Locale Prefix, Trans Component, etc.)
- **Sitemap:** [public/sitemap.xml](public/sitemap.xml) — 15 URLs × 4 hreflang alternates

---

## 📊 Metrics

> Skill auto-updates rows below. User adds custom metrics (test coverage, etc.) manually.

| Metric | Value |
|--------|-------|
| Total commits `main` | 25 |
| Active feature plans | 0 |
| Completed plans | 1 (multilingual-vi-en-ko) |
| ADRs documented | N/A (project chưa bootstrap `docs/adr/`) |
| Supported languages | 3 (vi default, en, ko) |
| Translatable strings (vi/en/ko) | ~540 across 7 namespaces |
| Components refactored với i18n | ~30 (Header, Footer, 5 pages, 25+ section components) |
| Trans instances với explicit `components` prop | 53 |

---

## 🛠 Tooling adopted

> List major tooling decisions affecting daily workflow.

- **i18next 26.3.0** + **react-i18next 17.0.8** — i18n core engine + React bindings
- **i18next-browser-languagedetector 8.2.1** — auto-detect `navigator.language` cho Resolution Chain
- **Vite 6.3.5** + **@vitejs/plugin-react** — bundler + React fast-refresh dev server
- **TailwindCSS 4.1.12** + **@tailwindcss/vite** — utility-first styling
- **shadcn/ui** (Radix UI primitives + Tailwind) — `DropdownMenu` cho LanguageSwitcher, ~30 ui primitives
- **react-router 7** — routing với nested `/:lang/*` + LocalizedShell wrapper
- **Noto Sans + Noto Sans KR** (Google Fonts) — uniform glyph rendering across OS, đặc biệt Hangul
- **pnpm 10.32.1** — package manager (lockfile committed)
- **Vercel** — auto-deploy từ `main` branch, SPA rewrite trong `vercel.json`
- **Playwright MCP** — visual QA verify multilingual rendering trong session

---

## 📅 Sprint timeline (1 weeks)

| Sprint | Dates | Focus | Status |
|--------|-------|-------|--------|
| T1 | 2026-05-27 | Multilingual i18n feature (14 tasks AFK) | ✅ Done |
| T2 (planned) | TBD | Phase 1.5 — native review + CI i18n check + Vitest setup | 📋 Up next |

Status legend: ✅ Done | 🚧 In progress | 📋 Up next | ⏳ Pending | 🚫 Blocked

---

## ✏️ Update protocol

This file = **single source of truth** cho project status, scannable trong 10 giây.

**Update via skill:** `/project-status` (auto-detect git + plans),
`/project-status init` (re-init), `/project-status "free-text note"` (quick append).

**Manual update:**
- ✅ Feature complete → add to "Done"
- 🚧 Feature start → add to "In progress"
- 🚫 Blocker emerge → add to "Blockers"
- 📅 Sprint end → roll completed items to history, refresh "Next up"

<!-- project-status-meta
last-commit: 03f6484047dad5bea77c52c20a41faf84d432478
last-updated: 2026-05-27T13:48:23+0700
-->
