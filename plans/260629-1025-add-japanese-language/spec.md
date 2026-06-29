# Spec: Bổ sung tiếng Nhật (ja) vào tính năng đa ngôn ngữ

---
status: ready-for-slicing
created: 2026-06-29
owner: Hoa Do
grilling_skipped: false
---

## Problem Statement

Landing page Hitek Work (`work.hitek.com.vn`) hiện hỗ trợ 3 ngôn ngữ: Tiếng Việt,
Tiếng Anh, Tiếng Hàn. Khách truy cập nói tiếng Nhật — đặc biệt là người ra quyết
định ở các doanh nghiệp Nhật / thị trường Nhật mà Hitek muốn tiếp cận — không đọc
được site bằng tiếng mẹ đẻ của họ, làm giảm độ tin cậy và tỉ lệ chuyển đổi.

User yêu cầu: *"bổ sung tiếng nhật vào tính năng đa ngôn ngữ của website này"*.

## Solution

Thêm **Tiếng Nhật (`ja`)** làm ngôn ngữ thứ 4 trong tập **Supported Languages**,
ngang hàng hoàn toàn với en/ko: phủ đủ 5 trang (Home, Current State, Demo,
Pricing, About) × 7 namespace, có **URL Locale Prefix** `/ja/`, xuất hiện trong
**Language Switcher** với endonym `日本語`, được auto-detect từ trình duyệt, và có
đầy đủ **SEO Meta Bundle** + **hreflang Set** + sitemap.

Đây là thay đổi **additive**: không đổi Default Language (`vi` vẫn là mặc định +
`x-default`), không đổi logic resolve ngôn ngữ, không động tới en/ko. Mọi cơ chế
hiện có đã chạy theo mảng `SUPPORTED_LANGUAGES` nên thêm `ja` chủ yếu là "khai báo
thêm + cung cấp bản dịch".

Bản dịch tiếng Nhật ở giai đoạn này do **AI sinh draft** trực tiếp từ
**Source Language File** (`vi/`), deploy ngay; native Nhật review sau ở Phase 1.5
(giống cách en/ko đã làm).

## User Stories

1. As a **khách nói tiếng Nhật**, I want truy cập `work.hitek.com.vn/ja/` và thấy
   toàn bộ 5 trang bằng tiếng Nhật, so that tôi hiểu sản phẩm bằng tiếng mẹ đẻ.
2. As a **khách nói tiếng Nhật**, I want trình duyệt có ngôn ngữ `ja` tự đưa tôi
   về phiên bản tiếng Nhật khi vào trang gốc (chưa có preference đã lưu), so that
   tôi không phải tự đổi ngôn ngữ. (**Language Resolution Chain** thêm nhánh
   `navigator.language` bắt đầu `ja` → `ja`.)
3. As a **khách bất kỳ**, I want thấy mục `日本語` trong **Language Switcher** (cả
   desktop lẫn hamburger drawer mobile), so that tôi chuyển sang tiếng Nhật thủ
   công được; khi chọn, site điều hướng tới cùng trang với prefix `/ja/` và lưu
   **Preference Precedence** vào localStorage.
4. As a **khách đang ở trang tiếng Nhật**, I want chữ Kanji (Hán tự) hiển thị đúng
   kiểu chữ Nhật (không bị render theo glyph Hàn), so that nội dung trông tự nhiên
   với người Nhật. (**Font Stack** dùng `Noto Sans JP` qua CSS `:lang(ja)`.)
5. As a **khách doanh nghiệp Nhật**, I want toàn bộ văn bản dùng giọng です・ます調
   (lịch sự chuẩn B2B), so that site nghe chuyên nghiệp, đúng mực, không cứng nhắc
   quá mức cũng không suồng sã. (**Politeness Register** cho `ja`.)
6. As a **khách xem trang giá (Pricing)**, I want thấy giá giữ nguyên VND
   (`99,000₫`) với phần chữ được dịch sang tiếng Nhật, so that giá khớp với hóa
   đơn thật. (Nhất quán **Non-Translatable Assets** — không multi-currency.)
7. As a **search engine bot (Google)**, I want mỗi trang tiếng Nhật có **SEO Meta
   Bundle** đúng (`<html lang="ja">`, title/description, `og:locale=ja_JP`,
   `og:locale:alternate`), so that index đúng phiên bản ngôn ngữ.
8. As a **search engine bot**, I want mỗi trang có **Hreflang Set** đầy đủ gồm cả
   `hreflang="ja"` (4 alternate + `x-default=vi` + `canonical`), so that hiểu
   quan hệ các phiên bản ngôn ngữ. (Mở rộng từ 3 → 4 alternate mỗi trang.)
