import React from "react";
import { Link, NavLink } from "react-router-dom";


export const Navbav = () => {
  return (
    <header className="w-full">
      <nav className="bar w-full flex justify-between bg-[#fff] items-center rounded-[6px] boxshadow ">
        <ul className="bar-tabs flex h-[70px] items-center">
          <li className="tab bg-[#ffc500] py-0 px-[14px] rounded-l-[6px] mr-[10px] text-center h-full w-full items-center">
            <NavLink
              to="/home"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold leading-[70px]"
            >
              <i className="fa fa-home text-[17px]"></i>
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover"
            >
              RESUME
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover"
            >
              RESUME
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover"
            >
              RESUME
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover"
            >
              RESUME
            </NavLink>
          </li>
        </ul>
        <div className="bar-dynamic flex items-center justify-around py-0 px-[15px] ">
          <Link className=" hover:text-[14px] hover:text-[#3b5998] text-[12px] text-[#000] w-[24px] h-[18px] transitionhover inline-block">
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
          <Link className="transitionhover hover:text-[14px] hover:text-[#55acee] text-[12px] text-[#000] w-[24px] h-[18px] inline-block">
            <i class="fa-brands fa-twitter"></i>
          </Link>
          <Link className="hover:text-[14px] hover:text-[#cd486b] text-[12px] text-[#000] w-[24px] h-[18px] transitionhover inline-block">
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link className="hover:text-[14px] hover:text-[#ea4c89] text-[12px] text-[#000] w-[24px] h-[18px] transitionhover inline-block">
            <i class="fa-brands fa-dribbble"></i>
          </Link>
          <Link
            href="#"
            className="site-btn hover:bg-[#f0ac02] icon site-btn icon mx-auto block bg-[#ffc500] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]"
          >
            Hire Me
            <i aria-hidden="true" className="fa fa-paper-plane"></i>
          </Link>
          <Link className="bars-icon block text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
            <i className="fa fa-bars"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};
