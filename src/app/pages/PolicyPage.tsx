import { useTranslation } from "react-i18next";
import { useSEOMeta } from "../hooks/useSEOMeta";

interface PolicySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
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
        <p className="text-sm text-neutral-500 mb-10 leading-relaxed">
          {t("updated")}
        </p>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
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
