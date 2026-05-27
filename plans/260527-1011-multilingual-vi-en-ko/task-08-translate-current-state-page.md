---
task: 08
title: Translate CurrentStatePage sections
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

# Task 08: Translate CurrentStatePage sections

> ⚠️ **Vertical slice:** vi/en/ko current-state.json + CurrentStatePage sections refactor.

## What to build

Extract text từ các section components thuộc CurrentStatePage, populate namespace
`current-state` × 3 ngôn ngữ, refactor components.

CurrentStatePage sections (đọc `src/app/pages/CurrentStatePage.tsx` để confirm):
- CurrentStateHeroSection
- CurrentStateSection
- NeedSolutionSection
- LimitationsSection
- ReportVsRealitySection
- ToolStackSection
- RootCauseSection
- WhyRealDataSection (nếu nằm trong page này)

Sau task này, navigate `/en/current-state` và `/ko/current-state` → page render
đúng tiếng Anh / Hàn.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/pages/CurrentStatePage.tsx` — list section actual
- `src/app/components/CurrentStateHeroSection.tsx`
- `src/app/components/CurrentStateSection.tsx`
- `src/app/components/NeedSolutionSection.tsx`
- `src/app/components/LimitationsSection.tsx`
- `src/app/components/ReportVsRealitySection.tsx`
- `src/app/components/ToolStackSection.tsx`
- `src/app/components/RootCauseSection.tsx`
- `src/app/components/WhyRealDataSection.tsx`
- Task-07 — pattern refactor cho rich text + array content
- `CONTEXT.md` — Translation Namespace, Trans Component

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/current-state.json` structure đề xuất (1 section = 1 top-level key):
  ```json
  {
    "hero": { "title": "...", "subtitle": "..." },
    "current_state": { "...": "..." },
    "need_solution": { "...": "..." },
    "limitations": { "...": "..." },
    "report_vs_reality": { "...": "..." },
    "tool_stack": { "...": "..." },
    "root_cause": { "...": "..." },
    "why_real_data": { "...": "..." }
  }
  ```

- Component pattern (giống task-07):
  ```tsx
  const { t } = useTranslation('current-state');
  <h2>{t('hero.title')}</h2>
  ```

## Acceptance criteria

- [x] `vi/current-state.json` populated, có ≥7 section top-level keys
      verify: PowerShell count → 8 keys ✓

- [x] `en/current-state.json` populated cùng structure
      verify: file populated, same structure as vi ✓

- [x] `ko/current-state.json` populated, có Hangul
      verify: `grep -c "[가-힣]" ...` → 133 matches ✓

- [x] Tất cả 7-8 section components dùng `useTranslation('current-state')`
      verify: `grep -lE "useTranslation\(.*current-state" src/app/components/*.tsx | wc -l` → 8 ✓

- [x] KHÔNG còn Vietnamese hardcoded strings dài trong các section đã extract
      verify: `grep -cE "[À-Ỵà-ỹ]{15,}" src/app/components/CurrentStateHeroSection.tsx` → 0 ✓

- [ ] Manual QA: `/vi/current-state` → tiếng Việt như cũ (cần chạy pnpm dev)

- [ ] Manual QA: `/en/current-state` → tiếng Anh (cần chạy pnpm dev)

- [ ] Manual QA: `/ko/current-state` → tiếng Hàn render đúng glyph (cần chạy pnpm dev)

- [x] Build passes
      verify: `pnpm build` → ✓ built in 2.44s

## Execution Log

- 2026-05-27: Read anti-drift files (CONTEXT.md, spec.md, task-08.md, config.ts, Header.tsx, Footer.tsx)
- 2026-05-27: Read CurrentStatePage.tsx → confirmed 8 sections: CurrentStateHeroSection, CurrentStateSection, ReportVsRealitySection, RootCauseSection, LimitationsSection, NeedSolutionSection, WhyRealDataSection, CTASection
- 2026-05-27: ToolStackSection confirmed returns null (not extracted)
- 2026-05-27: Read all 8 section components, extracted all Vietnamese strings
- 2026-05-27: Created vi/current-state.json (8 top-level keys, ~120 translation keys total)
- 2026-05-27: Created en/current-state.json (AI translation, professional B2B English)
- 2026-05-27: Created ko/current-state.json (AI translation, 존댓말 formal register)
- 2026-05-27: Refactored 8 components with useTranslation('current-state') + Trans for rich text
- 2026-05-27: pnpm build → success, all verify commands pass

## Downstream consumers

`WhyRealDataSection` có thể được mount ở nhiều page (HomePage + CurrentStatePage?). Check:

```bash
grep -rE "WhyRealDataSection" src/app/pages/
```

Nếu shared → key extract một lần vào namespace `current-state` (vì task này first to touch), task-07 nếu cần sẽ import cùng key qua `t('current-state:why_real_data...')` thay vì duplicate.

## Out of scope

- DemoPage sections → task-09, 10
- PricingPage → task-11
- AboutPage → task-12

## Implementation notes

- Section "Limitations" có thể chứa list items dài (bullet list các giới hạn) → AI dịch cần preserve cấu trúc array.
- "ReportVsRealitySection" có thể có comparison table với 2 cột — preserve order trong dịch để alignment UI không bể.
- AI prompt cùng template task-06/07.
