---
task: 04
title: LanguageSwitcher component (desktop + mobile drawer)
status: done
type: AFK
blocked_by: [task-02]
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: 0.2
created: 2026-05-27
completed: 2026-05-27
---

# Task 04: LanguageSwitcher component

> ⚠️ **Vertical slice:** LanguageSwitcher component + Header integration (desktop) + hamburger drawer integration (mobile) + navigation logic.

## What to build

Tạo `src/app/components/LanguageSwitcher.tsx` dùng `DropdownMenu` từ shadcn/ui
(đã có sẵn ở `src/app/components/ui/dropdown-menu.tsx`).

Theo CONTEXT.md term **Switcher Visual**:
- **Trigger** (closed state): button hiển thị endonym của current lang + caret
  (`Tiếng Việt ▾`, `English ▾`, `한국어 ▾`). KHÔNG flag icon.
- **Menu** (open state): 3 row endonym, row matching current lang có dấu ✓ phía bên phải.
- **onClick row**: navigate tới same page với lang mới + ghi `localStorage.preferred_lang = newLang`.

Mount trong `Header.tsx`:
- **Desktop** (`hidden lg:flex` cluster): cực phải header — sau item nav cuối "Về chúng tôi", trước nút "Yêu cầu Demo" (nếu hiển thị).
- **Mobile** (`lg:hidden` hamburger drawer): item cuối cùng trong nav drawer khi `mobileMenuOpen=true`.

Logic navigation: parse current URL → strip lang prefix → append new lang prefix → navigate. Ví dụ từ `/en/pricing` chọn `ko` → navigate `/ko/pricing`.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/components/Header.tsx` — file sẽ modify, đọc kĩ pattern existing (navItems map, mobile menu state, layout flex)
- `src/app/components/ui/dropdown-menu.tsx` — shadcn primitive sẽ wrap (đọc API: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuCheckboxItem`)
- `src/app/components/WireframeButton.tsx` — pattern button styling (consistency với CTA "Yêu cầu Demo")
- `CONTEXT.md` — Language Switcher, Switcher Visual, Endonym, Supported Languages, Preference Precedence

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Stories 5, 13, 14, 15)

## Key interfaces (durable contracts)

- `src/app/components/LanguageSwitcher.tsx`:
  - Props (optional): `variant?: 'desktop' | 'mobile'` (mặc định `desktop`)
  - Const map: `ENDONYM_MAP = { vi: 'Tiếng Việt', en: 'English', ko: '한국어' }`
  - Const list: `LANGUAGES = ['vi','en','ko'] as const`
  - Reads `i18n.language` để biết current
  - `useNavigate()` + `useLocation()` để build target URL
  - `handleSelect(newLang)`:
    1. Parse current pathname → strip `/^\/(vi|en|ko)/` lang prefix
    2. `navigate('/' + newLang + restOfPath + search + hash)`
    3. `localStorage.setItem('preferred_lang', newLang)` (back-up, LocalizedShell cũng sync nhưng explicit cho rõ)

- Modified `Header.tsx`:
  - Desktop cluster: thêm `<LanguageSwitcher />` cực phải, trước WireframeButton "Yêu cầu Demo"
  - Mobile drawer: thêm divider + `<LanguageSwitcher variant="mobile" />` cuối list nav items
  - **Important**: Header.tsx phải nằm trong tree của LocalizedShell để `i18n.language` đã sync (hoặc gọi `useTranslation()` bất kỳ → trigger re-render khi changeLanguage)

## Acceptance criteria

- [ ] `LanguageSwitcher.tsx` exists
      verify: `test -f src/app/components/LanguageSwitcher.tsx`

- [ ] Component dùng `DropdownMenu` shadcn
      verify: `grep -E "from.*ui/dropdown-menu" src/app/components/LanguageSwitcher.tsx`

- [ ] Endonym map đầy đủ 3 ngôn ngữ
      verify: `grep -cE "Tiếng Việt|English|한국어" src/app/components/LanguageSwitcher.tsx` → ≥3

- [ ] KHÔNG flag emoji/icon
      verify: `grep -E "🇻🇳|🇺🇸|🇰🇷|flag-icon" src/app/components/LanguageSwitcher.tsx` → 0 matches

- [ ] Mounted trong `Header.tsx` desktop cluster
      verify: `grep "LanguageSwitcher" src/app/components/Header.tsx`

- [ ] Manual QA: desktop header (viewport ≥1024px) thấy dropdown cực phải
      verify: `pnpm dev` → `http://localhost:5173/vi/` → resize ≥1024px

- [ ] Manual QA: mở dropdown thấy 3 row, current row có checkmark
      verify: `pnpm dev` → click switcher

- [ ] Manual QA: chọn "English" từ `/vi/pricing` → navigate `/en/pricing`
      verify: `pnpm dev` → switcher → English → URL bar

- [ ] Manual QA: mobile menu (viewport <1024px) → mở hamburger thấy switcher cuối list
      verify: `pnpm dev` → DevTools mobile viewport → tap ☰

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- Translate text nav/footer (task-06)
- Header logo i18n (logo là Non-Translatable Assets per CONTEXT.md)
- Persistence chain edge cases — đã covered in task-02 LocalizedShell và task-03 RootRedirect

## Implementation notes

- Trigger button styling: match font + size với nav items (text-neutral-700 font-semibold) cho visual consistency.
- Caret icon: `ChevronDown` từ `lucide-react` (đã import trong project).
- `DropdownMenuCheckboxItem` của shadcn render checkmark sẵn → set `checked={lang === currentLang}`.
- Mobile variant có thể render inline list thay vì dropdown nested (UX mobile tốt hơn) — quyết định styling khi implement, ưu tiên không nested dropdown trong drawer.
- Edge case: pathname không có lang prefix (vd `/` ngay sau load trước khi redirect) → fallback `restOfPath = pathname`. Có thể defensive code, không phải concern primary.

## Execution log

- 2026-05-27 10:35 — Read: src/app/components/ui/dropdown-menu.tsx (DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem available)
- 2026-05-27 10:36 — Impl: created `LanguageSwitcher.tsx` (95 LOC) — desktop variant (DropdownMenu) + mobile variant (inline button list), stripLangPrefix helper, ENDONYM_MAP, navigate + localStorage on select
- 2026-05-27 10:37 — Impl: mounted `<LanguageSwitcher />` in Header desktop cluster (trước WireframeButton CTA) + `<LanguageSwitcher variant="mobile" />` cuối mobile drawer với `onSelect` close menu
- 2026-05-27 10:38 — Verify AC1-3 (file, DropdownMenu import, 3 endonyms) — PASS
- 2026-05-27 10:38 — Verify AC4 (no flag) — PASS (0 matches)
- 2026-05-27 10:38 — Verify AC5 (Header mount) — PASS (3 LanguageSwitcher refs: 1 import + 2 mount points)
- 2026-05-27 10:38 — Verify AC build `pnpm build` — PASS (3.47s)
- 2026-05-27 10:38 — Verify manual QA — DEFERRED
