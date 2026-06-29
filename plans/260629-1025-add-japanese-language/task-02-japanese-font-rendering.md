---
task: 02
title: Japanese font rendering (Noto Sans JP + :lang CSS)
status: done
type: AFK
blocked_by: []
effort: S
human_estimate_hours: 1
ai_estimate_hours: 0.2
actual_hours: 0.1
created: 2026-06-29
completed: 2026-06-29
---

# Task 02: Japanese font rendering (Noto Sans JP + `:lang()` CSS)

> ⚠️ **Vertical slice constraint:** touches font loading (index.html) +
> presentation layer (theme.css) — đủ để chữ Nhật render đúng glyph end-to-end.
> Đây là slice single-capability (font), không ép ≥3 layer kiểu backend.

## What to build

Đảm bảo chữ Kanji (Hán tự) trên trang tiếng Nhật hiển thị đúng **kiểu chữ Nhật**,
không bị render theo glyph Hàn (vấn đề Han unification). Load thêm `Noto Sans JP`
từ Google Fonts và dùng CSS `:lang()` để mỗi ngôn ngữ pick đúng font CJK của nó —
tận dụng `document.documentElement.lang` mà `useSEOMeta` đã set theo từng trang.

Sau task: trên trang `/ja/` chữ Kanji dùng `Noto Sans JP`; trên trang `/ko/` chữ
Hangul vẫn dùng `Noto Sans KR`; trang vi/en không đổi.

## Must read BEFORE coding (forcing function)

> ⚠️ Anti-drift #1. `Read()` từng file. Reference-impl = font setup hiện có.
>
> **FE task:** activate skill `frontend-development` trong MAIN loop. KHÔNG
> delegate cho generic subagent.

### Convention / glossary

- `CONTEXT.md` — term **Font Stack** (đã cập nhật cho cách `:lang()` + Han
  unification)

### Reference implementations

- `index.html` — dòng `<link>` Google Fonts hiện tại (Noto Sans + Noto Sans KR)
- `src/styles/theme.css` — biến `--font-sans` hiện tại

### Spec parent

- `plans/260629-1025-add-japanese-language/spec.md`

## Key interfaces (durable contracts)

- Google Fonts `<link>` trong `index.html` — thêm family `Noto+Sans+JP:wght@400;500;700`
- Base `--font-sans` (theme.css) — giữ Latin/Vietnamese: `"Noto Sans", system-ui, -apple-system, sans-serif`
- CSS rule mới (theme.css):
  - `:lang(ja) { font-family: "Noto Sans JP", "Noto Sans", system-ui, sans-serif; }`
  - `:lang(ko) { font-family: "Noto Sans KR", "Noto Sans", system-ui, sans-serif; }`
- (vi/en thừa hưởng base — không cần rule riêng)

## Acceptance criteria

- [ ] `Noto Sans JP` được load trong index.html
      verify: `grep -E "Noto\+Sans\+JP" index.html`

- [ ] CSS `:lang(ja)` + `:lang(ko)` tồn tại
      verify: `grep -E ':lang\(ja\)' src/styles/theme.css && grep -E ':lang\(ko\)' src/styles/theme.css`

- [ ] Build passes
      verify: `pnpm build`

- [ ] (Behavioral) Trên `/ja/` computed `font-family` của body text bắt đầu bằng
      "Noto Sans JP"; trên `/ko/` bắt đầu bằng "Noto Sans KR"
      verify: `pnpm dev` → Playwright MCP navigate `/ja/`, eval
      `getComputedStyle(document.body).fontFamily`; lặp lại `/ko/`

## Out of scope

- Đăng ký ngôn ngữ `ja` (config/switcher): task-01
- Nội dung dịch: task-03, task-04
- Lazy-load font theo lang: deferred (spec Out of Scope — load tất cả)

## Implementation notes

- `:lang()` chọn theo thuộc tính `lang` của `<html>` (useSEOMeta set qua
  `document.documentElement.lang = lang`). Có thể có flash nhỏ trước khi effect
  chạy — chấp nhận được cho landing page.
- `Noto Sans JP` KHÔNG chứa Hangul → không ảnh hưởng trang KO dù có load chung.
- Giữ `display=swap` + `preconnect` như link hiện tại.

## Execution log (filled during /feature-execute)

- 2026-06-29 — Read: index.html, src/styles/theme.css, CONTEXT.md (Font Stack)
- 2026-06-29 — Implementation: index.html load Noto Sans JP; theme.css base --font-sans → Latin/VN only; add :lang(ja)/:lang(ko) redefining --font-sans (robust vs Han unification + font-sans utilities)
- 2026-06-29 — Verify: grep Noto+Sans+JP + :lang(ja)/:lang(ko) — PASS (GREP_OK)
- 2026-06-29 — Verify: `pnpm build` — PASS (built in 2.50s)
- 2026-06-29 — Behavioral (computed font-family /ja/ vs /ko/) — DEFERRED to final consolidated Playwright QA

## Escalation report (filled only if blocked)
