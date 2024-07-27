import TextFullContainerHero from '@/components/designs/TextFullContainer'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-8 '>
      <div className='container-3xl'>
        <div className='container-xl flex flex-col justify-center items-center'>
          <h3 className='text-md font-semibold text-center mb-2'>
            INVESTING IN YOURSELF IS THE FIRST STEP — LET’S TAKE THE NEXT FEW
            TOGETHER.
          </h3>
          <Link
            href='/contact'
            className='p-3 rounded-3xl bg-color-1 text-white w-fit '
          >
            CONTACT WITH WE
          </Link>
        </div>
        <TextFullContainerHero text2='STARSCROW' />
      </div>
    </footer>
  )
}

export default Footer
