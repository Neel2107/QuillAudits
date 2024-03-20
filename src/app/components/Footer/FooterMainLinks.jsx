import React from "react";
import { footerLinksData } from "../../../../public/footer/footerLinks";
import { jost } from "@/app/layout";

const FooterMainLinks = () => {
  return (
    <div className="grid grid-cols-2 mt-5 gap-8 ">
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
                  <p
                    key={index}
                    className={`${jost.className} text-white text-sm`}
                  >
                    {item}
                    {item === "Careers" &&  (
                      <span className="mx-4 py-1 px-2 text-xs rounded-md bg-blue-400 text-white">
                        Hiring
                      </span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterMainLinks;
