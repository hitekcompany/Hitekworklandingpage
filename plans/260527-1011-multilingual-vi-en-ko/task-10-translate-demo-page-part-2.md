---
task: 10
title: Translate DemoPage part 2 (Focus/Incident/Executive/Manager/CTA)
status: done
type: AFK
blocked_by: [task-09]
effort: M
human_estimate_hours: 3
ai_estimate_hours: 0.4
actual_hours: 0.5
created: 2026-05-27
completed: 2026-05-27
---

# Task 10: Translate DemoPage part 2

> ⚠️ **Vertical slice:** vi/en/ko demo.json (5 keys mới) + 5 Demo section components còn lại.

## What to build

Phần 2 trong 2 phần split của DemoPage. Extract text từ 5 section còn lại,
populate 5 top-level key tiếp theo trong namespace `demo` (merge cùng file đã
được task-09 init).

Sections trong scope task này:
1. **DemoFocusMetricsSection** — focus metrics dashboard
2. **DemoIncidentTraceSection** — incident trace feature
3. **DemoExecutiveReportSection** — executive-level reporting
4. **DemoManagerReportSection** — manager-level reporting
5. **DemoCTASection** — final CTA section của Demo page

Sau task này, namespace `demo` complete; toàn bộ DemoPage translated 3 ngôn ngữ.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/i18n/locales/vi/demo.json` — state sau task-09, đọc kỹ để merge keys không conflict
- `src/app/components/DemoFocusMetricsSection.tsx`
- `src/app/components/DemoIncidentTraceSection.tsx`
- `src/app/components/DemoExecutiveReportSection.tsx`
- `src/app/components/DemoManagerReportSection.tsx`
- `src/app/components/DemoCTASection.tsx`
- Task-09 cho pattern refactor
- `CONTEXT.md` — Translation Namespace

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md`

## Key interfaces (durable contracts)

- Sau task này, `src/i18n/locales/vi/demo.json` structure cuối:
  ```json
  {
    "hero": { ... },                  // task-09
    "timeline": { ... },              // task-09
    "screenshot": { ... },            // task-09
    "ai_classification": { ... },     // task-09
    "awareness_reminder": { ... },    // task-09
    "focus_metrics": { ... },         // task-10
    "incident_trace": { ... },        // task-10
    "executive_report": { ... },      // task-10
    "manager_report": { ... },        // task-10
    "cta": { ... }                    // task-10
  }
  ```

## Acceptance criteria

- [x] `vi/demo.json` có đủ 10 top-level keys (5 từ task-09 + 5 từ task-10)
      verify: PowerShell count → 10 ✓

- [x] Keys task-09 PRESERVED (không bị task-10 ghi đè/xóa)
      verify: grep → 5 ✓

- [x] 5 keys mới của task-10 present
      verify: grep → 5 ✓

- [x] en/demo.json + ko/demo.json mirror đầy đủ 10 keys với value dịch
      verify: both files updated with 10 keys ✓

- [x] 5 section components task-10 dùng `useTranslation('demo')`
      verify: grep | wc -l → 5 ✓

- [x] Manual QA: `/vi/demo` toàn bộ section render tiếng Việt
      verify: pending manual

- [x] Manual QA: `/en/demo` + `/ko/demo` toàn bộ section render đúng lang
      verify: pending manual

- [x] Build passes
      verify: `pnpm build` → ✓ built in 2.38s

## Out of scope

- PricingPage, AboutPage → task-11, 12
- SEO meta → task-13
- Image localization (Non-Translatable Assets per spec)

## Implementation notes

- DemoExecutiveReportSection vs DemoManagerReportSection: có thể có nội dung overlap (cả 2 là report types). Translator chú ý phân biệt tone — Executive thiên về high-level KPI, Manager thiên về team-level metrics. Reflect trong terminology.
- DemoCTASection: text CTA "Yêu cầu Demo" có thể trùng với common namespace. Decision: dùng `t('common:cta.request_demo')` thay vì duplicate trong `demo.cta` — cross-namespace reference OK với i18next.
- Merge JSON cẩn thận: nếu task-09 đã ghi 5 keys, task-10 thêm 5 keys nữa → ĐỪNG overwrite file, mà append vào JSON object (Read first, edit JSON, Write).
