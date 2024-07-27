/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { NextImageResize, NextImageResizeCouple } from '../ui/ImageResize'

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
      <a href='#' className='group block overflow-hidden'>
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
          <h3 className='text-xs 2xl:text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
            Limited Edition Sports Trainer
          </h3>

          <div className='mt-1.5 flex items-center flex-col text-gray-900'>
            <p className='tracking-wide'>$189.99</p>
            <div className='flex items-center gap-1'>
              {products.size?.map((size, index) => {
                return <span key={`${size.name}-${index}`}>{size.name}</span>
              })}
            </div>
          </div>
        </div>
      </a>
    </Card>
  )
}

export default CardProduct
