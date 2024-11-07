import React from "react";

const PortfolioPage = () => {
  const itemsPor = [
    {
      icon: "fa fa-clone",
      name: "Amazon Travel",
      info: "Nature photography work.",
      src: "/image/work-01.e03b5ee2.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "My Workspace",
      info: "My current workspace design.",
      src: "/image/work-02.3d214bf8.jpg",
    },
    {
      icon: "fa fa-play",
      name: "Recoba Template",
      info: "Html template design.",
      src: "/image/work-03.47c30c8c.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Doddy App",
      info: "Mobile app ui kit design.",
      src: "/image/work-04.10377661.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Bob Stayler",
      info: "Illustration character design.",
      src: "/image/work-05.9996d9b7.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Exemag Wordpress Theme",
      info: "Multiconcept Blog Theme.",
      src: "/image/work-06.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Babel Admin Html Code",
      info: "Multiconcept Blog Theme.",
      src: "/image/work-07.d494f586.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Exemag Wordpress Theme",
      info: "Multiconcept Blog Theme.",
      src: "/image/work-08.c3c81b34.jpg",
    },
    {
      icon: "fa fa-clone",
      name: "Babel Admin Html Code",
      info: "Multiconcept Blog Theme.",
      src: "/image/work-09.0be7dc99.jpg",
    },
  ];

  return (
    <>
      <div
        id="portfolio"
        className="portfolio pt-0 rounded-lg bg-[#fff]  mt-[30px] px-[15px] pb-[30px]"
      >
        <section>
          <div className="content-header py-0 px-[15px] mb-[15px]">
            <div className="section-title relative inline-block py-0 px-[3px] mb-[30px] my-[30px]">
              <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
              <h2 className="text-[18px] font-[600]">Portfolio</h2>
            </div>
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

          <div className="wrapper grid grid-cols-1 md:grid-cols-3 ">
            {itemsPor.map((item, idx) => (
              <div className="wrapper-item p-[15px]">
                <div className="item bg-[#fff] rounded-[6px] overflow-hidden relative cursor-pointer boxshadow">
                  <div className="item-img">
                    <img className="w-full object-cover" src={item.src} alt="" />
                    <div className="icon absolute top-[50%] left-[50%] translate-x-[-50%]  opacity-[0.7] text-white pt-[17px] px-0 pb-[16px] w-[55px] rounded-full text-center transitionhover invisible bg-[#FFC501] ">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="item-detail p-[14px]">
                    <span className="name text-[14px] text-[#000]">{item.name}</span>
                    <br />
                    <span className="info text-[13px] text-[#989898] leading-[18px]">
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
