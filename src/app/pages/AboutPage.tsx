import { Building2, Target, Users, Zap, Shield, Sparkles, TrendingUp, Award, Star, Rocket, Brain } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import companyImage1 from '../../imports/company_image.jpg';
import companyImage2 from '../../imports/company_image_2.jpg';
import companyImage3 from '../../imports/company_image_3.jpg';
import companyImage4 from '../../imports/company_image_4.jpg';
import hitekImage from '../../imports/hitek_image.jpg';
const timelineData = [
  {
    year: '2019',
    title: 'Yêu cầu thực tế',
    description: 'Trong quá trình triển khai dịch vụ gia công phần mềm cho thị trường quốc tế, đội ngũ Hitek thường xuyên nhận được câu hỏi từ khách hàng về cách chúng tôi đảm bảo tính minh bạch cũng như cam kết hiệu suất làm việc của nhân sự.'
  },
  {
    year: '2020',
    title: 'Tìm ra câu trả lời',
    description: 'Chúng tôi nhận thấy khoảng cách địa lý giữa khách hàng quốc tế và đội ngũ Hitek tại Việt Nam là một rào cản lớn về mặt niềm tin và quản trị. Từ đó, Hitek bắt đầu xây dựng một nền tảng cho phép khách hàng có thể quản lý và theo dõi vendor từ xa một cách trực quan, minh bạch và sát với thực tế nhất — như thể họ đang làm việc trực tiếp cùng đội ngũ của chúng tôi.'
  },
  {
    year: '2024',
    title: 'Hoàn thiện sản phẩm và sử dụng nội bộ',
    description: 'Trong suốt 5 năm tiếp theo, chúng tôi liên tục phát triển, cải tiến và tối ưu hệ thống nhằm đáp ứng nhu cầu báo cáo và đảm bảo tính minh bạch cho khách hàng. Với tinh thần “làm thật” và “cam kết thật”, Hitek chia sẻ toàn bộ dữ liệu hình ảnh và văn bản liên quan đến hoạt động làm việc của từng nhân sự theo thời gian thực.'
  },
  {
    year: '2025-Nay',
    title: 'Tích hợp AI và Chia sẻ',
    description: 'Từ năm 2025, làn sóng AI đã mở ra những bước tiến vượt bậc về hiệu suất và khả năng đổi mới. Nắm bắt xu hướng đó, Hitek tích hợp AI vào hệ thống để phân tích dữ liệu hoạt động của người dùng, dự đoán hiệu suất làm việc và tự động tạo báo cáo dành cho cấp quản lý hoặc khách hàng. Chúng tôi tin rằng đây là thời điểm phù hợp để lan tỏa giá trị của giải pháp này, góp phần xây dựng niềm tin cho khách hàng quốc tế khi hợp tác từ xa cùng các tài năng công nghệ tại Việt Nam.'
  }
];
const valuesData = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    description: 'Đồng hành cùng doanh nghiệp Việt Nam trong việc tối ưu năng suất làm việc, nâng cao tính bảo mật dữ liệu và xây dựng niềm tin bền vững với khách hàng.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Sparkles,
    title: 'Tầm nhìn',
    description: 'Trở thành nền tảng quản lý công việc hàng đầu tại Việt Nam, góp phần nâng cao niềm tin của khách hàng quốc tế đối với nguồn nhân lực Việt Nam và thúc đẩy kết nối thương mại toàn cầu.',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Award,
    title: 'Giá trị cốt lõi',
    description: 'Không ngừng đổi mới sáng tạo, vận hành minh bạch, đảm bảo bảo mật tối đa và luôn lấy khách hàng làm trọng tâm trong mọi quyết định phát triển.',
    gradient: 'from-purple-500 to-pink-600'
  }
];
const cultureData = [
  {
    icon: Users,
    title: 'Đội ngũ đa dạng',
    description: 'Hơn 100 chuyên gia công nghệ, thiết kế và kinh doanh từ nhiều lĩnh vực, cùng nhau xây dựng sản phẩm tốt nhất.',
    image: companyImage1
  },
  {
    icon: Zap,
    title: 'Đổi mới không ngừng',
    description: 'Chúng tôi liên tục nghiên cứu và áp dụng công nghệ mới nhất để mang đến trải nghiệm vượt trội cho khách hàng.',
    image: companyImage2
  },
  {
    icon: Shield,
    title: 'Bảo mật tuyệt đối',
    description: 'An toàn dữ liệu là ưu tiên hàng đầu. Giải pháp của chúng tôi bao gồm cơ chế On-Premise, đảm bảo dữ liệu được lưu trự nội bộ tại hệ thống của khách hàng.',
    image: companyImage3
  },
  {
    icon: TrendingUp,
    title: 'Tăng trưởng bền vững',
    description: 'Chúng tôi xây dựng mối quan hệ lâu dài với khách hàng, cùng nhau phát triển và thành công.',
    image: companyImage4
  }
];

