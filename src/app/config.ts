// Centralized external URLs so a deploy can swap targets without touching
// components. Override per-environment via Vite env vars (VITE_*) when needed.

// Demo live = CMS demo portal opened from the landing "Request Demo" buttons.
export const DEMO_LIVE_URL =
  (import.meta.env.VITE_DEMO_LIVE_URL as string | undefined) ??
  "https://monitor-staging.hitek.com.vn/demo";

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
