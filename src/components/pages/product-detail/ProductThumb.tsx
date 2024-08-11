/* eslint-disable @next/next/no-img-element */
import { ListProductDetails } from '@/contents/list-product'
import React from 'react'
import ProductMain from './ProductMain'
import { Product } from '@/types/product'
import { products } from '@wix/stores'

const ProductThumb = ({ productInfo }: { productInfo: products.Product }) => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-2 '>
        <div className='flex flex-col gap-2 sticky top-[100px] h-fit'>
          {productInfo?.media?.items?.map((product, index) => {
            return (
              <div key={index}>
                <div className='wrapImgResize img3And4'>
                  <img
                    src={product?.image?.url}
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
        <div className='flex flex-col gap-2'>
          {productInfo?.media?.items?.map((product, index) => {
            return (
              <div key={index}>
                <div className='wrapImgResize img3And4'>
                  <img
                    src={product?.image?.url}
                    className='w-full object-cover h-full'
                    alt=''
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductThumb
