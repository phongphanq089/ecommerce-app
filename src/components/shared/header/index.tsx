'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Logo from '../logo'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const listMenu = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Shop',
    link: '/shop',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

const Header = () => {
  return (
    <header className='border-b border-black pb-2'>
      <Marquee className='bg-black text-white'>
        <div className='flex items-center gap-4 justify-between'>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER IS COMMIC</span>
          <span className='text-md font-bold leading-none'>.</span>
          <span>SUMMER SALE</span>
        </div>
      </Marquee>
      <nav className='container-3xl'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-5'>
            <Logo />
            {/* <ul className='flex items-center gap-4 text-sm mt-4'>
              {listMenu.map((menu, index) => {
                return (
                  <li key={`${index}-${menu.title}`}>
                    <Link href={menu.link}>{menu.title}</Link>
                  </li>
                )
              })}
            </ul> */}
          </div>

          <div className='flex items-center gap-3  mt-4'>
            <Link
              href={'/login'}
              className='px-5 py-2 border border-black bg-black text-white '
            >
              LOGIN
            </Link>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold'>FREE SHIPPING</span>
              <span className='h-[1px] w-24 bg-black'></span>
              <span className='text-xs'>on all orders over $35*</span>
            </div>

            <div className='flex items-center text-xs cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-5 h-5'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                <path d='M17 17h-11v-14h-2' />
                <path d='M6 5l14 1l-1 7h-13' />
              </svg>
              CART(2)
            </div>
            <div className='text-xs border-b border-black cursor-pointer'>
              SEARCH
            </div>
            <div className='flex items-center gap-1 px-3 py-2 border  border-black cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-menu'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 8l16 0' />
                <path d='M4 16l16 0' />
              </svg>
              Menu
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
