'use client'
import TextFullContainerHero from '@/components/designs/TextFullContainer'
import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'
import { navFooter } from '@/contents/nav-link'

const Footer = () => {
  return (
    <footer className='pt-4 md:pt-8 relative z-10'>
      <div className='container-3xl'>
        <TextFullContainerHero text2='STARSCROW' />

        <div className='grid grid-cols-4 gap-4 mb-6'>
          {navFooter?.map((items, index) => {
            return (
              <div key={index}>
                <h3 className='text-sm font-semibold'>{items.title}</h3>
                <ul className='flex flex-col gap-1'>
                  {items.subMenu.map((sub, index) => {
                    return (
                      <li key={`${sub.name}-${index}`}>
                        <Link href={sub.href} className='text-[18px]'>
                          {sub.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
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
