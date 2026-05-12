import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { WireframeButton } from "./WireframeButton";
import logoNgang from "../../imports/logo-ngang.png";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp", href: "/current-state" },
  { label: "Tính năng", href: "/demo" },
  { label: "Về chúng tôi", href: "/about" },
  // { label: "Bảng giá", href: "/pricing" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logoNgang}
              alt="Hitek Work"
              className="h-14 lg:h-18 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const isHashLink = item.href.startsWith("#");

              if (isHashLink) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-neutral-700 hover:text-[#1e4bbf] font-semibold transition-colors"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`font-semibold transition-colors ${
                    isActive
                      ? "text-[#1e4bbf]"
                      : "text-neutral-700 hover:text-[#1e4bbf]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <WireframeButton
              variant="primary"
              className="text-sm"
            >
              Yêu cầu Demo
            </WireframeButton>
          </div>

          {/* Mobile: Hamburger + CTA */}
          <div className="flex lg:hidden items-center gap-4">
            <WireframeButton
              variant="primary"
              className="text-sm px-5 py-2.5"
            >
              Yêu cầu Demo
            </WireframeButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
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
              const isActive = location.pathname === item.href;
              const isHashLink = item.href.startsWith("#");

              if (isHashLink) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-4 text-neutral-700 hover:text-[#1e4bbf] hover:bg-neutral-50 rounded-lg font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
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
                  {item.label}
                </Link>
              );
            })}
            <button
              className="mt-2 w-full text-left py-3 px-4 text-neutral-700 hover:text-[#1e4bbf] hover:bg-neutral-50 rounded-lg font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dùng thử miễn phí
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}