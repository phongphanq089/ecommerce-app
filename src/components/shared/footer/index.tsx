'use client'
import TextFullContainerHero from '@/components/designs/TextFullContainer'
import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className='pt-4 md:pt-8 relative z-10 bg-white'>
      <div className='container-3xl'>
        <div className='container-xl flex flex-col justify-center items-center'>
          <h3 className='text-sm md:text-md font-semibold text-center mb-2 max-w-[1000px]'>
            INVESTING IN YOURSELF IS THE FIRST STEP — LET’S TAKE THE NEXT FEW
            TOGETHER.
          </h3>
          <Link
            href='/contact'
            className='p-1 md:p-3 text-xs rounded-3xl bg-color-1 text-white w-fit '
          >
            CONTACT WITH WE
          </Link>
        </div>
        <TextFullContainerHero text2='STARSCROW' />
        <div className='w-fit mx-auto py-4'>
          <SocialLink />
        </div>
        <div className='border-t py-1'>
          <div className='flex items-center justify-center lg:justify-between flex-wrap gap-1 text-center '>
            <span className='text-[18px]'>
              © 2024 Capsule Design Studio | All rights reserved
            </span>
            <span className='flex items-center gap-1 text-[18px]'>
              Design and development by{' '}
              <Link
                href={'https://portfolio-nexgendev.vercel.app/'}
                target='_blank'
                title='phongphan.xyz'
                className='font-bold'
              >
                PhongPhan
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
