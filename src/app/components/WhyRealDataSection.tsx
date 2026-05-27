import { AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export function WhyRealDataSection() {
  const { t } = useTranslation('current-state');

  const block1Problems = t('why_real_data.block1_problems', { returnObjects: true }) as string[];
  const block1Solutions = t('why_real_data.block1_solutions', { returnObjects: true }) as string[];
  const block2Signals = t('why_real_data.block2_signals', { returnObjects: true }) as string[];
  const block3Teams = t('why_real_data.block3_teams', { returnObjects: true }) as string[];
  const block3Helps = t('why_real_data.block3_helps', { returnObjects: true }) as string[];

  const signalsLeft = block2Signals.slice(0, 4);
  const signalsRight = block2Signals.slice(4);

  return (
    <section className="relative py-8 lg:py-12 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md border-2 border-orange-400/30 mb-6 shadow-lg">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-bold text-orange-700">{t('why_real_data.badge')}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            {t('why_real_data.title_part1')}{' '}
            <span className="text-[#1e4bbf]">{t('why_real_data.title_highlight')}</span>
            <br className="hidden sm:block" />
            {t('why_real_data.title_part2')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            {t('why_real_data.subtitle')}
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="space-y-8 mb-12">

          {/* 1. Operational Transparency */}
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl border-2 border-blue-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1e4bbf] flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">{t('why_real_data.block1_heading')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">{t('why_real_data.block1_problem_label')}</p>
                <div className="space-y-2">
                  {block1Problems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">{t('why_real_data.block1_solution_label')}</p>
                <div className="space-y-2">
                  {block1Solutions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e4bbf] mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200/50">
              <p className="text-sm text-gray-600">
                <Trans i18nKey="current-state:why_real_data.block1_note">
                  <span className="font-bold text-gray-900">Đặc biệt quan trọng với:</span> Team outsource, Night shift, Freelancer, Junior
                </Trans>
              </p>
            </div>
          </div>

          {/* 2. Early Performance Detection */}
          <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl border-2 border-purple-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">{t('why_real_data.block2_heading')}</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                <Trans i18nKey="current-state:why_real_data.block2_intro">
                  Nhiều vấn đề không nằm ở KPI cuối tháng mà nằm ở <span className="font-bold text-gray-900">behavior hàng ngày:</span>
                </Trans>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {signalsLeft.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {signalsRight.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-100/50 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-800">
                  <Trans i18nKey="current-state:why_real_data.block2_ai_note">
                    <span className="font-bold text-purple-900">AI phát hiện pattern bất thường</span> sớm hơn nhiều so với báo cáo cuối tháng
                  </Trans>
                </p>
              </div>
            </div>
          </div>

          {/* 3. Data Security */}
          <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-3xl border-2 border-green-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">{t('why_real_data.block3_heading')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">{t('why_real_data.block3_teams_label')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {block3Teams.map((team, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">{team}</span>
                  ))}
                </div>

                <p className="font-bold text-gray-900 mb-2">{t('why_real_data.block3_help_label')}</p>
                <div className="space-y-2">
                  {block3Helps.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
