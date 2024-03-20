import React from "react";
import { jost, poppins } from "@/app/layout";
import {
  FunctionalTesting,
  manualCodeReview,
  pensionJourneyData,
} from "../../public/pensionJourney/pensionJourneyData";

const PensionJourney = () => {
  return (
    <div className="flex flex-col items-center px-5 ">
      <h1 className={`${jost.className} font-[800] text-[34px] lg:w-1/2 mt-10`}>
        CarpeDiem Pension&apos;s Journey Through our Audit Process
      </h1>

      {pensionJourneyData.map((data) => {
        if (data.id == 2) {
          return (
            <div key={2} className="flex flex-col  mt-10">
              <h1 className={`${jost.className} font-[600] text-[24px]`}>
                2. Manual Code Review:
              </h1>

              <ul className="mt-5 flex flex-col  gap-5">
                <li
                  className={`${poppins.className} font-[400] text-[16px] ml-8 mr-4 list-disc  `}
                >
                  Conducted a line-by-line review of the smart contract code,
                  focusing on:
                </li>
                {manualCodeReview.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${poppins.className} font-[400] text-[16px] ml-14 mr-4 list-circle-item  `}
                    >
                      <span className="font-semibold italic">{item.title}</span>
                      <br />
                      {item.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else if (data.id == 3) {
          return (
            <div key={2} className="flex flex-col  mt-10">
              <h1 className={`${jost.className} font-[600] text-[24px]`}>
                3. Functional Testing:
              </h1>

              <ul className="mt-5 flex flex-col  gap-5">
                {FunctionalTesting.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${poppins.className} font-[400] text-[16px] ml-8 mr-4 list-circle-item   `}
                    >
                      {item.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else {
          return (
            <div key={data.id} className="flex flex-col  mt-10">
              <h1 className={`${jost.className} font-[600] text-[24px]`}>
                {data.id}. {data.title}
              </h1>

              <ul className="mt-5 flex flex-col  gap-5">
                {data.listItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${poppins.className} font-[400] text-[16px] ml-8 mr-4 list-disc  `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PensionJourney;
