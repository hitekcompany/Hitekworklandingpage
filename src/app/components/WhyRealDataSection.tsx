import { AlertCircle, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export function WhyRealDataSection() {
  return (
    <section className="relative py-8 lg:py-12 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md border-2 border-orange-400/30 mb-6 shadow-lg">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-bold text-orange-700">Thách thức</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            Tại sao cần <span className="text-[#1e4bbf]">dữ liệu thật</span><br className="hidden sm:block" />
            để quản lý đội ngũ từ xa?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Khi làm việc từ xa, thiếu dữ liệu thật khiến quản lý trở nên mù mờ và dựa vào "cảm tính"
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="space-y-8 mb-12">

          {/* 1. Tăng tính minh bạch vận hành */}
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl border-2 border-blue-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1e4bbf] flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">1. Tăng tính minh bạch vận hành</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Khi làm remote/hybrid, leader khó biết:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Team có đang làm việc thật không</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Có bị kẹt ở task nào không</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Có đang phối hợp hiệu quả không</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Dữ liệu thật giúp:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e4bbf] mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Xác nhận sự hiện diện thực tế</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e4bbf] mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Giảm tình trạng "online nhưng không làm"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e4bbf] mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Tăng accountability tự nhiên</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200/50">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">Đặc biệt quan trọng với:</span> Team outsource, Night shift, Freelancer, Junior
              </p>
            </div>
          </div>

          {/* 2. Phát hiện sớm vấn đề hiệu suất */}
          <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl border-2 border-purple-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">2. Phát hiện sớm vấn đề hiệu suất</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                Nhiều vấn đề không nằm ở KPI cuối tháng mà nằm ở <span className="font-bold text-gray-900">behavior hàng ngày:</span>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Mất tập trung liên tục</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Bỏ máy nhiều lần</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Làm việc riêng trong giờ</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Stress/burnout dần dần</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Team không giao tiếp</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Dev active keyboard rất ít</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Thường xuyên rời bàn làm việc</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Họp nhưng không tập trung</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100/50 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-800">
                  <span className="font-bold text-purple-900">AI phát hiện pattern bất thường</span> sớm hơn nhiều so với báo cáo cuối tháng
                </p>
              </div>
            </div>
          </div>

          {/* 3. Bảo mật dữ liệu */}
          <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-3xl border-2 border-green-200/50 p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">3. Bảo mật dữ liệu</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Đặc biệt với các đội ngũ:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Outsourcing</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Fintech</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Healthcare</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">AI Training</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Crypto</span>
                </div>

                <p className="font-bold text-gray-900 mb-2">Hitek Work giúp:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Cảnh báo khi nhân sự gây rò rỉ dữ liệu</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Truy vết tìm ra nguyên nhân của sự cố</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Gây dựng niềm tin cho khách hàng</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

        </div>

        {/* Key Insight */}
        

      </div>
    </section>
  );
}
