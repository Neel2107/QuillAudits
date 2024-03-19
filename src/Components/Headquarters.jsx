import React from 'react'

const Headquarters = () => {
  return (
    <div className='flex flex-col gap-5 rounded-md border border-blue-600 px-6 py-4 shadow-lg'>
        <div className='flex flex-col '>
            <span className='text-sm text-zinc-600'>Headquarters</span>
            <span className='text-base font-medium'>Switzerland</span>
        </div>
        <div className='flex flex-col '>
            <span className='text-sm text-zinc-600'>Chain</span>
            <span className='text-base font-medium'>Pulse Blockchain</span>
        </div>
    </div>
  )
}

export default Headquarters