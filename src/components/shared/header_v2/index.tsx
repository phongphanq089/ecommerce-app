'use client'
import React, { useEffect, useRef, useState } from 'react'
import TopHeader from './TopHeader'
import Logo from '../logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const menuList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Store',
    link: '/store',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Special',
    link: '/special',
  },
]

const Header = () => {
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
    <header className={`fixed w-full top-0 left-0 z-50 bg-white shadow-sm`}>
      <div
        ref={heaerRef}
        className='relative transition-03s'
        style={{ marginTop: isFixedMenu ? `-${headerHeight}px` : '0' }}
      >
        <TopHeader />
      </div>
      <div className='container-3xl'>
        <div className=' flex w-full justify-between py-2'>
          <div className='flex gap-[100px] bg-transparent '>
            <Logo />
            <div className='flex items-center gap-3'>
              {menuList?.map((menu, index) => {
                return (
                  <Link
                    key={index}
                    href={menu.link}
                    className='text-[18px] uppercase font-normal '
                  >
                    {menu.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='text-xs cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 66 66'
                className={` w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]`}
              >
                <path d='M64.08 53.62 49.71 39.25c-1.22-1.22-3.2-1.22-4.44 0l-.21.21-1.25-1.25c6.53-9.21 5.7-22.07-2.55-30.31-9.2-9.2-24.17-9.2-33.37 0-9.2 9.2-9.2 24.17 0 33.37 4.6 4.6 10.64 6.9 16.68 6.9 4.79 0 9.56-1.47 13.63-4.35l1.25 1.25-.21.21a3.15 3.15 0 0 0 0 4.44l14.37 14.36c.59.6 1.38.93 2.22.93s1.63-.33 2.21-.92l6.03-6.02a3.136 3.136 0 0 0 .01-4.45zM9.31 39.85C.89 31.43.89 17.73 9.31 9.31 13.52 5.1 19.05 3 24.58 3s11.06 2.1 15.27 6.31c8.42 8.42 8.42 22.12 0 30.54-8.42 8.42-22.12 8.42-30.54 0zm30.5 2.73a19.452 19.452 0 0 0 2.78-2.78l1.06 1.06-1.38 1.39-1.39 1.39-1.07-1.06zm22.86 14.07-6.03 6.02c-.43.43-1.16.44-1.59 0L40.67 48.3c-.44-.44-.44-1.17 0-1.61l6.01-6.02a1.15 1.15 0 0 1 1.61 0l14.38 14.38c.44.43.44 1.15 0 1.6z' />
                <path d='M37.62 11.55c-7.19-7.19-18.88-7.19-26.07 0s-7.19 18.89 0 26.07c3.59 3.59 8.31 5.39 13.04 5.39 4.72 0 9.44-1.8 13.04-5.39a18.32 18.32 0 0 0 5.4-13.04c-.01-4.92-1.93-9.55-5.41-13.03zM36.21 36.2c-6.41 6.41-16.84 6.41-23.25 0s-6.41-16.84 0-23.25c3.2-3.2 7.41-4.81 11.62-4.81S33 9.74 36.2 12.95c3.1 3.1 4.81 7.23 4.81 11.62.01 4.4-1.7 8.53-4.8 11.63z' />
                <path d='M19.59 12.53c-1.63.54-3.12 1.49-4.36 2.71-1.21 1.23-2.17 2.73-2.71 4.35-.55 1.62-.71 3.36-.39 5 .33-1.63.81-3.14 1.51-4.53.71-1.38 1.6-2.65 2.69-3.72 1.07-1.09 2.34-1.98 3.72-2.69 1.39-.7 2.91-1.18 4.53-1.5-1.63-.34-3.37-.18-4.99.38zM48.9 44.39a.972.972 0 0 0-1.36 0c-.37.37-.37.98 0 1.36l7.81 7.81c.37.37.98.37 1.36 0 .37-.37.37-.98 0-1.36l-7.81-7.81z' />
              </svg>
            </div>
            <div className='flex items-center text-xs cursor-pointer relative '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                data-name='Layer 1 copy'
                viewBox='0 0 48 48'
                className={` w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] `}
              >
                <path d='M47.715 12.352a1.524 1.524 0 0 0-1.241-.639h-16.8a.727.727 0 0 0-.6 0H11.97l-2.181-8.9A1.526 1.526 0 0 0 8.305 1.656H2.243a2.243 2.243 0 1 0 0 4.485H5.969l6.653 28.066a.75.75 0 0 0 .73.578H42.03a.75.75 0 0 0 0-1.5H17.26l-.54-2.2H42.574a1.547 1.547 0 0 0 1.464-1.1l3.88-16.25A1.527 1.527 0 0 0 47.715 12.352zm-1.236.962l-1.039 4.33H38.971l.5-4.431h7zM43.956 23.825h-5.68l.527-4.681H45.08zM13.793 19.144h6.058l.606 4.681H14.94zm7.57 0h7.261v4.681H21.969zm7.261-1.5H21.169L20.6 13.213h8.029zm1.5-4.431h7.837l-.5 4.431H30.124zm-1.5 12.112v4.259H22.715l-.552-4.259zm1.5 0H36.6l-.479 4.259h-6zm0-1.5V19.144h7.17l-.527 4.681zM19.083 13.213l.573 4.431H13.425l-1.087-4.431zM13.944 33.285L7.292 5.218a.752.752 0 0 0-.73-.577H2.243a.743.743 0 1 1 0-1.485l6.09.02 7.382 30.109zm2.408-3.7l-1.044-4.259h5.343l.551 4.259zm26.222 0H37.628l.479-4.259H43.6zM16.014 35.816a5.264 5.264 0 1 0 5.264 5.264A5.27 5.27 0 0 0 16.014 35.816zm0 9.028a3.764 3.764 0 1 1 3.764-3.764A3.768 3.768 0 0 1 16.014 44.844zM39.284 35.816a5.264 5.264 0 1 0 5.264 5.264A5.269 5.269 0 0 0 39.284 35.816zm0 9.028a3.764 3.764 0 1 1 3.764-3.764A3.768 3.768 0 0 1 39.284 44.844z' />
              </svg>

              <span className=' w-4 h-4 flex items-center justify-center bg-red-500 rounded-full absolute -top-1 -right-1 text-white font-bold text-[18px]'>
                1
              </span>
            </div>
            <Link
              href={'/login'}
              className={` py-1 px-2 font-bold bg-black text-white`}
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
