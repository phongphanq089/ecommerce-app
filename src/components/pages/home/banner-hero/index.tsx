/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BannerHero = () => {
  return (
    <div className='grid grid-cols-2 h-[90vh] overflow-hidden'>
      <div className='w-full h-full'>
        <video
          autoPlay
          muted
          loop
          preload='metadata'
          playsInline
          className='w-full object-cover h-full'
        >
          <source
            src='https://vision-naire.com/cdn/shop/videos/c/vp/1031dce91cd94a2190f0ec8f683cff10/1031dce91cd94a2190f0ec8f683cff10.HD-1080p-7.2Mbps-31650458.mp4?v=0'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='w-full h-full'>
        <img
          src='https://vision-naire.com/cdn/shop/files/visionnaire-2cap-sport-marathon-noir_750x750.jpg?v=1720795023'
          className='w-full object-cover h-full'
          alt=''
        />
      </div>
    </div>
  )
}

export default BannerHero
