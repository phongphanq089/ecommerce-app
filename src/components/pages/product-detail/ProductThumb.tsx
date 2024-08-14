/* eslint-disable @next/next/no-img-element */
import { ListProductDetails } from '@/contents/list-product'
import React from 'react'
import ProductMain from './ProductMain'
import { Product } from '@/types/product'
import { products } from '@wix/stores'
import { BorderBeam } from '@/components/ui/border-beam'

const ProductThumb = ({ productInfo }: { productInfo: products.Product }) => {
  return (
    <div className='mt-6 px-3'>
      <div className='px-2'>
        <div className='grid grid-cols-2 gap-2'>
          {productInfo?.media?.items?.map((product, index) => {
            return (
              <div key={index} className='relative rounded-2xl overflow-hidden'>
                <BorderBeam
                  size={250}
                  duration={12}
                  delay={9}
                  borderWidth={3}
                  className='z-10'
                />
                <div className='wrapImgResize img3And4  '>
                  <img
                    src={product?.image?.url}
                    className='w-full object-cover h-full '
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
