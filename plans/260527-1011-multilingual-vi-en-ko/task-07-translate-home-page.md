---
task: 07
title: Translate HomePage sections
status: done
type: AFK
blocked_by: [task-06]
effort: M
human_estimate_hours: 3
ai_estimate_hours: 0.4
actual_hours: 0.4
created: 2026-05-27
completed: 2026-05-27
---

# Task 07: Translate HomePage sections

> ⚠️ **Vertical slice:** vi/en/ko home.json + HomePage section components refactor.

## What to build

Extract toàn bộ text hardcoded từ các section components thuộc HomePage,
populate namespace `home` × 3 ngôn ngữ, refactor components dùng `t()` + `<Trans>`.

HomePage sections (đọc `src/app/pages/HomePage.tsx` để confirm list):
- HeroSection (heading có rich text inline `<span>` gradient — dùng `<Trans>`)
- PillarsSection + PillarCard
- TransitionSection
- BottomCTASection
- Có thể thêm: WhyRealDataSection nếu mount trong HomePage

Sau task này, navigate `/en/` và `/ko/` → home page render đúng tiếng Anh / Hàn.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/pages/HomePage.tsx` — đọc kỹ để xác định EXACT list section nào nằm trong page
- `src/app/components/HeroSection.tsx` — section phức tạp nhất, có rich text inline `<span>` gradient + decorative icons + benefit list
- `src/app/components/PillarsSection.tsx` + `PillarCard.tsx` — array-based content có thể dùng `returnObjects: true` của i18next
- `src/app/components/BottomCTASection.tsx`
- `src/app/components/TransitionSection.tsx`
- Task-06 — pattern refactor đã thiết lập (useTranslation + t/Trans)
- `CONTEXT.md` — Translatable Content, Trans Component, Translation Namespace

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/home.json` structure đề xuất (adjust theo content actual khi đọc):
  ```json
  {
    "hero": {
      "title_part_1": "Quản lý năng suất từ xa dựa trên",
      "title_highlight": "dữ liệu thật",
      "subtitle": "Công cụ số 1 để gây dựng sự tin tưởng cho các đội ngũ làm việc cách xa nhau",
      "cta_demo": "Yêu cầu Demo",
      "benefits": {
        "transparency": "Minh bạch theo thời gian thực",
        "ai_alert": "AI cảnh báo & bảo mật",
        "reports": "Báo cáo cho từng cấp"
      }
    },
    "pillars": {
      "section_title": "...",
      "items": [
        { "title": "...", "description": "..." }
      ]
    },
    "transition": { "...": "..." },
    "bottom_cta": { "...": "..." }
  }
  ```

- Hero title với rich text inline gradient — dùng `<Trans>`:
  ```tsx
  <h1>
    <Trans i18nKey="home:hero.title">
      Quản lý năng suất từ xa dựa trên <1>dữ liệu thật</1>
    </Trans>
  </h1>
  ```
  Hoặc tách 2 key `title_part_1` + `title_highlight` rồi concat trong JSX. Pattern `<Trans>` recommended cho consistency.

## Acceptance criteria

- [ ] `vi/home.json` populated với hero + pillars + transition + bottom_cta
      verify: `grep -cE "\"hero\"|\"pillars\"|\"bottom_cta\"" src/i18n/locales/vi/home.json` → ≥3

- [ ] `en/home.json` non-empty + có English text
      verify: PowerShell: `(Get-Content src/i18n/locales/en/home.json -Raw).Length -gt 200`

- [ ] `ko/home.json` non-empty + có Hangul characters
      verify: `grep -E "[가-힣]" src/i18n/locales/ko/home.json`

- [ ] HeroSection refactored: dùng `useTranslation('home')` + `<Trans>` cho rich text
      verify: `grep -cE "useTranslation\(.*home|<Trans" src/app/components/HeroSection.tsx` → ≥2

- [ ] HeroSection KHÔNG còn hardcoded Vietnamese strings dài
      verify: `grep -cE "Quản lý năng suất|Công cụ số 1|Minh bạch theo thời gian|AI cảnh báo" src/app/components/HeroSection.tsx` → 0

- [ ] PillarsSection refactored
      verify: `grep -cE "useTranslation\(.*home|t\(" src/app/components/PillarsSection.tsx` → ≥1

- [ ] BottomCTASection + TransitionSection refactored
      verify: `grep -lE "useTranslation\(.*home" src/app/components/{BottomCTASection,TransitionSection}.tsx | wc -l` → 2

- [ ] Manual QA: `/vi/` → tiếng Việt như cũ
      verify: `pnpm dev` → `http://localhost:5173/vi/`

- [ ] Manual QA: `/en/` → text tiếng Anh
      verify: `pnpm dev` → `http://localhost:5173/en/`

- [ ] Manual QA: `/ko/` → text tiếng Hàn, không tofu (font task-05 đã handle)
      verify: `pnpm dev` → `http://localhost:5173/ko/`

- [ ] Manual QA: heading hero gradient "dữ liệu thật" / "real data" / "실제 데이터" vẫn render với gradient styling
      verify: `pnpm dev` → visual

- [ ] Build passes
      verify: `pnpm build`

## Downstream consumers

```bash
grep -rE "Quản lý năng suất từ xa|Công cụ số 1" src/ --include="*.tsx"
```

Strings này có thể xuất hiện ở components ngoài HomePage (vd `WhyRealDataSection` dùng cho cả 2 pages). Khi extract, để key ở namespace `home` nếu component CHỈ dùng HomePage; ở `common` nếu dùng nhiều page. Decide khi đọc actual usage.

## Out of scope

- CurrentStatePage sections → task-08
- DemoPage sections → task-09, task-10
- SEO meta cho HomePage → task-13

## Implementation notes

- `useTranslation('home')` không exclusive — component có thể dùng cả `common` namespace bằng prefix `t('common:nav.home')`.
- Array translations (vd pillars items): dùng `returnObjects: true`:
  ```ts
  const items = t('pillars.items', { returnObjects: true }) as Array<{title: string, description: string}>;
  ```
- AI dịch prompt cùng template task-06. Nhấn mạnh: marketing copy B2B SaaS, professional warm tone.
- Korean text typically dài hơn Latin 10-20% — preview trên mobile, check overflow.
