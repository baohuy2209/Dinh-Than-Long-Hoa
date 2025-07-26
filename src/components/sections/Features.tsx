import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import { MapPin } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Giá trị Lịch sử",
      description:
        "Không chỉ là nơi thờ cúng, Đình Long Hòa còn ghi dấu những chặng đường lịch sử và sinh hoạt cộng đồng của cư dân vùng đất Nam Bộ hơn trăm năm qua.",
    },
    {
      id: 2,
      title: "Kiến trúc & Văn hóa",
      description:
        "Mang phong cách kiến trúc đình làng truyền thống, nơi đây là sự hòa quyện giữa nghệ thuật chạm khắc tinh xảo, không gian tâm linh và các lễ hội dân gian đặc sắc được tổ chức hằng năm.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[156px] px-5">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <h2 className="text-6xl font-semibold text-[#080808] leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Khám phá Đình Long Hòa
        </h2>
        <p className="text-[28px] text-[#080808] font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Giữa lòng thành phố nhộn nhịp, Đình Long Hòa là điểm đến mang đậm bản sắc văn hóa truyền thống, lưu giữ giá trị lịch sử và tín ngưỡng của người dân Sài Gòn xưa. Một địa điểm không thể bỏ qua với những ai yêu thích kiến trúc và di sản dân gian.
        </p>
        {/* Location Info */}
        <div className="mt-2 flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
          <MapPin className="w-5 h-5 text-amber-300" />
          <span className="text-[#080808] font-medium text-lg">
            654 Nguyễn Xiển, Long Thạnh Mỹ, TP. Thủ Đức, TP. HCM
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-[1569px] px-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
