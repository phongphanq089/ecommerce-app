/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { NextImageResizeCouple } from '../ui/ImageResize'
import { ProductListType } from '@/types/product'

const CardProduct = ({ products }: { products: ProductListType }) => {
  return (
    <div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
      <NextImageResizeCouple
        image1={
          products?.media.items[0]?.image?.url ||
          '/images/product-demo/product-2-v1.webp'
        }
        image2={
          products?.media.items[1]?.image?.url ||
          '/images/product-demo/product-2-v1.webp'
        }
        alt={products.name}
        classImage1='group-hover:opacity-0'
        classImage2='opacity-0 group-hover:opacity-100'
      />

      <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
        Air Jordan 4 Retro Reimagined
      </p>

      <p className='text-sm text-neutral-600 dark:text-neutral-400'>
        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
        February 17, 2024. Your best opportunity to get these right now is by
        entering raffles and waiting for the official releases.
      </p>
      <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
        <span>Buy now </span>
        <span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
          $100
        </span>
      </button>
    </div>
  )
}

export default CardProduct
