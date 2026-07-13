# Reference Implementations

Pointer tới best-example code trong repo `Hitek_Work_Landing_Page`. Khi implement
feature mới, READ những file này trước để follow pattern đã established.

## Routing / App shell

| Pattern | Reference file | Notes |
|---|---|---|
| App routing (nested `/:lang`) | `src/app/App.tsx` | `BrowserRouter` → `RootRedirect` + `LocalizedShell` outlet; thêm trang = thêm `<Route>` con |
| Language resolution + redirect | `src/app/components/RootRedirect.tsx`, `LocalizedShell.tsx` | Language Resolution Chain, ghi localStorage |
| Header nav + CTA + switcher | `src/app/components/Header.tsx` | `navItems` array, `buildHref(path)` giữ Locale Prefix, `LanguageSwitcher`, CTA button |
| Footer (cột thông tin) | `src/app/components/Footer.tsx` | grid 3 cột — nơi thêm cột "Liên kết" |

## Pages (compose sections)

| Pattern | Reference file | Notes |
|---|---|---|
| Trang mỏng compose sections | `src/app/pages/HomePage.tsx` | gọi `useSEOMeta('home')` + render section components |
| Trang nhiều section | `src/app/pages/DemoPage.tsx`, `CurrentStatePage.tsx` | precedent cho trang dài nhiều khối |

## i18n

| Pattern | Reference file | Notes |
|---|---|---|
| i18next config (đăng ký namespace) | `src/i18n/config.ts` | `SUPPORTED_LANGUAGES`/`NAMESPACES`/`resources` × 4 locale — sửa khi thêm namespace |
| Namespace JSON (source) | `src/i18n/locales/vi/*.json` | Source Language File; en/ko/ja mirror |
| Dùng `t()` + `<Trans>` | `src/app/components/HeroSection.tsx` | `useTranslation('home')`, `title_before/title_highlight` cho rich text |
| Language switcher | `src/app/components/LanguageSwitcher.tsx` | endonym + caret, Radix DropdownMenu |

## SEO

| Pattern | Reference file | Notes |
|---|---|---|
| SEO meta hook | `src/app/hooks/useSEOMeta.ts` | `SEOPageKey` + `PAGE_PATH` + `LOCALE_MAP` + hreflang/canonical — extend khi thêm trang |
| SEO strings | `src/i18n/locales/vi/seo.json` | title/description per page key |
| Sitemap | `public/sitemap.xml` | Static Sitemap, cập nhật tay khi thêm trang |

## UI primitives (shadcn/Radix — reuse trước khi tạo mới)

| Pattern | Reference file | Notes |
|---|---|---|
| Accordion (cho FAQ) | `src/app/components/ui/accordion.tsx` | Radix Accordion — dùng cho trang FAQ gập/mở |
| UI primitives khác | `src/app/components/ui/*` | button, dialog, dropdown-menu, tabs... — audit trước khi tự dựng |

## Anti-patterns (KHÔNG follow)

- Hardcode text trong `.tsx` thay vì i18n key.
- Tạo component UI mới khi `components/ui/*` đã có tương đương.
- Thêm trang mà quên: đăng ký namespace (`config.ts`) + SEO (`useSEOMeta` +
  `seo.json` + `sitemap.xml`).
- Hardcode URL ngoài (demo/download) thay vì config tập trung.
