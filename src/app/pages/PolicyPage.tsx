import { useTranslation } from "react-i18next";
import { useSEOMeta } from "../hooks/useSEOMeta";

interface ClauseItem {
  label: string;
  text: string;
}

interface Clause {
  label?: string;
  heading?: string;
  text?: string;
  paras?: string[];
  bullets?: string[];
  items?: ClauseItem[];
  after?: string[];
}

interface AppendixTable {
  headers: string[];
  rows: string[][];
}

interface Appendix {
  title: string;
  intro?: string;
  table: AppendixTable;
  notes?: string[];
}

interface PolicySection {
  title: string;
  intro?: string[];
  clauses?: Clause[];
  appendix?: Appendix;
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

function ClauseBlock({ clause }: { clause: Clause }) {
  const hasLead = clause.label || clause.heading || clause.text;
  return (
    <div className="space-y-3">
      {hasLead && (
        <p>
          {clause.label && (
            <strong className="font-semibold text-neutral-900">
              {clause.label}.{" "}
            </strong>
          )}
          {clause.heading && (
            <strong className="font-semibold text-neutral-900">
              {clause.heading}{" "}
            </strong>
          )}
          {clause.text}
        </p>
      )}
      {clause.paras?.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      {clause.bullets && (
        <ul className="list-disc pl-6 space-y-2 marker:text-[#1e4bbf]">
          {clause.bullets.map((bullet, i) => (
            <li key={i}>
              <BulletContent text={bullet} />
            </li>
          ))}
        </ul>
      )}
      {clause.items && (
        <div className="space-y-2 pl-2">
          {clause.items.map((item, i) => (
            <p key={i}>
              <strong className="font-semibold text-neutral-900">
                {item.label}
              </strong>{" "}
              {item.text}
            </p>
          ))}
        </div>
      )}
      {clause.after?.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

function AppendixBlock({ appendix }: { appendix: Appendix }) {
  return (
    <div className="space-y-4 text-neutral-700 leading-relaxed">
      {appendix.intro && <p>{appendix.intro}</p>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {appendix.table.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-neutral-300 bg-neutral-50 px-4 py-2 text-left font-semibold text-neutral-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appendix.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border border-neutral-300 px-4 py-2 ${
                      j === 0 || j === row.length - 1 ? "text-center" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {appendix.notes && (
        <ul className="list-disc pl-6 space-y-2 marker:text-[#1e4bbf]">
          {appendix.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PolicyPage() {
  useSEOMeta("policy");
  const { t } = useTranslation("policy");
  const sections = t("sections", { returnObjects: true }) as PolicySection[];
  const preamble = t("preamble", {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 p-8 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {t("updated")}
        </p>

        {preamble.length > 0 && (
          <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
            {preamble.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

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
                  {!section.appendix && (
                    <span className="text-[#1e4bbf] font-semibold">
                      {index + 1}.
                    </span>
                  )}{" "}
                  {section.appendix ? section.appendix.title : section.title}
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
              {section.appendix ? (
                <>
                  <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                    {section.appendix.title}
                  </h2>
                  <AppendixBlock appendix={section.appendix} />
                </>
              ) : (
                <>
                  <h2 className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#1e4bbf]/10 text-[#1e4bbf] text-base">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-neutral-700 leading-relaxed pl-11">
                    {section.intro?.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {section.clauses?.map((clause, i) => (
                      <ClauseBlock key={i} clause={clause} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
