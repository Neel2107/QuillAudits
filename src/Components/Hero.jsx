import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { jost, poppins } from "@/app/layout";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden lg:h-[88vh] bg-blue-950">
      <Navbar />

      <div className="flex flex-col lg:w-[80%] lg:mx-auto lg:justify-center  ">
        <div className="flex flex-col lg:flex-row lg:justify-center mt-10  ">
          <div className="my-4 lg:hidden">
            <span
              className={`mx-4 py-1 border-b-2 border-blue-400 text-white ${jost.className}`}
            >
              Case Studies
            </span>
          </div>

          <div className="h-72 lg:h-96 lg:w-[35%] flex flex-col  items-center justify-center bg-gradient-to-r from-black to-[#023b01] relative xl:rounded-lg ">
            <Image
              src={"/hero/cd-logo.svg"}
              height={200}
              width={200}
              alt="cd-logo"
              className="w-[326px] h-[104x] "
            />
            <div className="absolute flex flex-col items-center justify-center -bottom-5 right-5 lg:top-10 lg:-right-12 w-[108px]  h-[48px] lg:w-[140px]  lg:h-[65px] bg-white rounded-md">
              <Image
                src={"/hero/cd-logo-black.svg"}
                height={200}
                width={200}
                alt="cd-logo"
                className="w-[98px] h-[31x] lg:w-[130px] lg:h-[45x] "
              />
            </div>
            <div className="  hidden lg:block absolute text-white bottom-4 left-10">
              <p className={`${poppins.className} font-[400] text-sm w-3/4`}>
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-10  justify-center lg:mt-32 lg:w-[45%] my-10">
            <p
              className={`${jost.className} text-[36px] font-[500] leading-10 text-white`}
            >
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </p>
            <p
              className={`${jost.className} text-[16px] font-[400] text-white`}
            >
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </p>
            <p
              className={`${jost.className} lg:hidden text-[12px] font-[500] mt-16 text-white`}
            >
              QuillAudits --&gt; Resources --&gt; Case Studies --&gt; kucoin{" "}
            </p>
          </div>
        </div>
        <p
          className={`${jost.className} hidden lg:flex ml-32  flex-row gap-2 items-center text-[12px] font-[500] mt-16 text-white`}
        >
            <span className="text-zinc-400">
            QuillAudits --&gt; Resources --&gt;
            </span>
          Case Studies 
        </p>
      </div>
    </div>
  );
};

export default Hero;
