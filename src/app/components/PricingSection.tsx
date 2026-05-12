import { Check, ChevronDown, Star, Sparkles, Rocket, Brain } from 'lucide-react';
import { useState } from 'react';
import { WireframeButton } from './WireframeButton';

const pricingPlans = [
  {
    name: 'Miễn phí',
    price: '0₫',
    period: '/tháng',
    description: 'Dùng thử cơ bản',
    features: [
      'Tối đa 5 nhân viên',
      'Quản lý task cơ bản',
      'Báo cáo tuần',
      'Lưu trữ 1GB',
      'Hỗ trợ email',
    ],
    buttonText: 'Bắt đầu miễn phí',
    highlighted: false,
  },
  {
    name: 'Tiêu chuẩn',
    price: '99,000₫',
    period: '/người/tháng',
    description: 'Cho team nhỏ',
    features: [
      'Tối đa 20 nhân viên',
      'Quản lý dự án đầy đủ',
      'Báo cáo hàng ngày',
      'Timeline hoạt động',
      'Lưu trữ 50GB',
      'Hỗ trợ qua chat',
    ],
    buttonText: 'Dùng ngay',
    highlighted: false,
  },
  {
    name: 'Chuyên nghiệp',
    price: '199,000₫',
    period: '/người/tháng',
    description: 'Phù hợp doanh nghiệp',
    features: [
      'Không giới hạn nhân viên',
      'AI đo lường hiệu suất',
      'Báo cáo real-time',
      'Bảo mật dữ liệu nâng cao',
      'Chống copy USB',
      'Lưu trữ 500GB',
      'Hỗ trợ ưu tiên',
    ],
    buttonText: 'D��ng ngay',
    highlighted: true,
  },
  {
    name: 'Doanh nghiệp',
    price: 'Liên hệ',
    period: '',
    description: 'Giải pháp tùy chỉnh',
    features: [
      'Tất cả tính năng Pro',
      'Tích hợp tùy chỉnh',
      'Quản lý tài khoản chuyên trách',
      'Triển khai on-premise',
      'SLA 99.9%',
      'Lưu trữ không giới hạn',
      'Hỗ trợ điện thoại 24/7',
    ],
    buttonText: 'Liên hệ ngay',
    highlighted: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Quản lý công việc',
    features: [
      { name: 'Tạo & gán task', free: true, standard: true, pro: true, enterprise: true },
      { name: 'Quản lý dự án', free: false, standard: true, pro: true, enterprise: true },
      { name: 'Timeline & Gantt chart', free: false, standard: true, pro: true, enterprise: true },
      { name: 'Dependencies task', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Custom workflows', free: false, standard: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Báo cáo & Phân tích',
    features: [
      { name: 'Báo cáo tuần', free: true, standard: true, pro: true, enterprise: true },
      { name: 'Báo cáo hàng ngày', free: false, standard: true, pro: true, enterprise: true },
      { name: 'Báo cáo real-time', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Phân tích AI', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Báo cáo tùy chỉnh', free: false, standard: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Bảo mật',
    features: [
      { name: 'Bảo mật cơ bản', free: true, standard: true, pro: true, enterprise: true },
      { name: 'Chống copy USB', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Truy vết file', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Nhật ký kiểm toán', free: false, standard: false, pro: true, enterprise: true },
      { name: 'SSO & SAML', free: false, standard: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Hỗ trợ',
    features: [
      { name: 'Hỗ trợ qua email', free: true, standard: true, pro: true, enterprise: true },
      { name: 'Hỗ trợ qua chat', free: false, standard: true, pro: true, enterprise: true },
      { name: 'Hỗ trợ ưu tiên', free: false, standard: false, pro: true, enterprise: true },
      { name: 'Hỗ trợ điện thoại 24/7', free: false, standard: false, pro: false, enterprise: true },
      { name: 'Quản lý tài khoản chuyên trách', free: false, standard: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: 'Tôi có thể dùng thử miễn phí không?',
    answer: 'Có! Gói Miễn phí của chúng tôi cho phép bạn dùng thử các tính năng cơ bản với tối đa 5 nhân viên. Không cần thẻ tín dụng để đăng ký.',
  },
  {
    question: 'Tôi có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào không?',
    answer: 'Có, bạn có thể thay đổi gói dịch vụ bất cứ lúc nào. Chúng tôi sẽ tính phí theo tỷ lệ cho thời gian sử dụng còn lại.',
  },
  {
    question: 'Phương thức thanh toán nào được chấp nhận?',
    answer: 'Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ, chuyển khoản ngân hàng, và ví điện tử (Momo, ZaloPay). Đối với gói Doanh nghiệp, chúng tôi hỗ trợ thanh toán theo hóa đơn.',
  },
  {
    question: 'Dữ liệu của tôi có an toàn không?',
    answer: 'Tất cả dữ liệu được mã hóa end-to-end và lưu trữ trên server tại Việt Nam. Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế như ISO 27001 và GDPR.',
  },
  {
    question: 'Tôi có thể hủy bất cứ lúc nào không?',
    answer: 'Có, bạn có thể hủy subscription bất cứ lúc nào. Dữ liệu của bạn sẽ được giữ lại trong 30 ngày sau khi hủy để bạn có thể xuất ra nếu cần.',
  },
];

export function PricingSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative py-16 lg:py-24 overflow-hidden">
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
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Bảng giá Hitek Work
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[580px] ${
                plan.highlighted
                  ? 'border-[#1e4bbf] shadow-xl'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1e4bbf] to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  Phổ biến nhất
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-xs lg:text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <div className="text-2xl lg:text-3xl font-black text-[#1e4bbf]">{plan.price}</div>
                  {plan.period && <div className="text-xs lg:text-sm text-gray-600">{plan.period}</div>}
                </div>
              </div>

              <ul className="space-y-2 lg:space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 lg:gap-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-[#1e4bbf] flex-shrink-0 mt-0.5" />
                    <span className="text-xs lg:text-sm text-gray-700 break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <WireframeButton
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full mt-auto"
              >
                {plan.buttonText}
              </WireframeButton>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-blue-100 p-8 lg:p-12 shadow-lg mb-20">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-12">
            So sánh chi tiết các gói
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-900 font-bold">Tính năng</th>
                  <th className="text-center py-4 px-4 text-gray-900 font-bold">Miễn phí</th>
                  <th className="text-center py-4 px-4 text-gray-900 font-bold">Tiêu chuẩn</th>
                  <th className="text-center py-4 px-4 text-gray-900 font-bold bg-blue-50 rounded-t-xl">
                    Chuyên nghiệp
                  </th>
                  <th className="text-center py-4 px-4 text-gray-900 font-bold">Doanh nghiệp</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.flatMap((category, categoryIndex) => [
                  <tr key={`category-${categoryIndex}`} className="bg-gray-50">
                    <td colSpan={5} className="py-3 px-4 font-black text-gray-900 text-sm uppercase tracking-wide">
                      {category.category}
                    </td>
                  </tr>,
                  ...category.features.map((feature, featureIndex) => (
                    <tr
                      key={`feature-${categoryIndex}-${featureIndex}`}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-gray-700 text-sm">{feature.name}</td>
                      <td className="py-4 px-4 text-center">
                        {feature.free ? (
                          <Check className="w-5 h-5 text-[#1e4bbf] mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.standard ? (
                          <Check className="w-5 h-5 text-[#1e4bbf] mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center bg-blue-50/50">
                        {feature.pro ? (
                          <Check className="w-5 h-5 text-[#1e4bbf] mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.enterprise ? (
                          <Check className="w-5 h-5 text-[#1e4bbf] mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))
                ])}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-blue-100 p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-12">
            Câu hỏi thường gặp
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1e4bbf] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            Vẫn còn thắc mắc? Chúng tôi sẵn sàng tư vấn miễn phí
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WireframeButton variant="secondary">
              Đặt lịch tư vấn
            </WireframeButton>
            <WireframeButton variant="primary">
              Dùng thử miễn phí
            </WireframeButton>
          </div>
        </div>
      </div>
    </section>
  );
}