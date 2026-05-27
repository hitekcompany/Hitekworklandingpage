# Spec: Multilingual Support (Tiếng Việt / English / 한국어)

---
status: ready-for-slicing
created: 2026-05-27
owner: Hoa Do
grilling_skipped: false
---

## Problem Statement

Landing page Hitek Work hiện 100% tiếng Việt. Điều này cản trở pitch sản phẩm
cho:

- Khách hàng doanh nghiệp đa quốc gia tại Việt Nam (audit, finance, IT outsourcing)
  có decision-maker không thông thạo tiếng Việt
- Đối tác và investor nước ngoài đánh giá sản phẩm Hitek Work cho thị trường
  quốc tế
- Đặc biệt thị trường Hàn Quốc — phân khúc mục tiêu cụ thể của Hitek Work

User nước ngoài landing vào site bằng tiếng Việt sẽ bounce ngay, không có cơ hội
chuyển ngôn ngữ vì không có UI nào hiện hữu cho việc đó. Đồng thời Google sẽ
không index nội dung tiếng Anh / tiếng Hàn của site (vì chưa tồn tại) → mất
organic traffic tiềm năng từ keyword tiếng Anh và tiếng Hàn về workforce
management, remote productivity, B2B SaaS.

Site đang trong giai đoạn develop chưa release — đây là thời điểm tối ưu để
build i18n foundation trước khi có user thực + organic traffic.

## Solution

Landing page hỗ trợ 3 ngôn ngữ song song: Tiếng Việt (vi, default), English (en),
Hàn Quốc (ko). User có 3 cách trải nghiệm:

1. **Truy cập lần đầu**: site tự động chọn ngôn ngữ dựa trên trình duyệt của user
   (`navigator.language`). User Hàn vào `hitekwork.com` sẽ thấy phiên bản tiếng
   Hàn ngay, không phải click switch.

2. **Chủ động chuyển ngôn ngữ**: dropdown ở cực phải header (cuối hamburger
   menu trên mobile), hiển thị endonym (`Tiếng Việt`, `English`, `한국어`).
   Khi chọn → URL navigate sang phiên bản ngôn ngữ mới của cùng page hiện tại.

3. **Truy cập deep link**: URL như `hitekwork.com/en/about` hoặc `hitekwork.com/ko/pricing`
   serve đúng ngôn ngữ trong URL, bất kể preference cũ của user trong localStorage.
   Shareable link giữa người dùng nhiều quốc gia hoạt động đúng ngôn ngữ.

Mọi URL của site có URL Locale Prefix bắt buộc (`/vi/`, `/en/`, `/ko/`). Truy cập
URL không có prefix (`/`, `/about`) → redirect tới phiên bản ngôn ngữ phù hợp.

Google indexing: mỗi page có 3 phiên bản URL canonical riêng (vi/en/ko) với
`hreflang` tag chéo, `<title>` + `<meta description>` localize cho từng ngôn ngữ.

Mọi nội dung text trong site (UI label, body content marketing, CTA button, SEO
meta) được dịch sang en/ko. KHÔNG dịch: ảnh screenshot demo sản phẩm, logo,
giá tiền VND.

## User Stories

1. As a **khách hàng doanh nghiệp Việt Nam**, I want vào `hitekwork.com` thấy
   nội dung tiếng Việt như trước, so that trải nghiệm hiện tại không bị thay đổi
   và tôi tiếp tục evaluate sản phẩm bình thường.

2. As a **khách hàng quốc tế dùng trình duyệt locale "ko-KR"**, I want truy cập
   `hitekwork.com` và thấy ngay phiên bản tiếng Hàn, so that tôi không phải tự
   tìm switcher và bounce ngay vì rào cản ngôn ngữ.

3. As a **khách hàng dùng trình duyệt locale "en-US"**, I want truy cập
   `hitekwork.com` và thấy phiên bản tiếng Anh, so that tôi hiểu được giá trị
   sản phẩm và quyết định request demo.

