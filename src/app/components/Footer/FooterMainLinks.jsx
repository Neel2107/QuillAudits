import React from 'react'
import { footerLinksData } from '../../../../public/footer/footerLinks'
import { jost } from '@/app/layout'

const FooterMainLinks = () => {
  return (
    <div className='grid grid-cols-2 mt-5 gap-10 px-2'>
{
    footerLinksData.map((link, index) => {
        return (
            <div key={index} className='flex flex-col gap-4'>
                <h1 className={`${jost.className} text-white text-lg py-2 border-b-2 border-b-[#2D83EE] font-medium w-fit`}>{link.title}</h1>
                <div className='flex flex-col gap-4'>
                    {link.links.map((item, index) => {
                        return (
                            <p key={index} className={`${jost.className} text-white text-sm`}>{item}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
    )
}
    </div>
  )
}

export default FooterMainLinks