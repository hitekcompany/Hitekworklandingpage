---
task: 14
title: Static sitemap.xml với 15 URL + hreflang alternates
status: pending
type: AFK
blocked_by: []
effort: S
human_estimate_hours: 0.5
ai_estimate_hours: 0.1
actual_hours: null
created: 2026-05-27
completed: null
---

# Task 14: Static sitemap.xml

> ⚠️ **Vertical slice:** public/sitemap.xml + vercel.json (nếu cần rewrite) + SEO discovery layer.

## What to build

Viết tay `public/sitemap.xml` liệt kê 15 URL canonical (5 page × 3 ngôn ngữ),
mỗi URL có 3 alternate hreflang link (cho 2 lang còn lại + self) tuân Google
sitemap multilingual format.

Base URL: **`https://work.hitek.com.vn`** (user confirmed).

Vite serves `public/sitemap.xml` tại `/sitemap.xml` root mặc định. Verify
trên dev server `http://localhost:5173/sitemap.xml` accessible.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- Google sitemap multilingual spec:
  https://developers.google.com/search/docs/specialty/international/localized-versions#sitemap
- `vercel.json` — đọc current rewrites, có thể không cần thay đổi (SPA rewrite catch-all KHÔNG conflict static files in public/)
- `CONTEXT.md` — Static Sitemap, Canonical URL, Hreflang Set, URL Locale Prefix

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (section "Sitemap.xml")

## Key interfaces (durable contracts)

- `public/sitemap.xml` format (XML namespace `xhtml` cho alternate link):
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">

    <url>
      <loc>https://work.hitek.com.vn/vi/</loc>
      <xhtml:link rel="alternate" hreflang="vi" href="https://work.hitek.com.vn/vi/" />
      <xhtml:link rel="alternate" hreflang="en" href="https://work.hitek.com.vn/en/" />
      <xhtml:link rel="alternate" hreflang="ko" href="https://work.hitek.com.vn/ko/" />
      <xhtml:link rel="alternate" hreflang="x-default" href="https://work.hitek.com.vn/vi/" />
    </url>

    <!-- Repeat for /en/, /ko/, /vi/current-state, ... 15 total -->

  </urlset>
  ```

- 15 URL canonical pattern:
  - `https://work.hitek.com.vn/vi/`
  - `https://work.hitek.com.vn/en/`
  - `https://work.hitek.com.vn/ko/`
  - `https://work.hitek.com.vn/vi/current-state`
  - `https://work.hitek.com.vn/en/current-state`
  - `https://work.hitek.com.vn/ko/current-state`
  - `https://work.hitek.com.vn/vi/demo`
  - `https://work.hitek.com.vn/en/demo`
  - `https://work.hitek.com.vn/ko/demo`
  - `https://work.hitek.com.vn/vi/pricing`
  - `https://work.hitek.com.vn/en/pricing`
  - `https://work.hitek.com.vn/ko/pricing`
  - `https://work.hitek.com.vn/vi/about`
  - `https://work.hitek.com.vn/en/about`
  - `https://work.hitek.com.vn/ko/about`

## Acceptance criteria

- [ ] `public/sitemap.xml` exists
      verify: PowerShell: `Test-Path public/sitemap.xml`

- [ ] Đúng 15 `<loc>` tags (5 page × 3 lang)
      verify: PowerShell: `(Select-String -Path public/sitemap.xml -Pattern "<loc>").Count` → 15

- [ ] Base URL `https://work.hitek.com.vn` xuất hiện trong file
      verify: `grep -c "work\.hitek\.com\.vn" public/sitemap.xml` → ≥45 (15 loc + 15×3 alternate hrefs = 60 hoặc cao hơn)

- [ ] Hreflang alternates đầy đủ (mỗi URL có 4 alternate: self + 2 lang + x-default = 4, tổng 15 × 4 = 60)
      verify: PowerShell: `(Select-String -Path public/sitemap.xml -Pattern "xhtml:link").Count` → ≥60

- [ ] Mỗi page có hreflang x-default trỏ về vi
      verify: `grep -cE "x-default.*\\/vi\\/" public/sitemap.xml` → 5

- [ ] XML well-formed (parse OK)
      verify: PowerShell: `[xml](Get-Content public/sitemap.xml -Raw)` → no error (sẽ throw nếu malformed)

- [ ] Manual QA: `http://localhost:5173/sitemap.xml` serve file
      verify: `pnpm dev` → curl `http://localhost:5173/sitemap.xml` hoặc browser direct

- [ ] Manual QA: Google Rich Results test parse OK
      verify (optional): copy XML content → https://search.google.com/test/rich-results — nice-to-have, không block

- [ ] Build passes (sitemap.xml stay in dist/ after build)
      verify: `pnpm build && test -f dist/sitemap.xml`

## Out of scope

- Auto-generate sitemap script (vd `vite-plugin-sitemap`) → defer Phase 2 per spec
- robots.txt — không thay đổi (current allows all crawl)
- Submit lên Google Search Console — manual step bởi user khi production deploy

## Implementation notes

- File template có thể generate qua script ngắn rồi paste output, nhưng đơn giản nhất là viết tay (60 hreflang link tags, copy-paste pattern).
- `<lastmod>` optional — có thể bỏ qua, hoặc thêm `<lastmod>2026-05-27</lastmod>` cho mỗi URL.
- `<priority>` optional — có thể thêm `<priority>1.0</priority>` cho home, `0.8` cho các page khác.
- Path home: dùng `/vi/` thay vì `/vi` (consistency với URL Locale Prefix có trailing slash convention — verify với LocalizedShell behavior).
- Nếu Vite không tự serve `sitemap.xml` qua `/sitemap.xml`, check `vercel.json` rewrites — SPA catch-all KHÔNG được match static `.xml` file. Vite + Vercel default OK với `public/` folder.
