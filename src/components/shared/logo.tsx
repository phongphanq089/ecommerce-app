import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={'/'}
      className={`max-w-[150px] sm:max-w-[180px]  md:max-w-[250px] inline-block text-md font-bold ${className}`}
    >
      STARTCROW
    </Link>
  )
}

export default Logo
