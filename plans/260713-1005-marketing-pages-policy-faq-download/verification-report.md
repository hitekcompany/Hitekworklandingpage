# Verification Report: Marketing Pages — Policy / FAQ / Download

**Spec:** [../spec.md](./spec.md)
**Run:** 2026-07-13 — by AI (fe-playwright E2E theo Test policy)
**Hạ tầng:** `pnpm build` + `vite preview` :4173 (production build) + Playwright MCP

## Kết quả tổng: 21 PASS / 0 FAIL / 0 skipped

Sweep đủ **12 tổ hợp (3 trang × 4 locale vi/en/ko/ja)** + SEO head + FE compliance.

## User Stories

### ✅ Policy Page (stories 1-3)
- **1. Đọc 12 mục đầy đủ:** `/{vi,en,ko,ja}/policy` render **11 mục** (doc thực 11 —
  §6 doc trống, không bịa). Flow: navigate + count h2. Evidence: `.scratch/policy-ko.png`.
- **2. Đúng ngôn ngữ đang xem:** vi "Chính sách Bảo mật", en "Privacy Policy", ko
  "개인정보 처리방침", ja "プライバシーポリシー" — `<html lang>` + title đổi đúng cả 4. PASS.
- **3. Câu chữ trong i18n JSON tách code:** `PolicyPage.tsx` 0 hardcode prose
  (grep sạch), toàn bộ qua `t()`. PASS.

### ✅ FAQ Page (stories 4-6)
- **4. 6 nhóm câu hỏi:** `/{vi,en,ko,ja}/faq` render **6 nhóm** (doc thiếu nhóm 5 —
  không bịa), **26 Q&A**. PASS.
- **5. Accordion gập/mở:** real Playwright click "What is Hitek Work?" → `data-state=open`,
  answer hiện. Evidence: `.scratch/faq-en.png`. PASS.
- **6. Đa ngôn ngữ:** title + nhóm đổi đúng 4 locale (vi "Câu hỏi thường gặp", ja
  "よくある質問"...). PASS.

### ✅ Download Page (stories 7-11)
- **7. 4 nút OS:** `/{vi,en,ko,ja}/download` render **4 nút** (Windows / macOS Intel /
  macOS Apple Silicon / Linux). PASS.
- **8. Dòng gợi ý chọn bản:** mỗi nút có hint ("chọn bản này nếu máy bạn là..."). PASS.
- **9. Hướng dẫn bỏ qua unsigned:** 3 khối (Windows/macOS/Linux) × 3 bước = **9 bước**. PASS.
- **10. Link trong config, frame-first:** `DOWNLOAD_URLS` rỗng → cả 4 nút "Sắp có"
  disabled, **0 link tải** (đúng frame-first). Evidence: `.scratch/download-ja.png`. PASS.
- **11. Đa ngôn ngữ:** title + nội dung 4 locale đúng. PASS.

### ✅ Navigation & Placement (stories 12-14)
- **12. Policy + FAQ ở Footer:** cột "Liên kết" có 개인정보 처리방침→/ko/policy,
  자주 묻는 질문→/ko/faq. Evidence: `.scratch/footer-links-ko.png`. PASS.
- **13. Download ở Header nav:** nav có "다운로드"→/ko/download (desktop + mobile). PASS.
- **14. Download ở Footer:** cột Liên kết có link Download. PASS.

### ✅ Demo Button (stories 15-16)
- **15. 2 nút Demo → demo live tab mới:** 6 nút "Yêu cầu Live Demo" (Hero/Header×2/
  BottomCTA/CTASection/DemoCTA) → `monitor-staging.hitek.com.vn/demo`, `target=_blank`
  + `rel=noopener`. 2 nút non-demo (Footer Đăng ký / About Liên hệ) giữ Zalo (đúng). PASS.
- **16. URL trong config:** `DEMO_LIVE_URL` ở `src/app/config.ts`, 0 literal trong
  component (grep). PASS.

### ✅ i18n & SEO (stories 17-21)
- **17. Namespace qua useTranslation/Trans:** 3 namespace mới đăng ký config.ts ×
  4 locale; `check-t-keys` — **291 t() call resolve đủ vi/en/ko**. PASS.
- **18. vi Source + fallback:** `fallbackLng: vi`; parity 5 namespace × 4 locale
  giống hệt structure (script). PASS.
- **19. SEO Meta Bundle + Hreflang + Canonical:** en/policy → canonical `/en/policy`
  + **5 hreflang** (vi/en/ko/ja + x-default→vi) + og:title + og:locale `en_US` +
  description. Cơ chế `useSEOMeta` dùng chung → áp mọi trang. PASS.
- **20. sitemap thêm 3 trang × 4 locale:** `sitemap.xml` = **32 URL** (8 trang × 4). PASS.
- **21. Link đúng URL Locale Prefix:** real click footer Policy ở `/ko/` → điều hướng
  `/ko/policy` (không rớt về vi). PASS.

## Critical paths
- ✅ **Điều hướng đa trang giữ locale:** `/ko/` → click nav Download → `/ko/download`;
  click footer Policy → `/ko/policy`. Locale Prefix giữ nguyên. PASS.
- ✅ **Đổi ngôn ngữ giữ trang:** URL `/{locale}/policy` load đúng nội dung + SEO theo
  từng locale (12 tổ hợp). PASS.

## FE compliance
- **Máy đã check (PASS):** 0 hardcode prose trong 3 page mới (grep) · mọi text qua
  `t()`/`Trans` (`check-t-keys` 291/291) · parity 5 namespace × 4 locale · reuse
  `ui/accordion` (không dựng mới) · URL ngoài tập trung config (0 literal demo/download
  trong component) · `pnpm build` sạch.
- **Cần review tay (không block):** bản dịch **ko/ja** (Policy pháp lý + FAQ) là AI
  nháp — cần **Native Review Phase 1.5** (người Hàn/Nhật Hitek soát). CONTEXT đã ghi,
  không chặn merge.

## Known limitations (NOT bugs — từ spec Out of Scope)
- **Download "Sắp có":** `DOWNLOAD_URLS` rỗng tới khi **hạng mục D** build 4 file OS →
  điền env `VITE_DOWNLOAD_*` / config, nút tự thành link (không sửa code).
- **Cookies:** drop khỏi scope (banner + trang).
- **Feature "Luật bảo vệ thông tin user"** (enforcement consent/retention/cascade):
  làm song song repo CMS/Desktop — Policy publish cam kết trước là chủ ý (user chốt).
- **`WireframeButton` render null** → nút CTA Pricing(4)/DemoHero(2) vô hình: bug có
  sẵn ngoài scope, đã flag (user chốt để đó).

## Next actions
- **All PASS → feature sẵn sàng ship.** Merge branch `feature/marketing-pages-policy-faq-download`
  → `main` (Vercel auto-deploy `work.hitek.com.vn`) kịp họp 17/07.
- Sau ship: điền `DOWNLOAD_URLS` khi hạng mục D xong · gửi ko/ja cho người bản xứ soát.
