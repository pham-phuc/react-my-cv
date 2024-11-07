import React from "react";
import { NavLink } from "react-router-dom";


const NavResponsive = () => {
  return (
    <>
      <ul className="bar-tabs-res w-[full] text-center items-center bg-[#fff]">
        <li className="tab resumetab border-b border-b-solid border-b-[#efefef]">
          <NavLink
            to="/resume" 
            className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover text-res"
          >
            RESUME
          </NavLink>
          
        </li>
        <li className="tab portfoliotab border-b border-b-solid border-b-[#efefef]">
          <NavLink
            to="/portfolio"
            className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover text-res "
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className="tab blogtab border-b border-b-solid border-b-[#efefef]">
          <NavLink
            to="/blog"
            className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover text-res"
          >
            BLOG
          </NavLink>
        </li>
        <li className="tab contacttab border-b border-b-solid border-b-[#efefef]">
          <NavLink
            to="/contact"
            className="home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover text-res"
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavResponsive;
