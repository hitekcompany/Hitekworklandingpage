---
task: 03
title: RootRedirect với Language Resolution Chain
status: pending
type: AFK
blocked_by: [task-02]
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: null
created: 2026-05-27
completed: null
---

# Task 03: RootRedirect với Language Resolution Chain

> ⚠️ **Vertical slice:** RootRedirect component + resolution chain logic + App.tsx route mounting.

## What to build

Tạo `src/app/components/RootRedirect.tsx` mount tại `/` và catch-all `*` (non-
prefix paths). Khi user truy cập URL không có URL Locale Prefix, component
thực thi **Language Resolution Chain** (theo CONTEXT.md):

```
1. localStorage["preferred_lang"] tồn tại + valid → navigate(/{preferred}/...rest)
2. navigator.language match:
   - startsWith "ko" → navigate(/ko/...rest)
   - startsWith "en" → navigate(/en/...rest)
   - else → navigate(/vi/...rest)
3. Fallback → navigate(/vi/...rest)
```

Sử dụng `<Navigate replace>` để không tạo history entry cho intermediate redirect.

Sau task này:
- `/` → redirect theo chain (vd `/vi/`, `/ko/`, `/en/`)
- `/about` → redirect tới `/{resolved-lang}/about`
- `/xyz` → redirect tới `/{resolved-lang}/xyz` (sau đó route catch-all hoặc 404)

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/App.tsx` — sau task-02 đã có `:lang` route, RootRedirect bổ sung
- `src/app/components/LocalizedShell.tsx` — pattern Navigate + replace
- `src/app/components/ScrollToHash.tsx` — pattern wrapper component dùng useLocation
- `CONTEXT.md` — Language Resolution Chain, Root Redirect, Default Language, Supported Languages

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Stories 2, 3, 4, 10)

## Key interfaces (durable contracts)

- `src/app/components/RootRedirect.tsx`:
  - Reads `useLocation()` để get `pathname` + `search` + `hash`
  - Strips leading `/` từ pathname để tính `restPath`
  - Pure function `resolveLanguage(): 'vi'|'en'|'ko'`:
    1. Check `localStorage.getItem('preferred_lang')`, return nếu thuộc Supported Languages
    2. Else check `navigator.language` prefix match
    3. Else return `'vi'`
  - Return `<Navigate to={'/' + resolved + '/' + restPath + search + hash} replace />`

- Route mount trong `App.tsx`:
  ```tsx
  <Route path="/" element={<RootRedirect />} />
  <Route path="/:lang" element={<LocalizedShell />}> ... </Route>
  <Route path="*" element={<RootRedirect />} />
  ```

  Order matters: `:lang` chính xác phải đứng trước catch-all để URL như `/vi/`
  match LocalizedShell, không hit `*`.

## Acceptance criteria

- [ ] `RootRedirect.tsx` exists với resolution chain logic
      verify: `test -f src/app/components/RootRedirect.tsx && grep -cE "localStorage|navigator\.language|preferred_lang" src/app/components/RootRedirect.tsx` → ≥3

- [ ] Mount tại `/` và `*` trong App.tsx
      verify: `grep -cE "RootRedirect" src/app/App.tsx` → ≥2

- [ ] Manual QA: `/` redirect → `/vi/` (clear localStorage trước test)
      verify: `pnpm dev` → DevTools clear `preferred_lang` → `http://localhost:5173/` → URL bar chuyển `/vi/`

- [ ] Manual QA: `/about` redirect → `/vi/about`
      verify: `pnpm dev` → `http://localhost:5173/about`

- [ ] Manual QA: trình duyệt locale `ko-*` → `/` redirect tới `/ko/`
      verify: `pnpm dev` + DevTools → Sensors → Language `ko-KR` → clear localStorage → `/`

- [ ] Manual QA: localStorage `preferred_lang=en` → `/` redirect tới `/en/` dù navigator.language là vi
      verify: `pnpm dev` + DevTools set `localStorage.preferred_lang = 'en'` → `/`

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- LanguageSwitcher UI → task 04
- Update navigator.language detection via `i18next-browser-languagedetector` builtin → có thể dùng builtin của lib thay vì custom chain. Nếu dùng builtin, RootRedirect chỉ cần đọc `i18n.language` sau detector chạy. Tuỳ implementation chọn — kết quả end-to-end phải match Resolution Chain.

## Implementation notes

- React Router v7 có `<Navigate replace state={{...}}>` — dùng `replace` để back button không loop về `/`.
- Có thể dùng `i18next-browser-languagedetector` builtin detector — nếu cấu hình `detection.order: ['path','localStorage','navigator']`, sau khi i18next init thì `i18n.language` đã là resolved value. RootRedirect chỉ cần `i18n.language` + Navigate.
- Recommend approach: dùng builtin detector (đã setup task-01) → giảm code custom, single source of truth.
- Edge case: URL `/` thì `restPath` = '' → Navigate target `'/vi/'` (có trailing slash OK).
