# Conventions phải tuân thủ

Bộ quy ước cho repo `Hitek_Work_Landing_Page` — **static marketing landing** cho
sản phẩm Hitek Work. Stack: **Vite + React 18 + TypeScript + Tailwind v4 +
i18next + react-router + Radix/shadcn UI** (KHÔNG BE, KHÔNG API, KHÔNG DB,
KHÔNG auth — site tĩnh đa ngôn ngữ).

Mọi feature spec phải reference section liên quan. Contributors/subagents PHẢI
đọc trước khi implement.

## Universal (apply mọi feature)

- [`CONTEXT.md`](../../CONTEXT.md) — domain glossary (Supported Languages,
  Translation Namespace, URL Locale Prefix, SEO Meta Bundle, Marketing Pages...)
- [`STATUS.md`](../../STATUS.md) — project dashboard
- [`guidelines/Guidelines.md`](../../guidelines/Guidelines.md) — design system stub
- Comments thưa + load-bearing (why/gotcha), tiếng Việt inline OK; **commit
  messages tiếng Anh**, conventional commits (`feat:`/`fix:`/`docs:`...).

## Kiến trúc (static SPA)

- **Routing:** react-router, mọi trang nested dưới `/:lang` qua `LocalizedShell`
  + `RootRedirect` (`src/app/App.tsx`). Thêm trang = thêm 1 `<Route>` con.
- **Pages:** `src/app/pages/{Name}Page.tsx` — mỏng, compose section components.
- **Components:** `src/app/components/*` (section) + `src/app/components/ui/*`
  (shadcn/Radix primitives — **reuse trước khi tạo mới**).
- **Hooks:** `src/app/hooks/*` (vd `useSEOMeta`, `useParallax`).
- **Config tập trung:** URL ngoài (demo live, file Download) để 1 chỗ
  (app config / Vite `import.meta.env`), KHÔNG hardcode rải rác.

## i18n (BẮT BUỘC — anti-drift chính của repo)

- **Mọi text đi qua** `useTranslation(ns)` / `<Trans>` — KHÔNG hardcode chuỗi
  trong `.tsx`. Rich text (markup inline) → `Trans Component` numbered slot.
- **1 trang = 1 Translation Namespace** (JSON file per locale). Đăng ký namespace
  + resource trong `src/i18n/config.ts` (`NAMESPACES` + `resources` × 4 locale).
- **4 Supported Languages:** vi (default) / en / ko / ja. Key thêm vào `vi/` trước
  (**Source Language File**), en/ko/ja mirror; thiếu key → fallback `vi`.
- **Translation Source:** en/ko/ja = AI dịch từ `vi/` (Politeness Register: ja
  です・ます調, ko 존댓말). Không native review trước deploy (Phase 1.5 sau).
- **Parity check:** chạy `check-i18n-keys.mjs` + `check-t-keys.mjs` — không thiếu/
  thừa key giữa 4 locale.
- Font CJK theo `:lang()` (Font Stack) — đã setup ở `index.html`.

## SEO (mỗi trang mới BẮT BUỘC làm đủ)

- Hook `useSEOMeta(page)` — cập nhật **SEO Meta Bundle** (title, description, og,
  `<html lang>`) + **Hreflang Set** + **Canonical URL**. Thêm trang = thêm key vào
  `SEOPageKey` + `PAGE_PATH` (`src/app/hooks/useSEOMeta.ts`) + entry namespace
  `seo` × 4 locale.
- Cập nhật `public/sitemap.xml` (Static Sitemap) — thêm URL canonical trang mới
  × 4 locale + `<xhtml:link>` alternates.
- Base URL: `https://work.hitek.com.vn`.

## Styling

- **Tailwind v4** (`@tailwindcss/vite`, `@theme` trong CSS) + `cn()` helper
  (`clsx` + `tailwind-merge`) cho conditional class.
- Màu brand chính: `#1e4bbf` (+ indigo). Bám tokens/pattern trang hiện có, không
  chế màu mới tùy tiện.
- Responsive-first (flex/grid), tránh absolute trừ khi cần.

## Anti-patterns (KHÔNG follow)

- Hardcode text tiếng Việt/Anh thẳng trong `.tsx` (phải qua i18n).
- Thêm trang mà quên đăng ký namespace / SEO / sitemap → vỡ đa ngôn ngữ + SEO.
- Hardcode URL ngoài (demo, download) rải rác thay vì 1 config.
- Tạo component mới khi `src/app/components/ui/*` đã có (vd Accordion cho FAQ).
- Barrel `index.ts` re-export tràn lan.

## FE convention

> Repo là FE (Vite + React) → FE work làm ở **MAIN loop** + activate skill
> `frontend-development`, **KHÔNG delegate FE cho generic subagent** (subagent
> không load được skill → drift convention). Xem `rules/orchestration-protocol.md`.

- Gate checklist: [`docs/agents/fe-checklist.md`](fe-checklist.md) (🔴 hard rule /
  🟡 strong default / 🔵 project-choice).
- ⚠️ **Lưu ý áp dụng:** checklist đó là chuẩn cty cho **CMS antd + TanStack +
  auth/RBAC**. Repo này là **static marketing site** (không API/form/auth/antd) →
  chỉ subset áp dụng: **C. Styling** (tokens, `cn()`, không inline hex) · **F.
  i18n/Routing** (typed key, route guard nhẹ, loading/empty states) · **G.
  Structure** (no barrel, by-type folders, file-size mềm). Bỏ qua A (Data/API),
  B (antd Forms/FilterTable), D (Zod/antd validation), E (Auth/RBAC) — không có
  trong site tĩnh này.
