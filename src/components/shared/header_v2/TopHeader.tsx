'use client'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex items-center gap-4 justify-center w-full text-center'>
        <span className='text-[18px] font-medium uppercase'>
          Free shipping on all orders over $50
        </span>
      </div>
    </div>
  )
}

export default TopHeader
