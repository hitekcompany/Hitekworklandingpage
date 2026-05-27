---
task: 01
title: Setup i18n infrastructure (deps + config + provider)
status: done
type: AFK
blocked_by: []
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: 0.15
created: 2026-05-27
completed: 2026-05-27
---

# Task 01: Setup i18n infrastructure

> ⚠️ **Vertical slice:** package.json deps + `src/i18n/` module + main.tsx wiring + namespace JSON skeleton files.

## What to build

Wire i18n stack vào project: install `i18next` + `react-i18next` +
`i18next-browser-languagedetector` (per CONTEXT.md term **i18n Stack**), tạo
`src/i18n/config.ts` chứa init code với `supportedLngs: ['vi','en','ko']`,
`fallbackLng: 'vi'` (Default Language), và 7 namespace declared. Tạo 21 file
JSON empty (7 namespace × 3 lang) làm skeleton để các task translation sau
populate. Import config vào `src/main.tsx` để i18n active từ entry point.

Sau task này, app vẫn hiển thị giống cũ (text hardcoded), nhưng infrastructure
sẵn sàng cho `useTranslation` hook và `<Trans>` component dùng ở task sau.

## Must read BEFORE coding (forcing function)

> ⚠️ **Anti-drift mechanism #1.** Actual Read() call required.

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md` — global behavioral rules (YAGNI, simplicity)
- `C:/Users/hoado/.claude/rules/development-rules.md` — kebab-case, < 200 lines per file, edit existing
- Project chưa có `docs/agents/conventions.md` — anti-drift PARTIAL

### Reference implementations

- `src/main.tsx` — entry point hiện tại (xem pattern import + render)
- `package.json` — version pin pattern (project pins exact versions không dùng caret)
- `CONTEXT.md` — i18n Stack, Supported Languages, Default Language, Translation Namespace, Translation Loading, Source Language File

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- `src/i18n/config.ts` — exports default `i18n` instance. Init params:
  - `supportedLngs: ['vi', 'en', 'ko']`
  - `fallbackLng: 'vi'`
  - `ns: ['common', 'home', 'current-state', 'demo', 'pricing', 'about', 'seo']`
  - `defaultNS: 'common'`
  - `detection.order: ['path', 'localStorage', 'navigator']`
  - `detection.lookupFromPathIndex: 0`
  - `detection.lookupLocalStorage: 'preferred_lang'`
  - `detection.caches: ['localStorage']`
  - `interpolation.escapeValue: false` (React tự escape)
  - `resources` eager-load tất cả 21 file JSON qua static import

- Namespace skeleton files: `src/i18n/locales/{vi,en,ko}/{common,home,current-state,demo,pricing,about,seo}.json`. Empty `{}` initially.

## Acceptance criteria

- [ ] Dependencies installed (3 packages) trong `package.json`
      verify: `grep -E '"(i18next|react-i18next|i18next-browser-languagedetector)"' package.json | wc -l` → 3

- [ ] `src/i18n/config.ts` exists với init logic
      verify: `test -f src/i18n/config.ts && grep -cE "supportedLngs|fallbackLng.*vi" src/i18n/config.ts` → ≥2

- [ ] 21 namespace JSON files exist (7 ns × 3 lang)
      verify: PowerShell: `(Get-ChildItem -Recurse -Path src/i18n/locales -Filter *.json).Count` → 21

- [ ] `src/main.tsx` imports i18n config trước render
      verify: `grep "i18n/config" src/main.tsx`

- [ ] Build passes (Vite + TS check)
      verify: `pnpm build`

- [ ] Manual QA: `pnpm dev`, mở browser console, KHÔNG có warning/error từ i18next
      verify: `pnpm dev` → `http://localhost:5173/` → DevTools console clean

## Out of scope

- Refactor component sang `useTranslation` → task 06+
- Translation content (JSON sẽ empty `{}`) → task 06+
- URL routing với :lang → task 02
- LanguageSwitcher UI → task 04

## Implementation notes

- Eager load (Translation Loading term in CONTEXT.md): import tất cả JSON statically rồi pass vào `resources`. Pattern Vite:
  ```ts
  import viCommon from './locales/vi/common.json';
  // ... 20 more imports
  resources: { vi: { common: viCommon, ... }, ... }
  ```
- Đừng cài `i18next-http-backend` (out of scope Phase 1).
- Versions: dùng latest stable (i18next ^24, react-i18next ^15, detector ^8). Pin chính xác theo pattern project (không caret).

## Execution log

- 2026-05-27 10:15 — Read: C:/Users/hoado/.claude/CLAUDE.md
- 2026-05-27 10:15 — Read: C:/Users/hoado/.claude/rules/development-rules.md
- 2026-05-27 10:15 — Read: src/main.tsx
- 2026-05-27 10:16 — Impl: `pnpm add i18next react-i18next i18next-browser-languagedetector` → 3 deps (i18next@26.3.0, react-i18next@17.0.8, detector@8.2.1)
- 2026-05-27 10:17 — Impl: created 21 JSON skeleton files via shell loop
- 2026-05-27 10:18 — Impl: wrote `src/i18n/config.ts` (109 LOC) — init + resources + detection chain
- 2026-05-27 10:19 — Impl: updated `src/main.tsx` to `import "./i18n/config"` before render
- 2026-05-27 10:19 — Verify AC1 (deps in package.json) — PASS (3 matches grep)
- 2026-05-27 10:19 — Verify AC2 (config.ts patterns) — PASS (supportedLngs, fallbackLng both present)
- 2026-05-27 10:19 — Verify AC3 (21 JSON files) — PASS (find count = 21)
- 2026-05-27 10:19 — Verify AC4 (main.tsx import) — PASS
- 2026-05-27 10:20 — Verify AC5 `pnpm build` — PASS (built in 6.79s, no errors)
- 2026-05-27 10:20 — Verify AC6 manual QA — DEFERRED (user instruction: bundle final QA)
