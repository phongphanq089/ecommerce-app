/* eslint-disable @next/next/no-img-element */
import { ListProductDetails } from '@/contents/list-product'
import React from 'react'

const ProductMain = () => {
  return (
    <div className='flex flex-col gap-2'>
      {ListProductDetails.map((product, index) => {
        return (
          <div key={index}>
            <div className='wrapImgResize imgSquare'>
              <img
                src={product.image}
                className='w-full object-cover h-full'
                alt=''
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductMain
