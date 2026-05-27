import { useTranslation, Trans } from 'react-i18next';
import { FileText, Users, TrendingUp, AlertCircle, Heart, Settings } from 'lucide-react';

export function DemoManagerReportSection() {
  const { t } = useTranslation('demo');
  return (
    <section id="manager-report" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 md:p-10 lg:p-16">

          {/* Layout: Title on TOP → Email LEFT + Content RIGHT */}
          <div className="max-w-7xl mx-auto space-y-12">

            {/* TOP - Title Section */}
            <div className="space-y-6 text-center lg:text-left">

              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {t('manager_report.label')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                <Trans i18nKey="demo:manager_report.title">
                  Báo cáo quản lý trực tiếp — nhìn{' '}
                  <span className="text-[#1e4bbf]">tổng quan</span>{' '}
                  để ra quyết định
                </Trans>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {t('manager_report.subtitle')}
              </p>
            </div>

            {/* 2-Column Layout: Email LEFT + Content RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* LEFT - Email Mockup */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full">
                  <div className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden text-left" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8' }}>

                    {/* Email Body */}
                    <div className="px-8 py-8">

                      {/* Logo */}
                      <div className="mb-6">
                        <div className="inline-block bg-[#1e4bbf] text-white font-black text-sm px-3 py-1 rounded">
                          HITEK WORK
                        </div>
                      </div>

                      {/* Greeting */}
                      <p className="text-gray-900 text-sm mb-4">
                        <Trans i18nKey="demo:manager_report.email_greeting">
                          Chào <strong>[Tên Quản lý]</strong>,
                        </Trans>
                      </p>

                      {/* Intro */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        {t('manager_report.email_intro')}
                      </p>

                      {/* Section: Detail info */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        {t('manager_report.email_detail_title')}
                      </p>

                      <ul className="text-gray-800 text-sm space-y-2 mb-6 ml-4">
                        <li>• <Trans i18nKey="demo:manager_report.email_item_employee">Nhân viên: <strong>[Tên nhân viên]</strong></Trans></li>
                        <li>• <Trans i18nKey="demo:manager_report.email_item_shift">Ca làm việc: <strong>[Ngày / Khung giờ]</strong></Trans></li>
                        <li>• <Trans i18nKey="demo:manager_report.email_item_total_time">Tổng thời gian làm việc: <strong>[X]</strong> giờ</Trans></li>
                        <li>• <Trans i18nKey="demo:manager_report.email_item_low_activity">Thời gian hoạt động hiệu suất thấp: <strong>[Y]</strong> phút</Trans></li>
                        <li>• <Trans i18nKey="demo:manager_report.email_item_freeze_count">Số lần "treo máy" phát hiện: <strong>[N]</strong> lần</Trans></li>
                        <li>• <Trans i18nKey="demo:manager_report.email_item_rating">Mức độ đánh giá: <strong>[Cảnh báo / Không đạt]</strong></Trans></li>
                      </ul>

                      {/* Action section */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        {t('manager_report.email_action_title')}
                      </p>

                      <p className="text-gray-800 text-sm mb-6 ml-4 leading-relaxed">
                        {t('manager_report.email_action_text')}
                      </p>

                      {/* Closing */}
                      <p className="text-gray-900 text-sm mb-6">
                        {t('manager_report.email_closing')}
                      </p>

                      {/* Footer */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
                        {t('manager_report.email_footer')}
                      </div>
                    </div>

                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                    {t('manager_report.email_caption')}
                  </p>
                </div>
              </div>

              {/* RIGHT - Content */}
              <div className="space-y-6">

                {/* What the report includes */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {t('manager_report.report_title')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:manager_report.report_item1">
                          <strong>Tóm tắt ca làm & mức độ hoạt động</strong> (theo ngưỡng cấu hình)
                        </Trans>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:manager_report.report_item2">
                          <strong>Danh sách trường hợp cần chú ý</strong> (không hiển thị dữ liệu thô nhạy cảm)
                        </Trans>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:manager_report.report_item3">
                          <strong>Mức đánh giá:</strong> Cảnh báo / Không đạt (demo placeholder)
                        </Trans>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <Trans i18nKey="demo:manager_report.report_item4">
                          <strong>Gợi ý hành động:</strong> kiểm tra nguyên nhân (họp, nghỉ trưa, sự cố kỹ thuật…)
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>

                {/* What it avoids */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 lg:p-5">
                  <h4 className="font-bold text-gray-900 text-sm lg:text-base mb-3">
                    {t('manager_report.no_personal_title')}
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>{t('manager_report.no_personal_item1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>{t('manager_report.no_personal_item2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>{t('manager_report.no_personal_item3')}</span>
                    </li>
                  </ul>
                </div>

                {/* Rule Config Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">
                      {t('manager_report.rule_title')}
                    </h4>
                  </div>
                  <ul className="space-y-1 ml-8 text-gray-700 text-sm">
                    <li className="list-none text-xs text-gray-600">
                      • <strong>Minimum Activity (%)</strong>
                    </li>
                    <li className="list-none text-xs text-gray-600">
                      • <strong>Check Frequency</strong>
                    </li>
                  </ul>
                </div>

                {/* Tone Note Box */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm leading-relaxed">
                      <strong className="text-green-700">{t('manager_report.tone_label')}</strong>{' '}
                      {t('manager_report.tone_text')}
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
