/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { listProductFeatures } from '@/contents/list-product'
import Image from 'next/image'
import React from 'react'

const ProductFeatures = () => {
  return (
    <div className='container-2xl py-8'>
      <div className='grid lg:grid-cols-3 gap-3'>
        <div className='border-2 border-color-5 rounded-2xl overflow-hidden md:w-1/2 lg:w-full mx-auto'>
          <Card className='w-full h-full relative card-product'>
            <div className='relative w-full h-full overflow-hidden'>
              <Image
                src={listProductFeatures[0].image}
                alt={listProductFeatures[0].title}
                width={400}
                height={300}
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 h-full w-full'
              />
              <Image
                src={'/images/list-image.webp'}
                alt={listProductFeatures[0].title}
                width={400}
                height={300}
                className='absolute object-cover h-full'
              />
            </div>

            <Image
              src={listProductFeatures[0].image}
              alt={listProductFeatures[0].title}
              className='w-full h-full object-cover'
              width={600}
              height={600}
            />
            <Badge className='bg-color-5 absolute top-2 right-2'>
              BEST SELLER
            </Badge>
            <div className='absolute bottom-0 left-0 w-full px-2 py-3 bg-white z-20'>
              <div className='flex items-center justify-between py-1'>
                <div>
                  <h3>{listProductFeatures[0].title}</h3>
                  <span>$55.00 – $189.00</span>
                </div>
                <Button className='button-style text-xs'>Add Cart</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className='lg:col-span-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2'>
            {listProductFeatures?.map((item, index) => {
              if (index === 0) return
              return (
                <Card key={index} className='w-full relative card-product'>
                  <div className='relative w-full h-80 overflow-hidden'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                      src={'/images/list-image.webp'}
                      alt={item.title}
                      width={400}
                      height={300}
                      className='absolute object-cover h-full'
                    />
                  </div>

                  <Badge className='bg-color-5 absolute top-2 right-2 z-20'>
                    BEST SELLER
                  </Badge>
                  <div className='flex  flex-col xl:flex-row item-center justify-between py-3 px-2 gap-2'>
                    <div>
                      <h3>{listProductFeatures[0].title}</h3>
                      <span>$55.00 – $189.00</span>
                    </div>
                    <Button className='button-style text-xs'>Add Cart</Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
