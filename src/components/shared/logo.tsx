import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='max-w-[160px]'>
      <Image
        src={'/logo-page.png'}
        alt='shop fast'
        width={300}
        height={300}
        className='object-cover w-full h-auto'
      />
    </div>
  )
}

export default Logo
