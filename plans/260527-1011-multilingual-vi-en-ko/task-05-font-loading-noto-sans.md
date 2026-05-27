---
task: 05
title: Font loading (Noto Sans + Noto Sans KR) + theme chain
status: done
type: AFK
blocked_by: []
effort: S
human_estimate_hours: 0.5
ai_estimate_hours: 0.1
actual_hours: 0.05
created: 2026-05-27
completed: 2026-05-27
---

# Task 05: Font loading — Noto Sans + Noto Sans KR

> ⚠️ **Vertical slice:** index.html + theme.css + visual rendering layer (3 layers).

## What to build

Load `Noto Sans` (Latin + Vietnamese diacritics) + `Noto Sans KR` (Hangul)
unconditionally trong `index.html` qua Google Fonts để Korean text render đúng
glyph trên mọi OS (đặc biệt Linux server-side render screenshot / social
crawler). Cập nhật `src/styles/theme.css` để `--font-sans` chain ưu tiên
Noto Sans, fallback Noto Sans KR, system-ui, sans-serif.

Browser tự pick glyph theo Unicode range — Latin/Vietnamese dùng Noto Sans,
Hangul dùng Noto Sans KR. Không cần logic switch font theo lang.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `index.html` — file modify, đọc current state (chỉ có meta basic, chưa có font link)
- `src/styles/theme.css` — file modify, đọc current CSS variables (`:root` block)
- `src/styles/index.css` — pattern import chain (đảm bảo theme.css vẫn được include)
- `CONTEXT.md` — Font Stack term

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Story 9, section "Font loading")

## Key interfaces (durable contracts)

- `index.html` thêm trong `<head>` (trước `<style>` block hiện có):
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
  ```

- `src/styles/theme.css` `:root` block thêm hoặc cập nhật:
  ```css
  --font-sans: "Noto Sans", "Noto Sans KR", system-ui, -apple-system, sans-serif;
  ```

  Nếu file có sẵn `--font-sans` → overwrite. Nếu không có → thêm vào.

- Tailwind v4 (project dùng `@tailwindcss/vite`) tự pick `--font-sans` cho
  utility `font-sans` (default class) — không cần config thêm.

## Acceptance criteria

- [ ] `index.html` có preconnect + Google Fonts link
      verify: `grep -cE "fonts\.googleapis\.com|fonts\.gstatic\.com" index.html` → ≥2

- [ ] Cả Noto Sans + Noto Sans KR family request trong URL
      verify: `grep -E "Noto\+Sans.*Noto\+Sans\+KR" index.html`

- [ ] Weights 400, 500, 700 requested (match project usage: regular, medium, bold)
      verify: `grep -E "wght@400;500;700" index.html`

- [ ] `theme.css` có `--font-sans` chain bao gồm Noto Sans + Noto Sans KR
      verify: `grep -E "\"Noto Sans\".*\"Noto Sans KR\"" src/styles/theme.css`

- [ ] Manual QA: trang load, DevTools Network thấy fonts request 200 OK
      verify: `pnpm dev` → DevTools Network filter "fonts.gstatic.com"

- [ ] Manual QA: render Korean test text (vd thêm tạm `<div>한국어</div>` trong HomePage hoặc test bằng `/ko/` sau task-06+) → KHÔNG thấy tofu boxes
      verify: `pnpm dev` → visual inspect

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- Self-host fonts qua `@fontsource/noto-sans-kr` → defer Phase 2 (GDPR concern không phải primary)
- Variable font URL (woff2 modern) — Google Fonts CDN handles automatic format negotiation
- Lazy load Noto Sans KR chỉ khi `ko` active → spec đã quyết unconditional load

## Implementation notes

- `display=swap` quan trọng: tránh FOIT (Flash of Invisible Text) trước khi font load.
- 3 weights (400/500/700) đủ cover usage hiện tại của project (kiểm Tailwind classes `font-medium`, `font-bold`). Nếu add nhiều weight hơn = tăng bandwidth không cần.
- Có thể test font load qua console: `document.fonts.check('1em "Noto Sans KR"')` → `true` sau load.
- Performance impact: ~150-250KB first paint, cached after. Acceptable per spec.
