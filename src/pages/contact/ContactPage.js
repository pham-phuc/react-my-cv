import React from "react";
// import Title from "../../components/Title";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      id="contact"
      className="contact rounded-md bg-[#fff] mt-[36px] shadow-[0_2px_92px_#00000012]"
    >
      <section className="boxshadow">
        <div class="contact-content flex items-stretch justify-between">
          <div class="contact-form w-[50%] px-[30px] pt-[30px] pb-[27px]">
            <div className="section-title relative inline-block py-0 px-[3px] mb-[27px] mt-[27px]">
              <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
              <h2 className="text-[18px] font-[600] text-[#333] relative z-10">
                Contact Form
              </h2>
            </div>
            <form class="site-form">
              <div class="input-info flex items-center justify-between gap-[30px]">
                <input
                  type="text"
                  class="site-input h-[45px] w-[50%] text-[13px] pl-[10px] mb-[15px] outline-0 "
                  placeholder="Name"
                />
                <input
                  type="text"
                  class="site-input h-[45px] w-[50%] text-[13px] pl-[10px] mb-[15px] outline-0 "
                  placeholder="E-mail"
                />
              </div>
              <div class="input-mess">
                <textarea
                  class="site-area text-[13px] pt-5 pl-[10px] w-full "
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="btn mt-[15px]">
                <button
                  class="site-btn hover:bg-[#f0ac02] bg-[#ffc500] font-[500] text-[14px] rounded-[20px] leading-[35px] transitionhover py-[1px] px-[29px] inline-block"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div class="contact-info w-[50%] px-[30px] pt-[30px] pb-[45px] ">
            <div className="section-title relative inline-block py-0 px-[3px] mb-[27px] mt-[27px]">
              <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
              <h2 className="text-[18px] font-[600] text-[#333] relative z-10">
                Contact Informations
              </h2>
            </div>
            <ul>
              <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] ">Address: </span>
                107727 Santa Monica Boulevard Los Angeles
              </li>
              <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] ">Phone: </span>
                +38 012-3456-7890
              </li>
              <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] ">Job: </span>
                Freelancer
              </li>
              <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] ">E-mail: </span>
                chris@domain.com
              </li>
              <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] ">Skype: </span>
                chrisjohnson85
              </li>
              <li className="text-[14px] text-[#787878] mt-[14px] leading-[34px]">
                <Link className=" hover:text-[0.8rem] hover:text-[#3b5998] text-[0.65rem] text-[#000] w-[24px] h-[18px] mr-1 transitionhover inline-block">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
                <Link className="transitionhover hover:text-[0.8rem] hover:text-[#55acee] text-[0.65rem] text-[#000] w-[24px] h-[18px] mr-1 inline-block">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link className="hover:text-[0.8rem] hover:text-[#cd486b] text-[0.65rem] text-[#000] w-[24px] h-[18px] mr-1 transitionhover inline-block">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link className="hover:text-[0.8rem] hover:text-[#ea4c89] text-[0.65rem] text-[#000] w-[24px] h-[18px] mr-1 transitionhover inline-block">
                  <i class="fa-brands fa-dribbble"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact-map my-[15px] mx-0 p-[30px]">
          <div className="section-title relative inline-block py-0 px-[3px] mb-[27px] mt-[15px]">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">
              Contact Map.
            </h2>
          </div>
          <div className="mb-[6px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125703.44006701399!2d-118.29326520703374!3d34.11469134922652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1731054194175!5m2!1svi!2s"
              className="h-[350px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              title="Google Maps of Los Angeles"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
