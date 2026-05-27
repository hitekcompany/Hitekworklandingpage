import { useTranslation, Trans } from 'react-i18next';
import { Mail, Clock, TrendingDown, Settings, Heart } from 'lucide-react';

export function DemoAwarenessReminderSection() {
  const { t } = useTranslation('demo');
  return (
    <section id="awareness-reminder" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 md:p-10 lg:p-16">

          {/* Layout: Title on TOP → Image LEFT + Content RIGHT */}
          <div className="max-w-7xl mx-auto space-y-12">

            {/* TOP - Title Section */}
            <div className="space-y-6 text-center lg:text-left">

              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {t('awareness_reminder.label')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="demo:awareness_reminder.title" components={{ 1: <span className="text-[#1e4bbf]" /> }}>
                  Nhắc nhở nhân viên — giúp tự điều chỉnh,{' '}
                  <span className="text-[#1e4bbf]">không phải giám sát</span>
                </Trans>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {t('awareness_reminder.subtitle')}
              </p>
            </div>

            {/* 2-Column Layout: Image LEFT + Content RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* LEFT - Email Mockup */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full">
                  {/* Email Mockup Document */}
                  <div className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden text-left" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8' }}>

                    {/* Email Header - Like Gmail/Outlook */}
                    <div className="bg-gray-50 border-b border-gray-300 px-6 py-4">
                      {/* Subject Line */}
                      <h3 className="text-base font-bold text-gray-900 mb-3">
                        {t('awareness_reminder.email_subject')}
                      </h3>

                      {/* From/To/Date */}
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex">
                          <span className="font-semibold w-16">{t('awareness_reminder.email_from_label')}</span>
                          <span>{t('awareness_reminder.email_from_value')}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-16">{t('awareness_reminder.email_to_label')}</span>
                          <span>{t('awareness_reminder.email_to_value')}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-16">{t('awareness_reminder.email_date_label')}</span>
                          <span>{t('awareness_reminder.email_date_value')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Email Body */}
                    <div className="px-8 py-6">
                      {/* Logo */}
                      <div className="mb-6">
                        <div className="inline-block bg-[#1e4bbf] text-white font-black text-sm px-3 py-1 rounded">
                          HITEK WORK
                        </div>
                      </div>

                      {/* Greeting */}
                      <p className="text-gray-900 text-sm mb-4">
                        <Trans i18nKey="demo:awareness_reminder.email_greeting" components={{ 1: <strong /> }}>
                          Chào <strong>[Tên nhân viên]</strong>,
                        </Trans>
                      </p>

                      {/* Intro */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        <Trans i18nKey="demo:awareness_reminder.email_intro" components={{ 1: <strong /> }}>
                          Trong quá trình theo dõi ca làm việc ngày <strong>[dd/mm/yyyy]</strong>, hệ thống Hitek Work phát hiện một số khoảng thời gian bạn không có thao tác trong thời gian dài hơn bình thường.
                        </Trans>
                      </p>

                      {/* Section: Overview */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        {t('awareness_reminder.email_overview_title')}
                      </p>

                      <ul className="text-gray-800 text-sm space-y-2 mb-6 ml-4">
                        <li>• <Trans i18nKey="demo:awareness_reminder.email_item_shift" components={{ 1: <strong /> }}>Ca làm việc: <strong>[Ngày / Khung giờ]</strong></Trans></li>
                        <li>• <Trans i18nKey="demo:awareness_reminder.email_item_total_time" components={{ 1: <strong /> }}>Tổng thời gian làm việc: <strong>[X]</strong> giờ</Trans></li>
                        <li>• <Trans i18nKey="demo:awareness_reminder.email_item_low_activity" components={{ 1: <strong /> }}>Thời gian hoạt động hiệu suất thấp: <strong>[Y]</strong> phút</Trans></li>
                        <li>• <Trans i18nKey="demo:awareness_reminder.email_item_freeze_count" components={{ 1: <strong /> }}>Số lần "treo máy" phát hiện: <strong>[N]</strong> lần</Trans></li>
                        <li>• <Trans i18nKey="demo:awareness_reminder.email_item_rating" components={{ 1: <strong /> }}>Mức độ đánh giá: <strong>[Cảnh báo / Không đạt]</strong></Trans></li>
                      </ul>

                      {/* Supportive paragraph */}
                      <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                        {t('awareness_reminder.email_response_para')}
                      </p>

                      {/* Purpose paragraph */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        {t('awareness_reminder.email_purpose_para')}
                      </p>

                      {/* Closing */}
                      <p className="text-gray-900 text-sm mb-6">
                        {t('awareness_reminder.email_closing')}
                      </p>

                      {/* Footer */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
                        {t('awareness_reminder.email_footer')}
                      </div>
                    </div>

                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                    {t('awareness_reminder.email_caption')}
                  </p>
                </div>
              </div>

              {/* RIGHT - Content */}
              <div className="space-y-6">

                {/* What the email contains */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {t('awareness_reminder.content_title')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:awareness_reminder.content_item1" components={{ 1: <strong /> }}>
                          <strong>Tổng quan ca làm:</strong> ngày/khung giờ, tổng thời gian, số lần idle/treo máy
                        </Trans>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:awareness_reminder.content_item2" components={{ 1: <strong /> }}>
                          <strong>Mức đánh giá:</strong> Cảnh báo / Không đạt
                        </Trans>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:awareness_reminder.content_item3" components={{ 1: <strong /> }}>
                          <strong>Kêu gọi phản hồi</strong> để hệ thống đánh giá chính xác hơn
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rule Config Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">
                      {t('awareness_reminder.rule_title')}
                    </h4>
                  </div>
                  <ul className="space-y-2 ml-8 text-gray-700 text-sm">
                    <li className="list-disc">{t('awareness_reminder.rule_item1')}</li>
                    <li className="list-none ml-4 text-xs text-gray-600">
                      • <strong>{t('awareness_reminder.rule_item_min_activity')}</strong>
                    </li>
                    <li className="list-none ml-4 text-xs text-gray-600">
                      • <strong>{t('awareness_reminder.rule_item_check_freq')}</strong>
                    </li>
                  </ul>
                </div>

                {/* Tone Note Box */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm leading-relaxed">
                      <strong className="text-green-700">{t('awareness_reminder.tone_label')}</strong>{' '}
                      {t('awareness_reminder.tone_text')}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
