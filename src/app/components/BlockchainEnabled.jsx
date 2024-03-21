
import React from 'react'
import { jost, poppins } from "../layout";
import Image from 'next/image';
import { articlesData } from '../../../public/blockchainEnabled/ArticlesData';

const BlockchainEnabled = () => {
  return (
    <div className='md:w-3/4  md:mx-auto'>
        {articlesData.map((item, index) => (
            <div key={index} className='flex flex-col gap-10  lg:mx-auto px-5'>
                <h1 className={`${jost.className} font-[800] text-[34px] lg:w-1/2 mt-10`}>
                    {item.title} {/* Replace 'title' with the actual property name */}
                </h1>
                <p className={`${poppins.className} text-lg lg:w-[60%]`}>
                    {item.content} {/* Replace 'description' with the actual property name */}
                </p>
                <Image
                    className='rounded-md'
                    height={500}
                    width={600}
                    alt='CarpeDiem Pension'
                    src={item.image}
                />
            </div>
        ))}
    </div>
  )
}

export default BlockchainEnabled