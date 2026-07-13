import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DEMO_LIVE_URL } from "../config";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, type Lang } from "../../i18n/config";
import logoNgang from "../../imports/logo-ngang.png";

const navItems = [
  { labelKey: "nav.home", path: "" },
  { labelKey: "nav.solution", path: "current-state" },
  { labelKey: "nav.features", path: "demo" },
  { labelKey: "nav.about", path: "about" },
  { labelKey: "nav.download", path: "download" },
  // { labelKey: "nav.pricing", path: "pricing" },
];

function resolveLang(pathname: string, i18nLang: string): Lang {
  const first = pathname.split("/")[1];
  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(first)) return first as Lang;
  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(i18nLang)) return i18nLang as Lang;
  return DEFAULT_LANGUAGE;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation("common");
  const lang = resolveLang(location.pathname, i18n.language);

  const buildHref = (path: string) => (path ? `/${lang}/${path}` : `/${lang}`);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to={`/${lang}`}
            onClick={handleNavClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logoNgang}
              alt={t("header.logo_alt")}
              className="h-14 lg:h-18 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const href = buildHref(item.path);
              const isActive = location.pathname === href;

              return (
                <Link
                  key={item.path}
                  to={href}
                  onClick={handleNavClick}
                  className={`font-semibold transition-colors ${
                    isActive
                      ? "text-[#1e4bbf]"
                      : "text-neutral-700 hover:text-[#1e4bbf]"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop: Switcher + CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href={DEMO_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-md bg-[#1e4bbf] text-white hover:bg-[#1e40af] shadow-[#1e4bbf]/30 text-sm"
            >
              {t("cta.request_demo")}
            </a>
          </div>

          {/* Mobile: Hamburger + CTA */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href={DEMO_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-md bg-[#1e4bbf] text-white hover:bg-[#1e40af] shadow-[#1e4bbf]/30 text-sm px-5 py-2.5"
            >
              {t("cta.request_demo")}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label={t("header.toggle_menu")}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-neutral-200 py-4 space-y-2">
            {navItems.map((item) => {
              const href = buildHref(item.path);
              const isActive = location.pathname === href;

              return (
                <Link
                  key={item.path}
                  to={href}
                  className={`block py-3 px-4 hover:bg-neutral-50 rounded-lg font-semibold transition-colors ${
                    isActive
                      ? "text-[#1e4bbf] bg-blue-50"
                      : "text-neutral-700 hover:text-[#1e4bbf]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <button
              className="mt-2 w-full text-left py-3 px-4 text-neutral-700 hover:text-[#1e4bbf] hover:bg-neutral-50 rounded-lg font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("cta.try_free")}
            </button>
            <LanguageSwitcher
              variant="mobile"
              onSelect={() => setMobileMenuOpen(false)}
            />
          </nav>
        )}
      </div>
    </header>
  );
}