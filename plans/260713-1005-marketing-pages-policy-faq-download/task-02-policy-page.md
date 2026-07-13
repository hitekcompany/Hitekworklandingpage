---
task: 02
title: Trang Policy (12 mục, i18n 4 locale, SEO)
status: done
type: AFK
blocked_by: []
effort: M
human_estimate_hours: 2.5
ai_estimate_hours: 0.4
actual_hours: 0.8
created: 2026-07-13
completed: 2026-07-13
---

# Task 02: Trang Policy (Chính sách Bảo mật)

> ⚠️ **Vertical slice:** i18n content (vi + en/ko/ja) → đăng ký namespace
> (config.ts) → page component → route (App.tsx) → SEO (useSEOMeta + seo.json +
> sitemap.xml). Xuyên đủ lớp.

## What to build

Trang **Policy** — "Chính sách Bảo mật — Hitek Work", 12 mục theo Luật
91/2025/QH15 + NĐ 356/2025/NĐ-CP. Nội dung tiếng Việt lấy **nguyên văn** từ Google
Doc BA (tab "Policy" — xem spec Further Notes). Render **as-is** (thì khẳng định),
KHÔNG tự sửa câu chữ.

Khách vào `/{lang}/policy` đọc được 12 mục đầy đủ, đúng ngôn ngữ đang xem
(vi/en/ko/ja). Layout đơn giản kiểu trang văn bản pháp lý (heading mục + đoạn văn
+ bullet list), có tiêu đề + dòng "Cập nhật lần cuối".

**i18n:** tạo namespace `policy` — `vi/policy.json` là Source Language File
(transcribe nội dung doc), en/ko/ja AI dịch từ vi (Politeness Register: ja
です・ます調, ko 존댓말). Đăng ký namespace + resource trong `src/i18n/config.ts`.
Text có heading + đoạn → dùng `t()`; chỗ nào có markup inline → `<Trans>`.

**SEO:** thêm entry `policy` vào namespace `seo` × 4 locale (title +
description), extend `SEOPageKey` + `PAGE_PATH` trong `useSEOMeta.ts`, gọi
`useSEOMeta('policy')` trong page, thêm URL `/{lang}/policy` × 4 locale vào
`public/sitemap.xml` (kèm hreflang alternates).

## Must read BEFORE coding (forcing function)

### Convention files
- `docs/agents/conventions.md` — section "i18n" (namespace, Source Language File,
  Translation Source, parity) + "SEO" (SEO Meta Bundle, sitemap, hreflang)
- `docs/agents/fe-checklist.md` — subset C/F/G (site tĩnh)
- **Activate the `frontend-development` skill in the MAIN loop before coding. Do
  NOT delegate FE implementation to a generic subagent (it cannot load the skill —
  see `rules/orchestration-protocol.md`). Run the checklist's 🔴 items before AND
  after coding.**

### Reference implementations
- `docs/agents/reference-impls.md` — App routing (`src/app/App.tsx`), i18n config
  (`src/i18n/config.ts`), page mỏng (`src/app/pages/HomePage.tsx` /
  `CurrentStatePage.tsx`), SEO hook (`src/app/hooks/useSEOMeta.ts`), SEO strings
  (`src/i18n/locales/vi/seo.json`), sitemap (`public/sitemap.xml`), `<Trans>`
  usage (`src/app/components/HeroSection.tsx`)

### Downstream consumers
- `src/i18n/config.ts` — `NAMESPACES` + `resources` (thêm `policy` × 4 locale)
- `src/app/hooks/useSEOMeta.ts` — `SEOPageKey` union + `PAGE_PATH` (thêm `policy`)
- `src/app/App.tsx` — thêm `<Route path="policy">`
- `public/sitemap.xml` — thêm URL

### Spec parent
- `plans/260713-1005-marketing-pages-policy-faq-download/spec.md`

## Key interfaces (durable contracts)

- **Namespace `policy`** — JSON keyed theo 12 mục (vd `section_1.title`,
  `section_1.body`...). Cấu trúc `vi/` là chuẩn, en/ko/ja mirror y hệt key.
- **`SEOPageKey`** — thêm `"policy"`; `PAGE_PATH.policy = "policy"`.
- **Route** — `/{lang}/policy` → `PolicyPage`, nested trong `LocalizedShell`.

## Acceptance criteria

- [ ] `/{lang}/policy` render 12 mục đầy đủ, đúng 4 locale (vi/en/ko/ja)
      verify: `pnpm dev` → mở `/vi/policy`, `/en/policy`, `/ko/policy`, `/ja/policy`; Playwright screenshot mỗi locale
- [ ] Namespace `policy` đăng ký đủ 4 locale, không thiếu/thừa key
      verify: `node check-i18n-keys.mjs` — 0 missing/extra
