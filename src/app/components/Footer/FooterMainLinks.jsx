import React from "react";
import { footerLinksData } from "../../../../public/footer/footerLinks";
import { jost } from "@/app/layout";
import Image from "next/image";
import { extraLinks } from "../../../../public/footer/extraLinks";
import { contactUsData } from "../../../../public/footer/contactUsData";
import { footerButtonsData } from "../../../../public/footer/footerButtonsData";
import Link from "next/link";

const FooterMainLinks = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-5 gap-8 lg:gap-16 md:grid-cols-4 lg:grid-cols-5  md:mx-auto lg:mx-10 lg:relative ">
        <div className=" hidden lg:flex flex-col ">
          <div className="flex flex-col   md:gap-5 md:mt-5 lg:mt-0">
            <div className="flex flex-col gap-4   ">
              <h1
                className={`${jost.className} text-white text-lg py-2 border-b-2 border-b-[#2D83EE] font-medium w-fit`}
              >
                More About Quill
              </h1>
              {extraLinks.map((item, index) => {
                return (
                  <Link
                  href={"/"}
                    key={index}
                    className={`${jost.className} text-white text-sm`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-5 lg:mt-5">
              <h1
                className={`${jost.className} text-white text-base font-medium w-fit`}
              >
                Contact Us:
              </h1>

              {contactUsData.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      height={100}
                      width={100}
                      alt="footer-logo"
                      className="object-cover w-5"
                    />
                    <Link href={"/"}
                      className={`${jost.className} italic underline  text-white text-sm`}
                    >
                      {item.link}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex lg:mt-5 flex-col gap-4  ">
            <div className="flex flex-row mt-4 items-center gap-2">
              <Image
                src={"/footer/location.svg"}
                height={100}
                width={100}
                alt="footer-logo"
                className="object-cover w-4"
              />
              <p
                className={`${jost.className} text-white font-medium text-base`}
              >
                Our Location:
              </p>
            </div>
            <p className={`${jost.className} text-white font-medium text-base`}>
              Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
              Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box
              : 416654
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:absolute lg:w-1/2 bottom-0 right-0 text-white">
          <div className="flex flex-col gap-4">
            <h1
              className={`${jost.className} text-white text-lg py-2 border-b-2 border-b-[#2D83EE] font-medium w-fit`}
            >
              Our Programmes
            </h1>

             {/* buttons */}
        <div className="grid grid-cols-4 gap-4  ">
          {footerButtonsData.map((button, index) => (
            <button
              key={index}
              className={` ${jost.className} bg-button-gradient py-2 px-3 rounded-md text-white text-sm shadow-lg`}
            >
              {button.title}
            </button>
          ))}
        </div>
          </div>
        </div>
        {footerLinksData.map((link, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <h1
                className={`${jost.className} text-white text-lg py-2 border-b-2 border-b-[#2D83EE] font-medium w-fit`}
              >
                {link.title}
              </h1>
              <div className="flex flex-col gap-4">
                {link.links.map((item, index) => {
                  return (
                    <Link
                    href={"/"}
                      key={index}
                      className={`${jost.className} text-white text-sm`}
                    >
                      {item}
                      {item === "Careers" && (
                        <span className="mx-4 py-1 px-2 text-xs rounded-md bg-blue-400 text-white">
                          Hiring
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FooterMainLinks;
