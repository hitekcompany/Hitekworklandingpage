import { Mail, Clock, TrendingDown, Settings, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DemoAwarenessReminderSection() {
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
                  Awareness Reminder
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                Nhắc nhở nhân viên — giúp tự điều chỉnh,{' '}
                <span className="text-[#1e4bbf]">không phải giám sát</span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Khi hệ thống phát hiện mức hoạt động thấp kéo dài, email sẽ được gửi để nhân viên nhìn lại tình hình và phản hồi nếu có lý do hợp lệ (họp, nghiên cứu, xử lý ngoài hệ thống…).
              </p>
            </div>

            {/* 2-Column Layout: Image LEFT + Content RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT - Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full">
                  {/* Email Mockup Document */}
                  <div className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden text-left" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8' }}>
                    
                    {/* Email Header - Like Gmail/Outlook */}
                    <div className="bg-gray-50 border-b border-gray-300 px-6 py-4">
                      {/* Subject Line */}
                      <h3 className="text-base font-bold text-gray-900 mb-3">
                        📧 Nhắc nhở: Hoạt động làm việc ngày [dd/mm/yyyy]
                      </h3>
                      
                      {/* From/To/Date */}
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex">
                          <span className="font-semibold w-16">From:</span>
                          <span>Hitek Work System &lt;noreply@hitekwork.com&gt;</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-16">To:</span>
                          <span>[Email nhân viên]</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-16">Date:</span>
                          <span>[dd/mm/yyyy] - [HH:mm]</span>
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
                        Chào <strong>[Tên nhân viên]</strong>,
                      </p>
                      
                      {/* Intro */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        Trong quá trình theo dõi ca làm việc ngày <strong>[dd/mm/yyyy]</strong>, hệ thống Hitek Work phát hiện một số khoảng thời gian bạn không có thao tác trong thời gian dài hơn bình thường.
                      </p>
                      
                      {/* Section: Tổng quan */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        Tổng quan:
                      </p>
                      
                      <ul className="text-gray-800 text-sm space-y-2 mb-6 ml-4">
                        <li>• Ca làm việc: <strong>[Ngày / Khung giờ]</strong></li>
                        <li>• Tổng thời gian làm việc: <strong>[X]</strong> giờ</li>
                        <li>• Thời gian hoạt động hiệu suất thấp: <strong>[Y]</strong> phút</li>
                        <li>• Số lần "treo máy" phát hiện: <strong>[N]</strong> lần</li>
                        <li>• Mức độ đánh giá: <strong>[Cảnh báo / Không đạt]</strong></li>
                      </ul>
                      
                      {/* Supportive paragraph */}
                      <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                        Nếu có bất kỳ lý do nào liên quan đến công việc (họp, nghiên cứu, xử lý ngoài hệ thống,...), bạn có thể phản hồi lại để hệ thống điều chỉnh đánh giá chính xác hơn.
                      </p>
                      
                      {/* Purpose paragraph */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        Mục tiêu của thông báo này là giúp bạn nắm rõ tình hình làm việc cá nhân, không nhằm đánh giá tiêu cực.
                      </p>
                      
                      {/* Closing */}
                      <p className="text-gray-900 text-sm mb-6">
                        Trân trọng./
                      </p>
                      
                      {/* Footer */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
                        Email này được gửi tự động từ hệ thống Hitek Work
                      </div>
                    </div>
                    
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">
                    Minh hoạ: email nhắc nhở theo template, có số liệu tổng quan và lời nhắn hỗ trợ.
                  </p>
                </div>
              </div>

              {/* RIGHT - Content */}
              <div className="space-y-6">
                
                {/* What the email contains */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Nội dung email gồm:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Tổng quan ca làm:</strong> ngày/khung giờ, tổng thời gian, số lần idle/treo máy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Mức đánh giá:</strong> Cảnh báo / Không đạt
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Kêu gọi phản hồi</strong> để hệ thống đánh giá chính xác hơn
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rule Config Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">
                      Quy tắc gửi email:
                    </h4>
                  </div>
                  <ul className="space-y-2 ml-8 text-gray-700 text-sm">
                    <li className="list-disc">Gửi mail khi hoạt động dưới ngưỡng cấu hình</li>
                    <li className="list-none ml-4 text-xs text-gray-600">
                      • <strong>Minimum Activity (%)</strong>
                    </li>
                    <li className="list-none ml-4 text-xs text-gray-600">
                      • <strong>Check Frequency</strong>
                    </li>
                  </ul>
                </div>

                {/* Tone Note Box */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm leading-relaxed">
                      <strong className="text-green-700">Mục tiêu:</strong> tăng minh bạch & hỗ trợ cải thiện — không nhằm đánh giá tiêu cực.
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