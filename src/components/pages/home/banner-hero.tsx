'use client'
/* eslint-disable @next/next/no-img-element */
import { bgAbsolute1, bgSlider1, bgSlider2, bgSlider3 } from '@/assets'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

const listImage = [
  {
    image: bgSlider1.src,
    subTitle: 'Trending Item',
    name: "WOMEN'S LATEST FASHION SALE",
    namePrice: 'starting at $ 20.00',
  },
  {
    image: bgSlider2.src,
    subTitle: 'Trending Accessories',
    name: "WOMEN'S LATEST FASHION SALE",
    namePrice: 'starting at $ 20.00',
  },
  {
    image: bgSlider3.src,
    subTitle: 'Trending Accessories',
    name: "WOMEN'S LATEST FASHION SALE",
    namePrice: 'starting at $ 20.00',
  },
]
const BannerHero = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  return (
    <div className='container-2xl relative overflow-hidden'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {listImage.map((item, index) => {
            return (
              <CarouselItem key={index} className='relative'>
                <div className='p-2 lg:absolute top-1/2 lg:-translate-y-1/2 left-[60px] z-20 max-w-[600px] flex flex-col gap-2'>
                  <span className='text-sm md:text-md text-[#e74c3c]'>
                    {item.subTitle}
                  </span>
                  <h2 className='text-xl md:text-2xl font-semibold leading-none'>
                    {item.name}
                  </h2>
                  <span className='text-sm md:text-md text-color-2'>
                    {item.namePrice}
                  </span>
                  <Button className='button-style'>SHOP NOW</Button>
                </div>
                <div className='wrapImgResize pt-[56.25%] lg:pt-[45%]'>
                  <img src={item.image} alt='shopping' />
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className='flex items-center gap-3 absolute bottom-3 left-7 z-20'>
          <CarouselPrevious className='relative left-0 w-5 h-5 sm:w-6 sm:h-6 bg-color-5 hover:border-color-5 CarouselPrevious ' />
          <CarouselNext className='relative right-0 w-5 h-5 sm:w-6 sm:h-6 bg-color-5 hover:border-color-5 CarouselNext' />
        </div>
      </Carousel>

      <div className='w-[200px] sm:w-[300px] absolute bottom-0  right-[-20px] sm:right-0 z-0'>
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
