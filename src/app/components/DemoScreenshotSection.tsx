import { useTranslation, Trans } from 'react-i18next';
import { Image as ImageIcon, Search, FolderTree } from 'lucide-react';
import illustrationImage from 'figma:asset/44c5cab028cef7eccd7a36b9ea4e99c757b627cf.png';
import galleryViewImage from 'figma:asset/2b5f51ddc2d49756072e3eb107ccd2420d830b0d.png';

export function DemoScreenshotSection() {
  const { t } = useTranslation('demo');
  return (
    <section className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 lg:p-16">

          {/* 2-Column Layout: LEFT = Content, RIGHT = Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT Column - Content */}
            <div className="space-y-8">

              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {t('screenshot.label')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="demo:screenshot.title" components={{ 1: <span className="text-[#1e4bbf]" /> }}>
                  Screenshot{' '}
                  <span className="text-[#1e4bbf]">thông minh</span>
                </Trans>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                {t('screenshot.subtitle')}
              </p>

              {/* Key Highlights */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('screenshot.highlight1_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('screenshot.highlight1_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FolderTree className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('screenshot.highlight2_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('screenshot.highlight2_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('screenshot.highlight3_title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('screenshot.highlight3_desc')}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT Column - Images (2 stacked) */}
            <div className="lg:order-last order-first space-y-6">
              <div className="relative">
                <img
                  src={illustrationImage}
                  alt={t('screenshot.image1_alt')}
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                  {t('screenshot.image1_caption')}
                </p>
              </div>

              <div className="relative">
                <img
                  src={galleryViewImage}
                  alt={t('screenshot.image2_alt')}
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                  {t('screenshot.image2_caption')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
