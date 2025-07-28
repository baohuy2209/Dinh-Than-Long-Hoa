
import React from "react";
import CustomButton from "@/components/ui/CustomButton";


export const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('HeroSection2.jpg')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center pt-[82px] px-5 w-full">
        <h1 className="text-[66px] font-bold text-white leading-[74px] max-w-[1500px] mb-3.5 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Khám Phá Đình Long Hòa – Di Tích Văn Hóa Giữa Lòng Thành Phố
        </h1>
        <p className="font-['DM_Sans'] text-[30px] font-semibold text-white leading-[40px] tracking-[1%] max-w-[1245px] mb-[58px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Ngôi đình cổ lưu giữ nét đẹp truyền thống, lịch sử và tín ngưỡng của cư dân vùng đất Nam Bộ xưa.
          Một điểm đến không thể bỏ qua cho người yêu văn hóa và kiến trúc dân gian.
        </p>
        <CustomButton 
          size="lg" 
          className="text-[30.08px] leading-[34.08px] px-[47px] py-[24px] font-['Lexend'] font-medium"
        >
          Tham Quan
        </CustomButton>
      </div>
    </div>
  );
};

export default Hero;
