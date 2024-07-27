import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='max-w-[180px]  md:max-w-[250px]'>
      <Image
        src={'/logo-v3.png'}
        alt='shop fast'
        width={300}
        height={300}
        className='object-cover w-full h-auto'
      />
    </div>
  )
}

export default Logo
