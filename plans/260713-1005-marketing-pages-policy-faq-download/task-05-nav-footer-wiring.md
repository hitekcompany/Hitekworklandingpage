---
task: 05
title: Wiring nav + footer (Header "Tải về" + Footer cột "Liên kết")
status: done
type: AFK
blocked_by: [task-02, task-03, task-04]
effort: S
human_estimate_hours: 1
ai_estimate_hours: 0.2
actual_hours: 0.4
created: 2026-07-13
completed: 2026-07-13
---

# Task 05: Wiring nav + footer

> ⚠️ **Vertical slice:** i18n label (common.json × 4 locale) → Header component →
> Footer component. Xuyên i18n + 2 component điều hướng.

## What to build

Nối 3 trang mới vào điều hướng site:

- **Header nav:** thêm item **"Tải về"** (Download) vào `navItems` →
  `/{lang}/download`. (Policy/FAQ KHÔNG vào header — tránh chật, chỉ ở footer.)
- **Footer:** thêm **cột "Liên kết"** mới chứa **Policy · FAQ · Download** (3 link,
  đúng URL Locale Prefix của ngôn ngữ đang xem).

Mọi link build qua helper giữ Locale Prefix (giống `buildHref` ở Header) → không
rớt ngôn ngữ khi điều hướng. Label qua i18n `common` namespace (thêm
`nav.download` + `footer.links.*`) × 4 locale.

Khách thấy: Header có "Tải về" nổi bật; cuối trang có cột Liên kết dẫn tới 3 trang
mới; bấm link → vào đúng trang, đúng ngôn ngữ.

## Must read BEFORE coding (forcing function)

### Convention files
- `docs/agents/conventions.md` — "i18n" (common namespace, URL Locale Prefix) +
  "Kiến trúc" (routing)
- `docs/agents/fe-checklist.md` — subset C/F/G
- **Activate the `frontend-development` skill in the MAIN loop before coding. Do
  NOT delegate FE implementation to a generic subagent (it cannot load the skill —
  see `rules/orchestration-protocol.md`). Run the checklist's 🔴 items before AND
  after coding.**

### Reference implementations
- `docs/agents/reference-impls.md` — Header (`src/app/components/Header.tsx` —
  `navItems` + `buildHref` + mobile menu), Footer (`src/app/components/
  Footer.tsx` — grid cột), common.json (`src/i18n/locales/vi/common.json`)

### Downstream consumers
- `src/i18n/locales/{vi,en,ko,ja}/common.json` — thêm `nav.download` +
  `footer.links.{title,policy,faq,download}`
- `src/app/components/Header.tsx` — `navItems` (desktop + mobile menu render cùng
  mảng → thêm 1 item là đủ cả 2)
- `src/app/components/Footer.tsx` — thêm cột

### Spec parent
- `plans/260713-1005-marketing-pages-policy-faq-download/spec.md`

## Key interfaces (durable contracts)

- **`navItems`** — thêm `{ labelKey: "nav.download", path: "download" }`.
- **common `footer.links`** — `{ title, policy, faq, download }` × 4 locale.
- Link footer dùng cùng cơ chế Locale Prefix như Header `buildHref(path)`.

## Acceptance criteria

- [ ] Header nav có "Tải về" (desktop + mobile menu) → `/{lang}/download`
      verify: `pnpm dev` → Playwright thấy item "Tải về" ở header, click → `/vi/download`; thu nhỏ viewport kiểm mobile menu
- [ ] Footer có cột "Liên kết" với 3 link Policy/FAQ/Download đúng Locale Prefix
      verify: Playwright ở `/en/*` → footer link trỏ `/en/policy`, `/en/faq`, `/en/download` (không rớt về `/vi`)
- [ ] Label qua i18n common, đủ 4 locale, parity sạch
      verify: `node check-i18n-keys.mjs`; `node check-t-keys.mjs`
- [ ] Không hardcode text/URL literal trong Header/Footer
      verify: `grep -nE "\"/(vi|en|ko|ja)?/?(policy|faq|download)\"" src/app/components/Footer.tsx` — không link literal (dùng buildHref/biến)
- [ ] Build passes
      verify: `pnpm build`
- [ ] Playwright flow của slice pass — evidence vào `plans/.../.scratch/`
      verify: click qua cả 3 link footer + item header, mỗi cái vào đúng trang đúng ngôn ngữ
- [ ] (tầng unit: project chưa có infra — skip có chủ đích)
- [ ] (tầng integration: project chưa có infra — skip có chủ đích)

## Out of scope
- Nội dung/route 3 trang: đã làm ở task-02/03/04 (task này chỉ nối link).
- Nút demo: task-01.

## Implementation notes
- `blocked_by [02,03,04]` — route 3 trang phải tồn tại thì link mới có đích để
  demo. Chạy SAU khi 3 trang xong.
- Header `navItems` render chung cho desktop + mobile → thêm 1 item cover cả 2.
- Footer đang grid 3 cột (dev_center/offices/social) → cân nhắc layout khi thêm
  cột 4 (đổi `lg:grid-cols-3` → `lg:grid-cols-4` hoặc gộp hợp lý).

## Docs-mismatch log (filled during /feature-execute)

- Footer trước đây KHÔNG resolve lang (chỉ Header có `buildHref`) — phải thêm
  lang-resolution + `linkTo()` vào Footer để link giữ URL Locale Prefix. Phát
  hiện lúc Step 3.

## Execution log (filled during /feature-execute)

- 2026-07-13 — Read: common.json × 4, Header.tsx (navItems), Footer.tsx (grid);
  conventions/fe-checklist in context
- 2026-07-13 — Implementation: thêm `nav.download` + `footer.links.{title,policy,
  faq,download}` vào common.json × 4 locale; Header `navItems` thêm "Tải về" →
  download (render cả desktop + mobile menu); Footer thêm lang-resolution +
  `linkTo()` + cột "Liên kết" (react-router Link × 3, grid 3→4 cột)
- 2026-07-13 — Verify: common parity 4 locale — PASS; `pnpm build` — ✓ 2.85s — PASS
- 2026-07-13 — fe-playwright: preview → `/ko/` — nav có "다운로드" → `/ko/download`;
  footer 3 link (개인정보 처리방침→/ko/policy, 자주 묻는 질문→/ko/faq, 다운로드→/ko/
  download) đúng Locale Prefix; **real click footer Policy → điều hướng `/ko/
  policy`, title đúng**; demo CTA → monitor-staging demo (task-01 re-confirm).
  Evidence: `.scratch/footer-links-ko.png` — PASS

## Escalation report (filled only if blocked)
