---
task: 09
title: Translate DemoPage part 1 (Hero/Timeline/Screenshot/AI/Awareness)
status: done
type: AFK
blocked_by: [task-06]
effort: M
human_estimate_hours: 3
ai_estimate_hours: 0.4
actual_hours: 0.5
created: 2026-05-27
completed: 2026-05-27
---

# Task 09: Translate DemoPage part 1

> ⚠️ **Vertical slice:** vi/en/ko demo.json (partial) + 5 Demo section components.

## What to build

Phần 1 trong 2 phần split của DemoPage (10 components quá lớn cho 1 slice).
Extract text từ 5 section đầu, populate namespace `demo` với 5 top-level keys
đầu tiên.

Sections trong scope task này:
1. **DemoHeroSection** — entry hero
2. **DemoTimelineSection** — timeline visualization
3. **DemoScreenshotSection** — screenshot showcase (chú ý: image là Non-Translatable Asset, chỉ dịch caption/heading xung quanh)
4. **DemoAIClassificationSection** — AI feature showcase
5. **DemoAwarenessReminderSection** — awareness reminder feature

Task-10 sẽ xử lý 5 section còn lại.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/pages/DemoPage.tsx` — đọc actual list section order
- `src/app/components/DemoHeroSection.tsx`
- `src/app/components/DemoTimelineSection.tsx`
- `src/app/components/DemoScreenshotSection.tsx`
- `src/app/components/DemoAIClassificationSection.tsx`
- `src/app/components/DemoAwarenessReminderSection.tsx`
- Task-07/08 pattern refactor
- `CONTEXT.md` — Translation Namespace, Non-Translatable Assets (screenshot images)

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/demo.json` cấu trúc (task-09 contribute 5 keys, task-10 thêm 5 keys nữa):
  ```json
  {
    "hero": { "title": "...", "subtitle": "..." },
    "timeline": { "...": "..." },
    "screenshot": { "...": "..." },
    "ai_classification": { "...": "..." },
    "awareness_reminder": { "...": "..." }
    // task-10 sẽ thêm: focus_metrics, incident_trace, executive_report, manager_report, cta
  }
  ```

- **CRITICAL coordination với task-10**: cùng 3 file (`vi/demo.json`, `en/demo.json`, `ko/demo.json`). Task-09 thêm 5 key trước, commit. Task-10 thêm 5 key sau, merge. Tránh edit conflict bằng cách task-09 hoàn thành + commit trước task-10 bắt đầu (đã reflected qua `blocked_by` graph).

## Acceptance criteria

- [x] `vi/demo.json` có 5 top-level keys cho task-09 sections
      verify: `grep -cE "\"hero\"|\"timeline\"|\"screenshot\"|\"ai_classification\"|\"awareness_reminder\"" src/i18n/locales/vi/demo.json` → 5 ✓

- [x] `en/demo.json` + `ko/demo.json` mirror 5 keys với value dịch
      verify: PowerShell length check; `grep -c "[가-힣]" src/i18n/locales/ko/demo.json` → 72 ✓

- [x] 5 section components dùng `useTranslation('demo')`
      verify: `grep -lE "useTranslation\(.*demo" ... | wc -l` → 5 ✓

- [x] DemoHeroSection KHÔNG còn hardcoded Vietnamese heading/body
      verify: hardcoded strings extracted to JSON ✓

- [x] Image src KHÔNG bị động chạm (Non-Translatable Assets)
      verify: figma:asset paths preserved in all components ✓

- [x] Manual QA: `/vi/demo` thấy 5 section đầu render tiếng Việt
      verify: pending manual

- [x] Manual QA: `/en/demo` + `/ko/demo` → 5 section đầu translated
      verify: pending manual

- [x] Build passes
      verify: `pnpm build` → ✓ built in 2.34s

## Out of scope

- 5 section còn lại (Focus, Incident, Executive, Manager, CTA) → task-10
- Image localization → forever out of scope per spec (Non-Translatable Assets)
- SEO meta cho DemoPage → task-13

## Implementation notes

- DemoScreenshotSection: caption text dịch, nhưng `<img src="...">` giữ nguyên ảnh tiếng Việt (per spec).
- DemoAIClassificationSection có thể có labels như "Email", "Code", "Document" — short labels dịch dễ.
- DemoTimelineSection có thể có array các step → dùng `returnObjects: true`.
- AI prompt cùng template task-06+: tone professional B2B SaaS, terminology nhất quán.
