/* eslint-disable @next/next/no-img-element */
import CardCategoried from '@/components/shared/CardCategoried'
import { productBanner } from '@/contents/list-product'
import React from 'react'

const BannerHero = () => {
  return (
    <div className='grid md:grid-cols-2 overflow-hidden'>
      {productBanner.map((product, index) => {
        return (
          <CardCategoried
            key={index}
            src={product.src}
            title={product.title}
            link={product.link}
            isVideo={product.isVideo}
          />
        )
      })}
    </div>
  )
}

export default BannerHero
