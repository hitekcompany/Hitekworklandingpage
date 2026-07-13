# Spec: Marketing Pages — Policy / FAQ / Download (hạng mục B)

---
status: ready-for-slicing
created: 2026-07-13
owner: Hoa Do
grilling_skipped: false
bootstrap_incomplete: true
---

## Problem Statement

Landing page `Hitek_Work_Landing_Page` (`work.hitek.com.vn`) hiện có 5 trang
(Home / Solution / Features(=demo tĩnh) / Pricing / About) nhưng **thiếu 3 trang
marketing** mà buổi họp Demo ⭐ **4h chiều 17/07** cần: khách vào landing không
có chỗ đọc **chính sách bảo mật**, không có **FAQ** giải đáp thắc mắc, và không
có chỗ **tải Desktop App** về dùng. Ngoài ra nút "Yêu cầu Demo" hiện trỏ **Zalo**
(chat tay) thay vì cho khách xem thử sản phẩm ngay.

Đây là **hạng mục B** trong Marketing flow (A demo live ✅, C limit UI ✅ đã xong;
còn B landing + D build Desktop App). Nội dung Policy + FAQ do BA giao qua Google
Doc (tiếng Việt).

## Solution

Thêm **3 trang mới** vào landing, mỗi trang là 1 route đa ngôn ngữ dưới
`/:lang/`:

1. **Policy** — Chính sách Bảo mật Hitek Work (12 mục theo Luật 91/2025/QH15 +
   NĐ 356/2025/NĐ-CP), text render đúng bản BA giao.
2. **FAQ** — câu hỏi thường gặp, 7 nhóm, dạng accordion (gập/mở).
3. **Download** — trang tải Desktop App, **4 nút** theo OS/kiến trúc (Windows,
   macOS Intel, macOS Apple Silicon, Linux) + hướng dẫn bỏ qua cảnh báo unsigned.
   File host trên server, link để trong config → dựng khung trước, thay URL khi
   hạng mục D build xong.

Đặt link: **Policy + FAQ** ở **Footer** (cột "Liên kết" mới), **Download** ở
**Header nav** + echo footer. Đồng thời **2 nút Demo** (Hero + Header CTA) bỏ
Zalo → trỏ demo live CMS, mở tab mới.

Tất cả theo pattern đa ngôn ngữ có sẵn: mỗi trang 1 Translation Namespace × 4
Supported Languages (vi/en/ko/ja), en/ko/ja AI dịch từ `vi/`; cập nhật SEO meta
+ sitemap + hreflang.

**KHÔNG làm Cookies** (banner lẫn trang) — drop khỏi scope.

## User Stories

### Policy Page
1. As a khách truy cập landing, I want mở trang Policy đọc chính sách bảo mật đầy
   đủ 12 mục, so that tôi hiểu Hitek Work xử lý dữ liệu thế nào trước khi dùng.
2. As a khách, I want Policy hiển thị đúng ngôn ngữ tôi đang xem (vi/en/ko/ja),
   so that tôi đọc bằng tiếng của mình.
3. As a BA/legal, I want câu chữ Policy nằm trong file i18n JSON tách rời code,
   so that đổi wording bất cứ lúc nào không cần sửa/deploy lại code.

### FAQ Page
4. As a khách, I want trang FAQ gom 7 nhóm câu hỏi (Getting Started, Cách ghi
   nhận hoạt động, Đồng ý & Quyền riêng tư, Quản lý & Phân quyền, Cài đặt, Tài
   khoản & Đăng nhập), so that tôi tìm nhanh câu trả lời theo chủ đề.
5. As a khách, I want mỗi câu hỏi dạng accordion gập/mở, so that trang không bị
   dài dằng dặc và tôi mở đúng câu cần.
6. As a khách, I want FAQ đa ngôn ngữ (vi/en/ko/ja), so that đọc bằng tiếng mình.

### Download Page
7. As a khách muốn dùng thử, I want trang Download có 4 nút tải rõ ràng (Windows,
   macOS Intel, macOS Apple Silicon, Linux), so that tôi tải đúng bản cho máy mình.
8. As a khách non-tech, I want mỗi nút kèm dòng gợi ý "chọn bản này nếu máy bạn
   là...", so that tôi không tải nhầm kiến trúc chip.
9. As a khách, I want hướng dẫn bỏ qua cảnh báo "unknown publisher" (Windows) /
   "unidentified developer" (macOS), so that tôi cài được app dù Hitek build
   unsigned.
10. As a dev triển khai, I want link tải để trong config/env, so that dựng khung
    trang trước khi hạng mục D xong rồi chỉ thay URL, 2 việc không block nhau.
11. As a khách, I want Download đa ngôn ngữ (vi/en/ko/ja), so that đọc hướng dẫn
    bằng tiếng mình.

### Navigation & Placement
12. As a khách, I want thấy link Policy + FAQ ở Footer (cột "Liên kết"), so that
    truy cập được các trang utility/pháp lý theo chuẩn quen thuộc.
