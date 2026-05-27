---
task: 11
title: Translate PricingPage sections
status: done
type: AFK
blocked_by: [task-06]
effort: S
human_estimate_hours: 1.5
ai_estimate_hours: 0.2
actual_hours: 0.25
created: 2026-05-27
completed: 2026-05-27
---

# Task 11: Translate PricingPage

> ⚠️ **Vertical slice:** vi/en/ko pricing.json + PricingSection + CTASection refactor.

## What to build

Extract text từ PricingPage components, populate namespace `pricing` × 3 ngôn ngữ.

Components scope (đọc `src/app/pages/PricingPage.tsx` confirm):
- PricingSection (tier labels, descriptions, feature lists)
- CTASection (nếu nằm trong PricingPage)

**CRITICAL theo CONTEXT.md term Non-Translatable Assets**:
- **Giữ giá tiền VND nguyên** (vd `12.000.000 VNĐ`) cho cả 3 ngôn ngữ.
- Có thể thêm note cho en/ko: `"price_currency_note": "(Vietnamese Dong)"` để khách quốc tế hiểu unit.

## Must read BEFORE coding (forcing function)

### Convention files

- `C:/Users/hoado/.claude/CLAUDE.md`
- `C:/Users/hoado/.claude/rules/development-rules.md`

### Reference implementations

- `src/app/pages/PricingPage.tsx`
- `src/app/components/PricingSection.tsx`
- `src/app/components/CTASection.tsx`
- Task-07/08 pattern
- `CONTEXT.md` — Non-Translatable Assets (VND giữ nguyên), Translation Namespace

### Spec parent

- `plans/260527-1011-multilingual-vi-en-ko/spec.md` (User Story 19)

## Key interfaces (durable contracts)

- `src/i18n/locales/vi/pricing.json`:
  ```json
  {
    "hero": { "title": "...", "subtitle": "..." },
    "tiers": [
      {
        "name": "Basic",
        "price_value": "12.000.000",
        "price_currency": "VNĐ",
        "price_period": "/ tháng",
        "features": ["...", "..."],
        "cta": "Liên hệ"
      }
    ],
    "cta_section": { "...": "..." }
  }
  ```
  Hoặc structure phẳng hơn (`tier_basic.name`, `tier_basic.price`, etc.) tuỳ thực tế component.

- **Số tiền `12.000.000`** giữ nguyên format (dấu chấm phân cách Vietnamese) ở vi. Cho en/ko có thể format `12,000,000` (dấu phẩy) — nhưng spec đã quyết "no Intl formatting" → giữ format gốc `12.000.000` cho all 3 lang, accept trade-off đọc hơi lạ với en/ko user.

## Acceptance criteria

- [ ] `vi/pricing.json` populated
      verify: PowerShell `(Get-Content src/i18n/locales/vi/pricing.json -Raw).Length -gt 200`

- [ ] `en/pricing.json` + `ko/pricing.json` populated
      verify: length check + `grep -E "[가-힣]" src/i18n/locales/ko/pricing.json`

- [ ] PricingSection refactored
      verify: `grep -cE "useTranslation\(.*pricing" src/app/components/PricingSection.tsx` → ≥1

- [ ] Giá tiền VND PRESERVE (không bị dịch sang USD/KRW)
      verify: `grep -cE "VNĐ|VND|12\.000\.000" src/i18n/locales/{en,ko}/pricing.json` → ≥1 mỗi file

- [ ] CTASection refactored (nếu trong PricingPage)
      verify: `grep -cE "useTranslation" src/app/components/CTASection.tsx` → ≥1 (nếu file tồn tại)

- [ ] Manual QA: `/vi/pricing` + `/en/pricing` + `/ko/pricing` render đúng lang, giá tiền vẫn VND
      verify: `pnpm dev` → 3 URLs

- [ ] Build passes
      verify: `pnpm build`

## Out of scope

- Multi-currency (USD, KRW) → forever out per spec
- FX rate conversion → forever out

## Implementation notes

- Pricing tier có thể là array (Basic, Pro, Enterprise) → dùng `returnObjects: true`.
- Feature list mỗi tier là array string → giữ array structure trong JSON.
- "Liên hệ" CTA button trong tier có thể link to Zalo hoặc form → giữ URL, chỉ dịch label.
- CTASection nếu là final CTA của site (không chỉ pricing) → có thể move sang namespace `common`. Decide khi đọc actual usage trong nhiều page.
