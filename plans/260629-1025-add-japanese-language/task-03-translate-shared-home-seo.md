---
task: 03
title: Dịch shared chrome + Home + SEO sang Japanese
status: pending
type: AFK
blocked_by: [01]
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: null
created: 2026-06-29
completed: null
---

# Task 03: Dịch shared chrome + Home + SEO sang Japanese

> ⚠️ **Vertical slice constraint:** thay nội dung 3 namespace dùng chung nhất
> (common = nav/footer/switcher, home = trang chủ, seo = meta 5 trang) → đủ để
> `/ja/` trang chủ + chrome + SEO meta toàn site là tiếng Nhật hoàn chỉnh.

## What to build

Thay nội dung placeholder (tiếng Việt copy ở task-01) trong 3 file
`src/i18n/locales/ja/common.json`, `ja/seo.json`, `ja/home.json` bằng bản dịch
**tiếng Nhật**. Sau task: vào `/ja/` thấy trang chủ + thanh nav + footer + nội
dung switcher + toàn bộ thẻ SEO (`<title>`/description/og) của **cả 5 trang** đều
bằng tiếng Nhật (seo.json chứa meta cho cả 5 trang).

**CHỈ sửa value, GIỮ NGUYÊN key** (giữ parity với `vi/`). KHÔNG đụng `config.ts`
(task-01 đã wire). KHÔNG đụng 4 file page còn lại (task-04).

## Must read BEFORE coding (forcing function)

> ⚠️ Anti-drift #1. `Read()` từng file. Source = `vi/`, ví dụ dịch = `ko/`.

### Convention / glossary

- `CONTEXT.md` — term **Politeness Register** (giọng です・ます調 bắt buộc),
  **Translation Source**, **Source Language File**, **Trans Component**

### Reference implementations

- `src/i18n/locales/vi/common.json`, `vi/seo.json`, `vi/home.json` — nguồn (key + ý)
- `src/i18n/locales/ko/common.json`, `ko/seo.json`, `ko/home.json` — ví dụ cách
  một bản dịch đã được làm (đối chiếu cấu trúc, cách xử lý slot `<1>`)

### Spec parent

- `plans/260629-1025-add-japanese-language/spec.md`

## Key interfaces (durable contracts)

- File giữ nguyên schema JSON của `vi/` tương ứng — chỉ value đổi sang tiếng Nhật
- Chuỗi có inline markup (slot `<1>`, `<2>` cho `<Trans>`) PHẢI giữ nguyên số slot
  và thứ tự — chỉ dịch phần text xung quanh slot
- Giọng văn: です・ます調 (lịch sự chuẩn B2B), kính ngữ nhẹ ở CTA

## Acceptance criteria

- [ ] Key parity tuyệt đối với vi cho cả 3 namespace
      verify: `for f in common seo home; do python -c "import json;flat=lambda o,p='':[x for k,v in (o.items() if isinstance(o,dict) else enumerate(o)) for x in flat(v,p+'.'+str(k))] if isinstance(o,(dict,list)) else [p];vi=set(flat(json.load(open('src/i18n/locales/vi/'+'$f'+'.json',encoding='utf-8'))));ja=set(flat(json.load(open('src/i18n/locales/ja/'+'$f'+'.json',encoding='utf-8'))));print('$f','MISSING',sorted(vi-ja),'EXTRA',sorted(ja-vi))"; done` — mọi dòng `MISSING [] EXTRA []`

- [ ] Nội dung thực sự là tiếng Nhật (có kana/kanji), không còn placeholder VN
      verify: `python -c "import json,re;d=json.load(open('src/i18n/locales/ja/home.json',encoding='utf-8'));s=json.dumps(d,ensure_ascii=False);print('JP_CHARS', bool(re.search(r'[ぁ-んァ-ン一-龯]', s)))"` — in `JP_CHARS True`

- [ ] Số slot `<n>` của chuỗi Trans khớp giữa vi và ja (không vỡ rich text)
      verify: `python -c "import json,re;cnt=lambda p:{k:len(re.findall(r'<\d+>',str(v))) for k,v in [(x,json.dumps(json.load(open(p,encoding='utf-8'))[x],ensure_ascii=False)) for x in json.load(open(p,encoding='utf-8'))]};print('OK' if cnt('src/i18n/locales/vi/home.json')==cnt('src/i18n/locales/ja/home.json') else 'SLOT_MISMATCH')"` — in `OK`

- [ ] Build passes
      verify: `pnpm build`

- [ ] (Behavioral) `/ja/` trang chủ + nav + footer hiển thị tiếng Nhật, không lẫn
      chuỗi VN/EN; `<title>` các trang là tiếng Nhật
      verify: `pnpm dev` → Playwright MCP navigate `/ja/`; snapshot; check `document.title`

## Out of scope

- 4 trang current-state/demo/pricing/about: pushed to task-04
- Đăng ký ngôn ngữ / font: task-01, task-02

## Implementation notes

- `seo.json` chứa meta của CẢ 5 trang → dịch hết ở task này (kể cả meta của 4
  trang mà body chưa dịch tới task-04) — chấp nhận được, SEO đi trước body.
- Tham chiếu `ko/*.json` để biết cách dịch giữ slot `<1>` — KHÔNG copy nội dung
  tiếng Hàn.
- AI dịch trực tiếp từ `vi/`, áp giọng です・ます調 nhất quán.
- Rủi ro chất lượng ~80-85% (keigo + B2B) — chấp nhận, native review Phase 1.5.

## Execution log (filled during /feature-execute)

## Escalation report (filled only if blocked)
