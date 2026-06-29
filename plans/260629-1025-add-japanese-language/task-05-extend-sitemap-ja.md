---
task: 05
title: Mở rộng static sitemap.xml cho `ja`
status: pending
type: AFK
blocked_by: []
effort: S
human_estimate_hours: 1
ai_estimate_hours: 0.2
actual_hours: null
created: 2026-06-29
completed: null
---

# Task 05: Mở rộng static sitemap.xml cho `ja`

> ⚠️ **Vertical slice constraint:** single-artifact (public/sitemap.xml) theo
> capability SEO crawl. Không ép ≥3 layer — đây là file tĩnh viết tay.

## What to build

Mở rộng `public/sitemap.xml` (hiện 15 URL = 5 trang × 3 ngôn ngữ) lên **20 URL**
(5 trang × 4 ngôn ngữ) cho **Static Sitemap**:

1. Thêm 5 `<url>` block mới cho `/ja/`, `/ja/current-state`, `/ja/demo`,
   `/ja/pricing`, `/ja/about`.
2. Thêm `<xhtml:link rel="alternate" hreflang="ja" .../>` vào **mọi** `<url>`
   block (cả 15 cũ lẫn 5 mới).
3. `x-default` vẫn trỏ `vi` (Default Language) — không đổi.

Mỗi block sau khi xong có 5 alternate: vi, en, ko, **ja**, x-default(=vi).

## Must read BEFORE coding (forcing function)

> ⚠️ Anti-drift #1. `Read()` file. Reference = chính sitemap hiện tại.

### Convention / glossary

- `CONTEXT.md` — term **Static Sitemap**, **Hreflang Set**, **Canonical URL**

### Reference implementations

- `public/sitemap.xml` — pattern block `<url>` + `<xhtml:link>` alternates hiện có
- `src/app/hooks/useSEOMeta.ts` — đối chiếu `buildPageUrl` / danh sách 5 trang để
  ghép URL `/ja/*` đúng (home = `/ja/`, các trang = `/ja/{slug}`)

### Spec parent

- `plans/260629-1025-add-japanese-language/spec.md`

## Key interfaces (durable contracts)

- Base URL: `https://work.hitek.com.vn`
- 5 path: `/` (home), `/current-state`, `/demo`, `/pricing`, `/about`
- Mỗi `<url>` block: `<loc>` + 4 `hreflang` alternates (vi/en/ko/ja) + 1
  `hreflang="x-default"` (=vi)

## Acceptance criteria

- [ ] Tổng 20 URL block
      verify: `grep -c "<loc>" public/sitemap.xml` — kết quả = 20

- [ ] Mỗi block có alternate `ja` (20 lần)
      verify: `grep -c 'hreflang="ja"' public/sitemap.xml` — kết quả = 20

- [ ] 5 URL `/ja/*` tồn tại
      verify: `grep -cE '<loc>https://work.hitek.com.vn/ja/' public/sitemap.xml` — kết quả = 5

- [ ] XML well-formed (parse được)
      verify: `python -c "import xml.dom.minidom as m;m.parse('public/sitemap.xml');print('XML_OK')"` — in `XML_OK`

- [ ] Build passes (file trong public/ được copy nguyên)
      verify: `pnpm build`

## Out of scope

- hreflang trong `<head>` runtime: đã auto qua `useSEOMeta` (task-01) — KHÔNG làm ở đây
- Auto-generate sitemap: deferred Phase 2 (spec Out of Scope)

## Implementation notes

- Có thể chạy độc lập, không chờ task nào (file tĩnh). Nhưng về mặt logic chỉ có
  ý nghĩa khi `/ja/` đã live (task-01) → để cuối hoặc song song.
- Giữ thứ tự alternate nhất quán với block cũ (vi, en, ko, ja, x-default) cho dễ
  đọc/diff.

## Execution log (filled during /feature-execute)

## Escalation report (filled only if blocked)
