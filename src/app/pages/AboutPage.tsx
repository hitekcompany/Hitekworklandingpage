import { Building2, Target, Users, Zap, Shield, Sparkles, TrendingUp, Award, Star, Rocket, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useSEOMeta } from '../hooks/useSEOMeta';
import companyImage1 from '../../imports/company_image.jpg';
import companyImage2 from '../../imports/company_image_2.jpg';
import companyImage3 from '../../imports/company_image_3.jpg';
import companyImage4 from '../../imports/company_image_4.jpg';
import hitekImage from '../../imports/hitek_image.jpg';

const valuesIcons = [Target, Sparkles, Award];
const valuesGradients = ['from-blue-500 to-indigo-600', 'from-indigo-500 to-purple-600', 'from-purple-500 to-pink-600'];
const cultureIcons = [Users, Zap, Shield, TrendingUp];
const cultureImages = [companyImage1, companyImage2, companyImage3, companyImage4];

export function AboutPage() {
  useSEOMeta('about');
  const { t } = useTranslation('about');

  const timelineItems = t('timeline.items', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  const valuesItems = t('values.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const cultureItems = t('culture.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen">
      {/* Timeline Section */}
      <section className="relative overflow-hidden px-[24px] py-[50px]">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1e4bbf]/20 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border-2 border-indigo-400/30 mb-6 shadow-lg">
              <Rocket className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-700">{t('timeline.section_badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('timeline.section_title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              {t('timeline.section_subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1e4bbf] via-indigo-500 to-purple-500 lg:transform lg:-translate-x-1/2 shadow-lg"></div>

            <div className="space-y-16 lg:space-y-24">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-8 lg:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#1e4bbf] to-indigo-600 border-4 border-white lg:transform lg:-translate-x-1/2 shadow-2xl z-20 animate-pulse"></div>
                  <div className="absolute left-8 lg:left-1/2 w-12 h-12 rounded-full bg-[#1e4bbf]/20 lg:transform lg:-translate-x-1/2 animate-pulse blur-md" style={{ top: '-12px', left: index % 2 === 0 ? '20px' : '20px' }}></div>

                  <div className={`flex-1 ml-24 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
                    <div className="group inline-block p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg border-2 border-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[#1e4bbf]/30">
                      <div className="inline-block mb-4">
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1e4bbf] to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-[#1e4bbf] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/30 mb-6 shadow-lg">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">{t('values.section_badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('values.section_title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              {t('values.section_subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {valuesItems.map((value, index) => {
              const Icon = valuesIcons[index];
              const gradient = valuesGradients[index];
              return (
                <div
                  key={index}
                  className="group relative p-10 lg:p-12 rounded-3xl bg-white/70 backdrop-blur-lg border-2 border-white/90 hover:border-[#1e4bbf]/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>

                  <h3 className="relative text-3xl font-bold text-neutral-900 mb-5 group-hover:text-[#1e4bbf] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="relative text-lg text-neutral-600 leading-relaxed font-medium">
                    {value.description}
                  </p>

                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#1e4bbf]/20 group-hover:border-[#1e4bbf]/60 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture & Team Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md border-2 border-blue-400/30 mb-6 shadow-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">{t('culture.section_badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('culture.section_title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              {t('culture.section_subtitle')}
            </p>
          </div>

          <div className="space-y-32">
            {cultureItems.map((item, index) => {
              const Icon = cultureIcons[index];
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 lg:gap-16 items-center`}
                >
                  <div className="flex-1 w-full group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 aspect-[4/3] hover:scale-[1.02]">
                      <ImageWithFallback
                        src={cultureImages[index]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500"></div>

                      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Icon className="w-8 h-8 text-[#1e4bbf]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="max-w-xl">
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 flex items-center justify-center mb-8 shadow-xl hover:scale-110 hover:rotate-3 transition-all duration-500 group">
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 blur-xl opacity-50"></div>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 hover:text-[#1e4bbf] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                        {item.description}
                      </p>

                      <div className="mt-8 w-24 h-1.5 bg-gradient-to-r from-[#1e4bbf] to-indigo-600 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <ImageWithFallback
              src={hitekImage}
              alt="Hitek Work Team"
              className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-10 lg:p-20">
              <div className="text-white max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-bold">{t('team_image.badge')}</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  {t('team_image.title')}
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  {t('team_image.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e4bbf] via-indigo-600 to-purple-600"></div>

            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Sparkles className="absolute top-10 left-10 w-8 h-8 text-white/30 animate-pulse" />
              <Star className="absolute top-20 right-20 w-6 h-6 text-white/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="absolute bottom-20 left-1/4 w-7 h-7 text-white/30 animate-pulse" style={{ animationDelay: '1s' }} />
              <Star className="absolute bottom-10 right-1/3 w-5 h-5 text-white/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 py-24 lg:py-32 px-8 lg:px-20 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-8 shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">{t('cta.badge')}</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight whitespace-pre-line">
                {t('cta.title')}
              </h2>
              <p className="text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                {t('cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button
                  onClick={() => window.open('https://zalo.me/84777505030', '_blank')}
                  className="group px-10 py-5 bg-white text-[#1e4bbf] rounded-2xl font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2 justify-center">
                    {t('cta.contact_button')}
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
