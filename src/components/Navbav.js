import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";


export const Navbav = () => {
  return (
    <header className="w-full">
      <nav className="bar w-full flex justify-between bg-[#fff] items-center rounded-[6px] boxshadow ">
        <ul className="bar-tabs flex h-[71px] items-center">
          <li className="tab bg-[#ffc500] py-0 px-[14px] rounded-l-[6px] mr-[10px] text-center h-full w-full items-center">
            <NavLink
              to="/home"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold leading-[70px]"
            >
              <i className="fa fa-home text-[17px]" aria-hidden="true"></i>
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              RESUME
            </NavLink>
          </li>
          <li className="tab portfoliotab">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li className="tab blogtab">
            <NavLink
              to="/blog"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              BLOG
            </NavLink>
          </li>
          <li className="tab contacttab">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        <div className="bar-dynamic flex items-center justify-around py-0 mr-[18px] mt-[1px]">
          <div className="icon-nav">
            <Link className=" hover:text-[0.8rem] hover:text-[#3b5998] text-[0.66rem] text-[#000] w-[28px] h-[18px] transitionhover inline-block">
              <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </Link>
            <Link className="transitionhover hover:text-[0.8rem] hover:text-[#55acee] text-[0.66rem] text-[#000] w-[28px] h-[18px] inline-block">
              <i class="fa-brands fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link className="hover:text-[0.8rem] hover:text-[#cd486b] text-[0.66rem] text-[#000] w-[28px] h-[18px] transitionhover inline-block">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link className="hover:text-[0.8rem] hover:text-[#ea4c89] text-[0.66rem] text-[#000] w-[28px] h-[18px] transitionhover inline-block">
              <i class="fa-brands fa-dribbble" aria-hidden="true"></i>
            </Link>
          </div>
          <div>
            <Link className="bars-icon block text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
              <i className="fa fa-bars"></i>
            </Link>
          </div>
          <Link
            href="#"
            className="site-btn ml-[5px]  hover:bg-[#f0ac02] icon site-btn icon  block bg-[#ffc500] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]"
          >
            Hire Me
            <i aria-hidden="true" className="fa fa-paper-plane"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};
