import React from "react";
import { formatDate } from "../../utils/formatDate";

const BusinessesAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Kebur Genanew
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          corrupti illum non maiores veniam iure accusantium dicta commodi quos
          quis!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semino">
                {formatDate("07-11-1993")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New City, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semino">
                {formatDate("02-22-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New City, New York
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Expreince
        </h3>
        <div className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("09-12-1993")} - {formatDate("03-12-2021")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New City, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("09-12-1993")} - {formatDate("03-12-2021")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New City, New York
            </p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default BusinessesAbout;
