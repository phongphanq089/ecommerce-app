/* eslint-disable @next/next/no-img-element */
import { productBanner } from '@/contents/list-product'
import React from 'react'

const BannerHero = () => {
  return (
    <div className='grid  md:grid-cols-2 overflow-hidden'>
      {productBanner.map((product, index) => {
        return (
          <div className='w-full h-full' key={index}>
            <div className='wrapImgResize imgSquare'>
              {product.isVideo ? (
                <video autoPlay muted loop preload='metadata' playsInline>
                  <source src={product.src} type='video/mp4' />
                </video>
              ) : (
                <img
                  src={product.src}
                  className='w-full object-cover h-full'
                  alt=''
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BannerHero
