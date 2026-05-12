import { Scale, ArrowDownCircle } from 'lucide-react';
import { useState } from 'react';

export function CurrentStateSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  // Data for Communication breakdown
  const communicationBubbles = [
    { label: 'Email', percent: 28 },
    { label: 'Họp/Meeting', percent: 21 },
    { label: 'Chat', percent: 8 }
  ];

  // Data for Creation breakdown
  const creationBubbles = [
    { label: 'Viết tài liệu', percent: 22 },
    { label: 'Phân tích/tính toán', percent: 14 },
    { label: 'Thiết kế/Code', percent: 7 }
  ];

  return (
    <section id="current-state" className="relative py-8 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ========== INTRO BADGE ========== */}
        <div className="text-center mb-10">
          
        </div>
        
        {/* Large rounded container */}
        <div className="bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 rounded-[3rem] border-2 border-blue-100 p-8 lg:p-16 shadow-xl">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Chart / Balance Scale Infographic */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                
                {/* Balance Scale Visualization */}
                <div className="relative py-8">
                  
                  {/* Main horizontal stacked bar */}
                  <div className="relative mb-16">
                    <div className="flex rounded-[1.5rem] overflow-hidden shadow-2xl h-36 border border-gray-200">
                      {/* Communication section */}
                      <div className="relative flex-[57] bg-[#1e4bbf] flex items-center justify-center group hover:brightness-110 transition-all duration-300">
                        <div className="text-center relative z-10">
                          <p className="text-white font-black text-5xl mb-2 drop-shadow-lg">57%</p>
                          <p className="text-white/90 text-sm font-bold uppercase tracking-widest drop-shadow">Communication</p>
                        </div>
                      </div>
                      
                      {/* Creation section */}
                      <div className="relative flex-[43] bg-indigo-500 flex items-center justify-center group hover:brightness-110 transition-all duration-300">
                        <div className="text-center relative z-10">
                          <p className="text-white font-black text-5xl mb-2 drop-shadow-lg">43%</p>
                          <p className="text-white/90 text-sm font-bold uppercase tracking-widest drop-shadow">Creation</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Source label below bar */}
                    <div className="text-center mt-5">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                        Phân bổ thời gian trong Microsoft 365
                      </p>
                    </div>
                  </div>

                  {/* Breakdown cards grid */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    
                    {/* LEFT: Communication breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-3 rounded-full bg-[#1e4bbf] shadow-sm"></div>
                        <p className="font-bold text-[#1e4bbf] text-xs uppercase tracking-wider">Communication</p>
                      </div>
                      
                      {communicationBubbles.map((bubble, index) => (
                        <div 
                          key={index}
                          className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-200 hover:border-[#1e4bbf]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-gray-700 font-semibold text-sm group-hover:text-gray-900 transition-colors flex-shrink-0">{bubble.label}</p>
                            <div className="flex items-center gap-3 min-w-0">
                              <div 
                                className="h-2 rounded-full bg-[#1e4bbf] shadow-sm transition-all duration-500"
                                style={{ width: `${Math.min(bubble.percent * 2, 120)}px` }}
                              ></div>
                              <p className="text-[#1e4bbf] font-black text-sm min-w-[40px] text-right flex-shrink-0">{bubble.percent}%</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT: Creation breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm"></div>
                        <p className="font-bold text-indigo-600 text-xs uppercase tracking-wider">Creation</p>
                      </div>
                      
                      {creationBubbles.map((bubble, index) => (
                        <div 
                          key={index}
                          className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-200 hover:border-indigo-500/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-gray-700 font-semibold text-sm group-hover:text-gray-900 transition-colors flex-shrink-0">{bubble.label}</p>
                            <div className="flex items-center gap-3 min-w-0">
                              <div 
                                className="h-2 rounded-full bg-indigo-500 shadow-sm transition-all duration-500"
                                style={{ width: `${Math.min(bubble.percent * 2, 120)}px` }}
                              ></div>
                              <p className="text-indigo-600 font-black text-sm min-w-[40px] text-right flex-shrink-0">{bubble.percent}%</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Copy / Explanation */}
            <div className="order-1 lg:order-2 space-y-10">
              
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Hiệu suất bị mất
              </h2>

              {/* Source bullets */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#1e4bbf] text-xl font-bold mt-1">•</span>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Theo{' '}
                    <a href="#" className="text-[#1e4bbf] underline font-bold hover:text-blue-700 transition-colors">
                      Asana
                    </a>
                    : "60% thời gian nhân viên văn phòng không tạo giá trị."
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-[#1e4bbf] text-xl font-bold mt-1">•</span>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Theo{' '}
                    <a href="#" className="text-[#1e4bbf] underline font-bold hover:text-blue-700 transition-colors">
                      Microsoft
                    </a>
                    : "57% thời gian mỗi ngày nhân viên dành cho họp, chat, email."
                  </p>
                </div>
              </div>

              {/* Example block */}
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-xl">
                <p className="font-bold text-xl text-gray-900 mb-6">Ví dụ:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Nếu mỗi người lãng phí <span className="font-bold text-gray-900">2 giờ/ngày</span>,
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Một doanh nghiệp <span className="font-bold text-gray-900">50 người</span>,
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Lương trung bình <span className="font-bold text-gray-900">10 triệu/người/tháng</span>.
                    </p>
                  </div>
                  
                  {/* Highlighted result */}
                  <div className="flex items-start gap-3 pt-5 mt-5 border-t-2 border-gray-200">
                    <span className="text-[#1e4bbf] text-xl font-bold mt-1">→</span>
                    <p className="text-base lg:text-lg text-[#1e4bbf] font-bold leading-relaxed">Mất hơn <span className="text-xl font-black">100tr/tháng</span> - <span className="text-xl font-black">1,2 tỷ/năm</span> (chưa bao gồm chi phí cơ hội đã mất)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ========== SIMPLE TRANSITION ========== */}
        <div className="relative mt-20">
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                Nhưng tại sao báo cáo luôn "100% hoàn thành"?
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}