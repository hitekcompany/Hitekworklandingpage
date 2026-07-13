---
task: 04
title: Trang Download (4 nút OS + hướng dẫn unsigned, config URL, frame-first, SEO)
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

# Task 04: Trang Download

> ⚠️ **Vertical slice:** i18n content (vi + en/ko/ja) → namespace (config.ts) →
> config URL file → page component → route (App.tsx) → SEO (useSEOMeta + seo.json
> + sitemap.xml).

## What to build

Trang **Download** — tải Desktop App Hitek Work. **4 nút tải** theo OS/kiến trúc:
**Windows · macOS (Intel x64) · macOS (Apple Silicon arm64) · Linux**. Mỗi nút kèm
dòng gợi ý "chọn bản này nếu máy bạn là...". Kèm phần **hướng dẫn bỏ qua cảnh báo
unsigned** (Windows SmartScreen "More info → Run anyway"; macOS "Open Anyway" trong
System Settings > Privacy & Security; Linux `chmod +x` / cách chạy tùy format) —
tự soạn (doc không có).

**Frame-first:** trang render đủ layout dù URL file **chưa có** (hạng mục D chưa
build). Link tải lấy từ **config tập trung** (`DOWNLOAD_URLS` — cùng chỗ
`DEMO_LIVE_URL` task-01); giá trị placeholder tới khi D xong chỉ thay URL. Nút khi
chưa có URL → disabled hoặc "Sắp có" (chọn 1 kiểu, nhất quán).

**i18n:** namespace `download` — `vi/download.json` (label nút, dòng gợi ý, hướng
dẫn từng OS), en/ko/ja AI dịch. Đăng ký `config.ts`.

**SEO:** entry `download` vào `seo` × 4 locale, extend `SEOPageKey`+`PAGE_PATH`,
gọi `useSEOMeta('download')`, thêm URL `/{lang}/download` × 4 locale vào sitemap.

## Must read BEFORE coding (forcing function)

### Convention files
- `docs/agents/conventions.md` — "Kiến trúc" (config URL tập trung) + "i18n" +
  "SEO" + "Styling"
- `docs/agents/fe-checklist.md` — subset C/F/G
- **Activate the `frontend-development` skill in the MAIN loop before coding. Do
  NOT delegate FE implementation to a generic subagent (it cannot load the skill —
  see `rules/orchestration-protocol.md`). Run the checklist's 🔴 items before AND
  after coding.**

### Reference implementations
- `docs/agents/reference-impls.md` — App routing, i18n config, page mỏng,
  useSEOMeta, seo.json, sitemap, UI button primitives (`components/ui/*`)
- Config nền từ task-01 (`DEMO_LIVE_URL` module) — thêm `DOWNLOAD_URLS` vào cùng chỗ

### Downstream consumers
- `src/i18n/config.ts` — thêm `download` × 4 locale
- `src/app/hooks/useSEOMeta.ts` — `SEOPageKey` + `PAGE_PATH` (thêm `download`)
- `src/app/App.tsx` — `<Route path="download">`
- `public/sitemap.xml`
- App config module (task-01) — thêm `DOWNLOAD_URLS`

### Spec parent
- `plans/260713-1005-marketing-pages-policy-faq-download/spec.md`

## Key interfaces (durable contracts)

- **`DOWNLOAD_URLS`** — object trong config: `{ windows, macIntel, macSilicon,
  linux }`, mỗi value là URL file trên server (placeholder tới khi D xong, vd
  `""` hoặc `#`). Nút disabled/"Sắp có" khi value rỗng.
- **Namespace `download`** — `buttons.{os}.label` + `buttons.{os}.hint` +
  `instructions.{os}` (heading + steps).
- **`SEOPageKey`** — thêm `"download"`; `PAGE_PATH.download = "download"`.
- **Route** — `/{lang}/download` → `DownloadPage`.

## Acceptance criteria