4. As a **user đã từng chọn tiếng Anh trước đây**, I want quay lại site sẽ
   automatically vào tiếng Anh mà không phải switch lại, so that workflow của tôi
   được giữ liên tục giữa các phiên truy cập.

5. As a **user đang đọc trang Pricing tiếng Việt**, I want click switcher chọn
   "English" và vẫn ở trang Pricing nhưng giờ là tiếng Anh, so that tôi không
   mất context page hiện tại khi chuyển ngôn ngữ.

6. As a **người chia sẻ link Pricing tiếng Anh cho đồng nghiệp Hàn**, I want gửi
   link `hitekwork.com/en/pricing` cho họ, but khi họ mở thì site hiển thị tiếng
   Hàn (vì preference của họ đã saved), so that... — **KHÔNG**, link explicit
   thắng preference, đồng nghiệp Hàn nhận được tiếng Anh đúng theo link tôi gửi.
   (URL Locale Prefix > localStorage preference theo Preference Precedence.)

7. As a **SEO bot Google**, I want crawl `hitekwork.com/en/pricing` và thấy
   `<html lang="en">` + `<title>` tiếng Anh + hreflang tag chéo, so that Google
   index đúng phiên bản tiếng Anh và serve cho keyword tiếng Anh trong search
   results.

8. As a **user dùng screen reader NVDA**, I want `<html lang>` attribute chính
   xác theo nội dung đang hiển thị, so that screen reader phát âm bằng giọng
   ngôn ngữ phù hợp (giọng tiếng Hàn cho text Hàn, không phải giọng Anh đọc
   nhầm Hangul).

9. As a **user dùng Linux server screenshot** (Vercel preview, social card
   crawler), I want text tiếng Hàn `한국어` render đúng glyph thay vì tofu boxes
   `□□□`, so that preview thumbnail và OG share image của site hiển thị
   chuyên nghiệp.

10. As a **user truy cập URL không prefix** `/about`, I want được redirect tới
    `/vi/about` (hoặc `/en/about`, `/ko/about` theo Language Resolution Chain),
    so that tôi tới đúng canonical URL có ngôn ngữ phù hợp.

11. As a **user gõ URL không tồn tại** `/vi/foo-bar`, I want thấy trang 404
    bằng ngôn ngữ tương ứng (vi/en/ko), so that thông báo lỗi vẫn nhất quán
    với ngôn ngữ tôi đang dùng. *(Out of scope nếu site chưa có 404 page —
    note thêm Phase 1.5.)*

12. As a **business stakeholder Hitek**, I want có thể edit text trong file
    JSON dịch (vd `src/i18n/locales/en/home.json`) mà không cần đụng tới code
    React, so that team translator hoặc native reviewer có thể tự cập nhật
    bản dịch qua PR mà không cần dev tham gia.

13. As a **user trên màn mobile**, I want switcher đa ngôn ngữ vẫn truy cập
    được dù header mobile rất hẹp, so that tôi có thể chuyển ngôn ngữ trên
    điện thoại mà không cần xoay ngang màn hình.

14. As a **user nhìn switcher trigger**, I want thấy tên ngôn ngữ bằng chính
    ngôn ngữ đó (endonym) ví dụ `한국어` thay vì `Korean`, so that tôi nhận
    diện nhanh ngôn ngữ tôi cần ngay cả khi tôi không thông thạo tiếng Anh.

15. As a **user mở dropdown switcher**, I want thấy dấu ✓ bên ngôn ngữ đang
    active, so that tôi biết ngay state hiện tại và không bị nhầm lẫn khi 3
    option đều liệt kê.

16. As a **dev Hitek**, I want add 1 string mới vào component → thêm vào
    `src/i18n/locales/vi/home.json` (source language) → AI dịch sang en/ko, so
    that workflow thêm content mới rõ ràng, không phải sửa code 3 lần.

17. As a **dev Hitek**, I want missing key trong `en/home.json` tự fallback sang
    `vi/home.json` thay vì hiển thị `[hero.title]` raw key, so that user không
    bao giờ thấy raw key xấu trên UI dù translation tạm thời chưa có.

