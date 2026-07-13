# Docs map: Hitek Work Landing Page

> Khai báo phạm vi docs của project: project này CÓ những docs nào + mỗi docs
> chứa loại thông tin gì. Docs sync của workflow (per-task trong
> `/feature-execute` + sweep tổng trong `/feature-verify`) CHỈ đụng docs khai
> trong map — docs ngoài map KHÔNG được đụng.

## Baseline sàn (mặc nhiên thuộc map — KHÔNG cần khai)

Bộ `docs/agents/*` luôn thuộc phạm vi sync:

- `docs/agents/conventions.md` — convention + coding standards phải follow
- `docs/agents/reference-impls.md` — pointer reference code (bồi thêm khi feature tạo pattern mới)
- `docs/agents/verify-commands.md` — lệnh verify + Test policy
- `docs/agents/docs-map.md` — chính file này
- `docs/agents/fe-checklist.md` — company FE enforce-checklist (subset áp dụng cho site tĩnh)

Ngoài map (có cơ chế sync riêng, KHÔNG thuộc docs sync này):

- `CONTEXT.md` (root) — glossary, update inline khi `/feature-grill` resolve term
- `STATUS.md` (root) — dashboard, update qua `/project-status`
- `guidelines/Guidelines.md` — design system stub (chưa điền)
- `src/assets/*`, `public/*` — assets, không phải docs sync

## Docs của project (khai báo — chỉ docs NGOÀI sàn)

| Docs | Chứa gì | Sync khi nào |
|------|---------|--------------|
| `README.md` | intro repo + cách chạy | đổi cách setup/run |
| `ATTRIBUTIONS.md` | credit thư viện/asset | thêm dependency/asset cần credit |
| `public/sitemap.xml` | Static Sitemap (URL canonical × locale) | thêm/xóa trang hoặc locale |

> ⚠️ Repo chưa có thư mục `docs/` nội dung (ngoài `docs/agents/*` mới bootstrap).
> Tài liệu kỹ thuật chủ yếu inline trong CONTEXT.md + code.

## No-home rule

Thông tin quan trọng phát sinh khi làm task mà KHÔNG có chỗ chứa trong map →
note vào report/summary + gợi ý user thêm docs vào map 1 lần. KHÔNG tự tạo docs
mới giữa loop.

## FE checklist note

Repo là FE (Vite + React) → `docs/agents/fe-checklist.md` = company FE standard
(chuẩn cty cho CMS antd/TanStack/RBAC). Landing này là **static marketing site**
nên chỉ subset áp dụng (Styling / i18n-Routing / Structure) — chi tiết ở section
`## FE convention` trong `conventions.md`. Task FE activate skill
`frontend-development` ở MAIN loop.
