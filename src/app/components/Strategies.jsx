import React from "react";
import { jost, poppins } from "../layout";
import { StrategiesData } from "../../../public/strategies/StrategiesData";

const Strategies = () => {
 
  return (
    <div className="px-5 md:w-3/4  md:mx-auto">
      {StrategiesData.map((data) => {
        return (
          <div key={data.id} className="flex flex-col  mt-10">
            <h1 className={`${jost.className} font-[600] text-[24px]`}>
              {data.id}. {data.title}
            </h1>

            <ul className="mt-5 flex flex-col lg:w-1/2  gap-5">
              <li
                className={`${poppins.className} font-[400] text-[16px] ml-8 mr-4 list-alphabet-item `}
              >
                {data.content}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Strategies;