9. As a **search engine bot**, I want `public/sitemap.xml` liệt kê 5 URL `/ja/*`
   mới và thêm alternate `ja` vào mọi URL hiện có, so that crawl đủ 20 URL (5
   trang × 4 ngôn ngữ). (**Static Sitemap** mở rộng 15 → 20 URL.)
10. As a **khách gõ URL `/ja/` sai/thiếu** (vd `/ja` không có route con), I want
    được xử lý nhất quán như các ngôn ngữ khác (`LocalizedShell` nhận `ja` là
    valid lang), so that không vỡ trang.
11. As a **maintainer**, I want bản dịch `ja/*.json` mirror đúng cấu trúc key của
    `vi/*.json` (không thiếu/thừa key), so that i18next fallback hoạt động đúng và
    native reviewer Phase 1.5 dễ đối chiếu.

## Implementation Decisions

- **Modules build/modify** (theo glossary):
  - **i18n Stack config** — thêm `ja` vào `SUPPORTED_LANGUAGES`, import 7 file
    JSON `ja/`, đăng ký vào `resources`.
  - **Translation Namespace × ja** — tạo bộ file `ja/` cho cả 7 namespace
    (`common`, `home`, `current-state`, `demo`, `pricing`, `about`, `seo`),
    mirror cấu trúc **Source Language File** `vi/`, nội dung do AI dịch (giọng
    です・ます調, giá giữ VND).
  - **Language Switcher** — thêm **Endonym** `ja → "日本語"` vào ENDONYM_MAP.
  - **SEO Meta Bundle / useSEOMeta** — thêm `ja → "ja_JP"` vào LOCALE_MAP;
    hreflang + og:locale:alternate tự sinh thêm `ja` vì đã loop theo
    `SUPPORTED_LANGUAGES`.
  - **Root Redirect** — thêm nhánh auto-detect `navigator.language` bắt đầu `ja`
    → trả `ja` trong **Language Resolution Chain**.
  - **Font Stack** — load `Noto Sans JP` (weights 400/500/700) từ Google Fonts
    trong `index.html`; thêm CSS `:lang(ja)` ưu tiên `"Noto Sans JP"` và
    `:lang(ko)` ưu tiên `"Noto Sans KR"` (tách khỏi base `--font-sans` để tránh
    lỗi Han unification).
  - **Static Sitemap** — `public/sitemap.xml` thêm 5 URL `/ja/*` + thêm
    `hreflang="ja"` alternate vào toàn bộ 20 URL.

- **API contracts:** Không có. Site là SPA tĩnh, không backend.

- **Schema changes:** Không có. Không database, không migration.

- **Architectural decisions:**
  - Thay đổi additive driven-by-array — không refactor logic resolve/routing.
  - **Translation Source** = AI draft (deploy ngay, native review Phase 1.5).
  - **Translation Loading** = eager (giữ nguyên Phase 1; chưa lazy-load).
  - Font CJK tách theo `:lang()` thay vì 1 font chain chung (quyết định trong
    grilling — đúng chuẩn W3C, tận dụng `<html lang>` mà `useSEOMeta` đã set).

### Conventions phải tuân thủ (CRITICAL)

