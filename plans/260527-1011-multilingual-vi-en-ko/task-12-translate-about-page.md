---
task: 12
title: Translate AboutPage
status: done
type: AFK
blocked_by: [task-06]
effort: S
human_estimate_hours: 1
ai_estimate_hours: 0.15
actual_hours: 0.2
created: 2026-05-27
completed: 2026-05-27
---

# Task 12: Translate AboutPage

> ⚠️ **Vertical slice:** vi/en/ko about.json + AboutPage refactor.

## What to build

Extract text từ AboutPage (về công ty Hitek), populate namespace `about` × 3
ngôn ngữ. AboutPage thường có:
- Company intro / mission
- Team intro hoặc founder bio
- Values / culture
- Contact info

Đọc `src/app/pages/AboutPage.tsx` để xác định exact structure section.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/pages/AboutPage.tsx` — file modify (page có thể inline content trực tiếp, không tách section component)
- Task-07/11 pattern refactor
- `CONTEXT.md` — Translation Namespace, Trans Component

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/about.json` cấu trúc tentative:
  ```json
  {
    "hero": { "title": "Về Hitek Work", "subtitle": "..." },
    "company_intro": { "...": "..." },
    "mission": { "title": "...", "body": "..." },
    "values": [
      { "title": "...", "description": "..." }
    ],
    "contact": { "email": "...", "phone": "...", "address": "..." }
  }
  ```

  Adjust theo content thực tế AboutPage. Brand name "Hitek Work" KHÔNG dịch
  (Non-Translatable per CONTEXT.md tinh thần).

## Acceptance criteria

- [ ] `vi/about.json` populated
      verify: PowerShell length check `> 200`

- [ ] `en/about.json` + `ko/about.json` populated với value dịch
      verify: length check + Hangul grep

- [ ] AboutPage component dùng `useTranslation('about')`
      verify: `grep -cE "useTranslation\(.*about" src/app/pages/AboutPage.tsx` → ≥1

- [ ] Brand "Hitek Work" KHÔNG bị dịch trong en/ko files
      verify: `grep -cE "Hitek Work" src/i18n/locales/{en,ko}/about.json` → ≥1 mỗi file

- [ ] Contact info (email, phone, address) PRESERVE format gốc
      verify: nếu có email/phone trong vi/about.json, en/ko cùng giá trị (không dịch literal)

- [ ] Manual QA: `/vi/about` + `/en/about` + `/ko/about` render đúng lang
      verify: `pnpm dev` → 3 URLs

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- Company images / logo → Non-Translatable Assets (giữ nguyên)
- Team member photos → Non-Translatable Assets

## Implementation notes

- AboutPage có thể có inline content khá ngắn (1 page, không có section components riêng) → refactor straightforward.
- Address (vd "Hà Nội, Việt Nam") — có thể dịch sang "Hanoi, Vietnam" cho en, "하노이, 베트남" cho ko để natural reading. Address vật lý không phải Non-Translatable strict.
- Email + phone number PRESERVE 100%.