const statsData = [
  { number: '1000+', label: 'Doanh nghiệp tin dùng', icon: Building2 },
  { number: '50K+', label: 'Người dùng hàng ngày', icon: Users },
  { number: '99.9%', label: 'Thời gian hoạt động', icon: Zap },
  { number: '24/7', label: 'Hỗ trợ khách hàng', icon: Sparkles }
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      

      {/* Stats Section - Enhanced */}
      

      {/* Timeline Section - Enhanced */}
      <section className="relative overflow-hidden px-[24px] py-[50px]">
        {/* Background Decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1e4bbf]/20 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border-2 border-indigo-400/30 mb-6 shadow-lg">
              <Rocket className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-700">Timeline</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              Từ một ý tưởng đến nền tảng quản lý công việc được hàng nghìn doanh nghiệp tin dùng
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1e4bbf] via-indigo-500 to-purple-500 lg:transform lg:-translate-x-1/2 shadow-lg"></div>
            
            <div className="space-y-16 lg:space-y-24">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Enhanced Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#1e4bbf] to-indigo-600 border-4 border-white lg:transform lg:-translate-x-1/2 shadow-2xl z-20 animate-pulse"></div>
                  
                  {/* Glow ring */}
                  <div className="absolute left-8 lg:left-1/2 w-12 h-12 rounded-full bg-[#1e4bbf]/20 lg:transform lg:-translate-x-1/2 animate-pulse blur-md" style={{ top: '-12px', left: index % 2 === 0 ? '20px' : '20px' }}></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-24 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
                    <div className="group inline-block p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg border-2 border-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[#1e4bbf]/30">
                      {/* Year Badge */}
                      <div className="inline-block mb-4">
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1e4bbf] to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-[#1e4bbf] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/30 mb-6 shadow-lg">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">Giá trị cốt lõi</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Sứ mệnh & Giá trị
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              Những giá trị cốt lõi định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {valuesData.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-10 lg:p-12 rounded-3xl bg-white/70 backdrop-blur-lg border-2 border-white/90 hover:border-[#1e4bbf]/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
                >
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  <h3 className="relative text-3xl font-bold text-neutral-900 mb-5 group-hover:text-[#1e4bbf] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="relative text-lg text-neutral-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#1e4bbf]/20 group-hover:border-[#1e4bbf]/60 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture & Team Section - Enhanced */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md border-2 border-blue-400/30 mb-6 shadow-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">Văn hóa & Con người</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Văn hóa & Con người
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              Đội ngũ tài năng và văn hóa làm việc tạo nên sự khác biệt của Hitek Work
            </p>
          </div>

          <div className="space-y-32">
            {cultureData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 aspect-[4/3] hover:scale-[1.02]">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                      
                      {/* Overlay Icon */}
                      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Icon className="w-8 h-8 text-[#1e4bbf]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="max-w-xl">
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 flex items-center justify-center mb-8 shadow-xl hover:scale-110 hover:rotate-3 transition-all duration-500 group">
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1e4bbf] to-indigo-600 blur-xl opacity-50"></div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 hover:text-[#1e4bbf] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                      
                      {/* Decorative line */}
                      <div className="mt-8 w-24 h-1.5 bg-gradient-to-r from-[#1e4bbf] to-indigo-600 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Image Section - Enhanced */}
      <section className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <ImageWithFallback
              src={hitekImage}
              alt="Hitek Work Team"
              className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-10 lg:p-20">
              <div className="text-white max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-bold">Đội ngũ của chúng tôi</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  Đội ngũ Hitek Work
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  Chúng tôi là một team đa dạng, sáng tạo và luôn hướng đến việc mang lại giá trị tốt nhất cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
            
            <div className="relative z-10 py-24 lg:py-32 px-8 lg:px-20 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-8 shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">Bắt đầu</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Sẵn sàng chuyển đổi số<br />cùng Hitek Work?
              </h2>
              <p className="text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Hãy để chúng tôi đồng hành cùng doanh nghiệp của bạn trong hành trình tối ưu hiệu suất và bảo mật dữ liệu.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button 
                   onClick={() => window.open('https://zalo.me/84777505030', '_blank')}
 
                  className="group px-10 py-5 bg-white text-[#1e4bbf] rounded-2xl font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1"><span className="flex items-center gap-2 justify-center">Liên hệ chúng tôi ngay                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /></span></button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
