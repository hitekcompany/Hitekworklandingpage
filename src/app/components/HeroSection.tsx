import { Check, TrendingUp, Shield, BarChart3, Sparkles, Star, Rocket, Brain } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1e4bbf] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 right-1/4 w-6 h-6 text-[#1e4bbf]/20 animate-pulse" />
        <Sparkles className="absolute top-40 left-1/4 w-8 h-8 text-indigo-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Rocket className="absolute bottom-40 right-1/3 w-7 h-7 text-purple-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <Brain className="absolute bottom-20 left-1/3 w-6 h-6 text-[#1e4bbf]/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10 mx-[50px] my-[0px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight text-neutral-900">Quản lý năng suất từ xa dựa trên <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-[#1e4bbf] to-indigo-600 bg-clip-text text-transparent">dữ liệu thật</span><span className="absolute bottom-2 left-0 w-full h-4 bg-[#1e4bbf]/20 blur-xl"></span></span></h1>
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-medium">Công cụ số 1 để gây dựng sự tin tưởng cho các đội ngũ làm việc cách xa nhau</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://zalo.me/84777505030"
                  target="_blank"
                className="group px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-[#1e4bbf] to-indigo-600 hover:from-[#1640a8] hover:to-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#1e4bbf]/30 text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  Yêu cầu Demo
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
              
            </div>

            {/* Micro-benefits */}
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e4bbf]/10 to-indigo-500/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#1e4bbf]" />
                </div>
                <span>Minh bạch theo thời gian thực</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e4bbf]/10 to-indigo-500/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#1e4bbf]" />
                </div>
                <span>AI cảnh báo & bảo mật</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e4bbf]/10 to-indigo-500/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#1e4bbf]" />
                </div>
                <span>Báo cáo cho từng cấp</span>
              </div>
            </div>
          </div>

          {/* Right: Illustration placeholder */}
          <div className="relative">
            <div className="relative bg-white/70 backdrop-blur-lg border-2 border-white/90 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50"></div>
              
              {/* Dashboard illustration */}
              <div className="relative z-10 p-4 lg:p-6 w-full space-y-4">
                {/* Header with icon */}
                
                
                {/* Mock data cards */}
                <div className="space-y-2.5">
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border border-white/80 hover:border-[#1e4bbf]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-xs font-bold text-neutral-700">Hiệu suất</span>
                      </div>
                      <span className="text-sm font-extrabold text-green-600">89%</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-0 h-full w-[89%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border border-white/80 hover:border-[#1e4bbf]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-3.5 h-3.5 text-[#1e4bbf]" />
                        </div>
                        <span className="text-xs font-bold text-neutral-700">Bảo mật</span>
                      </div>
                      <span className="text-sm font-extrabold text-[#1e4bbf]">100%</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#1e4bbf] to-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border border-white/80 hover:border-purple-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <span className="text-xs font-bold text-neutral-700">Phân tích AI</span>
                      </div>
                      <span className="text-sm font-extrabold text-purple-600">24</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-0 h-full w-[65%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
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