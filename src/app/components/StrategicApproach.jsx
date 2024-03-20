import React from 'react'
import { jost, poppins } from "../layout";

const StrategicApproach = () => {
    const strategicApproachData = [
        {
            id:1,
            title: "QuillAudits' Strategic Approach to CDP Security Audits",
            content: "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.",
        },
        {
            id:2,
            title: "Comprehensive Audit Discoveries and Remediation Strategies",
            content: "Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :",
        }
    ]
  return (
    <div>
        {
            strategicApproachData.map((item, index) => (
                <div key={index} className='flex flex-col gap-10 lg:w-3/4 lg:mx-auto px-5'>
                <h1 className={`${jost.className} font-[800] text-[34px] lg:w-1/2 mt-10`}>
                    {item.title} {/* Replace 'title' with the actual property name */}
                </h1>
                <p className={`${poppins.className} text-lg lg:w-1/2`}>
                    {item.content} 
                </p>
                
            </div>
            ))
        }
    </div>
  )
}

export default StrategicApproach