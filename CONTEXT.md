# CONTEXT.md — Domain Glossary

Glossary thuần — define các term/khái niệm dùng xuyên suốt project.
KHÔNG chứa implementation details, KHÔNG chứa spec.

## Terms

**Supported Languages**:
Tập 3 ngôn ngữ mà landing page Hitek Work hỗ trợ ở Phase 1: Tiếng Việt (`vi`), Tiếng Anh (`en`), Tiếng Hàn (`ko`). Mã ngôn ngữ tuân theo BCP-47 (ISO 639-1).
_Avoid_: "languages" (mơ hồ), "locales" (sẽ define riêng nếu cần phân biệt language vs region)

**Default Language**:
`vi` (Tiếng Việt). Là fallback cuối cùng trong chain resolve language khi (1) URL không có locale prefix, (2) localStorage không có preference đã lưu, (3) auto-detect browser language không match `en*` hoặc `ko*`.

**Language Resolution Chain**:
Thứ tự ưu tiên xác định ngôn ngữ hiển thị cho 1 request: `URL prefix > localStorage preference > navigator.language match > Default Language (vi)`. Khi tier cao hơn có giá trị, tier thấp hơn bị bỏ qua.

**Translatable Content**:
Tập text cần dịch sang cả 3 Supported Languages. Bao gồm: UI strings (nav, buttons, labels), body content (heading + paragraph trong section components), CTA text, SEO meta tags (`<title>`, `<meta description>`, OG tags, `<html lang>`), footer text, form labels & validation messages.

**Non-Translatable Assets**:
Tài sản giữ nguyên (chỉ 1 bản, dùng chung cho cả 3 Supported Languages). Bao gồm: ảnh screenshot demo sản phẩm (`src/assets/*.png`, `src/imports/screenshot.png`, `detail*.png`), logo (`logo-ngang.png`), giá tiền VND (không multi-currency Phase 1).
_Avoid_: "static assets" (mơ hồ — CSS/JS cũng static), "images" (không bao gồm currency)

**URL Locale Prefix**:
Segment đầu tiên trong pathname xác định ngôn ngữ cho trang đang xem. Mọi URL của site BẮT BUỘC có prefix — không có form "no-prefix" cho bất kỳ ngôn ngữ nào. Giá trị hợp lệ: `/vi/`, `/en/`, `/ko/` (matching Supported Languages).
_Avoid_: "lang param", "locale segment" (dùng đồng nghĩa cũng được nhưng prefer "URL Locale Prefix")

**Canonical URL**:
Với mỗi (page, language) duy nhất 1 URL hợp lệ. Ví dụ trang About tiếng Anh chỉ có 1 URL canonical: `/en/about`. Các URL non-canonical (vd `/about` không có prefix, hoặc `?lang=en`) phải 301 redirect về canonical hoặc trả 404.

**Root Redirect**:
Khi user truy cập URL không có URL Locale Prefix (vd `/`, `/about`, `/pricing`), client-side React component thực thi Language Resolution Chain và `<Navigate replace>` tới URL canonical tương ứng. Auto-detect chỉ chạy khi localStorage chưa có preference đã lưu.

**Preference Precedence**:
Khi URL Locale Prefix và localStorage preference KHÁC nhau, URL THẮNG. Component đọc lang từ URL, render tương ứng, VÀ ghi đè localStorage = lang trong URL. Lý do: URL là explicit user intent (link, bookmark, chia sẻ).

**Language Switcher**:
UI component cho phép user chuyển ngôn ngữ thủ công. Placement: **cực phải header** trên desktop (sau item nav "Về chúng tôi"); **mục cuối trong hamburger drawer** trên mobile. Khi user chọn ngôn ngữ mới, navigate same page tới URL với Locale Prefix tương ứng (`/en/about` → `/ko/about`) VÀ update localStorage preference.

**Switcher Visual**:
Trigger hiển thị **endonym + caret** của ngôn ngữ đang chọn: `Tiếng Việt ▾`, `English ▾`, `한국어 ▾`. KHÔNG dùng flag icon (W3C i18n best practice: cờ = quốc gia, không phải ngôn ngữ). Dropdown mở thấy 3 row endonym, row active có dấu ✓ phía bên phải. Component implementation tận dụng `DropdownMenu` từ shadcn/ui (`src/app/components/ui/dropdown-menu.tsx`) để consistent với design system hiện có.

**Endonym**:
Tên gọi của ngôn ngữ bằng chính ngôn ngữ đó. Mapping cố định trong project: `vi → "Tiếng Việt"`, `en → "English"`, `ko → "한국어"`.

