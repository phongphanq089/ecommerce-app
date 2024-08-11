import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

import { NextImageResizeCouple } from '../ui/ImageResize'
import Link from 'next/link'
import { Product } from '@/types/product'
import { wixClientServer } from '@/lib/wixClientServer'
import SparklesText from '../ui/sparkles-text'
import { collections } from '@wix/stores'
import { ButtonStyle_v1 } from '../designs/ButtonStyle'

interface PropsType {
  title: string
  categoryId: string
  limit: number
}

const ProductCarousel = async (props: PropsType) => {
  const { title, categoryId, limit } = props

  const myWixClient = await wixClientServer()

  const cats = (await myWixClient.collections
    .queryCollections()
    .eq('_id', categoryId)
    .find()) as collections.CollectionsQueryResult

  const { items } = await myWixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit)
    .find()

  return (
    <div className=' overflow-hidden py-8'>
      <div className='flex items-center gap-4 px-4 mb-3'>
        <SparklesText text={title} className='text-md' />
        <ButtonStyle_v1
          link={`/products-list?categorie=${cats.items[0].slug}`}
          text='All product'
          className='bg-white flex'
          icons={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right relative z-10 stroke-white'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l14 0' />
              <path d='M15 16l4 -4' />
              <path d='M15 8l4 4' />
            </svg>
          }
        />
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
                  <div className='rounded-[22px] max-w-sm p-2 bg-white border-2 border-gray-400 h-full '>
                    <Link
                      href={'/' + product.slug}
                      className='group  overflow-hidden  flex flex-col h-full'
                    >
                      <div className=''>
                        <NextImageResizeCouple
                          image1={product.media.items[0]?.image.url}
                          image2={product.media.items[1]?.image.url}
                          alt={'product-2-v1.webp'}
                          className='pt-[133%]'
                          classImage1='group-hover:opacity-0'
                          classImage2='opacity-0 group-hover:opacity-100'
                        />
                      </div>

                      <div className='relative bg-white flex flex-col'>
                        <h3 className='leading-none text-[18px] text-black mt-4 mb-2 dark:text-neutral-200'>
                          {product.name}
                        </h3>
                      </div>
                      <span className='rounded-full  px-3 mt-auto py-1 text-white flex items-center space-x-1 bg-black w-fit  text-xs font-bold dark:bg-zinc-800'>
                        <span>Buy now </span>
                        <span className='bg-zinc-700 rounded-full text-sm px-2 py-0 text-white '>
                          {`${product.price.price}$`}
                        </span>
                      </span>
                    </Link>
                  </div>
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