18. As a **product owner**, I want deploy 3 ngôn ngữ cùng lúc (big-bang), so
    that mọi nội dung consistent và không có trường hợp UI dropdown nói "한국어"
    nhưng nội dung vẫn 50% tiếng Việt — phá trust với user Hàn.

19. As a **business stakeholder**, I want giá tiền vẫn giữ VND cho cả 3 phiên
    bản ngôn ngữ Phase 1, so that pricing policy không bị xáo trộn bởi decision
    UI và sales team không phải FX conversion.

20. As a **content reviewer phase 1.5**, I want native English speaker và native
    Korean speaker có thể chỉnh bản dịch AI draft mà không cần redeploy app, so
    that quality improvement sau launch không tốn deploy cycle.

## Implementation Decisions

### Modules build/modify

**New module:**
- `src/i18n/` — i18n config + locale files
  - `src/i18n/config.ts` — i18next init: languages, default ns, detector, fallback
  - `src/i18n/locales/{vi,en,ko}/common.json` — nav, footer, switcher, button labels
  - `src/i18n/locales/{vi,en,ko}/home.json` — HomePage + sections của nó
  - `src/i18n/locales/{vi,en,ko}/current-state.json` — CurrentStatePage + sections
  - `src/i18n/locales/{vi,en,ko}/demo.json` — DemoPage + Demo*Section
  - `src/i18n/locales/{vi,en,ko}/pricing.json` — PricingPage
  - `src/i18n/locales/{vi,en,ko}/about.json` — AboutPage
  - `src/i18n/locales/{vi,en,ko}/seo.json` — meta title/description per route
  - `src/i18n/types.ts` — TypeScript augment cho key autocomplete

**New components:**
- `src/app/components/LanguageSwitcher.tsx` — dropdown component (desktop)
  + sub-menu trong mobile hamburger
- `src/app/components/RootRedirect.tsx` — client-side redirect khi URL không có
  Locale Prefix; thực thi Language Resolution Chain

**New hooks:**
- `src/app/hooks/useSEOMeta.ts` — update `document.documentElement.lang`,
  `<title>`, `<meta>`, hreflang tags trong `useEffect`
- `src/app/hooks/useLocale.ts` — wrapper quanh `useTranslation` + URL param sync

**Modified files:**
- `index.html` — thêm preconnect + Google Fonts link cho Noto Sans + Noto Sans KR
- `src/app/App.tsx` — nested route với `:lang` param wrapper, mount RootRedirect
  tại `/` và `/*` không-prefix
- `src/styles/theme.css` — set `--font-sans` chain bao gồm Noto Sans KR
- `src/app/components/Header.tsx` — mount `LanguageSwitcher` cực phải; refactor
  navItems labels sang `t('nav.home')` etc.
- `src/app/components/Footer.tsx` — refactor sang i18n keys
- All ~25 section components (`HeroSection.tsx`, `CurrentStateSection.tsx`,
  `PillarsSection.tsx`, `DemoHeroSection.tsx`, `Demo*Section.tsx` ×10,
  `PricingSection.tsx`, etc.) — extract hardcoded text sang `t('...')` hoặc
  `<Trans i18nKey="...">` cho rich text
- All 5 page components (`HomePage.tsx`, `CurrentStatePage.tsx`, `DemoPage.tsx`,
  `PricingPage.tsx`, `AboutPage.tsx`) — call `useSEOMeta(<page>)` ở top
- `public/sitemap.xml` — static, viết tay liệt kê 15 URL (5 page × 3 lang) với
  alternate hreflang
- `vercel.json` — thêm rewrites cho `/sitemap.xml` nếu cần

**New dependencies (package.json):**
- `i18next` — core engine
- `react-i18next` — React hook/component bindings
- `i18next-browser-languagedetector` — auto-detect navigator.language

### Routing & URL contracts

Per Canonical URL term, mọi URL hợp lệ có format `/{lang}/{path}`:

