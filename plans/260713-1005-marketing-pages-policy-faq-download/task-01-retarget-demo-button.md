---
task: 01
title: Retarget nút Demo (Hero + Header CTA) → demo live + config URL
status: pending
type: AFK
blocked_by: []
effort: S
human_estimate_hours: 1
ai_estimate_hours: 0.2
actual_hours: null
created: 2026-07-13
completed: null
---

# Task 01: Retarget nút Demo (Hero + Header CTA) → demo live + config URL

> ⚠️ **Vertical slice:** touches config + component (Hero) + component (Header) +
> i18n label (đã có) → xuyên nhiều lớp UI.

## What to build

Hiện Hero có nút "Yêu cầu Demo" hardcode `href="https://zalo.me/84777505030"`;
Header có nút CTA "Yêu cầu Demo" (`WireframeButton`) chưa wire tới đâu. Đổi **cả 2
nút** để trỏ tới **demo live CMS** `https://monitor-staging.hitek.com.vn/demo`, mở
**tab mới** (`target="_blank"` + `rel="noopener noreferrer"`).

URL demo live để trong **1 config tập trung** (app config module hoặc Vite
`import.meta.env`) — KHÔNG hardcode rải rác, để dễ đổi khi có domain khác. Cùng
config này sẽ chứa URL Download ở task-04 (đặt nền chung).

Kết quả người dùng thấy: bấm nút demo ở Hero hoặc Header → mở tab mới vào trang
demo live, xem thử sản phẩm ngay (thay vì mở Zalo chat).

## Must read BEFORE coding (forcing function)

### Convention files
- `docs/agents/conventions.md` — section "Kiến trúc (static SPA)" (config tập
  trung URL ngoài) + "Anti-patterns" (không hardcode URL rải rác)
- `docs/agents/fe-checklist.md` — subset C/F/G áp dụng (site tĩnh)
- **Activate the `frontend-development` skill in the MAIN loop before coding. Do
  NOT delegate FE implementation to a generic subagent (it cannot load the skill —
  see `rules/orchestration-protocol.md`). Run the checklist's 🔴 items before AND
  after coding.**

### Reference implementations
- `docs/agents/reference-impls.md` — Header (`src/app/components/Header.tsx`) +
  Hero (`src/app/components/HeroSection.tsx`)

### Downstream consumers
- Grep các chỗ dùng link Zalo: `grep -rn "zalo.me" src/` — đảm bảo không sót
  nút demo nào khác còn trỏ Zalo.

### Spec parent
- `plans/260713-1005-marketing-pages-policy-faq-download/spec.md`

## Key interfaces (durable contracts)

- **App config** — object/module export chứa external URL:
  `DEMO_LIVE_URL` (default `https://monitor-staging.hitek.com.vn/demo`). Nguồn:
  hằng trong config module HOẶC `import.meta.env.VITE_DEMO_LIVE_URL` (chốt cách
  lúc code, giữ nhất quán 1 kiểu). Task-04 thêm `DOWNLOAD_URLS` vào cùng chỗ.

## Acceptance criteria

- [ ] Nút demo ở Hero + Header CTA đều trỏ `DEMO_LIVE_URL`, mở tab mới
      (`target="_blank"` + `rel="noopener noreferrer"`)
      verify: `grep -rn "monitor-staging.hitek.com.vn/demo\|DEMO_LIVE_URL\|VITE_DEMO_LIVE_URL" src/` — thấy ở config + 2 nút; `grep -rn "zalo.me" src/` — rỗng
- [ ] URL nằm trong config tập trung, KHÔNG hardcode literal trong component
      verify: `grep -rn "zalo.me\|monitor-staging" src/app/components/HeroSection.tsx src/app/components/Header.tsx` — chỉ tham chiếu biến config, không literal (trừ config module)
- [ ] Build passes
      verify: `pnpm build`
- [ ] Playwright flow của slice pass — evidence vào `plans/.../.scratch/`
      verify: mở `pnpm dev`, click nút demo Hero + Header → mở tab mới URL demo live; screenshot
- [ ] (tầng unit: project chưa có infra — skip có chủ đích)
- [ ] (tầng integration: project chưa có infra — skip có chủ đích)

## Out of scope
- URL file Download: pushed to task-04 (chỉ đặt nền config chung ở đây).
- Thêm trang mới: task-02/03/04.

## Implementation notes
- `WireframeButton` ở Header có thể chưa nhận `href`/`onClick` — kiểm component,
  wrap `<a>` hoặc thêm prop nếu cần (giữ style hiện tại).
- Label nút ("Yêu cầu Demo" / `cta.request_demo` / `hero.cta_demo`) đã có trong
  i18n — KHÔNG đổi text, chỉ đổi đích.

## Docs-mismatch log (filled during /feature-execute)

## Execution log (filled during /feature-execute)

## Escalation report (filled only if blocked)
