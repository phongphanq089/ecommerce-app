import { Icon_v1, Icon_v2, Icon_v3 } from '@/components/shared/RenderIcon'
import React from 'react'

const TextBanner = () => {
  return (
    <div className='text-center py-6'>
      <span className='text-xs font-bold mb-3 inline-block'>
        IN COLLABORATION WITH
      </span>
      <div className='text-md 2xl:text-lg font-semibold'>
        <div className='flex items-center justify-center gap-1'>
          <p>AND WE HAVE SOME EXCITING NEW TO SHARE WITH OUR </p>
          <Icon_v1 className='w-7 h-auto' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <p>FASHION-SAVVY CUSTOMER </p>
          <Icon_v2 className='w-7 h-auto' />
          <p>OUR SUMER COLLECTION</p>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <div className='text-xs font-medium p-2 rounded-3xl border border-black whitespace-nowrap'>
            30% OFF SALE
          </div>
          <p>HAS ARRIVED! DISCOVER STYLISH BEST PIESES PERECT</p>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <p>FOR THE </p>
          <Icon_v3 className='w-7 h-auto' />
          <p>WARM WEATHER</p>
        </div>
      </div>
    </div>
  )
}

export default TextBanner