> ⚠️ Project **chưa bootstrap** `docs/agents/conventions.md` (đang nằm trong
> STATUS.md "Next up" — chạy `/feature-bootstrap`). Vì vậy convention dưới đây
> được **rút ra từ implementation en/ko hiện có** — đó là reference de-facto bắt
> buộc tuân theo để tránh drift. (Anti-drift mechanism #1 — partial.)

- **Single source of truth là mảng `SUPPORTED_LANGUAGES`** (`src/i18n/config.ts`).
  Thêm ngôn ngữ = thêm vào mảng + thêm resources; KHÔNG hardcode danh sách ngôn
  ngữ rời rạc ở component khác. Các nơi map cố định theo `Lang` (ENDONYM_MAP,
  LOCALE_MAP) phải bổ sung entry `ja` cho khớp type `Record<Lang, ...>`.
- **Mọi truy cập translation đi qua `useTranslation`/`<Trans>`** — không đọc trực
  tiếp dictionary object.
- **`<Trans>` phải có prop `components`** khi render rich text (bài học từ bug
  VN/EN bleed trên trang Hàn — STATUS 2026-05-27). Bản `ja` không thêm `<Trans>`
  mới (mirror cấu trúc vi/), nhưng nếu có thì giữ nguyên numbered slot + prop
  `components`.
- **`ja/*.json` mirror chính xác key của `vi/*.json`** — `vi/` là **Source
  Language File**, key thêm/sửa ở `vi/` trước; `ja/` không tự thêm key lạ.
  `fallbackLng: "vi"` xử lý key thiếu.
- **Endonym ghi bằng chính ngôn ngữ đó** (`日本語`), KHÔNG dùng flag icon (W3C
  i18n best practice — đã chốt trong **Switcher Visual**).
- **Giá tiền là Non-Translatable** — giữ chuỗi `"99,000₫"` trong `ja/pricing.json`,
  chỉ dịch nhãn chữ (`"price"` number-string giữ nguyên ₫).
- **File naming kebab-case**, file < 200 dòng (global dev rules); JSON namespace
  giữ đúng tên hiện có.
- **Commit message tiếng Anh, conventional commits** (`feat(i18n): ...`).

## Testing Decisions

- **Modules tested:**
  - Render đủ 5 trang ở `/ja/` không lỗi, không sót chuỗi tiếng Việt/Anh lẫn vào.
  - **Language Switcher** hiển thị + chuyển sang `日本語` đúng (desktop + mobile),
    cập nhật URL `/ja/...` + localStorage.
  - Auto-detect: trình duyệt `navigator.language = ja*` → redirect `/ja/`.
  - **Hreflang Set** + canonical + `og:locale` đúng trên trang `ja` (kiểm tra DOM
    `<head>`).
  - Kanji render bằng Noto Sans JP (kiểm tra visual / computed font-family).
  - **Key parity:** `ja/*.json` có đúng tập key như `vi/*.json` (không thiếu/thừa).

- **Prior art:** Chưa có test suite tự động trong repo (Vitest còn nằm Phase 1.5
  "Next up"). Cách verify đã dùng cho en/ko = **Playwright MCP visual QA** trong
  session + đọc DOM. Dùng lại cách này.

- **Coverage target:** Manual verification 100% user stories qua checklist
  (`/feature-verify`). Không đặt mục tiêu % unit test (suite chưa tồn tại).

- **Test types:** Manual / visual QA (Playwright MCP) + kiểm tra key parity bằng
  script/grep. Unit test defer Phase 1.5.

## Out of Scope

- **Native human translation tiếng Nhật** — Phase 1.5 (sau deploy). Lần này chỉ
  AI draft.
- **Hiển thị giá JPY / multi-currency** — giữ VND (đã chốt). Không quy đổi tỉ giá.
- **Lazy-load translation theo ngôn ngữ** — vẫn eager-load; defer Phase 2 khi
  tổng translation > 200KB.
- **SSR / pre-render meta tags** — vẫn client-side `useEffect` (Meta Render Mode
  hiện tại). Không đổi trong scope này.
- **Code-splitting để giảm bundle** — defer Phase 2 (cảnh báo 601KB đã biết).
- **Localized 404 page** — site chưa có route 404 riêng (đang ở STATUS "Next up").
- **Auto-generate sitemap** — vẫn viết tay (Static Sitemap), defer Phase 2.
- **`i18next-parser` CI check** — hardening Phase 1.5, không thuộc feature này.
- **Đổi Default Language / x-default** — `vi` giữ nguyên.

## Further Notes

- **Risk chất lượng dịch `ja`:** AI dịch tiếng Nhật + keigo + thuật ngữ B2B
  thường đạt ~80-85%. Đã chấp nhận; mitigation = native JA review Phase 1.5. Đưa
  chỉ dẫn giọng です・ます調 vào prompt dịch để toàn site nhất quán.
- **Han unification:** lý do tách font theo `:lang()` — Kanji (JP) và Hanja (KO)
  chung mã Unicode nhưng khác glyph; nếu để 1 chain chung, font đứng trước sẽ
  "thắng" và render sai kiểu chữ. `Noto Sans JP` không chứa Hangul nên không ảnh
  hưởng trang KO.
- **Hệ quả bundle/perf:** thêm 1 bộ `ja/*.json` eager-load (~+30-40KB trước
  gzip) + tải thêm font Noto Sans JP (Google Fonts phục vụ subset theo glyph
  dùng). Không phải blocker.
- **localStorage `preferred_lang` cũ:** khách đã lưu vi/en/ko sẽ giữ nguyên trải
  nghiệp; `ja` chỉ áp dụng cho khách mới hoặc khi họ chủ động chọn — không cần
  migration.
- **Thứ tự `ja` trong dropdown switcher:** sẽ theo thứ tự mảng
  `SUPPORTED_LANGUAGES` → đặt `ja` cuối (`vi, en, ko, ja`). Nếu muốn thứ tự khác,
  chỉnh mảng là đủ.
- **Vocabulary:** spec dùng đúng term trong `CONTEXT.md` (đã cập nhật cho `ja`:
  Supported Languages, Endonym, Translation Source, Font Stack, Politeness
  Register).
