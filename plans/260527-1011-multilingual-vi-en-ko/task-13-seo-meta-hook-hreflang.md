---
task: 13
title: useSEOMeta hook + seo.json + hreflang + html lang sync
status: done
type: AFK
blocked_by: [task-02]
effort: M
human_estimate_hours: 3
ai_estimate_hours: 0.4
actual_hours: 0.35
created: 2026-05-27
completed: 2026-05-27
---

# Task 13: SEO meta hook + hreflang

> ⚠️ **Vertical slice:** useSEOMeta hook + seo.json × 3 lang + 5 page components mount + dynamic head manipulation.

## What to build

Tạo hook `src/app/hooks/useSEOMeta.ts` mount trong mỗi page component (5 pages).
Hook sync với (page, lang) state để update toàn bộ **SEO Meta Bundle** (per
CONTEXT.md term):

1. `document.documentElement.lang` ← current lang
2. `<title>` ← từ `seo:<page>.title`
3. `<meta name="description">` ← từ `seo:<page>.description`
4. `<meta property="og:locale">` ← `vi_VN` / `en_US` / `ko_KR`
5. `<meta property="og:locale:alternate">` × 2 (cho 2 lang còn lại)
6. `<meta property="og:title">` + `<meta property="og:description">`
7. **Hreflang Set** (5 link tags):
   - 3 × `<link rel="alternate" hreflang="vi|en|ko">`
   - 1 × `<link rel="alternate" hreflang="x-default">` (trỏ vi)
   - 1 × `<link rel="canonical">` (trỏ current lang URL)

Base URL: **`https://work.hitek.com.vn`** (user confirmed).

Populate `seo.json` × 3 lang với title + description cho 5 page (home,
current-state, demo, pricing, about).

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/components/ScrollToHash.tsx` — pattern useEffect cleanup
- `src/app/hooks/useParallax.tsx` — pattern custom hook trong project
- `src/app/pages/{Home,CurrentState,Demo,Pricing,About}Page.tsx` — 5 page mount hook
- `CONTEXT.md` — SEO Meta Bundle, Hreflang Set, Meta Render Mode, Canonical URL, URL Locale Prefix, Default Language

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Story 7, 8; section "SEO meta hook contract")

## Key interfaces (durable contracts)

- `src/app/hooks/useSEOMeta.ts`:
  ```ts
  type PageKey = 'home' | 'current-state' | 'demo' | 'pricing' | 'about';
  type Lang = 'vi' | 'en' | 'ko';

  const BASE_URL = 'https://work.hitek.com.vn';

  const LOCALE_MAP: Record<Lang, string> = {
    vi: 'vi_VN',
    en: 'en_US',
    ko: 'ko_KR',
  };

  const PAGE_PATH: Record<PageKey, string> = {
    'home': '',
    'current-state': 'current-state',
    'demo': 'demo',
    'pricing': 'pricing',
    'about': 'about',
  };

  export function useSEOMeta(page: PageKey): void;
  ```

  Helper internal:
  ```ts
  function setOrCreateMeta(attrName: 'name' | 'property', attrValue: string, content: string): void;
  function clearHreflangTags(): void;
  function addLinkTag(rel: string, hreflang: string | null, href: string): void;
  ```

- `src/i18n/locales/{vi,en,ko}/seo.json`:
  ```json
  {
    "home": {
      "title": "...",
      "description": "..."
    },
    "current-state": { "title": "...", "description": "..." },
    "demo": { "title": "...", "description": "..." },
    "pricing": { "title": "...", "description": "..." },
    "about": { "title": "...", "description": "..." }
  }
  ```

- Mount trong page component:
  ```tsx
  export function HomePage() {
    useSEOMeta('home');
    return <>{/* ... */}</>;
  }
  ```

## Acceptance criteria

- [ ] `useSEOMeta.ts` exists
      verify: `test -f src/app/hooks/useSEOMeta.ts`

- [ ] Hook manipulate `document.title` + `document.documentElement.lang`
      verify: `grep -cE "document\.title|documentElement\.lang" src/app/hooks/useSEOMeta.ts` → ≥2

- [ ] Hook tạo/update hreflang link tags
      verify: `grep -cE "hreflang|x-default|canonical" src/app/hooks/useSEOMeta.ts` → ≥3

- [ ] Hook tạo og:locale + og:title + og:description meta tags
      verify: `grep -cE "og:locale|og:title|og:description" src/app/hooks/useSEOMeta.ts` → ≥3

- [ ] BASE_URL = `https://work.hitek.com.vn`
      verify: `grep "work\.hitek\.com\.vn" src/app/hooks/useSEOMeta.ts`

- [ ] `seo.json` × 3 lang populated cho 5 page
      verify: PowerShell: cả 3 file có 5 top-level keys (home, current-state, demo, pricing, about). Test: `(Get-Content src/i18n/locales/vi/seo.json -Raw | ConvertFrom-Json | Get-Member -MemberType NoteProperty).Count` → 5; tương tự en, ko

- [ ] 5 page component mount hook
      verify: `grep -lE "useSEOMeta\(" src/app/pages/*.tsx | wc -l` → 5

- [ ] Manual QA: `/vi/about` mở DevTools → `<html lang="vi">`, `<title>` đúng tiếng Việt, 5 hreflang link tags trong `<head>`
      verify: `pnpm dev` → URL → DevTools Elements → inspect `<head>` và `<html>`

- [ ] Manual QA: chuyển sang `/en/about` → `<html lang="en">` + title tiếng Anh
      verify: manual

- [ ] Manual QA: canonical link trỏ đúng current lang URL
      verify: DevTools `<link rel="canonical">` URL match

- [ ] Manual QA: x-default hreflang trỏ tới `/vi/about`
      verify: DevTools

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- Sitemap.xml → task-14
- Open Graph image localization (ảnh og:image cùng 1 ảnh cho 3 lang) → spec OOS Phase 2
- Twitter Card meta — có thể thêm bonus nếu rảnh, nhưng không required
- robots.txt thay đổi — không cần

## Implementation notes

- Hreflang URL build: `${BASE_URL}/${lang}/${PAGE_PATH[page]}` — nếu page = 'home', path = `${BASE_URL}/${lang}/` (có trailing slash, hoặc bỏ trailing tuỳ convention).
- Cleanup function trong `useEffect` return: remove hreflang tags đã add để tránh accumulate khi navigate giữa pages. Cleanest pattern: query `<link rel="alternate">` + remove all trước khi add lại.
- `setOrCreateMeta` pattern:
  ```ts
  function setOrCreateMeta(attrName, attrValue, content) {
    let tag = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attrName, attrValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }
  ```
- AI dịch SEO title + description per page. Prompt nhấn mạnh: SEO-optimized (60 chars title, 155 chars description), include keyword chính (vd "workforce management", "remote productivity") cho en. Korean equivalent terms.
- index.html hiện có hardcoded `<title>Hitek Work - Landing Page</title>` — sẽ bị overwrite bởi hook khi page mount. KHÔNG cần xoá khỏi index.html (acceptable fallback initial paint).