- [ ] `/{lang}/download` render 4 nút (Win/macIntel/macSilicon/Linux) + hint +
      hướng dẫn unsigned từng OS, đủ 4 locale
      verify: `pnpm dev` → mở `/vi/download`; Playwright screenshot 4 locale, đếm 4 nút
- [ ] Link tải lấy từ config, KHÔNG hardcode literal trong component; nút xử lý
      URL rỗng (disabled/"Sắp có")
      verify: `grep -rn "DOWNLOAD_URLS" src/` — ở config + page; `grep -nE "https?://[^\"']+\.(exe|dmg|pkg|AppImage|deb)" src/app/pages/DownloadPage.tsx` — rỗng (không literal file URL)
- [ ] Namespace `download` đủ 4 locale, parity sạch
      verify: `node check-i18n-keys.mjs`
- [ ] Không hardcode text trong component
      verify: `node check-t-keys.mjs`
- [ ] SEO đúng + sitemap có `/{lang}/download` × 4
      verify: Playwright `document.title`/`lang`; `grep -c "/download" public/sitemap.xml` ≥ 4
- [ ] Build passes
      verify: `pnpm build`
- [ ] Playwright flow của slice pass — evidence vào `plans/.../.scratch/`
      verify: mở trang + đổi ngôn ngữ giữ trang + nút trạng thái đúng khi URL rỗng
- [ ] (tầng unit: project chưa có infra — skip có chủ đích)
- [ ] (tầng integration: project chưa có infra — skip có chủ đích)

## Out of scope
- Build file Desktop App 3+ OS: hạng mục D (feature riêng) — task này chỉ khung +
  config URL placeholder.
- Link Download ở header nav + footer: pushed to task-05.

## Implementation notes
- Hướng dẫn unsigned viết ngắn gọn từng OS; Linux format tùy file D ra
  (`.AppImage` phổ biến → `chmod +x` rồi chạy; `.deb` → `dpkg -i`).
- Reuse button style/primitive trang hiện có, không chế nút mới.
- Khi D xong: chỉ cần điền `DOWNLOAD_URLS` trong config → không đụng component.

## Docs-mismatch log (filled during /feature-execute)

- (none) — `DOWNLOAD_URLS` config đã đặt sẵn ở task-01, dùng lại đúng như plan.

## Execution log (filled during /feature-execute)

- 2026-07-13 — Read: config.ts (DOWNLOAD_URLS từ task-01), reference impls,
  lucide icons; conventions/fe-checklist in context
- 2026-07-13 — Implementation: soạn nội dung Download (4 nút OS + hint + hướng dẫn
  unsigned 3 OS) → `vi/download.json`; dịch en/ko/ja; đăng ký namespace `download`
  × 4 (config.ts); SEO `download` × 4 + SEOPageKey/PAGE_PATH; tạo `DownloadPage.tsx`
  (4 nút map DOWNLOAD_URLS, frame-first: URL rỗng → "Sắp có" disabled; 3 khối
  hướng dẫn returnObjects); route `/:lang/download`; sitemap 4 URL download
- 2026-07-13 — Verify: download parity 4 locale — PASS; sitemap `/download` = 4;
  tổng sitemap = 32 URL (8 trang × 4 locale) — PASS
- 2026-07-13 — Verify: `pnpm build` — ✓ built in 3.49s — PASS
- 2026-07-13 — fe-playwright: preview :4173 → `/ja/download` lang=ja, title Nhật,
  4 nút OS (Windows/macIntel/macSilicon/Linux), **cả 4 = "近日提供予定" disabled**
  (frame-first, URL rỗng → 0 download link), 3 khối hướng dẫn × 3 bước = 9. Khi
  hạng mục D có file → điền DOWNLOAD_URLS/env, nút tự thành link tải. Evidence:
  `.scratch/download-ja.png` — PASS

## Escalation report (filled only if blocked)
