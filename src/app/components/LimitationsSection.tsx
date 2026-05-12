import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbulb } from 'lucide-react';

export function LimitationsSection() {
  return (
    <section id="limitations" className="relative py-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Main rounded container */}
        <div className="bg-gradient-to-br from-blue-50/40 via-white to-blue-50/30 rounded-[2.5rem] border-2 border-blue-100 p-8 lg:p-12 shadow-lg">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* ========== LEFT COLUMN: Content ========== */}
            <div className="space-y-8">
              
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Tại sao doanh nghiệp vẫn quản trị khó – dù đã dùng rất nhiều công cụ?
              </h2>
              
              {/* Two cards row */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-md">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1e4bbf] flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">1</span>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    {/* Heading */}
                    <h3 className="text-base font-black text-gray-900">
                      Công cụ đang ghi lại:
                    </h3>
                    
                    {/* Bullet list */}
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>Task giao việc</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>Tin nhắn chat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>Lịch họp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>Email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>File làm việc</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>Antivirus chặn mối nguy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1e4bbf] mt-1">•</span>
                        <span>…</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-red-200 p-6 shadow-md">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    {/* Heading with red emphasis */}
                    <h3 className="text-base font-black text-gray-900">
                      Nhưng <span className="text-red-600">KHÔNG</span> tool nào ghi lại được:
                    </h3>
                    
                    {/* Bullet list */}
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Ảnh chụp màn hình theo phút</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Timeline hoạt động thật</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Mức độ tập trung - Hiệu suất theo hành vi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Tool lạ, web độc, file nguy hiểm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Truy vết lại sự cố bảo mật</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Ai là nguồn gây rò rỉ dữ liệu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Bottom takeaway */}
              <div className="flex items-start gap-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <span className="text-2xl flex-shrink-0">👉</span>
                <p className="text-base text-gray-900 leading-relaxed">
                  Đây là <span className="font-black">lớp dữ liệu quan trọng nhất</span> để điều hành, và cũng là lớp dữ liệu mà mọi doanh nghiệp đang thiếu.
                </p>
              </div>
            </div>
            
            {/* ========== RIGHT COLUMN: Visual ========== */}
            <div className="relative">
              {/* Curved split edge decoration */}
              <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-16 overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-[100%] transform -translate-x-1/2"></div>
              </div>
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MjA5NTYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business software dashboard and tools visualization"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e4bbf]/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ========== ELEGANT TRANSITION: Question bridge ========== */}
        <div className="relative mt-16">
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg lg:text-xl font-bold text-gray-900 text-center max-w-2xl">
              Vậy doanh nghiệp cần gì để quản trị hiệu quả?
            </p>
            
            
            {/* Connector line to next section */}
            
          </div>
        </div>
      </div>
    </section>
  );
}