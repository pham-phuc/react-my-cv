import React from "react";
import BlogItem from "./BlogItem";

const BlogPage = () => {
  const dataBlog = [
    {
      src: "https://html.tavonline.co/mat/default/images/blogs/blog-6.jpg",
      category: "General",
      title: "See my current workspace",
      text: "The first thing to remember about success is that it is a process.",
      date: "8 Nov 17",
    },
    {
      src: "https://html.tavonline.co/mat/default/images/blogs/blog-4.jpg",
      category: "Photography",
      title: "Can you work everywhere?",
      text: "Drops of rain could be heard hitting the pane, which made him feel quite sad..",
      date: "28 Sep 17",
    },
    {
      src: "https://html.tavonline.co/mat/default/images/blogs/blog-2.jpg",
      category: "Web Design",
      title: "How to become a web designer?",
      text: "He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering.",
      date: "27 Oct 17",
    },
    {
      src: "https://html.tavonline.co/mat/default/images/blogs/blog-6.jpg",
      category: "Work Space",
      title: "I'm starting a new project",
      text: "The first thing to remember about success is that it is a process...",
      date: "1 Jul 17",
    },
    {
      src: "https://html.tavonline.co/mat/default/images/blogs/blog-3.jpg",
      category: "User Interface",
      title: "Why is it better to work nights?",
      text: "Legs, and only stopped when he began to feel a mild, dull pain there that he had never felt.",
      date: "19 Oct 17",
    },
    {
      src: "https://techlead-training.web.app/blog-5.03fcecf8.jpg",
      category: "Other",
      title: "How to connect your iMac or MacBook",
      text: "However hard he threw himself onto his right, he always rolled back to where he was.",
      date: "19 Aug 17",
    },
  ];
  // const columns = 3; 

  // Chia mảng thành các cột
  const chunkedData = [];
  for (let i = 0; i < dataBlog.length; i += 2) {
    chunkedData.push(dataBlog.slice(i, i + 2));
  }

  return (
    <div id="blog" className="resume rounded-lg bg-[#fff] mt-[36px]">
      <section className="pt-0 px-[15px] pr-[30px] pb-[30px]">
        <div className="content-header py-0 px-[15px] mb-[0]">
          <div className="section-title relative inline-block py-0 px-[3px] mt-[42px] mb-[11px]">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
            <h2 className="text-[18px] font-[600]">Blog Posts</h2>
          </div>
        </div>
        <div className="wrapper w-[817.5px] flex flex-row justify-between bg-[#fcfcfc] h-[786px]">
          {chunkedData.map((columnItems, colIndex) => (
            <div key={colIndex} className="column w-[calc(100%/3)]">
              {columnItems.map((item, idx) => (
                <BlogItem
                  key={idx}
                  src={item.src}
                  category={item.category}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                />
              ))}
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
  );
};
export default BlogPage;
