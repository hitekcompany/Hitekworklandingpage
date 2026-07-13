import { useTranslation } from "react-i18next";
import { useSEOMeta } from "../hooks/useSEOMeta";

interface PolicySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
}

// Bold a short lead-in label (e.g. "Active — ...", "Mã hóa: ...") for scannability.
function BulletContent({ text }: { text: string }) {
  const seps = [" — ", "：", ": "];
  for (const sep of seps) {
    const idx = text.indexOf(sep);
    if (idx > 0 && idx <= 30) {
      return (
        <>
          <strong className="font-semibold text-neutral-900">
            {text.slice(0, idx)}
          </strong>
          {text.slice(idx)}
        </>
      );
    }
  }
  return <>{text}</>;
}

export function PolicyPage() {
  useSEOMeta("policy");
  const { t } = useTranslation("policy");
  const sections = t("sections", { returnObjects: true }) as PolicySection[];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 p-8 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {t("updated")}
        </p>

        {/* Table of contents */}
        <nav
          aria-label={t("tocLabel")}
          className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
            {t("tocLabel")}
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${index + 1}`}
                  className="text-sm text-neutral-600 hover:text-[#1e4bbf] transition-colors"
                >
                  <span className="text-[#1e4bbf] font-semibold">
                    {index + 1}.
                  </span>{" "}
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              id={`section-${index + 1}`}
              className="scroll-mt-24 pt-2 border-t border-neutral-100 first:border-t-0"
            >
              <h2 className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#1e4bbf]/10 text-[#1e4bbf] text-base">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed pl-11">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1e4bbf]">
                    {section.bullets.map((bullet, i) => (
                      <li key={i}>
                        <BulletContent text={bullet} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphsAfter?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