13. As a khách, I want thấy "Tải về" (Download) ở Header nav, so that hành động
    tải nổi bật, dễ thấy.
14. As a khách, I want link Download cũng có ở Footer, so that cuối trang vẫn tải được.

### Demo Button
15. As a khách, I want bấm nút "Yêu cầu Demo" (Hero + Header CTA) mở **demo live
    CMS** `monitor-staging.hitek.com.vn/demo` trong tab mới, so that tôi xem thử
    sản phẩm ngay thay vì phải chat Zalo.
16. As a dev, I want URL demo để trong config/env, so that dễ đổi khi có domain khác.

### i18n & SEO (theo pattern có sẵn)
17. As a dev, I want 3 namespace mới (`policy`/`faq`/`download`) đăng ký trong
    i18n config × 4 locale, so that mọi text đi qua `useTranslation`/`Trans`,
    không hardcode.
18. As a translator/AI, I want key thêm vào `vi/` trước làm Source Language File,
    en/ko/ja mirror cấu trúc, so that thiếu key thì fallback về vi (không vỡ UI).
19. As a khách/SEO bot, I want mỗi trang mới có SEO Meta Bundle đúng (title,
    description, og, `<html lang>`) + Hreflang Set + Canonical URL, so that search
    index đúng từng (page, language).
20. As a SEO bot, I want `sitemap.xml` cập nhật thêm 3 trang × 4 locale, so that
    crawler thấy hết URL canonical mới.
21. As a khách, I want link nav/footer/demo đúng URL Locale Prefix của ngôn ngữ
    đang xem (`/vi/policy`, `/en/faq`...), so that không rớt ngôn ngữ khi điều hướng.

## Implementation Decisions

- **Modules build/modify** (React + Vite, KHÔNG BE — static site):
  - **Page mới:** `PolicyPage`, `FaqPage`, `DownloadPage` + section component con
    nếu cần (theo pattern `src/app/pages/*` + `src/app/components/*`).
  - **Routing:** thêm 3 route con dưới `/:lang` trong App routing (nested trong
    `LocalizedShell`, cạnh home/current-state/pricing/demo/about).
  - **Header:** thêm nav item "Tải về" → Download; wire nút CTA "Yêu cầu Demo" →
    demo live URL (tab mới).
  - **Footer:** thêm cột "Liên kết" chứa Policy · FAQ · Download.
  - **Hero:** đổi `href` nút demo từ Zalo → demo live URL (tab mới).
  - **i18n:** đăng ký 3 namespace mới × 4 locale trong i18n config
    (`SUPPORTED_LANGUAGES`/`NAMESPACES`/`resources`); thêm key vào `common.json`
    (nav "Tải về", footer cột Liên kết) × 4 locale.
  - **SEO:** thêm entry cho 3 page vào namespace `seo` × 4 locale; hook
    `useSEOMeta(page)` cho từng page; cập nhật `public/sitemap.xml` + Hreflang Set.
  - **Config URL:** link 4 file Download + URL demo live → centralize vào app
    config module (`src/app/config.ts`) hoặc Vite `import.meta.env` — chốt cụ thể
    ở phase slice.
- **API contracts:** KHÔNG có (static site, không gọi API).
- **Schema changes:** KHÔNG có (không DB).
- **Architectural decisions:**
  - Rich text (Policy/FAQ có markup inline) render qua **Trans Component** với
    numbered slot; plain text dùng `t('key')`.
  - Nội dung nguồn = tiếng Việt (BA giao) → `vi/*.json`; en/ko/ja theo
    **Translation Source** (AI dịch, KHÔNG native review trước deploy;
    **Politeness Register**: ja です・ます調, ko 존댓말).
  - FAQ accordion: tận dụng component UI có sẵn (`src/app/components/ui/*` shadcn)
    nếu có Accordion; nếu không, dựng accordion tối giản — chốt ở slice.
  - Download frame-first: trang render đủ layout dù URL file chưa có (placeholder
    disabled hoặc "coming soon" tới khi D xong).

### Conventions phải tuân thủ (CRITICAL)

> ⚠️ Landing repo **chưa bootstrap** `docs/agents/*` (`bootstrap_incomplete: true`).
> Ground vào CONTEXT.md landing + pattern code đã established. Nên chạy
> `/feature-bootstrap` cho landing repo sau để bật đủ anti-drift.

- `Hitek_Work_Landing_Page/CONTEXT.md` — domain glossary (Marketing Pages, Policy
  Page, FAQ Page, Download Page, Page Placement, Demo Button Target, + toàn bộ
  term i18n: Translation Namespace, Source Language File, Translation Source,
  URL Locale Prefix, SEO Meta Bundle, Hreflang Set, Static Sitemap, Font Stack,
  Politeness Register).
