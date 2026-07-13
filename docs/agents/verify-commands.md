# Verify Commands

Commands cụ thể để verify code repo `Hitek_Work_Landing_Page` (Vite + React +
i18next). Subagents/contributors PHẢI chạy thực tế (không simulate).

> ⚠️ Repo dùng **pnpm** (`pnpm-lock.yaml`). Chỉ có 2 script: `build` + `dev`.
> KHÔNG có lint, KHÔNG có test runner (không vitest/jest/playwright dep).

## Universal (mọi phase)

| Verify | Command | Expect |
|---|---|---|
| Install deps | `pnpm install` | exit 0 |
| Build compile OK | `pnpm build` (= `vite build`) | exit 0, no TS/compile error, output `dist/` |
| Dev server | `pnpm dev` (= `vite`) | server chạy, HMR OK |
| i18n key parity | `node check-i18n-keys.mjs` | không thiếu/thừa key giữa 4 locale |
| t() key check | `node check-t-keys.mjs` | mọi key `t('...')` trong code tồn tại trong locale |

## Test policy

> Contract test tầng của repo — workflow ĐỌC policy này, không đoán setup.
> Consumers: `/feature-slice` inject criteria · `/feature-execute` chạy tầng
> in-task · `/feature-verify` chạy `fe-playwright`/`e2e` phase cuối.

| Tầng | Có? | Lệnh | Ghi chú hạ tầng |
|---|---|---|---|
| unit | — | (không có infra) | repo KHÔNG cài vitest/jest. Bỏ qua — verify thật thay bằng build + fe-playwright |
| integration | — | (không có) | site tĩnh, không API/DB để integration test |
| e2e | ✅ | Playwright (MCP browser) bấm qua flow trên site chạy thật | `pnpm dev` (Vite, thường `:5173`) hoặc `pnpm build` + serve `dist/` |
| fe-playwright | ✅ | `pnpm build` compile no-error + Playwright walkthrough của trang/flow slice | FE React **không có unit test infra** → verify thật thay unit; giữ screenshot evidence vào plan folder (`previews/`) |

**Baseline:** mỗi slice (thêm trang / sửa nav) → `fe-playwright` pass **ngay trong
task**: (1) `pnpm build` compile sạch, (2) `check-i18n-keys.mjs` parity 4 locale,
(3) Playwright render trang đúng 4 locale + link điều hướng đúng URL Locale Prefix.
Tầng nào bỏ qua phải log rõ lý do, không im lặng skip.

## Frontend

| Verify | Command | Expect |
|---|---|---|
| Production build | `pnpm build` | "built in ...", `dist/` có assets minified |
| Preview build | `pnpm exec vite preview` | serve `dist/`, mở browser kiểm mắt |
| Dev + HMR | `pnpm dev` | Compiled, hot-reload on save |

## i18n checks (đặc thù repo)

| Verify | Command | Expect |
|---|---|---|
| Key parity 4 locale | `node check-i18n-keys.mjs` | 0 missing/extra key |

> ⚠️ `check-i18n-keys.mjs` chỉ scan key dùng trong `<Trans>` (từ `trans-keys.txt`)
> và CHỈ vi/en/ko (không ja) — KHÔNG cover key `t()` / namespace mới dùng
> `returnObjects`. Với page dùng `t()`: verify parity 4 locale bằng script so cấu
> trúc JSON + render thật qua Playwright (đủ 4 locale). Xem task-02 execution log.
| t() usage hợp lệ | `node check-t-keys.mjs` | mọi key dùng trong `.tsx` có trong locale |
| Namespace đăng ký | grep namespace mới trong `src/i18n/config.ts` | có trong `NAMESPACES` + `resources` × 4 locale |

## Pattern checks

| Verify | Check | Expect |
|---|---|---|
| Không hardcode text | grep chuỗi tiếng Việt/Anh literal trong `.tsx` (ngoài `t()`/`Trans`) | rỗng (mọi text qua i18n) |
| SEO trang mới | trang có gọi `useSEOMeta(page)` + key trong `seo` namespace | có |
| Sitemap cập nhật | trang mới có trong `public/sitemap.xml` × 4 locale | có |
| URL ngoài trong config | grep link demo/download hardcode | rỗng (phải qua config/env) |

## Anti-patterns

- ❌ Skip `pnpm build` "vì code chắc đúng" (TS compile bắt lỗi type).
- ❌ Thêm trang mà không chạy `check-i18n-keys.mjs` (dễ sót locale → vỡ UI).
- ❌ Verify i18n chỉ bằng đọc code — phải render thật qua Playwright đủ 4 locale.
