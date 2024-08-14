'use client'
import React, { useState } from 'react'

const AddCart = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string
  variantId: string
  stockNumber: number
}) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
    if (type === 'i' && quantity < stockNumber) {
      setQuantity((prev) => prev + 1)
    }
  }
  return (
    <div className='flex flex-col'>
      <h4 className='font-medium'>Choose a Quantity : </h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-color-2 px-1 rounded-3xl flex items-center justify-between w-32 h-6'>
            <button
              className='cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('d')}
              disabled={quantity === 1}
            >
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-minus'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l14 0' />
              </svg>
            </button>
            {quantity}
            <button
              className='cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('i')}
              disabled={quantity === stockNumber}
            >
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-plus'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 5l0 14' />
                <path d='M5 12l14 0' />
              </svg>
            </button>
          </div>
          <div className='bg-black cursor-pointer'>
            <button className='button-style-3'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className='text'>Add to Cart</div>
            </button>
          </div>
          {stockNumber < 1 ? (
            ''
          ) : (
            <div className='text-xs'>
              Only <span className='text-orange-500'>{stockNumber} items</span>{' '}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddCart
