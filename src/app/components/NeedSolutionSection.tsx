import { useTranslation, Trans } from 'react-i18next';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbulb } from 'lucide-react';
import screenshotImg from '../../imports/screenshot.png';
import detail1Img from '../../imports/detail-1.png';

export function NeedSolutionSection() {
  const { t } = useTranslation('current-state');

  const cap1Items = t('need_solution.cap1_items', { returnObjects: true }) as string[];
  const cap2Items = t('need_solution.cap2_items', { returnObjects: true }) as string[];
  const cap3Items = t('need_solution.cap3_items', { returnObjects: true }) as string[];
  const cap4Items = t('need_solution.cap4_items', { returnObjects: true }) as string[];

  return (
    <section id="need-solution" className="relative py-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-12">

        {/* ========== ELEGANT INTRO: Answer badge ========== */}
        <div className="text-center -mt-6">
          <div className="inline-flex items-center gap-3 bg-[#1e4bbf] rounded-2xl px-6 py-3 shadow-lg border border-white/10">
            <Lightbulb className="w-5 h-5 text-white" />
            <p className="text-base lg:text-lg font-bold text-white">{t('need_solution.intro_badge')}</p>
          </div>
        </div>

        {/* ========== BLOCK A: Benefits when having real data ========== */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] border-2 border-blue-100 p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Illustration */}
            <div className="relative order-2 lg:order-1">
              {/* Curved split edge decoration */}
              <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-16 overflow-hidden z-10">
                <div className="absolute inset-0 bg-white rounded-[100%] transform translate-x-1/2"></div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={detail1Img}
                  alt={t('need_solution.image_alt')}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e4bbf]/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="current-state:need_solution.block_a_title">
                  Doanh nghiệp nhận được gì khi có <span className="text-[#1e4bbf]">dữ liệu thật</span>?
                </Trans>
              </h2>

              {/* 3 Benefit Pills */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50/80 to-white border-2 border-blue-200 rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base font-bold text-gray-900">
                    {t('need_solution.benefit1')}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50/80 to-white border-2 border-blue-200 rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base font-bold text-gray-900">
                    {t('need_solution.benefit2')}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50/80 to-white border-2 border-blue-200 rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base font-bold text-gray-900">
                    {t('need_solution.benefit3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BLOCK B: Positioning & Capabilities ========== */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] border-2 border-blue-100 overflow-hidden shadow-lg">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770992203133-263e3034a367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIwOTYyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern office workspace background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative p-8 lg:p-12 space-y-8">
            {/* Preface lines */}
            <div className="space-y-1">
              <p className="text-sm text-gray-500">{t('need_solution.block_b_preface')}</p>
            </div>

            {/* Main statement */}
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight max-w-3xl">
              <Trans i18nKey="current-state:need_solution.block_b_title">
                <span className="font-bold">Hitek Work là hệ thống thu thập </span>
                <span className="text-[#1e4bbf]"><span className="font-bold">dữ liệu thật</span></span>
                <span className="font-bold"> để quản lý đội ngũ từ xa một cách hiệu quả</span>
              </Trans>
            </h2>

            {/* 4 Capability Cards in 2x2 grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">

              {/* Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-t-4 border-[#1e4bbf] p-6 shadow-md space-y-3">
                <h3 className="text-lg font-black text-gray-900">{t('need_solution.cap1_heading')}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {cap1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1e4bbf] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-t-4 border-[#1e4bbf] p-6 shadow-md space-y-3">
                <h3 className="text-lg font-black text-gray-900">
                  {t('need_solution.cap2_heading')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {cap2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1e4bbf] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-t-4 border-[#1e4bbf] p-6 shadow-md space-y-3">
                <h3 className="text-lg font-black text-gray-900">
                  {t('need_solution.cap3_heading')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {cap3Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1e4bbf] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-t-4 border-[#1e4bbf] p-6 shadow-md space-y-3">
                <h3 className="text-lg font-black text-gray-900">
                  {t('need_solution.cap4_heading')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {cap4Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1e4bbf] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
