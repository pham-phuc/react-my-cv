import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbav = () => {
  return (
    <header className="bar-tabs flex justify-between w-full bg-white h-[70px] mb-[30px] rounded-[6px] shadow-[0_2px_92px_#00000012]">
      <div className="tabs top-1 flex w-full items-center">
        <NavLink
          to="/"
          className="flex items-center rounded-l-[6px] h-[70px] bg-[#ffc500] mr-[10px] px-[24px] text-[17.5px] item-tab"
        >
          <i className="fa fa-home item" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#ffc500]" : ""
            } text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500] item-tab`;
          }}
        >
          RESUME
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#ffc500]" : ""
            } text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500] item-tab`;
          }}
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#ffc500]" : ""
            } text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500] item-tab`;
          }}
        >
          BLOG
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#ffc500]" : ""
            } text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500] item-tab`;
          }}
        >
          CONTACT
        </NavLink>
      </div>
      <div className="bar-dynamic top-2  flex lg:flex items-center justify-end w-full h-[37px] mt-[18px] mr-[18px] ml-[5px] py-[1px] pl-[19px]">
        <div className="icon-nav">
          <Link href="#" className="text-[#000] ml-[4px] h-[29px]">
            <i className="fa-brands fa-facebook-f text-[11px] w-6 transition-all hover:text-xs hover:text-[#3b5998] hover:transform cl-fb"></i>
          </Link>
          <Link href="#" className="text-[#000] ml-[4px] h-[29px]">
            <i className="fa-brands fa-twitter text-[11px] w-6 transition-all hover:text-xs hover:text-[#55acee] hover:transform cl-tw"></i>
          </Link>
          <Link href="#" className="text-[#000] ml-[4px] h-[29px]">
            <i className="fa-brands fa-instagram text-[11px] w-6 transition-all hover:text-xs hover:text-[#cd486b] hover:transform cl-ins"></i>
          </Link>
          <Link href="#" className="text-[#000] ml-[4px] mr-[6px] h-[29px] hover:text-[#ea4c89]">
            <i className="fa-brands fa-dribbble text-[11px] w-6 transition-all hover:text-xs  hover:transform cl-dr"></i>
          </Link>
        </div>

        <Link className="bars-icon text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
          <i className="fa fa-bars"></i>
        </Link>
        <button className="site-btn icon mx-0 border-none block bg-[#ffc500] hover:bg-[#f0ac02] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]">
          Hire Me
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};
