import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import viCommon from "./locales/vi/common.json";
import viHome from "./locales/vi/home.json";
import viCurrentState from "./locales/vi/current-state.json";
import viDemo from "./locales/vi/demo.json";
import viPricing from "./locales/vi/pricing.json";
import viAbout from "./locales/vi/about.json";
import viSeo from "./locales/vi/seo.json";
import viPolicy from "./locales/vi/policy.json";
import viFaq from "./locales/vi/faq.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enCurrentState from "./locales/en/current-state.json";
import enDemo from "./locales/en/demo.json";
import enPricing from "./locales/en/pricing.json";
import enAbout from "./locales/en/about.json";
import enSeo from "./locales/en/seo.json";
import enPolicy from "./locales/en/policy.json";
import enFaq from "./locales/en/faq.json";

import koCommon from "./locales/ko/common.json";
import koHome from "./locales/ko/home.json";
import koCurrentState from "./locales/ko/current-state.json";
import koDemo from "./locales/ko/demo.json";
import koPricing from "./locales/ko/pricing.json";
import koAbout from "./locales/ko/about.json";
import koSeo from "./locales/ko/seo.json";
import koPolicy from "./locales/ko/policy.json";
import koFaq from "./locales/ko/faq.json";

import jaCommon from "./locales/ja/common.json";
import jaHome from "./locales/ja/home.json";
import jaCurrentState from "./locales/ja/current-state.json";
import jaDemo from "./locales/ja/demo.json";
import jaPricing from "./locales/ja/pricing.json";
import jaAbout from "./locales/ja/about.json";
import jaSeo from "./locales/ja/seo.json";
import jaPolicy from "./locales/ja/policy.json";
import jaFaq from "./locales/ja/faq.json";

export const SUPPORTED_LANGUAGES = ["vi", "en", "ko", "ja"] as const;
export type Lang = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Lang = "vi";

export const NAMESPACES = [
  "common",
  "home",
  "current-state",
  "demo",
  "pricing",
  "about",
  "seo",
  "policy",
  "faq",
] as const;

const resources = {
  vi: {
    common: viCommon,
    home: viHome,
    "current-state": viCurrentState,
    demo: viDemo,
    pricing: viPricing,
    about: viAbout,
    seo: viSeo,
    policy: viPolicy,
    faq: viFaq,
  },
  en: {
    common: enCommon,
    home: enHome,
    "current-state": enCurrentState,
    demo: enDemo,
    pricing: enPricing,
    about: enAbout,
    seo: enSeo,
    policy: enPolicy,
    faq: enFaq,
  },
  ko: {
    common: koCommon,
    home: koHome,
    "current-state": koCurrentState,
    demo: koDemo,
    pricing: koPricing,
    about: koAbout,
    seo: koSeo,
    policy: koPolicy,
    faq: koFaq,
  },
  ja: {
    common: jaCommon,
    home: jaHome,
    "current-state": jaCurrentState,
    demo: jaDemo,
    pricing: jaPricing,
    about: jaAbout,
    seo: jaSeo,
    policy: jaPolicy,
    faq: jaFaq,
  },
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    ns: NAMESPACES,
    defaultNS: "common",
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      lookupLocalStorage: "preferred_lang",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    returnNull: false,
  });

export default i18n;
