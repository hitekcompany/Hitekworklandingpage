import { TrendingUp, Shield, Search, FileText } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './figma/ImageWithFallback';
import detailImg from '../../imports/detail.png';
import performanceImg from '../../imports/performance.png';
import screenshotImg from '../../imports/screenshot.png';
import emailImg from '../../imports/email.png';

const pillarIcons = [TrendingUp, Shield, Search, FileText];
const pillarImages = [detailImg, performanceImg, screenshotImg, emailImg];
const pillarDemoLinks = [
  '/demo#minh-bach',
  '/demo#ai-bao-mat',
  '/demo#truy-vet',
  '/demo#bao-cao-da-cap',
];

export function PillarsSection() {
  const { t } = useTranslation('home');

  const items = t('pillars.items', { returnObjects: true }) as Array<{
    title: string;
    valueSentence: string;
    features: string[];
  }>;

  return (
    <section id="pillars" className="relative py-20 lg:py-32 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
            {t('pillars.section_title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">{t('pillars.section_subtitle')}</p>
        </div>

        {/* Desktop & Mobile: Alternating Layout */}
        <div className="space-y-32">
          {items.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full group">
                  <Link to={pillarDemoLinks[index]} className="block">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 aspect-[4/3] hover:scale-[1.02]">
                      <ImageWithFallback
                        src={pillarImages[index]}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500"></div>

                      {/* Overlay Icon */}
                      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Icon className="w-8 h-8 text-[#1e4bbf]" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="max-w-xl">
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 flex items-center justify-center mb-8 shadow-xl hover:scale-110 hover:rotate-3 transition-all duration-500 group">
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 blur-xl opacity-50"></div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 hover:text-[#1e4bbf] transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    <p className="text-xl text-neutral-600 leading-relaxed font-medium mb-8">
                      {pillar.valueSentence}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-neutral-700">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#1e4bbf] to-indigo-600 mt-2 flex-shrink-0 shadow-md"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Demo Link */}
                    <Link
                      to={pillarDemoLinks[index]}
                      className="inline-flex items-center gap-3 text-[#1e4bbf] font-bold text-lg hover:gap-4 transition-all group"
                    >
                    </Link>

                    {/* Decorative line */}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
