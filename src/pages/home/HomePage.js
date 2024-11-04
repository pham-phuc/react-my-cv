import React from "react";
import { Profile } from "../../components/Profile";
import HomeContent from "./HomeContent";
import Footer from "../../components/Footer";

export const HomePage = () => {
  return (
    <div className="wrapper container mt-[60px] mb-0 mx-auto w-[77%] flex ">
      <Profile></Profile>
      <div className="w-[75%] content-right px-[15px]">
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
};
