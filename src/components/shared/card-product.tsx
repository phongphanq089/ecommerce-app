/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { NextImageResize, NextImageResizeCouple } from '../ui/ImageResize'
import Link from 'next/link'

interface ProductItem {
  title: string
  price: string
  image1: string
  image2: string
  size?:
    | {
        name: string
      }[]
}

const CardProduct = ({ products }: { products: ProductItem }) => {
  return (
    <Card className='overflow-hidden'>
      <Link
        href={`/product/${products.title}`}
        className='group block overflow-hidden'
      >
        <div className=''>
          <NextImageResizeCouple
            image1={products.image1}
            image2={products.image2}
            alt={products.title}
            classImage1='group-hover:opacity-0'
            classImage2='opacity-0 group-hover:opacity-100'
          />
        </div>

        <div className='relative bg-white p-3 text-center'>
          <h3 className='text-[12px] md:text-xs 2xl:text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
            Limited Edition Sports Trainer
          </h3>

          <div className='mt-1.5 flex items-center flex-col text-gray-900'>
            <p className='tracking-wide'>$189.99</p>
            <div className='flex items-center gap-1'>
              {products.size?.map((size, index) => {
                return (
                  <span
                    key={`${size.name}-${index}`}
                    className='text-[10px] sm:text-xs'
                  >
                    {size.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default CardProduct
