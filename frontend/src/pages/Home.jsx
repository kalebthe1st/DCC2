import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import featureImg from "../assets/images/feature-img.png";
import avatarImg from "../assets/images/avatar-icon.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../component/About/About";
import ServiceList from "../component/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/* +++++++++ hero section ++++++++ */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ========= hero content+++++++++ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help you connect with Everyone
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi quae iure ab velit voluptate saepe vitae repudiandae
                  porro omnis iste.
                </p>
                <button className="btn">Request an appointment</button>
              </div>
              {/* ++++++++++hero__counter  ++++++ */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    36+
                  </h2>
                  <span className="bg-yellowColor h-2 w-[100px] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Exprience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    246+
                  </h2>
                  <span className="bg-purpleColor h-2 w-[100px] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Firms' Registered</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="bg-irisBlueColor h-2 w-[100px] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Customer Satisfactio</p>
                </div>
              </div>
            </div>
            {/* ========= hero content+++++++++ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* +++++++++ hero section end ++++++++ */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing you with the best{" "}
              <span className="text-irisBlueColor">b2b</span> services
            </h2>
            <p className="text__para text-center">
              World class service for Everyone. Our system provides unmatched
              expert bussiness service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find your bussiness
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class service for Everyone. Our system provides
                  unmatched expert bussiness service. From the firms directly to
                  you.
                </p>
                <Link
                  to="/bussiness"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book a service
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class service for Everyone. Our system provides
                  unmatched expert bussiness service. From the firms directly to
                  you.
                </p>
                <Link
                  to="/bussiness"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find any Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class service for Everyone. Our system provides
                  unmatched expert bussiness service. From the firms directly to
                  you.
                </p>
                <Link
                  to="/bussiness"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* +++++++ about section start++++++ */}
      <About />
      {/* +++++++ about section end++++++ */}
      {/* +++++++ services section start++++++ */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our services</h2>
            <p className="text__para text-center">
              World class and expert for every one
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* +++++++ services section end++++++ */}

      {/* ++++++feature selection+++++ */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* +++++++feature content+++++++ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get a Quote <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">1. Schedule your appointment.</li>
                <li className="text__para">2. Search for your bussiness.</li>
                <li className="text__para">
                  3. View your available bussiness.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3 ">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Addis Ababa
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      Open
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1  px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarImg} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Kaleb Moges
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ++++++feature selection end+++++ */}
    </>
  );
};
export default Home;
