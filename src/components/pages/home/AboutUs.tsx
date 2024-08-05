import { NextImageResize } from '@/components/ui/ImageResize'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='py-8'>
      <div className='container-3xl'>
        <h3 className='text-sm font-semibold'>ABOUT US</h3>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'></div>
          <div className='col-span-9'>
            <p className='text-sm text-end'>
              Each collection reflects the lasted fashion trends an uniqued
              designs, created for mordern and stylist people. The mordern
              clothing brand. Each collection reflects the lasted fashion trends
              an uniqued designs, created for mordern and stylist people. The
              mordern clothing brand.
            </p>
            <p className='font-light max-w-[800px]'>
              Each collection reflects the lasted fashion trends an uniqued
              designs, created for mordern and stylist people. The mordern
              clothing brand. Each collection reflects the lasted fashion trends
              an uniqued designs, created for mordern and stylist people. The
              mordern clothing brand.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-4'>
          <div className='col-span-3'>
            <NextImageResize src={'/images/bg-about-1.webp'} alt='startcrow' />
          </div>
          <div className='col-span-3'></div>
          <div className='col-span-3'>
            <NextImageResize src={'/images/bg-about-2.webp'} alt='startcrow' />
          </div>
          <div className='col-span-3'>
            <NextImageResize src={'/images/bg-about-3.webp'} alt='startcrow' />
          </div>
        </div>

        <div className='grid grid-cols-12'>
          <div className='col-span-3'></div>
          <div className='col-span-9'>
            <p className='text-xs font-light max-w-[800px]'>
              Each collection reflects the lasted fashion trends an uniqued
              designs, created for mordern and stylist people. The mordern
              clothing brand. Each collection reflects the lasted fashion trends
              an uniqued designs, created for mordern and stylist people. The
              mordern clothing brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
