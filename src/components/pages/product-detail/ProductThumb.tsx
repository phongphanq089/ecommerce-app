/* eslint-disable @next/next/no-img-element */
import { ListProductDetails } from '@/contents/list-product'
import React from 'react'
import ProductMain from './ProductMain'

const ProductThumb = () => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-2 '>
        <div className='flex flex-col gap-2 sticky top-[100px] h-fit mt-8'>
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
      </div>
      <div className='col-span-10 px-2'>
        <ProductMain />
      </div>
    </div>
  )
}

export default ProductThumb
