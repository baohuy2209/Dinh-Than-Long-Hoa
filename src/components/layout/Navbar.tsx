
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-[31px] py-[21px] max-md:px-5">
      <div className="flex items-center gap-2.5">
        <img 
          src="/pagoda.png" 
          alt="Than Long Hoa Communal House" 
          className="h-8"
        />
        <span className="text-[20px] text-[#080808] font-semibold font-['DM_Sans'] leading-[40px]">Đình Thần Long Hòa</span>
      </div>
      <div className="flex items-center gap-10 max-md:hidden">
        <Link to="/" className="text-[18px] text-[#080808] font-light font-['DM_Sans'] leading-[40px]">
          Trang chủ
        </Link>
        <Link to="#" className="text-[18px] text-[#110B53] font-semibold font-['DM_Sans'] leading-[40px]">
          Giới thiệu 
        </Link>
        <Link to="#" className="text-[18px] text-[#080808] font-light font-['DM_Sans'] leading-[40px]">
          Liên hệ
        </Link>
      </div>
      <CustomButton className="px-[27px] py-[13px] text-[17px] leading-[19px] font-[500] font-['Lexend']">
        Tham quan
      </CustomButton>
      <button className="hidden max-md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ti ti-menu-2 text-2xl"
        >
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
