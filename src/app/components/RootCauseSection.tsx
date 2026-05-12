import { Database, GitBranch, Target, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RootCauseSection() {
  return (
    <section id="root-cause" className="relative py-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Main container with soft border */}
        <div className="bg-gradient-to-br from-blue-50/40 via-white to-blue-50/30 rounded-[2.5rem] border-2 border-blue-100 p-8 lg:p-12 shadow-lg">
          
          {/* ========== BLOCK A: Root Cause Cards ========== */}
          <div className="mb-12">
            
            {/* Section Title with icon */}
            <div className="flex items-center gap-3 mb-8">
              <ArrowRight className="w-7 h-7 text-[#1e4bbf]" />
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                Gốc rễ thật sự của mọi vấn đề
              </h2>
            </div>

            {/* Top 2 cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              
              {/* Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-[#1e4bbf]" />
                  </div>
                  <p className="text-base font-black text-gray-900 leading-relaxed mt-2">
                    Thiếu dữ liệu hành vi theo thời gian thực
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-16">
                  Không có timeline tiến độ thực tế để truy vết "ai / khi nào / vì sao".
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <GitBranch className="w-6 h-6 text-[#1e4bbf]" />
                  </div>
                  <p className="text-base font-black text-gray-900 leading-relaxed mt-2">
                    Dữ liệu phân mảnh, rời rạc, không đồng bộ
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-16">
                  Task, chat, email, file, chấm công… nằm rải rác, không có "single source of truth".
                </p>
              </div>
            </div>

            {/* Full width card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg mb-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#1e4bbf]" />
                </div>
                <p className="text-base font-black text-gray-900 leading-relaxed mt-2">
                  Lãnh đạo buộc phải ra quyết định bằng cảm tính
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-16">
                Không đo được sự thật đang diễn ra → ưu tiên sai → trễ hạn, đội chi phí, tăng rủi ro.
              </p>
            </div>

            {/* Red warning statement */}
            <div className="text-center">
              <p className="text-base lg:text-lg text-red-600 leading-relaxed">
                Khi không thấy được <span className="font-black text-red-700">"sự thật đang diễn ra"</span>, mọi quyết định đều mang tính <span className="font-black text-red-700">may rủi</span>.
              </p>
            </div>
          </div>

          {/* ========== BLOCK B: Evidence Panel (BARC 58%) ========== */}
          <div className="relative">
            
            {/* Separator line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              {/* Left: Evidence text - Quote Style */}
              <div className="relative">
                {/* Quote mark decoration */}
                <div className="absolute -left-2 -top-2 text-6xl lg:text-7xl text-[#1e4bbf]/20 font-serif leading-none">"</div>
                
                <div className="relative bg-blue-50/50 border-l-4 border-[#1e4bbf] rounded-r-xl p-6 lg:p-8 space-y-5">
                  
                  {/* Heading */}
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900">
                    Nguyên nhân lớn nhất
                  </h3>
                  
                  {/* Evidence statement with BARC */}
                  <p className="text-base lg:text-lg text-gray-900 leading-relaxed">
                    <a href="#" className="text-[#1e4bbf] underline font-bold hover:text-blue-700 transition-colors">
                      Theo BARC:
                    </a>{' '}
                    <span className="font-black text-[#1e4bbf]">58%</span> quyết định trong doanh nghiệp Việt dựa vào cảm giác.
                  </p>
                  
                  {/* Quote line */}
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed italic pl-4 border-l-2 border-gray-300">
                    Mà cảm giác thì… <span className="font-black text-red-600 not-italic">hay đánh lừa mình</span>
                  </p>
                  
                  {/* Closing line */}
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    Không có dữ liệu, doanh nghiệp buộc phải <span className="font-black text-red-600">điều hành theo may rủi</span>.
                  </p>
                  
                  {/* Footnote */}
                  
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1550056015-4ac35de5a2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1hemUlMjBmb2dneSUyMHBhdGh8ZW58MXx8fHwxNzcyMDk0NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Foggy unclear path representing decision making without data"
                    className="w-full h-full object-cover"
                  />
                  {/* Fog gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}