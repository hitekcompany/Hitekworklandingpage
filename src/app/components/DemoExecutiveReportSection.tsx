import { TrendingUp, AlertTriangle, Lightbulb, Target, Shield, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DemoExecutiveReportSection() {
  return (
    <section id="executive-report" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Container - Updated Premium UI */}
        <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl">
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 pointer-events-none"></div>
          
          {/* Content Wrapper */}
          <div className="relative p-8 md:p-12 lg:p-16">
            
            {/* Title Section - Above columns */}
            <div className="mb-10 lg:mb-14 text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-[#1e4bbf] to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg">
                  Executive Insight Report
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
                Báo cáo BOD: chỉ <span className="text-[#1e4bbf]">insight</span>, không dữ liệu thô
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                BOD cần bức tranh tổng quan để ra quyết định nhanh: rủi ro, xu hướng, và hành động ưu tiên — thay vì xem từng ảnh hay từng dòng log.
              </p>
            </div>

            {/* 2-Column Layout: Content LEFT + Image RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* LEFT - Content */}
              <div className="space-y-6">
                
                {/* What the executive report contains */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Báo cáo bao gồm:
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-[#1e4bbf]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">
                          Tổng quan tình hình theo kỳ
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          (ngày/tuần/tháng): xu hướng hiệu suất & mức độ tập trung
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">
                          Các tín hiệu rủi ro nổi bật
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Tăng gián đoạn, hoạt động thấp kéo dài, bất thường theo nhóm
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">
                          Top insights (3–5 điểm)
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Nguyên nhân khả dĩ & tác động
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                        <Target className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">
                          Khuyến nghị hành động
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ưu tiên hỗ trợ đội/nhóm nào, kiểm tra gì trước
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Note Box */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 backdrop-blur-sm rounded-2xl p-5 border border-indigo-200 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                      <Clock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Báo cáo được gửi <strong>tự động theo lịch</strong> (daily/weekly/monthly), cấu hình linh hoạt.
                    </p>
                  </div>
                </div>

                {/* Optional Micro Link */}
                

              </div>

              {/* RIGHT - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbWFpbCUyMGluYm94JTIwZW1haWwlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMTg0MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Illustration_ExecutiveReportEmail_Provided"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center italic leading-relaxed">
                    Minh hoạ: email báo cáo tổng hợp gửi Manager/BOD (insight-first).
                  </p>
                  
                  {/* What it avoids - Callout - Moved here */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm rounded-2xl p-5 border border-purple-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-600" />
                      Không đưa dữ liệu thô lên BOD:
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 flex-shrink-0 font-bold">×</span>
                        <span>Không đính kèm nội dung screenshot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 flex-shrink-0 font-bold">×</span>
                        <span>Không liệt kê chi tiết từng cá nhân</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 flex-shrink-0 font-bold">✓</span>
                        <span>Chỉ tổng hợp chỉ số & insight ở mức điều hành</span>
                      </li>
                    </ul>
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