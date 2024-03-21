import React from "react";
import { jost, poppins } from "../layout";

const Remediation = () => {
    const RemediationData = [
        {
            id:1,
            content: "Implementation of reentrancy protection mechanisms."
        },
        {
            id:2,
            content: "Accurate handling of decimal values using established libraries or best practices."
        },
        {
            id:3,
            content: "Revised calculations with proper scaling factors."
        },
        {
            id:4,
            content: "Fixing logic errors to ensure deposits and waiting periods are enforced."
        },
        {
            id:5,
            content: "Addressing referral system vulnerabilities to prevent abuse."
        },
    ]
  return (
    <div className="flex flex-col gap-5 px-5 mt-10 md:w-3/4 md:mx-auto ">
      <h1 className={`${jost.className} font-[800] text-[34px] lg:w-1/2 `}>
        Remediation & Impact:
      </h1>
      <p className={`${poppins.className}  text-lg lg:w-1/2`}>
        All identified vulnerabilities were addressed by the CDP team,
        significantly enhancing the smart contract&apos;s security posture. Key
        improvements include
      </p>
      <ul className="flex flex-col lg:w-1/2 gap-5">
       {
        RemediationData.map((data) => {
            return (
                <li key={data.id} className={`${poppins.className} font-[400] text-[16px] ml-8 mr-4 list-disc `}>
                    {data.content}
                </li>
            )
        })
       }
      </ul>

      <p className="text-wrap lg:w-1/2">
        <span className={` ${poppins.className} font-semibold`}>Embed this tweet :-</span>
        <span className={` ${poppins.className}  break-words text-blue-600`}>https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</span>
      </p>
    </div>
  );
};

export default Remediation;
