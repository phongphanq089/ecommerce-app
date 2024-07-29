import { Button } from '@/components/ui/button'
import React from 'react'

const InfoProduct = () => {
  return (
    <div className='p-1 h-fit sticky  top-[100px]'>
      <h2 className='text-md font-medium'>Black College Skate Hoodie</h2>
      <span className='text-xl font-bold leading-none mb-2 inline-block'>
        $70,00
      </span>
      <p className='text-sm font-normal leading-6 mb-2'>
        This skate fit hoodie features a front pocket and college-inspired logo.
        100% cotton. Hoodie noir Visionnaire. Impression Puff print coeur et
        dos. Coupe oversize. 65% Coton et 35% polyester 330grs pré-lavé pour
        éviter tout rétrécissement.
      </p>

      <div className='flex flex-col'>
        <p className='text-sm font-semibold'>SIZES:</p>
        <div className='flex items-center gap-1 mb-1'>
          <span className='bg-color-2 p-1 flex items-center justify-center w-6 '>
            XXS
          </span>
          <span className='bg-color-2 p-1 flex items-center justify-center  w-6 '>
            XS
          </span>
          <span className='bg-color-2 p-1 flex items-center justify-center w-6'>
            S
          </span>
          <span className='bg-color-2 p-1 flex items-center justify-center  w-6 '>
            M
          </span>
          <span className='bg-color-2 p-1 flex items-center justify-center  w-6 '>
            L
          </span>
        </div>
        <span className='border-b border-black inline-block w-fit font-semibold text-[18px]'>
          Size help
        </span>

        <Button className='px-1 my-3'>ADD TO CART</Button>
      </div>

      <div className='px-1'>
        <h2 className='text-md font-semibold'>Privacy Policy</h2>
      </div>
    </div>
  )
}

export default InfoProduct