```
/vi/                    → HomePage (vi)
/en/                    → HomePage (en)
/ko/                    → HomePage (ko)
/vi/current-state       → CurrentStatePage (vi)
/en/current-state       → CurrentStatePage (en)
/ko/current-state       → CurrentStatePage (ko)
/vi/demo, /en/demo, /ko/demo
/vi/pricing, /en/pricing, /ko/pricing
/vi/about, /en/about, /ko/about

Non-canonical → 301 redirect via RootRedirect component:
/                       → Language Resolution Chain → /{lang}/
/about                  → /{lang}/about
/foo-bar                → /{lang}/foo-bar (sau đó 404 nếu /{lang}/foo-bar không tồn tại)
```

React Router v7 setup:

```tsx
<Routes>
  <Route path="/" element={<RootRedirect />} />
  <Route path="/:lang/*" element={<LocalizedShell />}>
    <Route index element={<HomePage />} />
    <Route path="current-state" element={<CurrentStatePage />} />
    <Route path="demo" element={<DemoPage />} />
    <Route path="pricing" element={<PricingPage />} />
    <Route path="about" element={<AboutPage />} />
  </Route>
  <Route path="*" element={<RootRedirect />} />
</Routes>
```

`LocalizedShell` đọc `:lang` từ URL, validate nó là 1 trong Supported Languages
(`vi`/`en`/`ko`), call `i18n.changeLanguage(lang)` + ghi localStorage = lang
(Preference Precedence: URL thắng). Nếu `:lang` không hợp lệ → redirect về
Resolution Chain.

### File JSON translation contract

Key naming dot-notation: `<section>.<element>.<variant?>`.

```json
// locales/vi/home.json (source language)
{
  "hero": {
    "title": "Quản lý năng suất từ xa dựa trên <1>dữ liệu thật</1>",
    "subtitle": "Công cụ số 1 để gây dựng sự tin tưởng cho các đội ngũ làm việc cách xa nhau",
    "cta_demo": "Yêu cầu Demo",
    "benefits": {
      "transparency": "Minh bạch theo thời gian thực",
      "ai_alert": "AI cảnh báo & bảo mật",
      "reports": "Báo cáo cho từng cấp"
    }
  }
}
```

```tsx
// trong HeroSection.tsx
const { t } = useTranslation('home');

<h1>
  <Trans i18nKey="home:hero.title">
    Quản lý năng suất từ xa dựa trên <span className="...">dữ liệu thật</span>
  </Trans>
</h1>
<p>{t('hero.subtitle')}</p>
```

### i18next config

```ts
// src/i18n/config.ts
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    supportedLngs: ['vi', 'en', 'ko'],
    ns: ['common', 'home', 'current-state', 'demo', 'pricing', 'about', 'seo'],
    defaultNS: 'common',
    resources: { vi: {...}, en: {...}, ko: {...} },  // eager-load all
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'preferred_lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });
```

### SEO meta hook contract

```ts
// src/app/hooks/useSEOMeta.ts
function useSEOMeta(page: 'home' | 'current-state' | 'demo' | 'pricing' | 'about') {
  const { i18n } = useTranslation('seo');
  const lang = i18n.language;

  useEffect(() => {
    // 1. <html lang>
    document.documentElement.lang = lang;

    // 2. <title>
    document.title = i18n.t(`seo:${page}.title`);

    // 3. <meta description>
    setOrCreateMeta('name', 'description', i18n.t(`seo:${page}.description`));

    // 4. og:locale + og:title + og:description + og:locale:alternate (×2)
    setOrCreateMeta('property', 'og:locale', LOCALE_MAP[lang]);  // vi_VN/en_US/ko_KR
    setOrCreateMeta('property', 'og:title', i18n.t(`seo:${page}.title`));
    setOrCreateMeta('property', 'og:description', i18n.t(`seo:${page}.description`));

    // 5. Hreflang Set (3 alternates + x-default + canonical)
    syncHreflangTags(page, lang);

    return () => { /* optional cleanup */ };
  }, [lang, page]);
}
```

