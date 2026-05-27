import { useTranslation, Trans } from 'react-i18next';
import { Clock, Split, Filter } from 'lucide-react';
import timelineImage from 'figma:asset/c51d228c1d21c4ee4a61a5997322ece9e9fa4905.png';

export function DemoTimelineSection() {
  const { t } = useTranslation('demo');
  return (
    <section id="timeline" className="relative py-10 lg:py-16">
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
                  {t('timeline.label')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="demo:timeline.title" components={{ 1: <span className="text-[#1e4bbf]" /> }}>
                  Timeline hoạt động theo{' '}
                  <span className="text-[#1e4bbf]">thời gian thực</span>
                </Trans>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                {t('timeline.subtitle')}
              </p>

              {/* Key Highlights */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1e4bbf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('timeline.highlight1_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('timeline.highlight1_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Split className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('timeline.highlight2_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('timeline.highlight2_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Filter className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('timeline.highlight3_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('timeline.highlight3_desc')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Mini Legend */}
              <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded bg-green-500"></span>
                  <span className="font-medium text-gray-700">{t('timeline.legend_working')}</span>
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded bg-orange-500"></span>
                  <span className="font-medium text-gray-700">{t('timeline.legend_interrupted')}</span>
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded bg-gray-400"></span>
                  <span className="font-medium text-gray-700">{t('timeline.legend_idle')}</span>
                </span>
              </div>

            </div>

            {/* RIGHT Column - Image */}
            <div className="lg:order-last order-first">
              <div className="relative">
                <img
                  src={timelineImage}
                  alt={t('timeline.image_alt')}
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                  {t('timeline.image_caption')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
