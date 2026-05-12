import { HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export function CurrentStateHeroSection() {
  const scrollY = useParallax();

  return (
    <section className="relative py-6 lg:py-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
        
        {/* Floating icons with parallax */}
        <Sparkles 
          className="absolute top-[15%] right-[20%] w-12 h-12 text-blue-600/10 animate-pulse" 
          style={{ 
            animationDuration: '4s',
            transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
            willChange: 'transform'
          }} 
        />
        <HelpCircle 
          className="absolute bottom-[25%] left-[15%] w-16 h-16 text-indigo-600/8 animate-pulse" 
          style={{ 
            animationDuration: '5s', 
            animationDelay: '1s',
            transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
            willChange: 'transform'
          }} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] p-12 lg:p-16 shadow-xl border border-gray-200 aspect-square flex items-center justify-center transition-all duration-500 hover:scale-[1.02]">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 rounded-[2rem]"></div>
                
                {/* Large question mark visual */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    <HelpCircle className="w-48 h-48 lg:w-64 lg:h-64 text-blue-600" strokeWidth={1.5} />
                    
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-0 rounded-full border border-indigo-400/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-40"></div>
                <div className="absolute bottom-12 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 opacity-40"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 rounded-full bg-blue-100 opacity-30"></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
              Hôm nay đội của bạn làm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#1e4bbf] to-indigo-600">
                việc hiệu quả
              </span>{' '}
              bao nhiêu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-[#1e4bbf] to-blue-600">
                phần trăm
              </span>?
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              Trong đó bao nhiêu phần trăm dữ liệu báo cáo là{' '}
              <span className="text-blue-600 font-bold">sự thật</span>?
            </p>

            {/* Reflective Questions */}
            <div className="space-y-4 pt-4">
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-x-1">
                <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">Bạn thật sự tin tưởng các công cụ truyền thống như KPI và OKR là đủ để quản trị một con người?</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-x-1">
                <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">Bạn có truy vết được khi ai đó làm lộ các bí mật kinh doanh, khi nào, ở đâu không?</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-x-1">
                <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">Bạn luôn cảm thấy cộng tác cùng các nhóm không ở gần nhau là khó khăn?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ========== SIMPLE TRANSITION ========== */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <p className="text-sm text-gray-600 font-semibold">Khám phá thực trạng</p>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e4bbf] to-blue-600 flex items-center justify-center shadow-lg">
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}