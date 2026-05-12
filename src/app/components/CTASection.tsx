import { Shield, Clock, TrendingUp, Sparkles, Star, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section id="demo" className="relative py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Main CTA Container */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e4bbf] via-indigo-600 to-purple-600"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Decorative Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Sparkles className="absolute top-10 left-10 w-8 h-8 text-white/30 animate-pulse" />
            <Star className="absolute top-20 right-20 w-6 h-6 text-white/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute bottom-20 left-1/4 w-7 h-7 text-white/30 animate-pulse" style={{ animationDelay: '1s' }} />
            <Star className="absolute bottom-10 right-1/3 w-5 h-5 text-white/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
            
            {/* Centered Content */}
            <div className="max-w-3xl mx-auto text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-8 shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">Bắt đầu</span>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">Hitek Work giúp bạn quản trị bằng dữ liệu thật</h2>
              
              {/* Subheadline */}
              <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed mb-10 font-medium">Xem live demo để khám phá một giải pháp hoàn toàn khác biệt</p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
                {/* Primary Button */}
                <button 
                   onClick={() => window.open('https://zalo.me/84777505030', '_blank')}
                  className="group w-full sm:w-auto bg-white text-[#1e4bbf] font-bold text-base md:text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center gap-2 justify-center">
                    Yêu cầu Live Demo
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
                
                {/* Secondary Button */}
                
              </div>
              
              {/* Trust Micro-Row */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-semibold text-white">Minh bạch</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-semibold text-white">Bằng chứng theo thời gian</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-semibold text-white">Bảo mật dữ liệu</span>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}