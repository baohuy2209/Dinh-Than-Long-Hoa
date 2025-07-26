import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Camera, Calendar, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Gallery from '../Gallery/Gallery';
interface Section {
    id: string;
    title: string;
    content: string;
    icon?: React.ReactNode;
}
const Information = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    const sections: Section[] = [
        {
          id: 'history',
          title: 'Dấu Ấn Lịch Sử và Tầm Quan Trọng Văn Hóa',
          content: 'Đình Thần Long Hòa là một trong ba ngôi đình tiêu biểu (cùng với Đình Thần Long Bình và Đình Thần An Khánh) của Thành phố Thủ Đức vừa được vinh danh là Di tích lịch sử - văn hóa cấp Thành phố vào đầu năm 2025. Ngôi đình không chỉ là nơi thờ cúng Thành hoàng bổn cảnh mà còn là trung tâm sinh hoạt văn hóa, tín ngưỡng quan trọng của người dân qua nhiều thế hệ.',
          icon: <Star className="w-6 h-6 text-yellow-500" />
        },
        {
          id: 'architecture',
          title: 'Kiến Trúc Đậm Nét Truyền Thống Nam Bộ',
          content: 'Đình Thần Long Hòa tự hào sở hữu phong cách kiến trúc đặc trưng của đình làng Nam Bộ, với các gian thờ được bố trí trang nghiêm, họa tiết chạm khắc tinh xảo trên gỗ và đá, cùng không gian xanh mát được bao quanh bởi cây xanh cổ thụ.',
          icon: <Camera className="w-6 h-6 text-blue-500" />
        },
        {
          id: 'experience',
          title: 'Điểm Đến Hấp Dẫn Cho Du Khách',
          content: 'Tại đây, quý khách có thể tham quan và tìm hiểu kiến trúc độc đáo, trải nghiệm không gian linh thiêng, chụp ảnh lưu niệm tại một di tích mang đậm dấu ấn thời gian và tham gia các lễ hội truyền thống quan trọng của địa phương.',
          icon: <Calendar className="w-6 h-6 text-green-500" />
        }
    ];
    
    const toggleSection = (sectionId: string) => {
        setActiveSection(activeSection === sectionId ? '' : sectionId);
    };
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <>
            <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className={`bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-amber-200 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-600 mb-6">
              Tọa lạc tại số 654 đường Nguyễn Xiển, phường Long Thạnh Mỹ, Thành phố Thủ Đức, TP. Hồ Chí Minh. 
              Đây không chỉ là một ngôi đình cổ kính mà còn là biểu tượng sống động, kể lại câu chuyện về quá trình 
              hình thành và phát triển của vùng đất phương Nam, cùng với những dấu ấn lịch sử hào hùng của dân tộc Việt Nam.
            </p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-50 to-amber-50 hover:from-red-100 hover:to-amber-100 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {section.icon}
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                </div>
                {activeSection === section.id ? 
                  <ChevronUp className="w-6 h-6 text-red-600" /> : 
                  <ChevronDown className="w-6 h-6 text-red-600" />
                }
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Gallery />

        {/* Features Grid */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Đặc Điểm Nổi Bật</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cấu Trúc Truyền Thống</h3>
              <p className="text-gray-600">Các gian thờ được bố trí trang nghiêm, thể hiện rõ nét kiến trúc đình làng cổ</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Họa Tiết Chạm Khắc</h3>
              <p className="text-gray-600">Chi tiết trang trí tinh xảo trên gỗ, đá mang đậm bản sắc văn hóa Việt Nam</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Không Gian Xanh Mát</h3>
              <p className="text-gray-600">Được bao quanh bởi cây xanh cổ thụ, tạo nên không gian thanh bình, uy nghi</p>
            </div>
          </div>
        </div>

        {/* Visit Information */}
        <div className={`mt-16 bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl text-white p-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`}>
          <h2 className="text-3xl font-bold text-center mb-8">Thông Tin Hữu Ích Cho Chuyến Thăm</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-amber-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Địa chỉ:</h4>
                  <p className="text-amber-100">Số 654 đường Nguyễn Xiển, phường Long Thạnh Mỹ, Thành phố Thủ Đức, TP. Hồ Chí Minh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-amber-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Giờ mở cửa:</h4>
                  <p className="text-amber-100">Vui lòng liên hệ với ban quản lý đình để biết giờ mở cửa chính xác</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-amber-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Lễ hội:</h4>
                  <p className="text-amber-100">Nơi diễn ra các lễ hội truyền thống quan trọng của địa phương</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-amber-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Đặc biệt:</h4>
                  <p className="text-amber-100">Di tích lịch sử - văn hóa cấp Thành phố được công nhận năm 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hãy Đến và Cảm Nhận Vẻ Đẹp Vượt Thời Gian!</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Đình Thần Long Hòa không chỉ là một công trình kiến trúc, mà còn là một phần hồn của Thành phố Thủ Đức, 
            là nơi lưu giữ những giá trị tinh thần quý báu của cha ông. Hãy dành thời gian ghé thăm để cảm nhận sâu 
            sắc hơn về lịch sử, văn hóa và lòng tự hào dân tộc tại ngôi đình linh thiêng này.
          </p>
        </div>
      </div>
        </>
    )
}
export default Information;