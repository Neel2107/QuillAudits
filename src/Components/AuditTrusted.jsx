import React from "react";
import { jost, poppins } from "@/app/layout";
import Headquarters from "./Headquarters";

const AuditTrusted = () => {
  return (
    <div className="flex flex-col gap-10 px-5 items-center justify-center mt-16 lg:w-3/4 lg:mx-auto">
      <h1
        className={` ${jost.className} font-[600] text-[36px] text-center text-[#0E3088] lg:w-3/4`}
      >
        See how QuillAudits is a trusted partner in 1000+ Audit stories
      </h1>

      <button
        className={`${jost.className} bg-button-gradient py-3 px-10 rounded-md text-white  text-xl shadow-lg`}
      >
        Request An Audit
      </button>

      <div className="flex flex-row items-center ">
        <p className={`${poppins.className} text-lg lg:w-1/2 lg:mr-40    `}>
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users
          globally.
        </p>
      
        <div className='hidden lg:flex lg:flex-1 flex-col gap-5 rounded-md border border-blue-600 px-6 py-4 shadow-lg'>
        <div className='flex flex-col '>
            <span className='text-sm text-zinc-600'>Headquarters</span>
            <span className='text-base font-medium'>Switzerland</span>
        </div>
        <div className='flex flex-col '>
            <span className='text-sm text-zinc-600'>Chain</span>
            <span className='text-base font-medium'>Pulse Blockchain</span>
        </div>
    </div>
     
      </div>
    </div>
  );
};

export default AuditTrusted;
