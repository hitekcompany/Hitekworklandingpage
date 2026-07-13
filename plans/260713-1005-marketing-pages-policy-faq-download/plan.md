---
title: Marketing Pages — Policy / FAQ / Download (hạng mục B)
status: pending
created: 2026-07-13
spec: ./spec.md
total_tasks: 5
total_estimate_hours: 8.5
---

# Plan: Marketing Pages — Policy / FAQ / Download

Hạng mục B của Marketing flow (landing page `Hitek_Work_Landing_Page`) cho họp
Demo ⭐ **17/07**. Thêm 3 trang (Policy/FAQ/Download) + nối nav/footer + retarget
nút Demo. Repo: React + Vite + i18next, 4 locale vi/en/ko/ja. Không BE/DB.

## Phases (tasks)

| Task | Title | Type | Blocked by | Effort | Human / AI |
|------|-------|------|-----------|--------|------------|
| [01](./task-01-retarget-demo-button.md) ✅ | Retarget nút Demo → demo live + config URL | AFK | — | S | 1h / 0.2h |
| [02](./task-02-policy-page.md) ✅ | Trang Policy (12 mục, i18n, SEO) | AFK | — | M | 2.5h / 0.4h |
| [03](./task-03-faq-page.md) ✅ | Trang FAQ (6 nhóm accordion, i18n, SEO) | AFK | — | M | 2h / 0.4h |
| [04](./task-04-download-page.md) ✅ | Trang Download (4 nút OS, config, frame-first, SEO) | AFK | — | M | 2h / 0.4h |
| [05](./task-05-nav-footer-wiring.md) | Wiring nav + footer | AFK | 02,03,04 | S | 1h / 0.2h |

**Tổng:** ~8.5h human (~1.6h AI-assist). 5 AFK, 0 HITL.

## Dependency graph

```
01 (demo button) ─────────────────────────┐  (độc lập, làm lúc nào cũng được)
                                           │
02 (Policy) ──┐                            │
03 (FAQ) ─────┼──> 05 (nav + footer wiring)
04 (Download)─┘
```

**Critical path:** `02 → 03 → 04 → 05` (~7.5h).

> ⚠️ **Ordering note:** 02/03/04 độc lập về logic (blocked_by rỗng) nhưng **cùng
> sửa file shared** (`src/i18n/config.ts`, `src/app/App.tsx`,
> `src/app/hooks/useSEOMeta.ts`, `public/sitemap.xml` — mỗi task thêm dòng riêng,
> additive). → execute **TUẦN TỰ** (02 → 03 → 04), KHÔNG song song, tránh collision
> khi cùng edit. 01 độc lập hoàn toàn (chỉ đụng config + Hero/Header) → chèn bất kỳ
> lúc nào. 05 chạy CUỐI (route 3 trang phải tồn tại để link có đích).

## Success criteria (từ spec)

- 3 trang mới `/{lang}/{policy|faq|download}` render đủ 4 locale (vi/en/ko/ja),
  nội dung Policy + FAQ đúng bản BA giao.
- FAQ dùng accordion gập/mở (reuse `components/ui/accordion.tsx`).
- Download 4 nút OS (Win/macIntel/macSilicon/Linux) + hướng dẫn unsigned, link
  qua config (frame-first — chạy dù D chưa build).
- Policy + FAQ ở Footer (cột Liên kết), Download ở Header nav + footer.
- 2 nút Demo (Hero + Header) → demo live CMS, tab mới, URL trong config.
- i18n parity 4 locale sạch (`check-i18n-keys.mjs`), SEO meta + sitemap + hreflang
  cập nhật cho 3 trang; `pnpm build` compile no-error.

## Out of scope (từ spec)

- Cookies (banner + trang) — drop.
- Build Desktop App file (hạng mục D) — Download chỉ khung + config placeholder.
- Feature "Luật bảo vệ thông tin user" (enforcement) — làm song song repo CMS/Desktop.
- Native review bản dịch ko/ja — Phase 1.5, không block.

## Anti-drift status

- ✅ "Must read" populated cho cả 5 task (conventions + reference-impls +
  fe-checklist + activate `frontend-development` skill).
- ✅ Acceptance criteria có verify command (build, i18n parity, Playwright).
- ⚠️ Repo mới bootstrap `docs/agents/*` hôm nay (2026-07-13) — anti-drift đầy đủ
  từ feature này trở đi.

## Links

- Spec: [spec.md](./spec.md)
- Verification: (sẽ tạo bởi `/feature-verify` sau execute)

## Next step

`/feature-execute` để AFK loop chạy tasks (theo ordering: 01 bất kỳ lúc nào →
02 → 03 → 04 tuần tự → 05 cuối). Nhớ chạy ở đúng repo landing + activate skill
`frontend-development` ở main loop cho mỗi task FE.
