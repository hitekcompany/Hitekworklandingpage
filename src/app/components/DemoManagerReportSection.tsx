import { FileText, Users, TrendingUp, AlertCircle, Heart, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DemoManagerReportSection() {
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
                  Manager Summary
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                Báo cáo quản lý trực tiếp — nhìn{' '}
                <span className="text-[#1e4bbf]">tổng quan</span>{' '}
                để ra quyết định
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Quản lý nhận báo cáo khi có tín hiệu bất thường trong team để kịp thời hỗ trợ, điều chỉnh và xác minh nguyên nhân.
              </p>
            </div>

            {/* 2-Column Layout: Email LEFT + Content RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT - Email Mockup */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full">
                  {/* Email Mockup Document */}
                  <div className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden text-left" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8' }}>
                    
                    {/* Email Body - Document Style */}
                    <div className="px-8 py-8">
                      
                      {/* Logo */}
                      <div className="mb-6">
                        <div className="inline-block bg-[#1e4bbf] text-white font-black text-sm px-3 py-1 rounded">
                          HITEK WORK
                        </div>
                      </div>
                      
                      {/* Greeting */}
                      <p className="text-gray-900 text-sm mb-4">
                        Chào <strong>[Tên Quản lý]</strong>,
                      </p>
                      
                      {/* Intro */}
                      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                        Hệ thống Hitek Work vừa ghi nhận mức độ hoạt động thấp của nhân viên thuộc nhóm bạn quản lý.
                      </p>
                      
                      {/* Section: Thông tin chi tiết */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        Thông tin chi tiết:
                      </p>
                      
                      <ul className="text-gray-800 text-sm space-y-2 mb-6 ml-4">
                        <li>• Nhân viên: <strong>[Tên nhân viên]</strong></li>
                        <li>• Ca làm việc: <strong>[Ngày / Khung giờ]</strong></li>
                        <li>• Tổng thời gian làm việc: <strong>[X]</strong> giờ</li>
                        <li>• Thời gian hoạt động hiệu suất thấp: <strong>[Y]</strong> phút</li>
                        <li>• Số lần "treo máy" phát hiện: <strong>[N]</strong> lần</li>
                        <li>• Mức độ đánh giá: <strong>[Cảnh báo / Không đạt]</strong></li>
                      </ul>
                      
                      {/* Action section */}
                      <p className="text-gray-900 text-sm font-bold mb-3">
                        Hành động gợi ý:
                      </p>
                      
                      <p className="text-gray-800 text-sm mb-6 ml-4 leading-relaxed">
                        - Kiểm tra lại nguyên nhân (họp, nghỉ trưa, sự cố kỹ thuật,...).
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
                    Minh hoạ: email báo cáo gửi quản lý trực tiếp (tóm tắt + hành động gợi ý).
                  </p>
                </div>
              </div>

              {/* RIGHT - Content */}
              <div className="space-y-6">
                
                {/* What the report includes */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Báo cáo bao gồm:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Tóm tắt ca làm & mức độ hoạt động</strong> (theo ngưỡng cấu hình)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Danh sách trường hợp cần chú ý</strong> (không hiển thị dữ liệu thô nhạy cảm)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Mức đánh giá:</strong> Cảnh báo / Không đạt (demo placeholder)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        <strong>Gợi ý hành động:</strong> kiểm tra nguyên nhân (họp, nghỉ trưa, sự cố kỹ thuật…)
                      </p>
                    </div>
                  </div>
                </div>

                {/* What it avoids - Callout */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 lg:p-5">
                  <h4 className="font-bold text-gray-900 text-sm lg:text-base mb-3">
                    Không đi sâu vào cá nhân:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>Không hiển thị chi tiết nội dung màn hình</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>Không yêu cầu mở từng screenshot để đọc hiểu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 flex-shrink-0">•</span>
                      <span>Tập trung vào tín hiệu điều hành & hỗ trợ kịp thời</span>
                    </li>
                  </ul>
                </div>

                {/* Rule Config Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings className="w-5 h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">
                      Trigger theo Activity Threshold:
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
                      <strong className="text-green-700">Mục tiêu:</strong> hỗ trợ team vận hành tốt hơn, không nhằm đánh giá tiêu cực.
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