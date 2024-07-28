'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../logo'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { AnimatePresence } from 'framer-motion'
import NavLink from './NavLink'
import { cn } from '@/lib/utils'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [isFixedMenu, setIsFixedMenu] = useState(true)
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  const heaerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heaerRef.current) {
      setHeaderHeight(heaerRef.current.offsetHeight)
    }
    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        setIsFixedMenu(true)
      } else {
        setIsFixedMenu(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isFixedMenu, headerHeight])

  return (
    <>
      <header className='border-b border-black '>
        <Marquee className='bg-black text-white'>
          <div className='flex items-center gap-4 justify-between'>
            {[...Array(20)].map((_, i) => {
              return (
                <React.Fragment key={i}>
                  <span>SUMMER IS COMING</span>
                  <span className='text-md font-bold leading-none'>.</span>
                  <span>SUMMER SALE</span>
                  <span className='text-md font-bold leading-none'>.</span>
                </React.Fragment>
              )
            })}
          </div>
        </Marquee>
        <div style={{ height: isFixedMenu ? `${headerHeight}px` : '0' }} />
        <nav
          ref={heaerRef}
          className={cn(
            ' py-1 md:py-0 bg-white',
            isFixedMenu ? 'fixed top-0 left-0 w-full z-50 shadow-sm' : ''
          )}
        >
          <div className='container-3xl flex justify-between'>
            <div className='flex items-center gap-5'>
              <Logo />
            </div>

            <div className='flex items-center gap-3 '>
              <Link
                href={'/login'}
                className='hidden md:inline-block px-5 py-2 border border-black bg-black text-white '
              >
                LOGIN
              </Link>
              <div className='hidden 2xl:flex items-center gap-2 '>
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
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
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
              <div className='text-xs md:border-b border-black cursor-pointer'>
                <span className='hidden md:block'>SEARCH</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-search md:hidden'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
                  <path d='M21 21l-6 -6' />
                </svg>
              </div>
              <div
                className='flex items-center gap-1 p-1 md:px-3 md:py-2 md:border  border-black cursor-pointer'
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-menu w-5 h-5 md:w-4 md:h-5'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 8l16 0' />
                  <path d='M4 16l16 0' />
                </svg>
                <span className='hidden md:block'> Menu</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence mode='wait'>
        <NavLink menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </AnimatePresence>
    </>
  )
}

export default Header
