/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ListProductDetails } from '@/contents/list-product'
import React from 'react'

const ProductSlider = () => {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {ListProductDetails.map((product, index) => {
          return (
            <CarouselItem key={index} className='sm:basis-1/2'>
              <div key={index}>
                <div className='wrapImgResize imgSquare'>
                  <img
                    src={product.image}
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
