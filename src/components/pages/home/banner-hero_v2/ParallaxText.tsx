'use client'
import React from 'react'

import { VelocityScroll } from '@/components/ui/scroll-based-velocity'

const ParallaxText = () => {
  return (
    <div>
      <VelocityScroll
        text='Free shipping on all orders over $50'
        default_velocity={1}
        className='font-display text-center text-5xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]'
      />
    </div>
  )
}

export default ParallaxText