- Pattern routing: `src/app/App.tsx` (route nested dưới `/:lang` qua
  `LocalizedShell` + `RootRedirect`).
- Pattern i18n: `src/i18n/config.ts` (đăng ký namespace × 4 locale; `fallbackLng: vi`).
- Pattern SEO: hook `useSEOMeta` + namespace `seo` + `public/sitemap.xml`.
- Pattern component: `src/app/pages/*` + `src/app/components/*`; UI primitives
  `src/app/components/ui/*` (shadcn/ui) — reuse trước khi tạo mới.
- i18n key parity: script `check-i18n-keys.mjs` / `check-t-keys.mjs` (verify
  không thiếu/thừa key giữa các locale).
- FE work ở MAIN loop + skill `frontend-development` (per orchestration-protocol
  — KHÔNG delegate FE cho generic agent).

## Testing Decisions

- **Modules tested:** 3 page mới + Header nav + Footer + Hero demo button +
  i18n registration + SEO/sitemap.
- **Prior art:** landing repo KHÔNG có unit test infra (React+Vite). Verify theo
  precedent FE của các feature 06–07/2026: **build compile + Playwright/visual
  walkthrough + i18n key parity script**.
- **Coverage target:** N/A automated. Verify = (1) `pnpm build` compile no error;
  (2) `check-i18n-keys.mjs` parity 4 locale sạch; (3) Playwright/manual walk:
  mỗi trang render đúng 4 locale, nav/footer/demo link đúng URL Locale Prefix,
  FAQ accordion gập/mở, Download 4 nút + hướng dẫn hiện, SEO meta + `<html lang>`
  đúng khi đổi trang/ngôn ngữ.
- **Test types:** e2e (Playwright) + build-compile; giữ screenshot evidence vào
  plan folder (`previews/`).

## Out of Scope

- **Cookies** — banner "Accept cookies" lẫn trang Cookies Policy: **drop hoàn
  toàn** (user chốt 13/07, chưa làm).
- **Hạng mục D** (build Desktop App 3+ OS): tách feature riêng — trang Download
  chỉ dựng khung + config URL, KHÔNG build file trong feature này.
- **Feature "Luật bảo vệ thông tin user"** (consent opt-in, retention auto-delete
  30/90 ngày, cascade xóa, xóa theo yêu cầu 20 ngày): implement **song song** ở
  repo CMS + Desktop App để backing cam kết Policy — KHÔNG thuộc feature landing này.
- **Native human review** bản dịch en/ko/ja: theo Native Review (Phase 1.5) — AI
  dịch nháp ship trước, không block launch.
- **Sửa câu chữ Policy cho khớp enforcement thực tế** (over-claim): build text
  as-is theo bản BA; đổi wording là content decision qua i18n JSON, không thuộc
  scope code.

## Further Notes

- **Repo context:** feature ở `Hitek_Work_Landing_Page` (React+Vite+i18next),
  KHÁC repo CMS (Vue2). Grill chạy từ cwd CMS nhưng plan/spec/CONTEXT thuộc landing.
- **Nội dung nguồn:** Google Doc BA (`docs.google.com/document/d/1brtoF3daby...`)
  tab **Policy** (12 mục) + tab **FAQ** (7 nhóm). Text tiếng Việt đầy đủ, đọc qua
  Google Drive connector. Tab **Cookies** trống (drop). Tab **Download** chỉ ghi
  "App Window và MacOS" → nội dung nút/hướng dẫn tự soạn.
- **FAQ doc thiếu "Section 5"** (nhảy 4→6) — render đúng những gì có, không bịa.
- **Hướng dẫn unsigned** không có trong doc → tự soạn theo các bước chuẩn từng OS
  (Windows SmartScreen "More info → Run anyway"; macOS "Open Anyway" trong System
  Settings > Privacy & Security; Linux chmod +x / cách chạy tùy format file D ra).
- **Over-claim Policy (đã chấp nhận rủi ro):** Policy trích đích danh Luật 91/2025
  + NĐ 356/2025 và tuyên bố auto-delete/consent/cascade ở thì khẳng định dù chưa
  enforce — user chốt build as-is vì feature luật làm song song. HTTPS + RBAC
  phân quyền đã có thật; 4 cam kết còn lại chờ enforcement.
- **Sitemap hiện tại:** CONTEXT ghi "5 pages × 3 lang = 15 URL" nhưng thực tế đã
  4 locale (ja Phase 2). Sau feature này: 8 pages × 4 locale = 32 URL canonical —
  cập nhật `sitemap.xml` + Hreflang Set cho khớp.
- **Timeline:** còn ~4 ngày tới họp 17/07. Ưu tiên Policy + FAQ (nội dung sẵn) →
  Download (khung, chờ D). Nếu D chưa kịp, Download vẫn ship dạng khung + link
  placeholder.

---

> Generated by `/feature-spec` after `/feature-grill` (2026-07-13).
> Next: `/feature-slice` breaks this into vertical slice tasks.
