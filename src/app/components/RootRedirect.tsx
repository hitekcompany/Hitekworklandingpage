import { Navigate, useLocation } from "react-router";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from "../../i18n/config";

function resolveLanguage(): Lang {
  const stored = typeof window !== "undefined" ? localStorage.getItem("preferred_lang") : null;
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored as Lang;
  }

  const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("vi")) return "vi";

  return DEFAULT_LANGUAGE;
}

export function RootRedirect() {
  const location = useLocation();
  const resolved = resolveLanguage();

  const segments = location.pathname.split("/").filter(Boolean);
  const restPath = (SUPPORTED_LANGUAGES as readonly string[]).includes(segments[0])
    ? segments.slice(1).join("/")
    : segments.join("/");

  const target = `/${resolved}${restPath ? "/" + restPath : ""}${location.search}${location.hash}`;

  return <Navigate to={target} replace />;
}
