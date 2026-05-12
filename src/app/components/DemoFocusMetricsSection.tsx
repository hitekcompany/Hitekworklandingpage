import { ArrowRight, Users, Clock, BarChart3 } from 'lucide-react';
import focusMetricsImage from 'figma:asset/09e45318540cd6b41a85f0678813d0a30503fcb8.png';

export function DemoFocusMetricsSection() {
  return (
    <section id="focus-metrics" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 lg:p-16">
          
          {/* 2-Column Layout: LEFT = Content, RIGHT = Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT Column - Content */}
            <div className="space-y-8">
              
              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Behavior-based Tracking
                </span>
              </div>

              {/* Headline (big, 2 lines max) */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                Đo hiệu suất & mức độ tập trung bằng{' '}
                <span className="text-[#1e4bbf]">dữ liệu hành vi</span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Thay vì "nghe báo cáo", quản lý nhìn thấy trạng thái hoạt động theo thời gian và theo từng phiên làm việc.
              </p>

              {/* Key Highlights (3 items with icons) */}
              <div className="space-y-6">
                
                {/* Highlight 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Phân loại trạng thái theo team
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Tổng quan theo 3 nhóm: Normal / Warning / Low để biết ai đang cần hỗ trợ.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1e4bbf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Theo dõi theo phiên (Period) + Total Time
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Mỗi dòng là một phiên hoạt động có khung giờ và tổng thời gian rõ ràng.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Chỉ số Active % & Working %
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Thấy mức độ hoạt động và tỷ lệ làm việc thay vì đoán cảm tính.
                    </p>
                  </div>
                </div>

              </div>

              {/* Example Strip (compact, mono style) */}
              

              {/* Privacy Note */}
              

              {/* Micro-CTA (text link only) */}
              

            </div>

            {/* RIGHT Column - Image (Illustration_FocusMetricsReport_Provided) */}
            <div className="lg:order-last order-first">
              <div className="relative">
                <img
                  src={focusMetricsImage}
                  alt="Team Activity Tracking screen showing behavior-based metrics"
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">Minh hoạ: Tracking theo user, phân loại trạng thái và bảng chi tiết theo phiên hoạt động (demo data).</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}