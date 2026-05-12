import { ArrowRight, Brain, Tag, CheckCircle, TrendingUp, FileText } from 'lucide-react';
import aiClassificationImage from 'figma:asset/d4cd0887a56d4fb05e86c91393ae02753b964c31.png';

export function DemoAIClassificationSection() {
  return (
    <section id="ai-classification" className="relative py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 lg:p-16">
          
          {/* Layout: Title on TOP → Image LEFT + Content RIGHT */}
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* TOP - Title Section */}
            <div className="space-y-6 text-center lg:text-left">
              
              {/* Small Label Tag */}
              <div className="inline-block">
                <span className="bg-blue-100 text-[#1e4bbf] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  AI Activity Classification
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                AI nhận diện{' '}
                <span className="text-[#1e4bbf]">làm việc thật</span>
                {' '}/ phân loại hoạt động
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                AI hiểu ngữ cảnh ảnh chụp màn hình và tự động gắn nhãn hoạt động để tạo dữ liệu điều hành đáng tin cậy.
              </p>
            </div>

            {/* 2-Column Layout: Image LEFT + Key Points RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* LEFT - Image (Portrait) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative max-w-md w-full">
                  <img
                    src={aiClassificationImage}
                    alt="AI Activity Classification modal showing application name, category, working status, confidence, and details"
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-4 text-center italic leading-relaxed">AI phân tích và gắn nhãn Working + Confidence + Details từ Screenshot</p>
                </div>
              </div>

              {/* RIGHT - Key Points (2 columns) */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* 1. Application name */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-[#1e4bbf]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Application name
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Nhận diện ứng dụng đang sử dụng (vd: Google Chrome, Zalo, Figma)
                      </p>
                    </div>
                  </div>

                  {/* 2. Category */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Tag className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Category
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Phân loại nhóm hoạt động (vd: Web Browser, Communication, Design Tool)
                      </p>
                    </div>
                  </div>

                  {/* 3. Working */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Working
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Đánh dấu làm việc / không liên quan công việc
                      </p>
                    </div>
                  </div>

                  {/* 4. Confidence */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Confidence
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Mức độ tin cậy (High / Medium / Low)
                      </p>
                    </div>
                  </div>

                  {/* 5. Details */}
                  <div className="flex items-start gap-4 text-left sm:col-span-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Details
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Mô tả ngắn nội dung để quản lý hiểu "đang làm gì" mà không cần mở từng ảnh
                      </p>
                    </div>
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