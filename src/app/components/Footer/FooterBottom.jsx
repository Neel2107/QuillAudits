import { jost } from '@/app/layout'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className="bottom flex  flex-col md:flex-row-reverse md:justify-between border-t border-t-zinc-300/20  p-4 gap-5">
    <p
      className={`${jost.className} text-center text-white text-sm font-medium`}
    >
      Privacy Policy
    </p>
    <p className={`${jost.className} text-center text-white text-sm`}>
      All Rights Reserved. © Copyright 2023. QuillAudits - LLC
    </p>
  </div>
  )
}

export default FooterBottom