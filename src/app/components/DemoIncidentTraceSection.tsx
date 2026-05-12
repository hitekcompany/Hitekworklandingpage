import { Search, Clock, Users, FileCheck, ShieldAlert, ArrowRight } from 'lucide-react';
import incidentTraceImage from 'figma:asset/cddd00f3ee78231ae571d106594093e210039ba7.png';

export function DemoIncidentTraceSection() {
  return (
    <section id="incident-trace" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 md:p-10 lg:p-16">
          
          {/* Layout: Title on TOP → Image LEFT + Content RIGHT */}
          <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
            
            {/* TOP - Title Section */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              
              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Incident Traceability
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Truy vết sự cố: xem lại{' '}
                <span className="text-[#1e4bbf]">toàn bộ hành vi</span>
                {' '}theo thời gian
              </h2>

              {/* Subheadline */}
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Khi có nghi ngờ rò rỉ dữ liệu hoặc hoạt động bất thường, bạn có thể lần ngược lịch sử để tìm đúng thời điểm – đúng nguồn.
              </p>
            </div>

            {/* 2-Column Layout: Image LEFT + Content RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              {/* LEFT - Image (Landscape) */}
              <div className="w-full">
                <div className="relative w-full">
                  <img
                    src={incidentTraceImage}
                    alt="Screenshots gallery view with grid thumbnails, filters, and pagination for incident tracing"
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-4 text-center lg:text-left italic leading-relaxed">
                    Minh hoạ: xem lại lịch sử screenshot theo thời gian, lọc theo user/project/status để truy vết.
                  </p>
                </div>
              </div>

              {/* RIGHT - Content */}
              <div className="space-y-6 lg:space-y-8">
                
                {/* 3-Step Mini Flow */}
                <div className="space-y-3 lg:space-y-4">
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-[#1e4bbf] rounded-lg flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">
                        Khoanh vùng
                      </h3>
                      <p className="text-gray-700 text-xs lg:text-sm leading-relaxed">
                        Chọn tháng/ngày + user + project + status
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-[#1e4bbf] rounded-lg flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">
                        Xem chuỗi bằng chứng
                      </h3>
                      <p className="text-gray-700 text-xs lg:text-sm leading-relaxed">
                        Duyệt grid screenshot theo timeline, mở preview khi cần
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-[#1e4bbf] rounded-lg flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">
                        Kết luận rõ ràng
                      </h3>
                      <p className="text-gray-700 text-xs lg:text-sm leading-relaxed">
                        Xác định app/category liên quan và xuất bằng chứng
                      </p>
                    </div>
                  </div>

                </div>

                {/* Highlight Bullets */}
                <div className="space-y-2 lg:space-y-3 pt-3 lg:pt-4">
                  <div className="flex items-start gap-3">
                    <Search className="w-4 h-4 lg:w-5 lg:h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-xs lg:text-sm leading-relaxed">
                      <strong>Lọc nhanh</strong> theo thời gian / người dùng / dự án / trạng thái
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-xs lg:text-sm leading-relaxed">
                      <strong>Duyệt theo chuỗi timeline</strong> để thấy diễn biến
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-4 h-4 lg:w-5 lg:h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-xs lg:text-sm leading-relaxed">
                      <strong>Tạo bằng chứng rõ ràng</strong> phục vụ điều hành & xử lý sự cố
                    </p>
                  </div>
                </div>

                {/* Privacy Note Box */}
                

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}