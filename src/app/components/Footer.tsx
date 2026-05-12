import {
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Development Center */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Development Center
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  Lầu 6, Tòa nhà Hải Âu, 39B Trường Sơn, P. Tân
                  Sơn Nhì, Q. Tân Bình, TP. Hồ Chí Minh, Việt
                  Nam
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+842899995958"
                  className="hover:text-[#1e4bbf] transition-colors"
                >
                  +84 28 999 5958
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:contact@hitek.com.vn"
                  className="hover:text-[#1e4bbf] transition-colors"
                >
                  contact@hitek.com.vn
                </a>
              </div>
            </div>
          </div>

          {/* Văn phòng đại diện */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Văn phòng đại diện
            </h3>
            <div className="space-y-6 text-gray-300 text-sm">
              {/* Hàn Quốc */}
              <div>
                <p className="font-semibold text-white mb-2">
                  Hàn Quốc
                </p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>
                    Room 402, 4th floor, 12, Teheran-ro 70-gil,
                    Gangnam-gu, Seoul, Republic of Korea
                  </p>
                </div>
              </div>

              {/* Nhật Bản */}
              <div>
                <p className="font-semibold text-white mb-2">
                  Nhật Bản
                </p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>
                    IF-3F Ekimaesakae, 11-5 Higashikamata
                    1-chome, Ota-ku, Tokyo, Prefecture, Japan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Theo dõi chúng tôi & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Theo dõi chúng tôi
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#1e4bbf] rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#1e4bbf] rounded-full flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              Đăng ký để nhận những tin tức mới nhất về sản phẩm
              và các ưu đãi hấp dẫn từ Hitek Work
            </p>
            <div className="flex gap-2">
              {/* <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:border-[#1e4bbf] transition-colors text-white placeholder:text-gray-400"
              /> */}
          <button 
  onClick={() => window.open('https://zalo.me/84777505030', '_blank')}
  className="px-6 py-2 bg-[#1e4bbf] hover:bg-[#1640a0] rounded-lg text-sm font-medium transition-colors"
>
  Đăng ký
</button>  </div>
          </div>
        </div>

        {/* Company Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {/* Clutch Badge */}
            <div className="flex items-center justify-center h-20 min-w-[100px]">
              <iframe
                width="90"
                height="90"
                src="https://shareables.clutch.co/share/badges/1825455/34616?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                title="Top Clutch C Development Sydney 2024"
                className="border-0 w-[90px] h-[90px] p-[0px] m-[0px]"
              />
            </div>

            {/* GoodFirms Badge */}
            <div className="flex items-center justify-center h-20">
              <a
                href="https://www.goodfirms.co/company/hitek-group-jsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://assets.goodfirms.co/badges/color-badge/app-development.svg"
                  alt="Top Mobile App Development Company on GoodFirms"
                  title="Top Mobile App Development Company"
                  className="h-20 w-auto max-w-[100px]"
                />
              </a>
            </div>

            {/* Trustpilot Badge */}
            <div className="flex items-center justify-center h-20">
              <a
                href="https://www.trustpilot.com/review/hitek.com.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hitek.com.vn/wp-content/uploads/2024/09/trustpilot-logo.png"
                  alt="Trustpilot"
                  className="h-16 w-auto max-w-[140px]"
                />
              </a>
            </div>

            {/* DesignRush Badge */}
            <div className="flex items-center justify-center h-20">
              <a
                href="https://www.designrush.com/agency/profile/hitek-group-jsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hitek.com.vn/wp-content/uploads/2024/09/Frame.png"
                  alt="DesignRush"
                  className="h-12 w-auto max-w-[200px]"
                />
              </a>
            </div>

            {/* Clutch Widget */}
            <div className="flex items-center justify-center h-16 min-w-[220px]">
              <iframe
                src="https://widget.clutch.co/widgets/get/14?ref_domain=hitek.com.vn&uid=1825455&rel_nofollow=true"
                width="180"
                height="70"
                scrolling="no"
                title="Hitek Vietnam Clutch Review Widget"
                className="border-0 w-[220px] h-[90px] m-[0px] px-[0px] py-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-2 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>Copyright @ 2026 Hitek Software JSC</p>
        </div>
      </div>
    </footer>
  );
}