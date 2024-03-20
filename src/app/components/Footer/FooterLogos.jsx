import Image from 'next/image';
import React from 'react'
import { footerIconsData, footerImagesData } from '../../../../public/footer/footerData';

const FooterLogos = () => {
  return (
    <div className="flex flex-col my-4 gap-10">
    <div className="flex flex-row items-center gap-5">
      {footerImagesData.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.image}
            height={500}
            width={500}
            alt="footer-logo"
            className="object-cover w-36"
          />
        );
      })}
    </div>
    <div className="flex flex-row items-center justify-between">
      {footerIconsData.map((icon, index) => {
        return (
          <Image
            key={index}
            src={icon.image}
            height={100}
            width={100}
            alt="footer-logo"
            className="object-cover w-8"
          />
        );
      })}
    </div>
  </div>
  )
}

export default FooterLogos