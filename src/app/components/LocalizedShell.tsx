import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from "../../i18n/config";

function isSupportedLang(value: string | undefined): value is Lang {
  return value !== undefined && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

export function LocalizedShell() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  const validLang = isSupportedLang(lang) ? lang : null;

  useEffect(() => {
    if (!validLang) return;
    if (i18n.language !== validLang) {
      void i18n.changeLanguage(validLang);
    }
    localStorage.setItem("preferred_lang", validLang);
  }, [validLang, i18n]);

  if (!validLang) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return <Outlet />;
}
