import { useTranslation } from "react-i18next";
import { Download, Monitor, Apple, Terminal } from "lucide-react";
import { useSEOMeta } from "../hooks/useSEOMeta";
import { DOWNLOAD_URLS, type DownloadOs } from "../config";

const OS_KEYS: DownloadOs[] = ["windows", "macIntel", "macSilicon", "linux"];

const OS_ICON: Record<DownloadOs, typeof Monitor> = {
  windows: Monitor,
  macIntel: Apple,
  macSilicon: Apple,
  linux: Terminal,
};

const INSTRUCTION_KEYS = ["windows", "mac", "linux"] as const;

interface InstructionBlock {
  title: string;
  steps: string[];
}

export function DownloadPage() {
  useSEOMeta("download");
  const { t } = useTranslation("download");

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* OS download buttons */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {OS_KEYS.map((os) => {
          const url = DOWNLOAD_URLS[os];
          const available = Boolean(url);
          const Icon = OS_ICON[os];
          return (
            <div
              key={os}
              className="bg-white rounded-2xl shadow-sm shadow-neutral-200/60 p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-6 h-6 text-[#1e4bbf]" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t(`buttons.${os}.label`)}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
                {t(`buttons.${os}.hint`)}
              </p>
              {available ? (
                <a
                  href={url}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#1e4bbf] hover:bg-[#1e40af] transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  {t("download")}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-neutral-400 bg-neutral-100 cursor-not-allowed select-none"
                >
                  {t("comingSoon")}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Install & bypass-warning instructions */}
      <div className="bg-white rounded-3xl shadow-sm shadow-neutral-200/60 p-8 lg:p-10">
        <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
          {t("instructions.title")}
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-8">
          {t("instructions.intro")}
        </p>
        <div className="space-y-8">
          {INSTRUCTION_KEYS.map((key) => {
            const block = t(`instructions.${key}`, {
              returnObjects: true,
            }) as InstructionBlock;
            return (
              <div key={key}>
                <h3 className="text-base font-bold text-neutral-900 mb-3">
                  {block.title}
                </h3>
                <ol className="list-decimal pl-6 space-y-2 text-neutral-700 leading-relaxed">
                  {block.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
