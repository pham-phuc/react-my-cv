import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ImgPortfolio1 from "../../assets/image/work-01.e03b5ee2.jpg";
import ImgPortfolio2 from "../../assets/image/work-02.3d214bf8.jpg";
import ImgPortfolio3 from "../../assets/image/work-03.47c30c8c.jpg";
import ImgPortfolio4 from "../../assets/image/work-04.10377661.jpg";
import ImgPortfolio5 from "../../assets/image/work-05.9996d9b7.jpg";
import ImgPortfolio6 from "../../assets/image/work-06.jpg";
import ImgPortfolio7 from "../../assets/image/work-07.d494f586.jpg";
import ImgPortfolio8 from "../../assets/image/work-08.c3c81b34.jpg";
import ImgPortfolio9 from "../../assets/image/work-09.0be7dc99.jpg";

const PortfolioPage = () => {
  const itemsPor = [
    {
      icon: "fa fa-clone",
      name: "Babel Admin",
      info: "An admin template design.",
      src: ImgPortfolio1,
    },
    {
      icon: "fa fa-clone",
      name: "George Motion",
      info: "An motion graphic design.",
      src: ImgPortfolio2,
    },
    {
      icon: "fa fa-play",
      name: "Amazon Travel",
      info: "Nature photography work.",
      src: ImgPortfolio6,
    },
    {
      icon: "fa fa-clone",
      name: "My Workspace",
      info: "My current workspace design.",
      src: ImgPortfolio3,
    },
    {
      icon: "fa fa-clone",
      name: "Recoba Template",
      info: "Html template design.",
      src: ImgPortfolio4,
    },
    {
      icon: "fa fa-clone",
      name: "Doddy App",
      info: "Mobile app ui kit design.",
      src: ImgPortfolio5,
    },

    {
      icon: "fa fa-clone",
      name: "Bob Stayler ",
      info: "Illustration characher design.",
      src: ImgPortfolio7,
    },
    {
      icon: "fa fa-clone",
      name: "Exemag Wordpress Theme",
      info: "Multiconcept Blog Theme.",
      src: ImgPortfolio8,
    },
    {
      icon: "fa fa-clone",
      name: "Babel Admin Html Code",
      info: "An admin template design.",
      src: ImgPortfolio9,
    },
  ];

  return (
    <>
      <div
        id="portfolio"
        className="portfolio pt-0 rounded-lg bg-[#fff]  mt-[36px] px-[15px] pb-[30px]"
      >
        <section>
          <div className="content-header py-0 px-[15px] mb-[16px]">
            <SectionTitle
              title={"Portfolio"}
              className={"mb-[27px] mt-[42px]"}
            ></SectionTitle>
            <div className="filter-container flex items-center justify-start">
              <div className="filter text-[#ffc500] text-[14px] mr-[15px]">
                All
              </div>
              <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
                Web Design
              </div>
              <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
                Motion Graphic
              </div>
              <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
                Illustration
              </div>
              <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
                Photography
              </div>
            </div>
          </div>

          <div className="wrapper grid grid-cols-1 md:grid-cols-3 h-[858px]">
            {itemsPor.map((item, idx) => (
              <div
                key={idx}
                className="wrapper-item p-[15px] w-full h-[286.04px]"
              >
                <div className="item bg-[#fff] rounded-[6px] overflow-hidden relative cursor-pointer boxshadow w-[242px] h-[249.99px]">
                  <div className="item-img">
                    <img
                      className="w-full h-[181.14px] object-cover"
                      src={item.src}
                      alt=""
                    />
                    <div className="icon absolute top-[50%] left-[50%] translate-x-[-50%]  opacity-[0.7] text-white pt-[17px] px-0 pb-[16px] w-[55px] rounded-full text-center transitionhover invisible bg-[#FFC501] ">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="item-detail p-[14px]">
                    <span className="name text-[14px] text-[#000]">
                      {item.name}
                    </span>
                    <br />
                    <span className="info text-[13px] text-[#989898] leading-[18px] block">
                      {item.info}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="btn mt-[30px] text-center ">
            <button className="site-btn bg-[#ffc500] font-[500] text-[14px] rounded-full leading-[35px] transitionhover py-[1px] p-[29px] inline-block hover:bg-[#f0ac02]">
              Load more (3)
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default PortfolioPage;
