---
task: 02
title: URL routing with :lang prefix + LocalizedShell sync
status: pending
type: AFK
blocked_by: [task-01]
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: null
created: 2026-05-27
completed: null
---

# Task 02: URL routing với :lang prefix

> ⚠️ **Vertical slice:** App.tsx routes + LocalizedShell component + sync hook to i18n + localStorage.

## What to build

Refactor `src/app/App.tsx` để mọi page route nest dưới `/:lang/*` parent. Tạo
component `LocalizedShell` đọc `:lang` param từ URL, validate giá trị thuộc
Supported Languages (`vi`/`en`/`ko`), call `i18n.changeLanguage(lang)` và
`localStorage.setItem('preferred_lang', lang)` (Preference Precedence: URL
THẮNG localStorage). Render `<Outlet>` của react-router cho children pages.

Nếu `:lang` không hợp lệ → navigate redirect tới Resolution Chain default
(`/vi/...`). Routes hiện tại (`/current-state`, `/pricing`, `/demo`, `/about`)
chuyển thành nested under `/:lang/...`.

Sau task này, navigate `http://localhost:5173/vi/about` render AboutPage,
`http://localhost:5173/ko/pricing` render PricingPage (vẫn tiếng Việt vì chưa
có translation), URL non-prefix tạm thời 404 (RootRedirect ở task-03 sẽ fix).

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/App.tsx` — routing pattern hiện tại (BrowserRouter, Routes, Route)
- `src/app/components/ScrollToHash.tsx` — pattern wrapper component đọc location
- `src/app/components/Header.tsx` — pattern dùng `useLocation` từ react-router
- `CONTEXT.md` — URL Locale Prefix, Canonical URL, Preference Precedence, i18n Stack
- React Router v7 docs về nested routes + `useParams` + `<Outlet>`

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (section "Routing & URL contracts")

## Key interfaces (durable contracts)

- `src/app/components/LocalizedShell.tsx`:
  - Reads `useParams<{ lang: string }>().lang`
  - Validates `lang ∈ ['vi','en','ko']` (đọc từ config supportedLngs hoặc constant)
  - Side-effect (useEffect on lang change): `i18n.changeLanguage(lang)` + `localStorage.setItem('preferred_lang', lang)`
  - Renders `<Outlet />`
  - Invalid lang → `<Navigate to="/vi/..." replace />`

- New route structure trong `App.tsx`:
  ```tsx
  <Route path="/:lang" element={<LocalizedShell />}>
    <Route index element={<HomePage />} />
    <Route path="current-state" element={<CurrentStatePage />} />
    <Route path="demo" element={<DemoPage />} />
    <Route path="pricing" element={<PricingPage />} />
    <Route path="about" element={<AboutPage />} />
  </Route>
  ```

## Acceptance criteria

- [ ] `LocalizedShell.tsx` exists, validates lang, sync i18n + localStorage
      verify: `test -f src/app/components/LocalizedShell.tsx && grep -cE "changeLanguage|localStorage\.setItem.*preferred_lang|useParams" src/app/components/LocalizedShell.tsx` → ≥3

- [ ] App.tsx routes nested under `:lang`
      verify: `grep -E "path=\"/:lang" src/app/App.tsx`

- [ ] Page components (HomePage etc.) nested as child routes
      verify: `grep -cE "<Route (index|path=\"(current-state|demo|pricing|about)\")" src/app/App.tsx` → 5

- [ ] Manual QA: `/vi/about` renders AboutPage
      verify: `pnpm dev` → `http://localhost:5173/vi/about`

- [ ] Manual QA: `/en/pricing` renders PricingPage (text vẫn vi, OK)
      verify: `pnpm dev` → `http://localhost:5173/en/pricing`

- [ ] Manual QA: localStorage `preferred_lang` được set sau navigate
      verify: `pnpm dev` + DevTools → Application → Local Storage

- [ ] Manual QA: invalid `/xx/about` redirect tới `/vi/about`
      verify: `pnpm dev` → `http://localhost:5173/xx/about`

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- `/` không-prefix redirect → task 03 (RootRedirect)
- Auto-detect navigator.language → task 03
- Switching language qua UI → task 04 (LanguageSwitcher)

## Downstream consumers (CRITICAL)

Mọi `Link to=` hardcoded trong codebase phải kiểm tra:

```bash
grep -rE "to=\"/(current-state|pricing|demo|about)" src/ --include="*.tsx"
```

Sau task này, các link như `<Link to="/about">` cần update thành
`<Link to="/${lang}/about">` HOẶC dùng helper. Update Header.tsx + Footer.tsx
nav items để link đúng locale-aware path. Pattern recommended: tạo helper
`useLocalePath(path)` return `/{currentLang}/{path}` để các component khác dùng.

Files to update (estimate):
- `src/app/components/Header.tsx` — navItems hrefs
- `src/app/components/Footer.tsx` — nếu có internal link

## Implementation notes

- `i18n.changeLanguage` async return Promise — `useEffect` dùng `void i18n.changeLanguage(lang)` để không lint warning.
- KHÔNG đặt `LocalizedShell` cao hơn `Header`/`Footer` trong tree để switcher có thể read `:lang` (Header outside Route → không có lang param). **Option:** move `Header`/`Footer` vào LocalizedShell hoặc share lang qua i18n state.
- Pattern recommended: `Header`/`Footer` đọc lang qua `useTranslation().i18n.language` (i18n đã được sync bởi LocalizedShell) → không cần URL param trực tiếp.
