import Image from "next/image";
import React from "react";
import { jost } from "@/app/layout";
import { navData } from "../../public/navbar/Navdata";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrDown } from "react-icons/gr";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  w-full  ">
      <div className="flex flex-row items-center justify-between py-2 lg:py-6 lg:w-[80%] lg:mx-auto lg:border-b-2 lg:border-b-zinc-300/10">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={"/navbar/nav-logo.svg"}
            className="w-[40px] h-[40px]"
            height={200}
            width={200}
            alt="nav-logo"
          />
          <h2
            className={`${jost.className} hidden
         xl:block text-2xl text-white`}
          >
            QuillAudits{" "}
          </h2>
        </div>

        {navData.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="hidden md:flex flex-row items-center gap-2"
          >
            <div className="text-sm  xl:text-lg text-white">{item.title}</div>
            {item.isDropdown && (
              <GrDown className="text-white lg:text-lg font-semibold" />
            )}
          </Link>
        ))}

        <button
          className={`${jost.className} bg-button-gradient py-2 px-4 rounded-md text-white text-xs  xl:text-lg shadow-lg`}
        >
          Request An Audit
        </button>

        <Image
          src={"/navbar/hamburger.svg"}
          className="w-[20px] h-[12px] sm:block md:hidden"
          height={100}
          width={100}
          alt="nav-logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