### Switcher component contract

- Component dùng `DropdownMenu` từ `src/app/components/ui/dropdown-menu.tsx`
- Trigger: button hiển thị `{ENDONYM[currentLang]} ▾`
- Menu items: 3 row với endonym, `DropdownMenuCheckboxItem` checked = currentLang
- onClick item: `navigate(/${newLang}${currentPathWithoutLangPrefix})` +
  `localStorage.setItem('preferred_lang', newLang)`
- Mobile: render same component but inside hamburger menu container

### Font loading

`index.html` thêm:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" />
```

`src/styles/theme.css` set:

```css
:root {
  --font-sans: "Noto Sans", "Noto Sans KR", system-ui, sans-serif;
}
```

### Architectural decisions

- **No SSR/SSG Phase 1** — accept client-side render meta tags risk. Defer
  `vite-plugin-ssg` or Next.js migration to Phase 2.
- **No Translation Management System** — JSON file edited via PR đủ scope Phase 1.
- **No code-split translation files** — eager load all bundle vào main JS.
- **No `react-helmet-async`** — manual `useEffect` for meta update tiết kiệm 1 dep.
- **AI Translation Source Phase 1** — Claude/GPT-4 dịch vi → en, ko trực tiếp.
  Native Review (Phase 1.5) update file JSON sau, no code change required.

### Conventions phải tuân thủ (CRITICAL)

> ⚠️ ANTI-DRIFT MECHANISM #1 — Status: **PARTIAL** (project chưa bootstrap
> `docs/agents/conventions.md`). Conventions sau lấy từ global rules + project
> patterns:

**Project-level (global rules áp dụng):**
- `C:/Users/hoado/.claude/CLAUDE.md` — Think-before-coding, simplicity first,
  surgical changes, goal-driven execution
- `C:/Users/hoado/.claude/rules/development-rules.md` — YAGNI/KISS/DRY, kebab-case
  file names, files < 200 lines, no enhanced files, edit existing

**Project conventions phái sinh từ codebase hiện hữu (chưa documented):**
- File naming: PascalCase cho React component (`Header.tsx`, `LanguageSwitcher.tsx`)
  phù hợp pattern hiện hữu (`HeroSection.tsx`, `Footer.tsx`)
- Hook naming: `use*.ts(x)` trong `src/app/hooks/` (theo `useParallax.tsx` hiện có)
- UI primitives: dùng shadcn/ui components từ `src/app/components/ui/` —
  KHÔNG import trực tiếp `@radix-ui/*` ngoài shadcn wrapper
- Styling: Tailwind utility classes inline + project color tokens (`#1e4bbf`,
  `indigo-600`) — không hardcode hex mới
- Routing: dùng `react-router` 7.x — `Link`, `useLocation`, `useNavigate` hooks
- Domain vocabulary: dùng terminology từ `CONTEXT.md` (Supported Languages,
  URL Locale Prefix, Language Switcher, Trans Component, etc.) — KHÔNG dùng
  alias tự đặt như "locale param", "lang dropdown"

**Recommend bootstrap chính thức:** chạy `/feature-bootstrap` để tạo
`docs/agents/conventions.md` proper trước khi nhiều feature i18n stage được
build — anti-drift mechanism sẽ hoạt động đầy đủ cho Phase 1.5+ work.

## Testing Decisions

### Modules tested

- **Language Resolution Chain** (logic trong RootRedirect / useLocale):
  - URL prefix present → return URL lang
  - URL prefix absent + localStorage present → return localStorage
  - URL prefix absent + localStorage absent + navigator.language match `ko*` → `ko`
  - URL prefix absent + localStorage absent + navigator.language match `en*` → `en`
  - URL prefix absent + localStorage absent + navigator.language khác → `vi`

- **Language Switcher component:**
  - Trigger hiển thị endonym đúng theo current lang
  - Menu render 3 row endonym với checkmark active đúng
  - Click row → navigate same page với lang mới + update localStorage
  - Mobile variant trong hamburger menu

- **RootRedirect:**
  - `/` → navigate tới `/{resolved-lang}/`
  - `/about` → navigate tới `/{resolved-lang}/about`
  - `/en/about` → KHÔNG redirect (đã canonical)

- **useSEOMeta hook:**
  - `document.title` cập nhật đúng theo page + lang
  - `<html lang>` attribute cập nhật
  - `<meta description>`, og tags, hreflang tags 5-link present trong `<head>`

- **Trans component rich text:**
  - Hero heading render đúng inline `<span>` gradient với text translated

### Prior art

- Project hiện **không có testing setup** (không có Jest/Vitest config,
  không có `*.test.tsx` files trong codebase) — đây là gap đáng kể.

- **Recommend setup Vitest** (cùng family với Vite) trong Phase 1 nếu chấp nhận
  effort thêm; OR defer toàn bộ tests sang Phase 1.5 sau khi infra i18n shipped.

- Reference impl cho test resolution chain logic: pure function unit test với
  Vitest hoặc Node `node:test`. Mock `navigator.language` và `localStorage`
  qua `vi.stubGlobal()` hoặc `happy-dom` environment.

### Coverage target

- **Phase 1 hard target:** 100% coverage cho Language Resolution Chain logic
  (pure function, dễ test)
- **Phase 1 soft target:** smoke test render cho LanguageSwitcher + RootRedirect
- **Phase 1 manual QA:** click qua mọi page × 3 ngôn ngữ, verify switcher,
  hreflang qua DevTools

### Test types

- **Unit:** Language Resolution Chain (Vitest pure function)
- **Component:** LanguageSwitcher render + interaction (Testing Library)
- **Integration:** RootRedirect + switcher → URL navigation (Testing Library +
  MemoryRouter)
- **E2E:** Defer Phase 2 (Playwright/Cypress setup là rabbit hole)
- **Manual QA:** Phase 1 launch checklist (15 URL × 3 lang × switcher actions)

## Out of Scope

Các item dưới đây explicit excluded khỏi Phase 1, defer Phase 2+:

- **SSR/SSG pre-rendering** cho meta tags. Risk: Google bot index chậm, social
  crawler có thể miss `<title>` dynamic. Defer `vite-plugin-ssg` hoặc Next.js
  migration. Rationale: client-side render đủ cho Google modern, không cần ngay.

- **Translation Management System** (Crowdin/Locize/Lokalise). Edit JSON qua
  PR đủ scope 7 namespace × 3 lang. Rationale: TMS overhead lớn hơn benefit
  ở scope landing page nhỏ.

- **Auto-generate sitemap.xml** từ route definition. Viết tay 15 URL sitemap.
  Rationale: routes không đổi nhiều, manual đủ Phase 1.

- **Vercel Edge config / server-side redirect** cho root `/`. Client-side
  redirect đủ Phase 1. Rationale: tránh complicate Vercel config, FOUC nhẹ
  acceptable.

- **Lazy-load translation files** (`i18next-http-backend` + code-split). Eager
  load 7 ns × 3 lang ~54KB không justify code-split cost. Rationale: bundle
  size acceptable.

- **Multi-currency** (VND/USD/KRW). Giá vẫn VND mọi ngôn ngữ. Rationale:
  pricing policy decision của business, không phải UI concern.

- **Date / number formatting per locale** (`Intl.DateTimeFormat`,
  `Intl.NumberFormat`). Bất kỳ hardcode date "Q1 2026" dịch như text string
  thường. Rationale: landing page không có ngày tháng dynamic.

- **RTL languages** (Arabic, Hebrew). Project Phase 1 không hỗ trợ. Rationale:
  out of scope thị trường mục tiêu.

- **Localized screenshot images** trong demo sections. Dùng chung ảnh tiếng
  Việt cho cả 3 ngôn ngữ. Rationale: tạo lại 30 screenshot × 2 lang đòi hỏi
  sản phẩm core có i18n trước.

- **Blog / dynamic content / CMS-driven content.** Chưa có trong project.

- **Self-host font** qua `@fontsource/noto-sans-kr`. Google Fonts CDN đủ.
  Rationale: GDPR / privacy không phải concern primary thị trường VN/SaaS.

- **Translation Memory database.** AI dịch trực tiếp từ vi/ file. Rationale:
  scope nhỏ, không có nhiều updates Phase 1.

- **404 page localized** (User Story 11). Nếu project chưa có 404 page, defer
  Phase 1.5. Phase 1 fallback browser default 404.

- **Native Human Translator Phase 1.** AI tự dịch (Claude/GPT-4), native
  reviewer chỉnh sửa Phase 1.5 (post-deploy).

- **`<html lang>` server-side rendering trong initial HTML.** Đang là `lang="en"`
  hardcoded trong `index.html:3`. Phase 1 update client-side qua `useEffect`.
  Phase 2 cân nhắc Vite plugin set initial lang theo URL prefix.

## Further Notes

### Bug observation ngoài scope feature i18n

- `src/app/components/Header.tsx:76-92` có nút "Yêu cầu Demo" với class
  `hidden lg:flex`. Trên screenshot user gửi (viewport có vẻ ≥1024px), nút này
  KHÔNG hiển thị. Có thể:
  - Browser viewport thực < 1024px (lg breakpoint Tailwind)
  - CSS conflict / override khác
  - Build chưa rebuild sau commit `aa1f211`
- **Không thuộc feature i18n** — flag để dev kiểm tra riêng. Khi switcher
  được mount ở vị trí "bên trái Demo CTA" theo spec, nếu Demo CTA không
  hiển thị thì switcher sẽ ở cực phải header — vẫn match Câu 6.1 placement.

### Phase 1.5 follow-ups

1. **Native Korean reviewer** chỉnh `ko/*.json` (priority cao — register
   formal `존댓말` quan trọng cho B2B Hàn).
2. **Native English reviewer** chỉnh `en/*.json` (priority trung — tone B2B
   SaaS Anh-Mỹ).
3. **Localized 404 page** nếu project add 404 page Phase 1.5.
4. **`docs/agents/conventions.md` bootstrap** — chạy `/feature-bootstrap` để
   enable anti-drift mechanism #1 cho future features.
5. **Pre-render meta tags** nếu Google Search Console báo coverage issue.

### Risks biết trước

- **AI translation quality** ~80-85% cho Phase 1. User Hàn đầu tiên có thể
  thấy phiên dịch hơi ngượng — acceptable risk vì site chưa launch chính thức,
  feedback sớm giúp Phase 1.5 review priority.

- **Korean text overflow trên mobile**: Korean glyph typically dài hơn Latin
  ~20% ở same font size — có thể overflow trong card có max-width fix. Manual
  QA bắt buộc check toàn bộ section trên mobile Korean.

- **Bundle size tăng**:
  - Google Fonts ~150-250KB first paint (cached after)
  - i18next + react-i18next + detector ~30KB gzipped
  - 7 namespace × 3 lang JSON ~54KB
  - **Total tăng:** ~250-350KB lần đầu, cached sau đó. Acceptable cho landing.

### Glossary reference

Mọi term technical + domain dùng trong spec này tham chiếu `CONTEXT.md`:
Supported Languages, Default Language, Language Resolution Chain, Translatable
Content, Non-Translatable Assets, URL Locale Prefix, Canonical URL, Root
Redirect, Preference Precedence, Language Switcher, Switcher Visual, Endonym,
i18n Stack, Trans Component, Translation Namespace, Source Language File,
Translation Loading, SEO Meta Bundle, Hreflang Set, Static Sitemap, Meta Render
Mode, Translation Source, Native Review, Migration Strategy, Font Stack.

---

> **Generated by `/feature-spec` after `/feature-grill` (2026-05-27).**
> Next phase: `/feature-slice` breaks spec into vertical task files.
