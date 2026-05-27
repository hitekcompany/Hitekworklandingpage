import { useTranslation, Trans } from 'react-i18next';
import { Users, Clock, BarChart3 } from 'lucide-react';
import focusMetricsImage from 'figma:asset/09e45318540cd6b41a85f0678813d0a30503fcb8.png';

export function DemoFocusMetricsSection() {
  const { t } = useTranslation('demo');
  return (
    <section id="focus-metrics" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 lg:p-16">

          {/* 2-Column Layout: LEFT = Content, RIGHT = Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT Column - Content */}
            <div className="space-y-8">

              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {t('focus_metrics.label')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="demo:focus_metrics.title">
                  Đo hiệu suất & mức độ tập trung bằng{' '}
                  <span className="text-[#1e4bbf]">dữ liệu hành vi</span>
                </Trans>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                {t('focus_metrics.subtitle')}
              </p>

              {/* Key Highlights */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('focus_metrics.highlight1_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('focus_metrics.highlight1_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1e4bbf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('focus_metrics.highlight2_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('focus_metrics.highlight2_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('focus_metrics.highlight3_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('focus_metrics.highlight3_desc')}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT Column - Image */}
            <div className="lg:order-last order-first">
              <div className="relative">
                <img
                  src={focusMetricsImage}
                  alt={t('focus_metrics.image_alt')}
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                  {t('focus_metrics.image_caption')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
