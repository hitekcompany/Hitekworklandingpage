import { ChevronDown, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from "../../i18n/config";

const ENDONYM_MAP: Record<Lang, string> = {
  vi: "Tiếng Việt",
  en: "English",
  ko: "한국어",
};

function resolveLang(pathname: string, i18nLang: string): Lang {
  const first = pathname.split("/")[1];
  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(first)) return first as Lang;
  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(i18nLang)) return i18nLang as Lang;
  return DEFAULT_LANGUAGE;
}

function stripLangPrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (SUPPORTED_LANGUAGES as readonly string[]).includes(segments[0])) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}

type Props = {
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
};

export function LanguageSwitcher({ variant = "desktop", onSelect }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const currentLang = resolveLang(location.pathname, i18n.language);

  const handleSelect = (newLang: Lang) => {
    const rest = stripLangPrefix(location.pathname);
    const target = "/" + newLang + (rest === "/" ? "" : rest) + location.search + location.hash;
    localStorage.setItem("preferred_lang", newLang);
    navigate(target);
    onSelect?.();
  };

  if (variant === "mobile") {
    return (
      <div className="border-t border-neutral-200 pt-2 mt-2">
        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          {ENDONYM_MAP[currentLang]}
        </p>
        {(SUPPORTED_LANGUAGES as readonly Lang[]).map((lang) => {
          const isActive = lang === currentLang;
          return (
            <button
              key={lang}
              type="button"
              onClick={() => handleSelect(lang)}
              className={`w-full text-left py-3 px-4 hover:bg-neutral-50 rounded-lg font-semibold transition-colors flex items-center justify-between ${
                isActive ? "text-[#1e4bbf] bg-blue-50" : "text-neutral-700"
              }`}
            >
              <span>{ENDONYM_MAP[lang]}</span>
              {isActive && <Check className="w-4 h-4" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1 text-neutral-700 hover:text-[#1e4bbf] font-semibold transition-colors outline-none cursor-pointer"
        aria-label={t("switcher.aria_label")}
      >
        <span>{ENDONYM_MAP[currentLang]}</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {(SUPPORTED_LANGUAGES as readonly Lang[]).map((lang) => {
          const isActive = lang === currentLang;
          return (
            <DropdownMenuItem
              key={lang}
              onSelect={() => handleSelect(lang)}
              className={`flex items-center justify-between cursor-pointer ${
                isActive ? "text-[#1e4bbf] font-semibold" : ""
              }`}
            >
              <span>{ENDONYM_MAP[lang]}</span>
              {isActive && <Check className="w-4 h-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
