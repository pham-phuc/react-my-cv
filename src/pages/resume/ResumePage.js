import React from "react";
import SectionTitle from '../../components/SectionTitle'
import Testimonial from "./Testimonial";
import TimeLine from "./TimeLine";
const ResumePage = () => {
  return (
    <div id="resume" className="resume rounded-lg bg-[#fff] mt-[36px]">
      <section className="px-[30px] pt-[30px] pb-[45px]">
        <div className="education mt-[13px]">
          <SectionTitle title={"Resume"}></SectionTitle>
          <div
            className="education-content flex items-center
           justify-between gap-[78px] my-[5px] mx-[25px] "
          >
            <div className="working-history mt-[30px]">
              <ul className="timeline">
                <li className="flex items-center justify-self-start gap-[45px] pb-[60px]">
                  <i className="fa fa-suitcase icon bg-[#ffc500] p-[18px] text-[15px] text-center ml-[3px]  rounded-full my-[-13px] mx-[-45px]"></i>
                  <h2 className="timeline-title font-[700] text-[20px]">
                    Working History
                  </h2>
                </li>
                <TimeLine
                  title={"Art Director - Facebook Inc"}
                  time={"2010 - Present"}
                  text={
                    "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Senior Designer - Google"}
                  time={"2008 - 2010"}
                  text={
                    "So insisted received is occasion advanced honoured. Among   ready to which up. Attacks smiling and may out assured   moments man nothing outward."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Junior Designer - Creative Shake"}
                  time={"22005 - 2008"}
                  text={
                    "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to    detract."
                  }
                ></TimeLine>
              </ul>
            </div>
            <div className="education-history mt-[30px]">
              <ul className="timeline">
                <li className="flex items-center justify-self-start gap-[50px] pb-[60px]">
                  <i className="fa fa-graduation-cap icon bg-[#ffc500] p-[18px] text-[15px] text-center rounded-full my-[-13px] mx-[-45px]"></i>
                  <h2 className="timeline-title font-[700] text-[20px]">
                    Education History
                  </h2>
                </li>
                <TimeLine
                  title={"Abc University of Los Angeles"}
                  time={"2004 - 2009"}
                  text={
                    "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Drawing Course"}
                  time={"2003 - 2004"}
                  text={
                    "So insisted received is occasion advanced honoured. Among    ready to which up. Attacks smiling and may out assured        moments man nothing outward."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Abc High School"}
                  time={"2000 - 2003"}
                  text={
                    "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract."
                  }
                ></TimeLine>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="clients bg-[#fafafa] py-[45px] px-[30px]">
          <SectionTitle
            title={"Clients"}
            className={"mb-[30px]"}
          ></SectionTitle>
          <div className="client-list flex items-center justify-between gap-[30px]">
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="https://html.tavonline.co/mat/default/images/client-01.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="https://html.tavonline.co/mat/default/images/client-02.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="	https://html.tavonline.co/mat/default/images/client-03.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="	https://html.tavonline.co/mat/default/images/client-04.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="testimonials px-[30px] py-[45px]">
          <SectionTitle
            title={"Testimonials"}
            className={"mb-[30px]"}
          ></SectionTitle>

          <div className="testimonial-list flex items-center justify-between gap-[30px]">
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
              }
              name={"April M. Griffin"}
              job={"Founder"}
              text={
                "Our logo and business card design look great. Thanks Henry"
              }
            ></Testimonial>
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-3.jpg"
              }
              name={"Larry M. Johnson"}
              job={"Freelancer"}
              text={
                "Henry is a very creative and talented designer. I do not hesitate to work again."
              }
            ></Testimonial>
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-1.jpg"
              }
              name={"Jack Garratt"}
              job={"Freelancer"}
              text={
                "Great designer! he finished our work wonderfully and just in time. thanks for everything."
              }
            ></Testimonial>
          </div>


        </div>
      </section>
    </div>
  );
};

export default ResumePage;
