'use client'
import { NextImageResize } from '@/components/ui/ImageResize'
import React from 'react'
import Marquee from 'react-fast-marquee'

const BannerHero = () => {
  return (
    <>
      <div className='grid grid-cols-2  relative z-0 '>
        <div className='wrapImgResize pt-[100%]'>
          <video autoPlay muted loop preload='metadata' playsInline>
            <source
              src={
                'https://vision-naire.com/cdn/shop/videos/c/vp/ac34feb55e9d4672b6e2b7c22c4b3b96/ac34feb55e9d4672b6e2b7c22c4b3b96.HD-1080p-7.2Mbps-30442661.mp4?v=0'
              }
              type='video/mp4'
            />
          </video>
        </div>
        <div>
          <NextImageResize
            src={'/images/banner-hero/banner-hero-4.webp'}
            alt='startcrow'
          />
        </div>

        <div className='flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5 items-center text-[12vw] font-bold color-rgba'>
          <h2>NADIVA</h2>
          <h2 className='mt-[100px]'>BURIKY</h2>
        </div>
      </div>
      <Marquee className='bg-black text-white'>
        <div className='flex items-center gap-4 justify-between'>
          {[...Array(20)].map((_, i) => {
            return (
              <React.Fragment key={i}>
                <span>Free shipping on all orders over $50</span>
              </React.Fragment>
            )
          })}
        </div>
      </Marquee>
    </>
  )
}

export default BannerHero
