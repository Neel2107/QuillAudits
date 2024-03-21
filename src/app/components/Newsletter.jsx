import React from "react";
import { jost } from "../layout";
import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex flex-col items-center mt-10 gap-8 md:w-3/4 md:mx-auto">
          <div className="flex flex-row items-center ">
            <p className={`${jost.className}`}>
              Security First{" "}
              <span className="border-b border-blue-500 py-2">Newsletter</span>{" "}
              by QuillAudits
            </p>
          </div>

          <Image
            src={"/newsletter/newsletter.png"}
            height={500}
            width={500}
            alt="newsletter"
            className=" w-72 h-full   object-cover"
          />

          <p className={`${jost.className} text-center px-20`}>
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
            your Inbox. Explore our weekly newsletter:{" "}
            <span className="font-semibold text-[#2D83EE]">HashingBits</span>.
            Stay updated on everything we’re publishing. Stand a step ahead.
          </p>

          <input
            type="email"
            placeholder="vitalik@ethereum.org"
            className={`border border-zinc-400 rounded-md p-2 placeholder:text-[9px] placeholder:${jost.className}`}
          />

          <button
            className={`${jost.className} bg-button-gradient py-2 px-10 rounded-md text-white  text-lg shadow-lg`}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="hidden lg:block bg-[#f9f9fa] py-6 mt-10">
        <div className="flex flex-row justify-between lg:w-3/4 lg:mx-auto">
          <div className="flex flex-col mr-10 gap-5">
            <h3 className="font-bold text-[#407AFF]">NEWSLETTER</h3>
            <h1 className={` ${jost.className} text-4xl font-semibold text-[#14316C] lg:mr-20 `}>
              Security First News Letter by QuillAudits
            </h1>
            <p className="lg:mr-20">
              Subscribe for the most Exclusive Weekly security based newsletter
              and covering all the recent hacks up to date.
            </p>
          </div>
          <div className="">
            <Image
              src={"/newsletter/news-lg.png"}
              height={500}
              width={600}
              alt="newsletter"
              className="   object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
