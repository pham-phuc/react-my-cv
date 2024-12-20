import React from 'react';

const BlogItem = ({ src, category, title, text, date }) => {
  return (
    <div className="wrapper-item p-[15px] pl-[15px] mb-[5px] bg-[#fcfcfc] hover:bg-[#fff] rounded-[8px]">
      <div className="item bg-[#fff] rounded-[8px] overflow-hidden">
        <div className="item-img">
          <img src={src} alt={title} />
        </div>
        <div className="item-detail p-[15px]">
          <span className="category text-[13px] text-[#afafaf]">
            {category}
          </span>
          <h2 className="title text-[15px] font-[500] text-[#000] leading-[20px] pt-[2px] px-0 pb-[4px]">
            {title}
          </h2>
          <p className="little-text py-[5px] leading-[18px] text-[#989898] text-[13px] font-[400] ">
            {text}
          </p>
          <span className="date text-[#505050] text-[11px]">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
