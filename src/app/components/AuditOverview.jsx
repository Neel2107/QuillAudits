import React from "react";
import {
  auditOverViewDataAfter,
  auditOverViewDataBefore,
} from "../../../public/auditOverViewData/auditOverViewData";
import { jost, poppins } from "../layout";
import Headquarters from "./Headquarters";

const AuditOverview = () => {
  return (
    <div className=" flex flex-col md:flex-row md:w-3/4 md:mx-auto md:px-5 lg:w-3/2 xl:w-1/2  gap-10 lg:gap-10 px-10 justify-center h-full  mt-20">
      {auditOverViewDataBefore.map((item, index) => (
        <div className="flex flex-col  gap-5" key={index}>
          <div className="bg-[#ffabc9] px-1">
            <p className="font-extrabold text-lg">{item.title}</p>
          </div>
          <p className={` ${poppins.className}`}>{item.para1}</p>
          <p className={` ${poppins.className}`}>{item.para2}</p>
        </div>
      ))}
        <div className="w-[2px] bg-zinc-300  "/>

      {auditOverViewDataAfter.map((item, index) => (
        <div className="flex flex-col  gap-5" key={index}>
          <div className="bg-[#abcdff] px-1">
            <p className="font-extrabold text-lg">{item.title}</p>
          </div>
          <p className={` ${poppins.className}`}>{item.para1}</p>
          <p className={` ${poppins.className}`}>{item.para2}</p>
        </div>
      ))}
      <div className="md:hidden">
        <Headquarters />
      </div>
    </div>
  );    
};

export default AuditOverview;
