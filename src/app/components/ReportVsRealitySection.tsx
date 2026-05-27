import { FileText, BarChart3, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export function ReportVsRealitySection() {
  const { t } = useTranslation('current-state');

  const reportItems = t('report_vs_reality.report_card.items', { returnObjects: true }) as string[];
  const realityItems = t('report_vs_reality.reality_card.items', { returnObjects: true }) as string[];

  return (
    <section id="report-vs-reality" className="relative py-8 lg:py-10 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Title with decorative line */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-4">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              {t('report_vs_reality.title')}
            </h2>
          </div>
        </div>

        {/* Comparison cards - side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-4 max-w-3xl mx-auto">

          {/* Report card */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-green-500/40 p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-green-600" />
              <h3 className="font-black text-gray-900">{t('report_vs_reality.report_card.heading')}</h3>
            </div>

            <div className="text-center py-2">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-1" />
              <p className="text-xl font-black text-gray-900">{t('report_vs_reality.report_card.percent')}</p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">{t('report_vs_reality.report_card.status')}</p>
            </div>

            <div className="mt-3 space-y-1.5 text-sm text-gray-600">
              {reportItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reality card */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-red-500/40 p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <h3 className="font-black text-gray-900">{t('report_vs_reality.reality_card.heading')}</h3>
            </div>

            <div className="text-center py-2">
              <BarChart3 className="w-10 h-10 text-red-600 mx-auto mb-1" />
              <p className="text-xl font-black text-gray-900">{t('report_vs_reality.reality_card.percent')}</p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">{t('report_vs_reality.reality_card.status')}</p>
            </div>

            <div className="mt-3 space-y-1.5 text-sm text-gray-600">
              {realityItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evidence */}
        <div className="max-w-3xl mx-auto mb-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-5 shadow-lg">
            <h3 className="text-base font-black text-[#1e4bbf] mb-3">{t('report_vs_reality.evidence_heading')}</h3>
            <div className="space-y-2.5 text-sm text-gray-700 leading-relaxed">
              <p>
                <span className="font-black text-[#1e4bbf]">1.</span>{' '}
                <Trans i18nKey="current-state:report_vs_reality.evidence1">
                  Nhân viên dành <span className="font-black text-gray-900">1,5-2,5 giờ/ngày</span> cho mạng xã hội & lướt web – Teamstage
                </Trans>
              </p>
              <p>
                <span className="font-black text-[#1e4bbf]">2.</span>{' '}
                <Trans i18nKey="current-state:report_vs_reality.evidence2">
                  <span className="font-black text-gray-900">89%</span> nhân viên lãng phí <span className="font-black text-gray-900">30 phút - 2 giờ/ngày</span> – Forbes
                </Trans>
              </p>
            </div>
          </div>
        </div>

        {/* Takeaway */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-5 shadow-lg">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <Trans i18nKey="current-state:report_vs_reality.takeaway">
                  Báo cáo có thể <span className="font-black text-gray-900">đẹp</span> – nhưng <span className="font-black text-[#1e4bbf]">dữ liệu hành vi</span> mới là sự thật. Không có dữ liệu = lãnh đạo chỉ nghe điều nhân viên <span className="font-black text-gray-900">muốn nói</span>.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
