import React from 'react'
import { jost, poppins } from "../layout";
import { strategicApproachData } from '../../../public/strategicApproachData/strategicApproachData';

const StrategicApproach = () => {
   
  return (
    <div className='md:w-3/4 md:mx-auto'>
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