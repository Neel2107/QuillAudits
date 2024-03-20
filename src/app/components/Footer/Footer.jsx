import Image from "next/image";
import React from "react";
import { jost } from "../../layout";
import {
  footerIconsData,
  footerImagesData,
} from "../../../../public/footer/footerData";
import FooterLogos from "./FooterLogos";
import FooterBottom from "./FooterBottom";
import FooterMainLinks from "./FooterMainLinks";

const Footer = () => {
  const footerButtonsData = [
    {
      id: 1,
      title: "WAGSI Grants",
    },
    {
      id: 2,
      title: "Ambassador Program",
    },
    {
      id: 3,
      title: "Refer-Earn-Secure",
    },
    {
      id: 4,
      title: "Partnership Program",
    },
  ];
  const contactUsData = [
    {
      id: 1,
      icon: "/footer/mail.svg",
      link: "audits@quillhash.com",
    },
    {
      id: 2,
      icon: "/footer/tele-2.svg",
      link: "t.me/quillaudits",
    },
  ];
  const extraLinks = ["About Us", "FAQs", "Blockchains We Audit"];
  return (
    <div className="relative items-center  mt-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/bg/bg-wide.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className=" flex flex-col p-6 gap-5 relative z-10">
        <Image
          src={"/footer/footer-logo.svg"}
          height={100}
          width={300}
          alt="footer-logo"
          className="object-cover"
        />

        <div className="grid grid-cols-2 gap-4">
          {footerButtonsData.map((button, index) => (
            <button
              key={index}
              className={` ${jost.className} bg-button-gradient py-2 px-3 rounded-md text-white text-sm shadow-lg`}
            >
              {button.title}
            </button>
          ))}
        </div>
        <FooterMainLinks />

        <div className="flex flex-col gap-4">
          <h1
            className={`${jost.className} text-white text-lg py-2 border-b-2 border-b-[#2D83EE] font-medium w-fit`}
          >
            More About Quill
          </h1>
          {extraLinks.map((item, index) => {
            return (
              <p key={index} className={`${jost.className} text-white text-sm`}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 mt-5">
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
                <p
                  className={`${jost.className} italic underline  text-white text-sm`}
                >
                  {item.link}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row mt-4 items-center gap-2">
            <Image
              src={"/footer/location.svg"}
              height={100}
              width={100}
              alt="footer-logo"
              className="object-cover w-4"
            />
            <p className={`${jost.className} text-white font-medium text-base`}>
              Our Location:
            </p>
          </div>
          <p className={`${jost.className} text-white font-medium text-base`}>
          Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654
            </p>
                  </div>


        <FooterLogos />

        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
