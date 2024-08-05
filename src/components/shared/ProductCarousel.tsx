import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Card } from '../ui/card'

import { NextImageResizeCouple } from '../ui/ImageResize'
import Link from 'next/link'
import ButtonStyle from '../designs/ButtonStyle'
import { Product } from '@/types/product'
import { wixClientServer } from '@/lib/wixClientServer'

interface PropsType {
  title: string
  categoryId: string
  limit: number
}

const ProductCarousel = async (props: PropsType) => {
  const { title, categoryId, limit } = props

  const myWixClient = await wixClientServer()

  const { items } = await myWixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit)
    .find()

  return (
    <div className='overflow-hidden py-8'>
      <div className='flex justify-between px-4'>
        <h3 className='text-sm font-semibold'>{title}</h3>
        <ButtonStyle link='/products' text='All product' />
      </div>
      <Carousel className='w-full'>
        <CarouselContent className='-ml-1'>
          {(items as Product[])?.map((product, index) => {
            return (
              <CarouselItem
                key={index}
                className='pl-1 md:basis-1/2 lg:basis-1/5'
              >
                <div className='p-1 h-full'>
                  <Card className='overflow-hidden h-full'>
                    <Link
                      href={`/product/${'product-2-v1.webp'}`}
                      className='group block overflow-hidden'
                    >
                      <div className=''>
                        <NextImageResizeCouple
                          image1={product.media.items[0]?.image.url}
                          image2={product.media.items[1]?.image.url}
                          alt={'product-2-v1.webp'}
                          classImage1='group-hover:opacity-0'
                          classImage2='opacity-0 group-hover:opacity-100'
                        />
                      </div>

                      <div className='relative bg-white p-3 text-center'>
                        <h3 className='text-[12px] md:text-xs 2xl:text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                          {product.name}
                        </h3>

                        <div className='mt-1.5 flex items-center flex-col text-gray-900'>
                          <p className='tracking-wide'>{`${product.price.price}$`}</p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className='btn-prev' />
        <CarouselNext className='btn-next' />
      </Carousel>
    </div>
  )
}

export default ProductCarousel
