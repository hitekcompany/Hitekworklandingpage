// Centralized external URLs so a deploy can swap targets without touching
// components. Override per-environment via Vite env vars (VITE_*) when needed.

// Demo live = CMS demo portal opened from the landing "Request Demo" buttons.
export const DEMO_LIVE_URL =
  (import.meta.env.VITE_DEMO_LIVE_URL as string | undefined) ??
  "https://monitor-staging.hitek.com.vn/demo";

// Carry the current UI language to the CMS demo so it opens in the same
// language the visitor was browsing in (the demo portal reads ?lang=). Query
// goes before any hash. Unsupported/absent locale → no param (CMS keeps its
// own default). Kept in sync with the CMS demo whitelist (en/vi/ko/ja).
const DEMO_LANGS = ["vi", "en", "ko", "ja"];
export function demoLiveUrl(locale?: string): string {
  const lang = (locale ?? "").split("-")[0].toLowerCase();
  return DEMO_LANGS.includes(lang)
    ? `${DEMO_LIVE_URL}?lang=${lang}`
    : DEMO_LIVE_URL;
}

// Desktop App installer URLs (hosted on server). Empty = not published yet
// (frame-first: the Download page renders, buttons show "coming soon").
// Filled once the build pipeline (marketing flow item D) ships the files.
export const DOWNLOAD_URLS = {
  windows: (import.meta.env.VITE_DOWNLOAD_WINDOWS as string | undefined) ?? "",
  macIntel: (import.meta.env.VITE_DOWNLOAD_MAC_INTEL as string | undefined) ?? "",
  macSilicon:
    (import.meta.env.VITE_DOWNLOAD_MAC_SILICON as string | undefined) ?? "",
  linux: (import.meta.env.VITE_DOWNLOAD_LINUX as string | undefined) ?? "",
} as const;

export type DownloadOs = keyof typeof DOWNLOAD_URLS;
