import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from "../../i18n/config";

export type SEOPageKey = "home" | "current-state" | "demo" | "pricing" | "about";

const BASE_URL = "https://work.hitek.com.vn";

const LOCALE_MAP: Record<Lang, string> = {
  vi: "vi_VN",
  en: "en_US",
  ko: "ko_KR",
};

const PAGE_PATH: Record<SEOPageKey, string> = {
  home: "",
  "current-state": "current-state",
  demo: "demo",
  pricing: "pricing",
  about: "about",
};

function setOrCreateMeta(
  attrName: "name" | "property",
  attrValue: string,
  content: string,
): void {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attrName}="${attrValue}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function clearI18nLinkTags(): void {
  const tags = document.head.querySelectorAll(
    'link[data-i18n-meta="true"]',
  );
  tags.forEach((tag) => tag.remove());
}

function addLinkTag(rel: string, href: string, hreflang?: string): void {
  const link = document.createElement("link");
  link.setAttribute("rel", rel);
  if (hreflang) link.setAttribute("hreflang", hreflang);
  link.setAttribute("href", href);
  link.setAttribute("data-i18n-meta", "true");
  document.head.appendChild(link);
}

function buildPageUrl(page: SEOPageKey, lang: Lang): string {
  const path = PAGE_PATH[page];
  return path ? `${BASE_URL}/${lang}/${path}` : `${BASE_URL}/${lang}/`;
}

export function useSEOMeta(page: SEOPageKey): void {
  const { t, i18n } = useTranslation("seo");
  const lang = ((SUPPORTED_LANGUAGES as readonly string[]).includes(i18n.language)
    ? i18n.language
    : DEFAULT_LANGUAGE) as Lang;

  useEffect(() => {
    const title = t(`${page}.title`);
    const description = t(`${page}.description`);

    document.documentElement.lang = lang;
    document.title = title;

    setOrCreateMeta("name", "description", description);
    setOrCreateMeta("property", "og:title", title);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:locale", LOCALE_MAP[lang]);

    document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((tag) => tag.remove());
    (SUPPORTED_LANGUAGES as readonly Lang[])
      .filter((l) => l !== lang)
      .forEach((altLang) => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale:alternate");
        meta.setAttribute("content", LOCALE_MAP[altLang]);
        document.head.appendChild(meta);
      });

    clearI18nLinkTags();
    addLinkTag("canonical", buildPageUrl(page, lang));
    (SUPPORTED_LANGUAGES as readonly Lang[]).forEach((altLang) => {
      addLinkTag("alternate", buildPageUrl(page, altLang), altLang);
    });
    addLinkTag("alternate", buildPageUrl(page, DEFAULT_LANGUAGE), "x-default");

    return () => {
      clearI18nLinkTags();
    };
  }, [page, lang, t]);
}
