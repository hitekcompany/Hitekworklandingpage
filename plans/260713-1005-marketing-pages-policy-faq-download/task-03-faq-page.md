---
task: 03
title: Trang FAQ (7 nhóm accordion, i18n 4 locale, SEO)
status: done
type: AFK
blocked_by: []
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.4
actual_hours: 0.6
created: 2026-07-13
completed: 2026-07-13
---

# Task 03: Trang FAQ

> ⚠️ **Vertical slice:** i18n content (vi + en/ko/ja) → namespace (config.ts) →
> page component (reuse Accordion) → route (App.tsx) → SEO (useSEOMeta + seo.json
> + sitemap.xml).

## What to build

Trang **FAQ** — câu hỏi thường gặp, gom **7 nhóm** (Getting Started · Cách HW ghi
nhận hoạt động · Đồng ý & Quyền riêng tư · Quản lý & Phân quyền · Cài đặt · Tài
khoản & Đăng nhập — doc gốc thiếu "Section 5", render đúng những gì có). Nội dung
tiếng Việt lấy nguyên văn từ Google Doc BA (tab "FAQ").

Mỗi câu hỏi là 1 **accordion item gập/mở** (reuse `src/app/components/ui/
accordion.tsx` — Radix, KHÔNG dựng mới). Gom theo 7 nhóm (heading nhóm + list
accordion). Khách vào `/{lang}/faq` mở đúng câu cần, đủ 4 locale.

**i18n:** namespace `faq` — `vi/faq.json` là Source Language File (cấu trúc theo
nhóm → mảng Q&A), en/ko/ja AI dịch. Đăng ký trong `config.ts`.

**SEO:** entry `faq` vào `seo` × 4 locale, extend `SEOPageKey` + `PAGE_PATH`, gọi
`useSEOMeta('faq')`, thêm URL `/{lang}/faq` × 4 locale vào `sitemap.xml`.

## Must read BEFORE coding (forcing function)

### Convention files
- `docs/agents/conventions.md` — "i18n" + "SEO" + "Styling" (reuse ui primitives)
- `docs/agents/fe-checklist.md` — subset C/F/G
- **Activate the `frontend-development` skill in the MAIN loop before coding. Do
  NOT delegate FE implementation to a generic subagent (it cannot load the skill —
  see `rules/orchestration-protocol.md`). Run the checklist's 🔴 items before AND
  after coding.**

### Reference implementations
- `docs/agents/reference-impls.md` — Accordion (`src/app/components/ui/
  accordion.tsx`), App routing, i18n config, page mỏng, useSEOMeta, seo.json,
  sitemap

### Downstream consumers
- `src/i18n/config.ts` — thêm `faq` × 4 locale
- `src/app/hooks/useSEOMeta.ts` — `SEOPageKey` + `PAGE_PATH` (thêm `faq`)
- `src/app/App.tsx` — `<Route path="faq">`
- `public/sitemap.xml`

### Spec parent
- `plans/260713-1005-marketing-pages-policy-faq-download/spec.md`

## Key interfaces (durable contracts)

- **Namespace `faq`** — cấu trúc theo 7 nhóm; mỗi nhóm có `title` + mảng
  `items: [{q, a}]`. Component map nhóm → heading + Accordion; item → AccordionItem.
- **`SEOPageKey`** — thêm `"faq"`; `PAGE_PATH.faq = "faq"`.
- **Route** — `/{lang}/faq` → `FaqPage`.

## Acceptance criteria

- [ ] `/{lang}/faq` render 7 nhóm, mỗi câu là accordion gập/mở được, đủ 4 locale
      verify: `pnpm dev` → mở `/vi/faq`; Playwright click 1 item → nội dung mở/đóng; screenshot 4 locale
- [ ] Reuse Accordion có sẵn (không dựng component accordion mới)
      verify: `grep -rn "components/ui/accordion" src/app/pages/FaqPage.tsx` — có import; không có file accordion mới trong pages
- [ ] Namespace `faq` đủ 4 locale, parity sạch
      verify: `node check-i18n-keys.mjs`
- [ ] Không hardcode text trong component
      verify: `node check-t-keys.mjs`
- [ ] SEO đúng + sitemap có `/{lang}/faq` × 4
      verify: Playwright `document.title`/`lang` ở 2 locale; `grep -c "/faq" public/sitemap.xml` ≥ 4
- [ ] Build passes
      verify: `pnpm build`
- [ ] Playwright flow của slice pass — evidence vào `plans/.../.scratch/`
      verify: mở trang + gập/mở accordion + đổi ngôn ngữ giữ trang
- [ ] (tầng unit: project chưa có infra — skip có chủ đích)
- [ ] (tầng integration: project chưa có infra — skip có chủ đích)

## Out of scope
- Link FAQ ở footer: pushed to task-05.

## Implementation notes
- Doc FAQ nhảy số nhóm 4→6 (thiếu 5) — KHÔNG bịa nhóm 5, render đúng nhóm có.
- Radix Accordion cho phép `type="single"` (mở 1 lúc 1) hoặc `multiple` — chọn
  `single collapsible` cho gọn (bám design trang hiện có).

## Docs-mismatch log (filled during /feature-execute)

- Spec nói "7 nhóm" nhưng doc FAQ thực tế chỉ **6 nhóm** (đánh số 1,2,3,4,6,7 —
  thiếu nhóm 5). Render đúng 6 nhóm có, KHÔNG bịa nhóm 5.

## Execution log (filled during /feature-execute)

- 2026-07-13 — Read: ui/accordion.tsx (reuse), reference impls (config, useSEOMeta,
  App, sitemap); conventions/fe-checklist in context
- 2026-07-13 — Implementation: transcribe FAQ 6 nhóm / 26 Q&A từ Google Doc BA →
  `vi/faq.json`; dịch en/ko/ja (ko 존댓말, ja です・ます調); đăng ký namespace `faq` ×
  4 locale (config.ts); SEO `faq` × 4 (seo.json) + SEOPageKey/PAGE_PATH; tạo
  `FaqPage.tsx` reuse `ui/accordion` (type=single collapsible, 1 Accordion/nhóm);
  route `/:lang/faq`; sitemap 4 URL faq
- 2026-07-13 — Verify: faq parity 4 locale — PASS; sitemap `/faq` = 4 — PASS
- 2026-07-13 — Verify: `pnpm build` — ✓ built in 2.98s — PASS
- 2026-07-13 — fe-playwright: preview :4173 → `/en/faq` lang=en, 6 nhóm, 26
  accordion item; **real click "What is Hitek Work?" → state open, answer hiện**;
  console 2 error = clutch.co badge iframe X-Frame-Options (component có sẵn,
  benign). Evidence: `.scratch/faq-en.png` — PASS

## Escalation report (filled only if blocked)
