import React, { useState } from "react";
import Client1 from "../../assets/images/client-1.jpg";
import starIcon from "../../assets/images/Star.png";
import BusinessesAbout from "./BusinessesAbout";
import BusinessesFeedback from "./BusinessesFeedback";
import SidePanel from "./SidePanel";

const Businesses = () => {
  const [tab, SetTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img
                  style={{ height: "200px" }}
                  src={Client1}
                  alt=""
                  className="w-full"
                />
              </figure>

              <div>
                <span
                  className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                leading-4 lg:text-[16px] lg:leading-7 font-semiBold rounded"
                >
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Kebur Genanew
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semiBold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semiBold text-textColor">
                    (278)
                  </span>
                </div>
                <p className="text__para text-[14px] leading-7 md:text-[15px] lg:max-w-[390px] ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eius, ullam!
                </p>
              </div>
            </div>

            <div className="mt=[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => SetTab("about")}
                className={` ${
                  tab === "feedback"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => SetTab("feedback")}
                className={` ${
                  tab === "feedback"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <BusinessesAbout />}
              {tab === "feedback" && <BusinessesFeedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Businesses;
