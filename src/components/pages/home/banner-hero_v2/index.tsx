import React from 'react'
import CarouselBanner from './CarouselBanner'
import ParallaxText from './ParallaxText'
import TextFullContainerHero from '@/components/designs/TextFullContainer'
import { NextImageResize } from '@/components/ui/ImageResize'

const BannerHero = () => {
  return (
    <div className='relative overflow-hidden mt-[100px]'>
      <div className='container-3xl'>
        <div className='grid grid-cols-3 gap-5 relative z-0 '>
          <div>
            <NextImageResize
              src={'/images/banner-hero/banner-hero-1.webp'}
              alt='startcrow'
              className='pt-[133%]'
            />
          </div>
          <div>
            <div className='wrapImgResize imgSquare'>
              <video autoPlay muted loop preload='metadata' playsInline>
                <source
                  src={
                    'https://vision-naire.com/cdn/shop/videos/c/vp/ac34feb55e9d4672b6e2b7c22c4b3b96/ac34feb55e9d4672b6e2b7c22c4b3b96.HD-1080p-7.2Mbps-30442661.mp4?v=0'
                  }
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
          <div>
            <NextImageResize
              src={'/images/banner-hero/banner-hero-2.webp'}
              alt='startcrow'
              className='pt-[133%]'
            />
          </div>
        </div>
        <TextFullContainerHero
          text2='UNIQUE FASHION STYLE'
          className='relative z-10 mt-[-130px]'
        />
      </div>
    </div>
  )
}

export default BannerHero
