import { WireframeButton } from './WireframeButton';
import { Star, Sparkles, Rocket, Brain } from 'lucide-react';

export function DemoHeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
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

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 leading-tight">Hitek Work là hệ thống thu thập  <span className="text-[#1e4bbf]">dữ liệu thật </span>để quản lý đội ngũ từ xa một cách hiệu quả</h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            Hitek Work không phải là công cụ giám sát,<br className="hidden sm:block" />
            Đây là công cụ giúp đội ngũ thấu hiểu để đưa ra giải pháp tối đa năng suất.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WireframeButton variant="primary" className="w-full sm:w-auto px-8 py-4 text-base lg:text-lg">
              Dùng thử miễn phí →
            </WireframeButton>
            <WireframeButton variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base lg:text-lg">
              Yêu cầu Live Demo
            </WireframeButton>
          </div>

        </div>
      </div>
    </section>
  );
}