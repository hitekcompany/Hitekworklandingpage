---
title: Multilingual Support (Tiếng Việt / English / 한국어)
status: pending
created: 2026-05-27
spec: ./spec.md
total_tasks: 14
total_estimate_hours_human: 26.5
total_estimate_hours_ai: 3.55
---

# Plan: Đa ngôn ngữ landing page

> Spec parent: [`spec.md`](./spec.md)
> Domain glossary: [`../../CONTEXT.md`](../../CONTEXT.md)

## Overview

Feature thêm hỗ trợ 3 ngôn ngữ (vi/en/ko) cho landing page Hitek Work. Site
chưa release → big-bang deploy strategy, AI tự dịch Phase 1, native review
post-launch. Testing setup Vitest DEFER Phase 1.5 (user quyết manual QA qua
`pnpm dev` đủ cho Phase 1).

**Stack:** `i18next` + `react-i18next` + `i18next-browser-languagedetector` +
`Noto Sans` + `Noto Sans KR` + shadcn `DropdownMenu`.

**Domain:** `https://work.hitek.com.vn` (production base URL confirmed).

## Tasks

| ID | Title | Type | Blocked by | Est (H/AI) | File |
|----|-------|------|------------|------------|------|
| 01 | ✅ Setup i18n infrastructure | AFK | — | M (2h / 0.3h) — actual 0.15h | [task-01](./task-01-setup-i18n-infrastructure.md) |
| 02 | ✅ URL routing với :lang prefix | AFK | 01 | M (2h / 0.3h) — actual 0.2h | [task-02](./task-02-routing-locale-prefix.md) |
| 03 | ✅ RootRedirect + Resolution Chain | AFK | 02 | M (2h / 0.3h) — actual 0.15h | [task-03](./task-03-root-redirect-resolution-chain.md) |
| 04 | ✅ LanguageSwitcher component | AFK | 02 | M (2h / 0.3h) — actual 0.2h | [task-04](./task-04-language-switcher-component.md) |
| 05 | ✅ Font loading Noto Sans + Noto Sans KR | AFK | — | S (0.5h / 0.1h) — actual 0.05h | [task-05](./task-05-font-loading-noto-sans.md) |
| 06 | ✅ Translate common namespace | AFK | 01, 04 | M (2h / 0.3h) — actual 0.3h | [task-06](./task-06-translate-common-namespace.md) |
| 07 | Translate HomePage | AFK | 06 | M (3h / 0.4h) | [task-07](./task-07-translate-home-page.md) |
| 08 | Translate CurrentStatePage | AFK | 06 | M (3h / 0.4h) | [task-08](./task-08-translate-current-state-page.md) |
| 09 | Translate DemoPage part 1 (5 sections) | AFK | 06 | M (3h / 0.4h) | [task-09](./task-09-translate-demo-page-part-1.md) |
| 10 | Translate DemoPage part 2 (5 sections) | AFK | 09 | M (3h / 0.4h) | [task-10](./task-10-translate-demo-page-part-2.md) |
| 11 | Translate PricingPage | AFK | 06 | S (1.5h / 0.2h) | [task-11](./task-11-translate-pricing-page.md) |
| 12 | Translate AboutPage | AFK | 06 | S (1h / 0.15h) | [task-12](./task-12-translate-about-page.md) |
| 13 | ✅ useSEOMeta hook + hreflang + html lang sync | AFK | 02 | M (3h / 0.4h) — actual 0.35h | [task-13](./task-13-seo-meta-hook-hreflang.md) |
| 14 | ✅ Static sitemap.xml (15 URL + alternates) | AFK | — | S (0.5h / 0.1h) — actual 0.05h | [task-14](./task-14-static-sitemap-xml.md) |

**Total: 14 tasks, 0 HITL, 0 testing (deferred Phase 1.5).**

## Dependency graph

