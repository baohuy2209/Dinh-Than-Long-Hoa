import { Calendar, Camera, Clock, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Đình Thần Long Hòa</h3>
                <p className="text-gray-300 text-sm">Di tích lịch sử - văn hóa cấp Thành phố</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Nơi lưu giữ những giá trị văn hóa, tín ngưỡng truyền thống và là biểu tượng của lịch sử 
              hào hùng dân tộc tại Thành phố Thủ Đức.
            </p>
          </div>

          {/* Visiting Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Thông tin tham quan</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-sm">654 Nguyễn Xiển, Long Thạnh Mỹ, TP. Thủ Đức</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Giờ tham quan: 6:00 - 18:00</span>
              </li>
              <li className="flex items-start space-x-2">
                <Calendar className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Lễ hội truyền thống hàng năm</span>
              </li>
              <li className="flex items-start space-x-2">
                <Camera className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Cho phép chụp ảnh lưu niệm</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Liên kết nhanh</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#history" className="hover:text-red-400 transition-colors duration-300 text-sm">Lịch sử văn hóa</a></li>
              <li><a href="#architecture" className="hover:text-red-400 transition-colors duration-300 text-sm">Kiến trúc truyền thống</a></li>
              <li><a href="#experience" className="hover:text-red-400 transition-colors duration-300 text-sm">Trải nghiệm tham quan</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300 text-sm">Lễ hội và sự kiện</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300 text-sm">Hướng dẫn tham quan</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300 text-sm">Liên hệ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Đình Thần Long Hòa. Di tích được bảo vệ theo pháp luật Việt Nam.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors duration-300">Chính sách bảo mật</a>
              <a href="#" className="hover:text-red-400 transition-colors duration-300">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-red-400 transition-colors duration-300">Quy định tham quan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer; 