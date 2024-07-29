import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href={'/'}
      className='max-w-[150px] sm:max-w-[180px]  md:max-w-[250px] inline-block'
    >
      <Image
        src={'/logo-v3.png'}
        alt='shop fast'
        width={300}
        height={300}
        className='object-cover w-full h-auto'
      />
    </Link>
  )
}

export default Logo
