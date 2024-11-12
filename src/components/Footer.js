import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#1e1e1e] my-[30px] mx-0 py-0 px-[30px] flex items-center justify-between rounded-[6px] leading-[72px]">
      <div className="name text-[#fff] text-[15px]">Henry Rooney.</div>
      <div className="copyright text-[#9c9c9c] text-[12px] text-right">
        © 2017 All rights reserved. Designed by
        <a
          className="text-[#fff]  pl-[5px]"
          href="https://themeforest.net/user/tavonline"
        >
          tavonline
        </a>
      </div>
    </footer>
  );
};

export default Footer;
