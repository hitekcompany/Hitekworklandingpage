---
title: Bổ sung tiếng Nhật (ja) vào tính năng đa ngôn ngữ
status: pending
created: 2026-06-29
spec: ./spec.md
total_tasks: 5
total_estimate_hours: 9
---

# Plan: Thêm tiếng Nhật (ja) — i18n ngôn ngữ thứ 4

Thêm `ja` ngang hàng en/ko (5 trang × 7 namespace), additive — `vi` vẫn Default +
`x-default`. Bản dịch AI draft (giọng です・ます調), giữ giá VND, font Noto Sans JP
qua `:lang()` CSS. Chi tiết quyết định: xem [spec.md](./spec.md) + `CONTEXT.md`.

## Phases (tasks)

| ID | Task | Type | Blocked by | Est | File ownership |
|----|------|------|-----------|-----|----------------|
| 01 | ✅ Wire `ja` as Supported Language | AFK | — | M | `config.ts`, `LanguageSwitcher.tsx`, `useSEOMeta.ts`, `RootRedirect.tsx`, tạo `locales/ja/*.json` |
| 02 | Japanese font rendering (`:lang()`) | AFK | — | S | `index.html`, `theme.css` |
| 03 | Dịch shared + Home + SEO | AFK | 01 | M | `ja/common.json`, `ja/seo.json`, `ja/home.json` |
| 04 | Dịch 4 trang còn lại (pricing giữ VND) | AFK | 01 | M | `ja/current-state.json`, `ja/demo.json`, `ja/pricing.json`, `ja/about.json` |
| 05 | Mở rộng sitemap.xml cho `ja` | AFK | — | S | `public/sitemap.xml` |

Tổng: 5 tasks · 3 M + 2 S · 100% AFK · ~9h human / ~1.4h AI.
File ownership KHÔNG chồng lấn → 02 và 05 có thể chạy song song với critical path.

## Dependency graph

```
01 (wire ja) ──┬──> 03 (translate shared+home+seo) ──> 04 (translate 4 pages)
               │
               └──> (03/04 cần 01 để render; ID order đảm bảo 03 trước 04)

02 (font)     ── độc lập ──> (chạy bất kỳ lúc nào)
05 (sitemap)  ── độc lập ──> (chạy bất kỳ lúc nào)
```

**Critical path:** `01 → 03 → 04` (3 tasks, ~7h human / ~1h AI).

## Mốc kiểm chứng (milestones)

- Sau **01**: `/ja/` chạy, switcher hiện `日本語`, hreflang tự có `ja`; nội dung
  còn là placeholder tiếng Việt (hợp lệ, chưa lỗi).
- Sau **01 + 02**: chữ Kanji render đúng kiểu chữ Nhật.
- Sau **03**: trang chủ `/ja/` + nav/footer + SEO meta toàn bộ là tiếng Nhật.
- Sau **04**: 100% 5 trang tiếng Nhật, giá vẫn VND.
- Sau **05**: sitemap 20 URL, crawler thấy phiên bản `ja`.

## Success criteria (từ spec)

- `/ja/` phủ đủ 5 trang tiếng Nhật, không lẫn chuỗi VN/EN.
- Switcher (desktop + mobile) có `日本語`, chuyển ngôn ngữ + lưu localStorage đúng.
- Auto-detect `navigator` `ja*` → `/ja/`.
- Hreflang Set + `og:locale=ja_JP` + canonical đúng trên trang `ja`.
- Kanji render bằng Noto Sans JP.
- `ja/*.json` key parity tuyệt đối với `vi/*.json`.
- sitemap.xml = 20 URL, mỗi URL có alternate `ja`.
- `pnpm build` xanh.

## Ràng buộc verify (project-specific)

- **Không có `lint`/`test` script** → gate cứng = `pnpm build` + key-parity
  (Python) + visual QA (Playwright MCP). Unit test (Vitest) defer Phase 1.5.
- **Không có `docs/agents/`** → "Must read" mỗi task trỏ `CONTEXT.md` + `spec.md`
  + code en/ko hiện có (reference-impl de-facto).

## Out of scope (từ spec)

Native human translation (Phase 1.5), JPY/multi-currency, lazy-load translation,
SSR pre-render, code-splitting, localized 404, auto-generate sitemap, đổi Default
Language.

## Next step

`/feature-execute` để AFK loop chạy tasks (01 → 03 → 04, kèm 02 + 05). Verify cuối
qua `/feature-verify`.
