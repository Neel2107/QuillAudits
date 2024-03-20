import React from "react";
import { jost } from "../layout";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-8 md:w-3/4 md:mx-auto">
      <div className="flex flex-row items-center ">
        <p className={`${jost.className}`}>
          Security First{" "}
          <span className="border-b border-blue-500 py-2">Newsletter</span> by
          QuillAudits
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
        <span className="font-semibold text-[#2D83EE]">HashingBits</span>. Stay
        updated on everything we’re publishing. Stand a step ahead.
      </p>

      <input
      type="email"
        placeholder="vitalik@ethereum.org"
        className={`border border-zinc-400 rounded-md p-2 placeholder:text-[9px] placeholder:${jost.className}`}
        />

<button
        className={`${jost.className} bg-button-gradient py-2 px-10 rounded-md text-white  text-lg shadow-lg`}
      >Subscribe</button>
    </div>
  );
};

export default Newsletter;