**i18n Stack**:
Bộ thư viện chuẩn của project cho đa ngôn ngữ: `i18next` (core engine) + `react-i18next` (hook `useTranslation`, component `<Trans>`) + `i18next-browser-languagedetector` (auto-detect `navigator.language`). Tất cả truy cập translation phải đi qua hook/component của stack này — KHÔNG truy cập trực tiếp dictionary object.

**Trans Component**:
Component `<Trans i18nKey="...">` của `react-i18next` để render rich text có inline JSX (vd heading có `<span>` gradient). Translator dùng numbered slot (`<1>`, `<2>`) trong translation string thay cho JSX element. Áp dụng MỌI chuỗi có inline markup; chuỗi plain text dùng `t('key')`.

**Translation Namespace**:
Đơn vị tổ chức file translation. 1 namespace = 1 JSON file per ngôn ngữ. Namespace cố định Phase 1: `common` (nav, footer, switcher, label dùng chung), `home`, `current-state`, `demo`, `pricing`, `about` (mỗi page 1 namespace), `seo` (meta tags). Component dùng namespace nào → khai báo trong `useTranslation('<namespace>')` hoặc prefix key `<namespace>:`.

**Source Language File**:
Thư mục `src/i18n/locales/vi/` đóng vai trò single source of truth về key structure. Key thêm vào `vi/` trước, dịch giả en/ko mirror cấu trúc. Khi key thiếu ở en/ko, i18next fallback về vi/ tương ứng (config: `fallbackLng: "vi"`).

**Translation Loading**:
Phase 1 eager load — tất cả namespace × 3 ngôn ngữ bundle vào main JS. Lazy load (`i18next-http-backend` + code-split) defer Phase 2 khi translation file tổng > 200KB.

**SEO Meta Bundle**:
Tập 5 meta yếu tố BẮT BUỘC update đồng bộ với (page, language) hiện tại: `document.documentElement.lang`, `<title>`, `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">`. Implement qua 1 hook `useSEOMeta(page)` chạy trong `useEffect`, đọc từ namespace `seo`.

**Hreflang Set**:
Cho mỗi page render, head phải có 5 link tag: 3 `rel="alternate" hreflang="{vi,en,ko}"` trỏ tới 3 phiên bản ngôn ngữ của cùng page, 1 `hreflang="x-default"` trỏ tới phiên bản `vi` (Default Language), và 1 `rel="canonical"` trỏ tới URL của ngôn ngữ đang hiển thị.

**Static Sitemap**:
File `public/sitemap.xml` viết tay liệt kê tích descartes (5 pages × 3 Supported Languages = 15 URL canonical). Mỗi URL chứa `<xhtml:link>` alternates cho 2 ngôn ngữ còn lại. Update thủ công khi thêm/xóa page Phase 1. Auto-generate defer Phase 2.

**Meta Render Mode**:
Phase 1 dùng client-side `useEffect` manipulate `document.title`/`document.head` (không SSR). Chấp nhận risk Google bot index chậm hơn + crawler non-Google (Bing/social) có thể miss meta dynamic. Pre-render/SSG defer Phase 2 nếu Search Console báo coverage issue.

**Translation Source**:
Phase 1 toàn bộ bản dịch en/ko sinh từ AI (Claude/GPT-4) dịch trực tiếp từ source language file (`vi/`). KHÔNG có native human translation trước khi deploy Phase 1. Risk biết trước: tone, idiomatic expression, B2B SaaS terminology có thể chưa polished.

**Native Review (Phase 1.5)**:
Sau khi deploy Phase 1, sẽ có native English + native Korean reviewer chỉnh sửa AI draft translation. Review chỉ sửa text trong `en/*.json` và `ko/*.json` — không động code. Mỗi key tự update khi i18next reload translation (hoặc redeploy). KHÔNG block Phase 1 launch.

**Migration Strategy**:
Big-bang Phase 1: extract toàn bộ hardcoded text 30+ components sang `vi/*.json` → AI dịch sang `en/`, `ko/` → deploy 3 ngôn ngữ cùng lúc. KHÔNG incremental (vì site chưa release, không có user hiện hữu cần smooth migration).

**Font Stack**:
Load `Noto Sans` + `Noto Sans KR` từ Google Fonts trong `index.html` (weights 400, 500, 700), preconnect tới `fonts.googleapis.com`. Tailwind `--font-sans` chain: `"Noto Sans", "Noto Sans KR", system-ui, sans-serif`. Browser tự pick glyph theo Unicode range — Latin/Vietnamese dùng Noto Sans, Hangul dùng Noto Sans KR. Áp dụng cho mọi ngôn ngữ (không lazy load theo lang).
