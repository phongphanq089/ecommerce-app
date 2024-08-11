/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Product } from '@/types/product'
import { products } from '@wix/stores'
import React from 'react'

const ProductSlider = ({ productInfo }: { productInfo: products.Product }) => {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {productInfo?.media?.items?.map((product, index) => {
          return (
            <CarouselItem key={index} className='sm:basis-1/2'>
              <div key={index}>
                <div className='wrapImgResize imgSquare'>
                  <img
                    src={product?.image?.url}
                    className='w-full object-cover h-full'
                    alt=''
                  />
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}

export default ProductSlider
