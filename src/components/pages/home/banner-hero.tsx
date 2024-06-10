/* eslint-disable @next/next/no-img-element */
import { bgAbsolute1, bgSlider1 } from '@/assets'
import { Button } from '@/components/ui/button'
import React from 'react'

const BannerHero = () => {
  return (
    <div className='container-2xl mt-28 relative'>
      <div className='wrapImgResize img16And9'>
        <img src={bgSlider1.src} alt='shopping' />
      </div>

      <div className='p-2 absolute top-1/2 -translate-y-1/2 left-[60px] z-20 max-w-[600px] flex flex-col gap-2'>
        <span className='text-md text-[#e74c3c]'>Trending Item</span>
        <h2 className='text-2xl font-semibold leading-none'>{`WOMEN'S LATEST FASHION SALE`}</h2>
        <span className='text-md text-color-2'>starting at $ 20.00</span>
        <Button className='button-style'>SHOP NOW</Button>
      </div>
      <div className='w-[300px] absolute bottom-0 right-0 z-0'>
        <img
          src={bgAbsolute1.src}
          className='object-cover w-full h-auto'
          alt='shopping'
        />
      </div>
    </div>
  )
}

export default BannerHero
