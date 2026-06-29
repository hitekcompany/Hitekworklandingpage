---
task: 01
title: Wire `ja` as a Supported Language
status: done
type: AFK
blocked_by: []
effort: M
human_estimate_hours: 2
ai_estimate_hours: 0.3
actual_hours: 0.2
created: 2026-06-29
completed: 2026-06-29
---

# Task 01: Wire `ja` as a Supported Language

> ⚠️ **Vertical slice constraint:** touches i18n config + routing detection + UI
> switcher + SEO locale + translation resources — đủ end-to-end để `/ja/` chạy.

## What to build

Đăng ký Tiếng Nhật (`ja`) thành ngôn ngữ thứ 4 trong toàn bộ máy i18n, sao cho
sau task này: truy cập `work.hitek.com.vn/ja/` (dev: `/ja/`) load được cả 5 trang
không lỗi, **Language Switcher** hiển thị `日本語` (desktop + mobile) và chuyển
ngôn ngữ đúng, trình duyệt có `navigator.language` bắt đầu `ja` được auto-redirect
về `/ja/`, và **Hreflang Set** + `og:locale:alternate` tự động bao gồm `ja` (vì
`useSEOMeta` đã loop theo `SUPPORTED_LANGUAGES`).

Vì `src/i18n/config.ts` import tĩnh từng file JSON, task này **scaffold trước 7
file `src/i18n/locales/ja/*.json` = copy nguyên nội dung từ `vi/`** (placeholder
tiếng Việt) để import resolve + build xanh + key parity hoàn hảo ngay từ đầu.
Nội dung tiếng Nhật thật sẽ do task 03/04 thay vào (chỉ sửa value, giữ key). Sau
task 01, `/ja/` render bằng nội dung placeholder (tiếng Việt) — đó là trạng thái
trung gian hợp lệ, KHÔNG phải lỗi.

## Must read BEFORE coding (forcing function)

> ⚠️ **Anti-drift mechanism #1.** `Read()` từng file dưới đây TRƯỚC khi code.
> Project chưa có `docs/agents/` → reference-impl chính là code en/ko hiện có.
>
> **FE task:** activate skill `frontend-development` trong MAIN loop trước khi
> code. KHÔNG delegate FE cho generic subagent (không load được skill — xem
> `rules/orchestration-protocol.md`).

### Convention / glossary

- `CONTEXT.md` — đặc biệt các term: Supported Languages, Endonym, Switcher Visual,
  Language Resolution Chain, SEO Meta Bundle, Hreflang Set, i18n Stack

### Reference implementations (code en/ko hiện có = pattern bắt buộc mirror)

- `src/i18n/config.ts` — pattern import + `resources` + `SUPPORTED_LANGUAGES`
- `src/app/components/LanguageSwitcher.tsx` — `ENDONYM_MAP` (Record<Lang>)
- `src/app/hooks/useSEOMeta.ts` — `LOCALE_MAP` (Record<Lang>) + hreflang loop
- `src/app/components/RootRedirect.tsx` — nhánh `navigator.language` detect
- `src/app/components/LocalizedShell.tsx` — đã array-driven (không cần sửa, đọc để
  xác nhận)
- `src/i18n/locales/vi/*.json` (7 file) — nguồn copy ra `ja/`

### Downstream consumers (CRITICAL — thêm `ja` vào `SUPPORTED_LANGUAGES` đổi type `Lang`)

> Thêm `"ja"` vào mảng `as const` làm union type `Lang` mở rộng → MỌI
> `Record<Lang, ...>` BẮT BUỘC có entry `ja` nếu không TS báo lỗi.

- `src/app/components/LanguageSwitcher.tsx` → `ENDONYM_MAP` cần `ja: "日本語"`
- `src/app/hooks/useSEOMeta.ts` → `LOCALE_MAP` cần `ja: "ja_JP"`
- `src/i18n/config.ts` → `resources` cần block `ja: {...}` + 7 import
- Grep xác nhận không sót: `grep -rE "Record<\s*Lang" src/`

### Spec parent

- `plans/260629-1025-add-japanese-language/spec.md`

## Key interfaces (durable contracts)

- `SUPPORTED_LANGUAGES` — `["vi","en","ko","ja"] as const` (thêm `ja` cuối → thứ
  tự dropdown switcher: vi, en, ko, ja)
