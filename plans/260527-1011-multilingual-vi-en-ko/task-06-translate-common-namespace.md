---
task: 06
title: Translate common namespace (nav, footer, switcher labels)
status: done
type: AFK
blocked_by: [task-01, task-04]
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: 0.3
created: 2026-05-27
completed: 2026-05-27
---

# Task 06: Translate common namespace

> ⚠️ **Vertical slice:** vi/en/ko common.json + Header.tsx refactor + Footer.tsx refactor + LanguageSwitcher labels.

## What to build

Populate namespace `common` cho cả 3 ngôn ngữ với strings dùng chung (nav menu
labels, footer text, button labels như "Yêu cầu Demo", "Dùng thử miễn phí",
aria-labels). Refactor `Header.tsx`, `Footer.tsx` để text chuyển sang
`t('common:key')` thay cho hardcoded Vietnamese strings.

**Translation workflow per CONTEXT.md term Translation Source:**
1. Extract toàn bộ text hardcoded từ Header + Footer + (nếu có) LanguageSwitcher
2. Populate `src/i18n/locales/vi/common.json` với key dot-notation
3. AI dịch (Claude/GPT-4) `vi/common.json` → `en/common.json` và `ko/common.json`
4. Refactor component dùng `useTranslation('common')` + `t('key')` hoặc `<Trans>`

Sau task này, switcher đổi ngôn ngữ thấy nav menu + footer đổi text liền.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/components/Header.tsx` — file modify, đọc kỹ list `navItems`, mobile menu, button labels
- `src/app/components/Footer.tsx` — file modify, đọc current text content
- `src/app/components/LanguageSwitcher.tsx` (task-04) — kiểm tra có string nào cần localize (vd aria-label "Switch language")
- `CONTEXT.md` — Translation Namespace, Source Language File, Trans Component, i18n Stack

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Stories 12, 16, 17, 18)

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/common.json` proposed structure:
  ```json
  {
    "nav": {
      "home": "Trang chủ",
      "solution": "Giải pháp",
      "features": "Tính năng",
      "about": "Về chúng tôi",
      "pricing": "Bảng giá"
    },
    "cta": {
      "request_demo": "Yêu cầu Demo",
      "try_free": "Dùng thử miễn phí"
    },
    "switcher": {
      "aria_label": "Chuyển ngôn ngữ"
    },
    "footer": {
      "copyright": "© 2026 Hitek Work. Mọi quyền được bảo lưu.",
      "contact": "Liên hệ",
      "social": {
        "zalo": "Zalo"
      }
    },
    "header": {
      "logo_alt": "Hitek Work"
    }
  }
  ```
  (Exact structure phụ thuộc text actual trong Header.tsx + Footer.tsx khi đọc.)

- `en/common.json` và `ko/common.json` mirror structure, value dịch AI.

- Refactor pattern trong component:
  ```tsx
  const { t } = useTranslation('common');
  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.solution', href: '/current-state' },
    // ...
  ];
  // render: {t(item.key)}
  ```

## Acceptance criteria

- [ ] `vi/common.json` populated với nav + footer + CTA keys
      verify: `grep -cE "\"home\"|\"solution\"|\"features\"|\"about\"" src/i18n/locales/vi/common.json` → ≥4

- [ ] `en/common.json` populated cùng structure (không empty)
      verify: PowerShell: `(Get-Content src/i18n/locales/en/common.json -Raw).Length -gt 50`

- [ ] `ko/common.json` populated cùng structure (có Hangul characters)
      verify: `grep -E "[가-힣]" src/i18n/locales/ko/common.json`

- [ ] Header.tsx dùng `useTranslation` + `t('common:...')`
      verify: `grep -cE "useTranslation|t\('common:|t\(\"common:" src/app/components/Header.tsx` → ≥1

- [ ] KHÔNG còn "Trang chủ" / "Giải pháp" / "Tính năng" / "Về chúng tôi" hardcoded trong Header
      verify: `grep -cE "Trang chủ|Giải pháp|Tính năng|Về chúng tôi" src/app/components/Header.tsx` → 0

- [ ] KHÔNG còn "Yêu cầu Demo" / "Dùng thử miễn phí" hardcoded trong Header
      verify: `grep -cE "Yêu cầu Demo|Dùng thử miễn phí" src/app/components/Header.tsx` → 0

- [ ] Footer.tsx refactored
      verify: `grep -cE "useTranslation|t\('common:|t\(\"common:" src/app/components/Footer.tsx` → ≥1

- [ ] Manual QA: switch lang → nav menu + footer đổi text liền
      verify: `pnpm dev` → `/vi/` → switcher → English/한국어 → quan sát Header + Footer

- [ ] Manual QA: switcher button trigger hiển thị endonym đúng cho mỗi lang
      verify: `pnpm dev` → check trigger label

- [ ] Build passes
      verify: `pnpm build`

## Downstream consumers (CRITICAL)

Khi rename string → key, search downstream usages:

```bash
grep -rE "(Trang chủ|Giải pháp|Tính năng|Về chúng tôi|Yêu cầu Demo)" src/ --include="*.tsx" --include="*.ts"
```

Strings này CŨNG xuất hiện trong components khác (vd HeroSection có "Yêu cầu Demo"). Task này chỉ extract trong scope Header + Footer. Strings xuất hiện trong HomePage section sẽ được handle bởi task-07.

**Important**: ĐỪNG extract "Yêu cầu Demo" trong HeroSection ở task này — để task-07 xử lý cùng namespace `home`. Nếu cùng string xuất hiện ở 2 namespace (common + home), CHẤP NHẬN duplicate vì translator có thể chọn tone khác nhau cho nav (compact) vs hero (gọi mời).

## Out of scope

- Translate body text trong section components → task-07 onwards
- Translate SEO meta → task-13
- Native review quality polish → Phase 1.5

## Implementation notes

- AI prompt template cho dịch JSON: `"Translate this Vietnamese B2B SaaS landing page JSON to {target_lang}. Tone: professional but warm. Preserve JSON structure exactly. Keep brand name 'Hitek Work' untranslated."`
- Vietnamese → Korean: tone `존댓말` (formal) cho B2B audience.
- Vietnamese → English: tone neutral professional, avoid overly casual or overly corporate jargon.
- Brand "Hitek Work" KHÔNG dịch.
- Zalo (Vietnamese chat app) trong footer: giữ nguyên cho vi, có thể thêm context "(Vietnam chat app)" cho en/ko phiên bản. Decide khi review actual content.
