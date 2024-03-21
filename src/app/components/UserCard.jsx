import Image from "next/image";
import React from "react";
import { jost } from "../layout";

const UserCard = () => {
  return (
    <div className="px-5 mt-10 md:w-3/4 md:mx-auto flex">
      <div className="relative border border-zinc-300 rounded-md overflow-hidden  md:mx-auto lg:w-1/2 lg:mx-0">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/userCard/bg.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "150px",
          }}
        ></div>

        <div className="flex  flex-col gap-5 relative rounded-t-md shadow-lg w-full lg:self-start p-4 ">
          <Image
            src={"/userCard/quote-white.svg"}
            height={32}
            width={25}
            alt="quote"
            className=" object-cover"
          />

          <div className="flex flex-row lg:flex-row-reverse gap-4 lg:px-5">
            <Image
              src={"/userCard/user.png"}
              height={500}
              width={500}
              alt="user"
              className=" w-40 h-40 rounded-md object-cover"
            />
            <div className="flex flex-col lg:mr-auto gap-2">
              <h2
                className={`${jost.className} text-white font-semibold text-2xl tracking-wider `}
              >
                <span className="block lg:hidden">Carpediem</span>
                <span className="hidden lg:block">Sally Radley</span>
              </h2>
              <h3
                className={`${jost.className} text-white font-normal text-lg`}
              >
                  <span className="block lg:hidden">

                TEAM
                  </span>
                  <span className="hidden lg:block">

                  WebGFi - CEO
                  </span>
              </h3>
              <div className="flex flex-row items-center mt-5 lg:mt-10 gap-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Image
                      key={i}
                      src="/userCard/star.svg"
                      height={24}
                      width={24}
                      alt="star"
                      className="object-cover"
                    />
                  ))}
              </div>
            </div>
          </div>




          <p className={`${jost.className} lg:px-5 `}>
            “It felt like the auditing team was available within a short
            timeframe, which was excellent. The auditing process looked
            thorough, and I really appreciate the fact that you took time to
            investigate GAS optimizations.”
          </p>

          <Image
            src={"/userCard/quote-blue.svg"}
            height={32}
            width={25}
            alt="quote"
            className=" ml-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
