---
task: 04
title: Dịch 4 trang còn lại sang Japanese
status: pending
type: AFK
blocked_by: [01]
effort: M
human_estimate_hours: 3
ai_estimate_hours: 0.4
actual_hours: null
created: 2026-06-29
completed: null
---

# Task 04: Dịch 4 trang còn lại sang Japanese

> ⚠️ **Vertical slice constraint:** thay nội dung 4 namespace page nặng
> (current-state, demo, pricing, about) → hoàn tất 100% nội dung 5 trang tiếng
> Nhật. Chạy SAU task-03 theo thứ tự ID (chrome dùng chung đã là tiếng Nhật).

## What to build

Thay nội dung placeholder (tiếng Việt copy ở task-01) trong 4 file
`src/i18n/locales/ja/current-state.json`, `ja/demo.json`, `ja/pricing.json`,
`ja/about.json` bằng bản dịch **tiếng Nhật**. Sau task: cả 4 trang
`/ja/current-state`, `/ja/demo`, `/ja/pricing`, `/ja/about` hiển thị đầy đủ tiếng
Nhật, không lẫn chuỗi VN/EN.

**Ràng buộc đặc biệt — `pricing.json`:** GIỮ NGUYÊN chuỗi giá tiền VND
(`"0₫"`, `"99,000₫"`, `"199,000₫"`). Chỉ dịch nhãn chữ (vd `"period": "/tháng"`
→ `「/月」`, `"price": "Liên hệ"` → `「お問い合わせ」`). Giá là Non-Translatable Asset.

**CHỈ sửa value, GIỮ NGUYÊN key.** KHÔNG đụng `config.ts`, không đụng 3 file của
task-03.

## Must read BEFORE coding (forcing function)

> ⚠️ Anti-drift #1. `Read()` từng file. Source = `vi/`, ví dụ dịch = `ko/`.

### Convention / glossary

- `CONTEXT.md` — **Politeness Register** (です・ます調), **Non-Translatable Assets**
  (giá VND giữ nguyên), **Translation Source**

### Reference implementations

- `src/i18n/locales/vi/current-state.json`, `vi/demo.json`, `vi/pricing.json`,
  `vi/about.json` — nguồn
- `src/i18n/locales/ko/pricing.json` — ví dụ: giá giữ `99,000₫`, chỉ dịch chữ
  (`"문의하기"`); mirror cách này cho `ja`

### Spec parent

- `plans/260629-1025-add-japanese-language/spec.md`

## Key interfaces (durable contracts)

- 4 file giữ schema JSON của `vi/` tương ứng — value đổi sang tiếng Nhật
- `pricing.json`: field số tiền giữ ký tự `₫` + con số; chỉ dịch text labels
- Chuỗi có slot `<n>` giữ nguyên số slot + thứ tự
- Giọng văn: です・ます調

## Acceptance criteria

- [ ] Key parity tuyệt đối với vi cho cả 4 namespace
      verify: `for f in current-state demo pricing about; do python -c "import json;flat=lambda o,p='':[x for k,v in (o.items() if isinstance(o,dict) else enumerate(o)) for x in flat(v,p+'.'+str(k))] if isinstance(o,(dict,list)) else [p];vi=set(flat(json.load(open('src/i18n/locales/vi/'+'$f'+'.json',encoding='utf-8'))));ja=set(flat(json.load(open('src/i18n/locales/ja/'+'$f'+'.json',encoding='utf-8'))));print('$f','MISSING',sorted(vi-ja),'EXTRA',sorted(ja-vi))"; done` — mọi dòng `MISSING [] EXTRA []`

- [ ] Giá VND giữ nguyên trong ja/pricing.json (≥3 lần ký tự ₫)
      verify: `grep -c "₫" src/i18n/locales/ja/pricing.json` — kết quả ≥ 3

- [ ] Nội dung là tiếng Nhật (kana/kanji) ở cả 4 file
      verify: `for f in current-state demo pricing about; do python -c "import json,re;s=json.dumps(json.load(open('src/i18n/locales/ja/'+'$f'+'.json',encoding='utf-8')),ensure_ascii=False);print('$f', bool(re.search(r'[ぁ-んァ-ン一-龯]', s)))"; done` — mọi dòng `True`

- [ ] Build passes
      verify: `pnpm build`

- [ ] (Behavioral) 4 trang `/ja/{current-state,demo,pricing,about}` hiển thị tiếng
      Nhật, không lẫn VN/EN; trang pricing vẫn thấy `99,000₫`
      verify: `pnpm dev` → Playwright MCP navigate từng trang; snapshot

## Out of scope

- 3 file shared/home/seo: task-03
- Đăng ký ngôn ngữ / font / sitemap: task-01, task-02, task-05

## Implementation notes

- `pricing.json` là chỗ dễ sai nhất: AI hay "dịch luôn" số tiền hoặc bỏ `₫`. Đối
  chiếu `ko/pricing.json` để thấy đúng pattern (giữ số, dịch chữ).
- Tham chiếu `ko/*.json` cho slot `<n>` — KHÔNG copy nội dung tiếng Hàn.
- Bài học từ STATUS (2026-05-27): từng có chuỗi English sót trong `ko/*.json` (8
  demo labels + 2 current-state labels) — quét kỹ demo/current-state để không sót.

## Execution log (filled during /feature-execute)

## Escalation report (filled only if blocked)