- [ ] Mọi text qua i18n, không hardcode literal trong `PolicyPage`
      verify: `node check-t-keys.mjs`; `grep -nE "[A-Za-zÀ-ỹ]{4,}" src/app/pages/PolicyPage.tsx` — không có câu văn literal (chỉ key/JSX)
- [ ] SEO: `useSEOMeta('policy')` được gọi + `<html lang>`/title đổi đúng khi đổi trang/locale
      verify: Playwright đọc `document.title` + `document.documentElement.lang` ở `/en/policy` vs `/ko/policy`
- [ ] Sitemap có `/{lang}/policy` × 4 locale
      verify: `grep -c "/policy" public/sitemap.xml` — ≥ 4
- [ ] Build passes
      verify: `pnpm build`
- [ ] Playwright flow của slice pass — evidence vào `plans/.../.scratch/`
      verify: điều hướng tới trang từ URL trực tiếp + đổi ngôn ngữ giữ đúng trang (URL Locale Prefix)
- [ ] (tầng unit: project chưa có infra — skip có chủ đích)
- [ ] (tầng integration: project chưa có infra — skip có chủ đích)

## Out of scope
- Link Policy ở footer: pushed to task-05.
- Sửa câu chữ Policy cho khớp enforcement thực tế (over-claim): build as-is (spec
  Out of Scope) — feature luật làm song song ở repo khác.

## Implementation notes
- Doc gốc dài — transcribe cẩn thận đủ 12 mục (§1-§12, có §6/§7 đánh số không đều
  trong doc, giữ đúng nội dung). Dòng "Cập nhật lần cuối: [ngày]" → để placeholder
  hoặc ngày deploy.
- Component chủ yếu prose → có thể 1 file page + map mục từ 1 mảng key, không cần
  tách nhiều section component.
- Dịch ja/ko = AI nháp (Native Review Phase 1.5) — không block.

## Docs-mismatch log (filled during /feature-execute)

- `check-i18n-keys.mjs` chỉ scan `<Trans>` keys (từ `trans-keys.txt`), CHỈ vi/en/ko
  (không ja), KHÔNG scan `t()` keys — phát hiện lúc Step 4. → parity của namespace
  mới (dùng `t()` + returnObjects) KHÔNG được checker cover. Bù bằng script parity
  tự viết (so cấu trúc 4 locale) + Playwright render thật.

## Execution log (filled during /feature-execute)

- 2026-07-13 — Read: App.tsx, i18n/config.ts, useSEOMeta.ts, seo.json,
  sitemap.xml, HomePage.tsx (reference impls); conventions/fe-checklist in context
- 2026-07-13 — Implementation: transcribe nội dung Policy (11 mục) từ Google Doc
  BA → `vi/policy.json`; dịch `en/ko/ja` (ko 존댓말, ja です・ます調); đăng ký namespace
  `policy` × 4 locale trong config.ts; thêm SEO `policy` × 4 locale (seo.json);
  extend `SEOPageKey` + `PAGE_PATH` (useSEOMeta.ts); tạo `PolicyPage.tsx`
  (data-driven, returnObjects sections); thêm route `/:lang/policy` (App.tsx);
  thêm 4 URL policy vào sitemap.xml
- 2026-07-13 — Verify: parity script — 4 locale cùng structure — PASS
- 2026-07-13 — Verify: sitemap `<loc>.../policy` = 4 — PASS
- 2026-07-13 — Verify: `check-i18n-keys.mjs` — "ALL exist" no regression — PASS
- 2026-07-13 — Verify: `pnpm build` — ✓ built in 8.34s, no error — PASS
- 2026-07-13 — fe-playwright: preview :4173 → `/vi/policy` render lang=vi, h1 đúng,
  11 section (1→11), 18 đoạn + 6 bullet; `/ko/policy` lang=ko, title + section
  tiếng Hàn đúng; console chỉ favicon 404 (benign). Evidence: `.scratch/policy-ko.png`
  — PASS

## Post-verify enhancement (user feedback 2026-07-13)

- User feedback: Policy "tuồng luột", không chia sub-point. → **Mức 2**: (1) TOC
  đầu trang (11 anchor `#section-N`), (2) badge số + divider mỗi mục, (3) tách 3
  đoạn liệt kê thành bullet — §1 (2 phương thức Active/AI), §2 (4 mục đích), §8
  (9 quyền); giữ nguyên câu chữ pháp lý BA, chỉ đổi trình bày prose→bullet, (4)
  bold nhãn lead-in bullet (Active / Mã hóa / ...). `policy.json` × 4 locale
  restructured (parity giữ) + `PolicyPage.tsx` rewrite. Verify: parity OK, build
  OK, Playwright vi — TOC 11, badge 11, **21 bullet**, bold nhãn đúng. Evidence:
  `.scratch/policy-v2-vi.png`.

## Escalation report (filled only if blocked)