```
         ┌─── task-05 (Font) ──────────────────────────────┐
         │                                                  │
         │                 ┌─── task-03 (RootRedirect) ────┤
         │                 │                                │
[start]──┼─── task-01 ─── task-02 ──┬─── task-04 ─── task-06 ──┬─── task-07 ──┐
         │   (i18n setup)  (Routes) │   (Switcher)  (Common)   │              │
         │                          │                          ├─── task-08 ──┤
         │                          │                          │              │
         │                          │                          ├─── task-09 ── task-10 ──┤
         │                          │                          │  (Demo p1)   (Demo p2)  │
         │                          │                          │                          │
         │                          │                          ├─── task-11 ──────────────┤
         │                          │                          │   (Pricing)              │
         │                          │                          │                          │
         │                          │                          └─── task-12 ──────────────┤
         │                          │                              (About)                │
         │                          │                                                     │
         │                          └─── task-13 (SEO) ───────────────────────────────────┤
         │                                                                                │
         └─── task-14 (Sitemap) ──────────────────────────────────────────────────────────┴── [done]
```

## Critical path

```
01 → 02 → 04 → 06 → 09 → 10
M    M    M    M    M    M    = 6 tasks, ~14h human / ~1.7h AI
```

DemoPage là chain dài nhất do split 09+10 (sequential vì cùng file `demo.json`).
Các page translation khác (07, 08, 11, 12) parallel sau 06 — không kéo dài
critical path.

SEO (13) parallel sau 02. Sitemap (14) standalone, có thể chạy parallel ngay
từ đầu. Font (05) parallel ngay từ đầu.

## Parallelizable groups

**Group A** (chạy ngay sau start):
- task-01 (i18n setup)
- task-05 (Font) — hoàn toàn độc lập
- task-14 (Sitemap) — hoàn toàn độc lập

**Group B** (sau task-02 done):
- task-03 (RootRedirect)
- task-04 (Switcher)
- task-13 (SEO hook) — task-13 dùng `i18n.language` từ task-02 LocalizedShell sync

**Group C** (sau task-06 done — parallel translations):
- task-07 (HomePage)
- task-08 (CurrentStatePage)
- task-09 (DemoPage part 1) → task-10 (DemoPage part 2, sequential)
- task-11 (PricingPage)
- task-12 (AboutPage)

## Anti-drift status

**⚠️ PARTIAL** — project chưa bootstrap `docs/agents/conventions.md`,
`reference-impls.md`, `verify-commands.md`. Mỗi task file inject:

- Global `C:/Users/hoado/.claude/CLAUDE.md` (behavioral rules)
- Global `C:/Users/hoado/.claude/rules/development-rules.md` (YAGNI, file naming)
- `CONTEXT.md` (domain glossary — 25 terms resolved trong grilling phase)
- Reference existing component patterns trong task body

**Recommend Phase 1.5:** chạy `/feature-bootstrap` để tạo `docs/agents/conventions.md`
proper trước khi planning feature kế tiếp.

## Success criteria (release Phase 1)

Reflect spec Acceptance — feature considered done khi:

- [ ] Site accessible tại `https://work.hitek.com.vn/vi/`, `/en/`, `/ko/` (3 base)
- [ ] Click switcher đổi ngôn ngữ → URL update + content reload đúng lang + same page
- [ ] Auto-detect navigator.language khi user lần đầu vào `/`
- [ ] localStorage persist lang preference giữa các phiên
- [ ] URL Locale Prefix THẮNG localStorage preference (link sharing works)
- [ ] SEO: `<html lang>` + `<title>` + hreflang tags đầy đủ trong DevTools
- [ ] Sitemap.xml accessible tại `/sitemap.xml`, parse XML well-formed
- [ ] Korean text render đúng glyph (Noto Sans KR) trên tất cả OS
- [ ] Build pass: `pnpm build`
- [ ] Manual QA pass: click qua 5 page × 3 lang = 15 combinations + switcher actions

## Phase 1.5 follow-ups (post-Phase 1)

1. Native English reviewer chỉnh `en/*.json` (priority trung)
2. Native Korean reviewer chỉnh `ko/*.json` (priority cao — register 존댓말)
3. Bootstrap `docs/agents/conventions.md` proper
4. Vitest setup + Resolution Chain unit tests + Switcher component tests
5. Localized 404 page (nếu add 404 page)
6. Pre-render meta tags nếu Search Console báo coverage issue
7. Header "Yêu cầu Demo" button visibility bug (observation từ grilling, ngoài scope feature)

## Next step

`/feature-execute` để AFK loop execute task-01 → task-14.

Hoặc execute manual nếu muốn pilot 1-2 task trước (vd task-01, task-05) để
sanity check pattern.
