# CLAUDE.md

Guidance cho Claude Code khi làm việc với repo `Hitek_Work_Landing_Page`.

## Về project

**Static marketing landing** cho sản phẩm Hitek Work (WFH tracker). Stack:
**Vite + React 18 + TypeScript + Tailwind v4 + i18next + react-router +
Radix/shadcn UI**. KHÔNG backend, KHÔNG API, KHÔNG DB, KHÔNG auth — site tĩnh
đa ngôn ngữ (vi/en/ko/ja), deploy Vercel. Domain: `work.hitek.com.vn`.

**IMPORTANT:** Trước khi plan/implement, đọc `README.md` + `CONTEXT.md` để nắm
context (đặc biệt cơ chế i18n + routing + SEO — anti-drift chính của repo).

## Config files (anti-drift — READ trước khi implement)

- [`CONTEXT.md`](./CONTEXT.md) — domain glossary (Supported Languages,
  Translation Namespace, URL Locale Prefix, SEO Meta Bundle, Marketing Pages...)
- [`STATUS.md`](./STATUS.md) — project dashboard
- [`docs/agents/conventions.md`](./docs/agents/conventions.md) — coding standards
  + i18n/SEO discipline phải follow
- [`docs/agents/verify-commands.md`](./docs/agents/verify-commands.md) — lệnh
  verify (build, i18n parity) + Test policy
- [`docs/agents/reference-impls.md`](./docs/agents/reference-impls.md) — pointer
  best-example code
- [`docs/agents/docs-map.md`](./docs/agents/docs-map.md) — phạm vi docs sync
- [`docs/agents/fe-checklist.md`](./docs/agents/fe-checklist.md) — company FE
  checklist (subset áp dụng cho site tĩnh)
- [`docs/adr/`](./docs/adr/) — Architecture Decision Records

## FE work (CRITICAL)

Đây là FE project → **mọi task FE làm ở MAIN loop + activate skill
`frontend-development`**, KHÔNG delegate cho generic subagent (subagent không
load được skill → drift convention + reinvent component). Xem
`rules/orchestration-protocol.md` → "Skill-First for Frontend Work".

## Nguyên tắc chủ đạo

- **i18n first:** mọi text qua `t()`/`<Trans>`, KHÔNG hardcode. Thêm trang =
  thêm namespace × 4 locale + SEO (`useSEOMeta` + `seo.json` + `sitemap.xml`).
- **Reuse trước:** audit `src/app/components/ui/*` (shadcn/Radix) trước khi tạo
  component mới.
- **Config tập trung:** URL ngoài (demo, download) để 1 chỗ, không hardcode rải.
- Commit messages tiếng Anh, conventional commits.

## Agent Workflow (feature-workflow system)

Project đã bootstrap feature-workflow (2026-07-13). Dùng skills theo thứ tự khi
build feature mới:

| Phase | Skill | Output |
|---|---|---|
| 1 | `/feature-grill` | Align requirement — update `CONTEXT.md` inline |
| 2 | `/feature-spec` | Synthesize spec.md trong `plans/{YYMMDD-HHMM}-{slug}/` |
| 3 | `/feature-slice` | Break spec thành vertical tasks (`task-NN-*.md`) |
| 4 | `/feature-execute` | Loop implement từng task, self-verify |
| 5 | `/feature-verify` | E2E checklist cho human sign-off |

**Khi feature mới start:** invoke `/feature-grill {feature-name}` để align. KHÔNG
skip — grilling tránh drift xa nhất.