- `Lang` — union tự suy ra, nay gồm `"ja"`
- `ENDONYM_MAP: Record<Lang,string>` — thêm `ja: "日本語"`
- `LOCALE_MAP: Record<Lang,string>` — thêm `ja: "ja_JP"` (dùng cho `og:locale`)
- `resources.ja` — 7 namespace trỏ tới 7 file `./locales/ja/*.json`
- RootRedirect `resolveLanguage()` — thêm `if (nav.startsWith("ja")) return "ja"`
  (đặt trước hoặc cùng cụm các nhánh ko/en/vi)

## Acceptance criteria

> ⚠️ **Anti-drift mechanism #2.** Mỗi tiêu chí có verify command.
> Lưu ý: project KHÔNG có script `lint`/`test` → gate cứng là `pnpm build`.

- [ ] 7 file `ja/*.json` tồn tại, parity tuyệt đối với `vi/` (copy)
      verify: `for f in common seo home current-state demo pricing about; do python -c "import json;flat=lambda o,p='':[x for k,v in (o.items() if isinstance(o,dict) else enumerate(o)) for x in flat(v,p+'.'+str(k))] if isinstance(o,(dict,list)) else [p];vi=set(flat(json.load(open('src/i18n/locales/vi/'+'$f'+'.json',encoding='utf-8'))));ja=set(flat(json.load(open('src/i18n/locales/ja/'+'$f'+'.json',encoding='utf-8'))));print('$f','MISSING',sorted(vi-ja),'EXTRA',sorted(ja-vi))"; done` — mọi dòng phải `MISSING [] EXTRA []`

- [ ] `ja` đã vào `SUPPORTED_LANGUAGES`
      verify: `grep -E '"vi",\s*"en",\s*"ko",\s*"ja"' src/i18n/config.ts`

- [ ] Endonym + locale map có `ja`
      verify: `grep -E 'ja:\s*"日本語"' src/app/components/LanguageSwitcher.tsx && grep -E 'ja:\s*"ja_JP"' src/app/hooks/useSEOMeta.ts`

- [ ] Auto-detect `navigator` `ja*`
      verify: `grep -E 'startsWith\("ja"\)' src/app/components/RootRedirect.tsx`

- [ ] Build passes (import 7 ja JSON resolve, không type error qua vite)
      verify: `pnpm build`

- [ ] (Behavioral) `/ja/` load 5 trang, switcher hiện `日本語` desktop + mobile,
      chọn `日本語` → URL `/ja/...` + localStorage `preferred_lang=ja`; hreflang
      `ja` xuất hiện trong `<head>`
      verify: `pnpm dev` → Playwright MCP navigate `/ja/`, `/ja/about`; snapshot
      switcher; check `document.head` có `link[hreflang="ja"]`

## Out of scope

- Nội dung dịch tiếng Nhật thật (placeholder = vi): pushed to task-03, task-04
- Font Noto Sans JP / `:lang()`: pushed to task-02
- sitemap.xml: pushed to task-05

## Implementation notes

- i18next `fallbackLng: "vi"` đã xử lý key thiếu — nhưng vì ta copy đủ key nên
  không kích hoạt fallback.
- KHÔNG đổi `DEFAULT_LANGUAGE` (vẫn `vi`), KHÔNG đổi `x-default`.
- `LocalizedShell` + `useSEOMeta` hreflang đã array-driven → KHÔNG sửa logic, chỉ
  cần `ja` có trong mảng là tự chạy.
- Đặt `ja` CUỐI mảng để thứ tự switcher là vi → en → ko → ja.

## Execution log (filled during /feature-execute)

- 2026-06-29 — Read (this session): config.ts, LanguageSwitcher.tsx, useSEOMeta.ts, RootRedirect.tsx, LocalizedShell.tsx, CONTEXT.md, vi/*.json
- 2026-06-29 — Scaffold: `cp vi/*.json → ja/` (7 files, placeholder = VN content)
- 2026-06-29 — Implementation: config.ts (7 ja imports + SUPPORTED_LANGUAGES += "ja" + resources.ja); LanguageSwitcher ENDONYM_MAP ja="日本語"; useSEOMeta LOCALE_MAP ja="ja_JP"; RootRedirect navigator startsWith("ja")→ja
- 2026-06-29 — Verify: parity 7/7 `MISSING [] EXTRA []` — PASS
- 2026-06-29 — Verify: grep SUPPORTED_LANGUAGES/ENDONYM/LOCALE_MAP/RootRedirect — PASS (ALL_GREP_OK)
- 2026-06-29 — Verify: `pnpm build` — PASS (built in 7.48s; 500KB chunk warning pre-existing, Out of Scope)
- 2026-06-29 — Behavioral (Playwright /ja/ render + switcher + hreflang) — DEFERRED to final consolidated QA (placeholder state not final)

## Escalation report (filled only if blocked)
